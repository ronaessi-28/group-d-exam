import React, { useRef, useEffect } from 'react';

interface CameraPreviewProps {
  stream: MediaStream | null;
}

export const CameraPreview: React.FC<CameraPreviewProps> = ({ stream }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  if (!stream) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative w-32 h-24 md:w-40 md:h-30 rounded-lg overflow-hidden border-2 border-primary shadow-lg bg-card">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover transform -scale-x-100"
        />
        <div className="absolute top-1 right-1">
          <span className="flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive"></span>
          </span>
        </div>
      </div>
    </div>
  );
};
