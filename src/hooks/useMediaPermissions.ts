import { useState, useCallback, useRef, useEffect } from 'react';

interface MediaPermissionsState {
  cameraGranted: boolean;
  micGranted: boolean;
  cameraStream: MediaStream | null;
  error: string | null;
  isRequesting: boolean;
}

export const useMediaPermissions = () => {
  const [state, setState] = useState<MediaPermissionsState>({
    cameraGranted: false,
    micGranted: false,
    cameraStream: null,
    error: null,
    isRequesting: false,
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const requestPermissions = useCallback(async () => {
    setState(prev => ({ ...prev, isRequesting: true, error: null }));

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      setState({
        cameraGranted: true,
        micGranted: true,
        cameraStream: stream,
        error: null,
        isRequesting: false,
      });

      return true;
    } catch (error) {
      let errorMessage = 'Permission denied';
      
      if (error instanceof DOMException) {
        switch (error.name) {
          case 'NotAllowedError':
            errorMessage = 'Camera and microphone access was denied. Please allow access to continue.';
            break;
          case 'NotFoundError':
            errorMessage = 'No camera or microphone found. Please connect a device and try again.';
            break;
          case 'NotReadableError':
            errorMessage = 'Camera or microphone is being used by another application.';
            break;
          default:
            errorMessage = `Failed to access devices: ${error.message}`;
        }
      }

      setState(prev => ({
        ...prev,
        error: errorMessage,
        isRequesting: false,
      }));

      return false;
    }
  }, []);

  const stopStream = useCallback(() => {
    if (state.cameraStream) {
      state.cameraStream.getTracks().forEach(track => track.stop());
      setState(prev => ({
        ...prev,
        cameraStream: null,
        cameraGranted: false,
        micGranted: false,
      }));
    }
  }, [state.cameraStream]);

  const setVideoRef = useCallback((element: HTMLVideoElement | null) => {
    videoRef.current = element;
    if (element && state.cameraStream) {
      element.srcObject = state.cameraStream;
    }
  }, [state.cameraStream]);

  useEffect(() => {
    return () => {
      if (state.cameraStream) {
        state.cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return {
    ...state,
    requestPermissions,
    stopStream,
    setVideoRef,
    videoRef,
  };
};
