import { useEffect, useCallback, useRef } from 'react';
import { toast } from '@/hooks/use-toast';

interface UseProctoringProps {
  onViolation: () => void;
  onForceSubmit: () => void;
  isExamActive: boolean;
  violationCount: number;
}

export const useProctoring = ({
  onViolation,
  onForceSubmit,
  isExamActive,
  violationCount,
}: UseProctoringProps) => {
  const warningShownRef = useRef(false);

  // Disable right-click
  const handleContextMenu = useCallback((e: MouseEvent) => {
    if (isExamActive) {
      e.preventDefault();
      toast({
        title: "Action Blocked",
        description: "Right-click is disabled during the exam.",
        variant: "destructive",
      });
    }
  }, [isExamActive]);

  // Disable keyboard shortcuts
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isExamActive) return;

    const blockedKeys = [
      { key: 'c', ctrl: true },
      { key: 'v', ctrl: true },
      { key: 'x', ctrl: true },
      { key: 'a', ctrl: true },
      { key: 'p', ctrl: true },
      { key: 's', ctrl: true },
      { key: 'PrintScreen', ctrl: false },
      { key: 'F12', ctrl: false },
      { key: 'u', ctrl: true },
      { key: 'i', ctrl: true, shift: true },
      { key: 'j', ctrl: true, shift: true },
    ];

    const isBlocked = blockedKeys.some(blocked => {
      const keyMatch = e.key.toLowerCase() === blocked.key.toLowerCase();
      const ctrlMatch = blocked.ctrl ? (e.ctrlKey || e.metaKey) : true;
      const shiftMatch = blocked.shift ? e.shiftKey : true;
      return keyMatch && ctrlMatch && shiftMatch;
    });

    if (isBlocked) {
      e.preventDefault();
      e.stopPropagation();
      toast({
        title: "Action Blocked",
        description: "This keyboard shortcut is disabled during the exam.",
        variant: "destructive",
      });
    }
  }, [isExamActive]);

  // Detect tab switch / visibility change
  const handleVisibilityChange = useCallback(() => {
    if (!isExamActive) return;

    if (document.hidden) {
      if (!warningShownRef.current && violationCount === 0) {
        warningShownRef.current = true;
        onViolation();
        toast({
          title: "⚠️ Warning!",
          description: "Tab switching detected! One more violation will auto-submit your exam.",
          variant: "destructive",
        });
      } else if (violationCount >= 1) {
        toast({
          title: "Exam Auto-Submitted",
          description: "Multiple violations detected. Your exam has been submitted.",
          variant: "destructive",
        });
        onForceSubmit();
      }
    }
  }, [isExamActive, violationCount, onViolation, onForceSubmit]);

  // Detect fullscreen exit
  const handleFullscreenChange = useCallback(() => {
    if (!isExamActive) return;

    if (!document.fullscreenElement) {
      if (!warningShownRef.current && violationCount === 0) {
        warningShownRef.current = true;
        onViolation();
        toast({
          title: "⚠️ Warning!",
          description: "You exited fullscreen mode! Please return to fullscreen. One more violation will auto-submit your exam.",
          variant: "destructive",
        });
      } else if (violationCount >= 1) {
        toast({
          title: "Exam Auto-Submitted",
          description: "Multiple violations detected. Your exam has been submitted.",
          variant: "destructive",
        });
        onForceSubmit();
      }
    }
  }, [isExamActive, violationCount, onViolation, onForceSubmit]);

  // Detect window blur
  const handleWindowBlur = useCallback(() => {
    if (!isExamActive) return;

    if (!warningShownRef.current && violationCount === 0) {
      warningShownRef.current = true;
      onViolation();
      toast({
        title: "⚠️ Warning!",
        description: "Window focus lost! Please stay on this window. One more violation will auto-submit your exam.",
        variant: "destructive",
      });
    } else if (violationCount >= 1) {
      toast({
        title: "Exam Auto-Submitted",
        description: "Multiple violations detected. Your exam has been submitted.",
        variant: "destructive",
      });
      onForceSubmit();
    }
  }, [isExamActive, violationCount, onViolation, onForceSubmit]);

  // Disable text selection
  const handleSelectStart = useCallback((e: Event) => {
    if (isExamActive) {
      e.preventDefault();
    }
  }, [isExamActive]);

  // Disable copy
  const handleCopy = useCallback((e: ClipboardEvent) => {
    if (isExamActive) {
      e.preventDefault();
      toast({
        title: "Action Blocked",
        description: "Copying is disabled during the exam.",
        variant: "destructive",
      });
    }
  }, [isExamActive]);

  // Disable paste
  const handlePaste = useCallback((e: ClipboardEvent) => {
    if (isExamActive) {
      e.preventDefault();
      toast({
        title: "Action Blocked",
        description: "Pasting is disabled during the exam.",
        variant: "destructive",
      });
    }
  }, [isExamActive]);

  useEffect(() => {
    if (!isExamActive) return;

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('paste', handlePaste);
    window.addEventListener('blur', handleWindowBlur);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('paste', handlePaste);
      window.removeEventListener('blur', handleWindowBlur);
    };
  }, [
    isExamActive,
    handleContextMenu,
    handleKeyDown,
    handleVisibilityChange,
    handleFullscreenChange,
    handleSelectStart,
    handleCopy,
    handlePaste,
    handleWindowBlur,
  ]);

  const requestFullscreen = useCallback(async () => {
    try {
      await document.documentElement.requestFullscreen();
      return true;
    } catch (error) {
      console.error('Fullscreen request failed:', error);
      return false;
    }
  }, []);

  const exitFullscreen = useCallback(async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Exit fullscreen failed:', error);
    }
  }, []);

  return {
    requestFullscreen,
    exitFullscreen,
  };
};
