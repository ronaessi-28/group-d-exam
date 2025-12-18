import React from 'react';
import { Camera, Mic, Shield, AlertTriangle, Maximize, BookOpen, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PermissionsScreenProps {
  onRequestPermissions: () => void;
  isRequesting: boolean;
  error: string | null;
  cameraGranted: boolean;
  micGranted: boolean;
  onStartExam: () => void;
  canAttempt: boolean;
  attemptsRemaining: number;
}

export const PermissionsScreen: React.FC<PermissionsScreenProps> = ({
  onRequestPermissions,
  isRequesting,
  error,
  cameraGranted,
  micGranted,
  onStartExam,
  canAttempt,
  attemptsRemaining,
}) => {
  const allPermissionsGranted = cameraGranted && micGranted;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => {
            const isDark = document.documentElement.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
          }}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      <div className="max-w-2xl w-full animate-fade-in">
        <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
          {/* Header */}
          <div className="exam-header p-6 md:p-8 text-center text-primary-foreground">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary-foreground/20 rounded-2xl flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Math Mock Test</h1>
            <p className="text-primary-foreground/80">100 Questions • 90 Minutes</p>
            <p className="text-primary-foreground/60 text-sm mt-1">{attemptsRemaining} attempts remaining today</p>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Instructions */}
            <div className="bg-muted/50 rounded-xl p-4 space-y-3">
              <h3 className="font-semibold text-foreground flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Exam Instructions
              </h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Camera and microphone access is mandatory for proctoring
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  The exam will run in fullscreen mode
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Switching tabs, exiting fullscreen, or using keyboard shortcuts will trigger violations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  First violation: Warning. Second violation: Auto-submit
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Answers are auto-saved as you proceed
                </li>
              </ul>
            </div>

            {/* Permissions Status */}
            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Required Permissions</h3>
              
              <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                cameraGranted ? 'bg-answered/10 border-answered/30' : 'bg-muted/50 border-border'
              }`}>
                <Camera className={`w-5 h-5 ${cameraGranted ? 'text-answered' : 'text-muted-foreground'}`} />
                <span className="flex-1">Camera Access</span>
                {cameraGranted && (
                  <span className="text-answered text-sm font-medium">Granted</span>
                )}
              </div>

              <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                micGranted ? 'bg-answered/10 border-answered/30' : 'bg-muted/50 border-border'
              }`}>
                <Mic className={`w-5 h-5 ${micGranted ? 'text-answered' : 'text-muted-foreground'}`} />
                <span className="flex-1">Microphone Access</span>
                {micGranted && (
                  <span className="text-answered text-sm font-medium">Granted</span>
                )}
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border">
                <Maximize className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1">Fullscreen Mode</span>
                <span className="text-muted-foreground text-sm">Will be enabled</span>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="flex items-start gap-3 p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              {!allPermissionsGranted ? (
                <Button
                  onClick={onRequestPermissions}
                  disabled={isRequesting}
                  size="lg"
                  className="w-full gap-2"
                >
                  {isRequesting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Requesting Access...
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4" />
                      Grant Permissions
                    </>
                  )}
                </Button>
              ) : (
                <Button
                  onClick={onStartExam}
                  size="lg"
                  className="w-full gap-2 bg-answered hover:bg-answered/90"
                  disabled={!canAttempt}
                >
                  <Shield className="w-4 h-4" />
                  {canAttempt ? 'Start Exam' : 'No attempts left today'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
