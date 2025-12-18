import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';
import { EXAM_DURATION_MINUTES } from '@/data/questions';

interface TimerDisplayProps {
  timeRemaining: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeRemaining }) => {
  const [showHalfTimeWarning, setShowHalfTimeWarning] = useState(false);
  const [showCriticalWarning, setShowCriticalWarning] = useState(false);

  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const halfTime = (EXAM_DURATION_MINUTES * 60) / 2; // 45 minutes = 2700 seconds
  const criticalTime = 5 * 60; // 5 minutes = 300 seconds

  const isCritical = timeRemaining <= criticalTime;
  const isHalfTime = timeRemaining <= halfTime && timeRemaining > criticalTime;
  const isWarning = timeRemaining < 600 && timeRemaining > criticalTime;

  // Show half-time warning once
  useEffect(() => {
    if (timeRemaining <= halfTime && timeRemaining > halfTime - 5 && !showHalfTimeWarning) {
      setShowHalfTimeWarning(true);
      setTimeout(() => setShowHalfTimeWarning(false), 5000);
    }
  }, [timeRemaining, halfTime, showHalfTimeWarning]);

  // Show critical warning once
  useEffect(() => {
    if (timeRemaining <= criticalTime && timeRemaining > criticalTime - 5 && !showCriticalWarning) {
      setShowCriticalWarning(true);
      setTimeout(() => setShowCriticalWarning(false), 5000);
    }
  }, [timeRemaining, criticalTime, showCriticalWarning]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="relative">
      {/* Half-time warning toast */}
      {showHalfTimeWarning && (
        <div className="absolute -bottom-16 right-0 z-50 flex items-center gap-2 px-4 py-2 bg-review text-review-foreground rounded-lg shadow-lg animate-fade-in">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">Half time! 45 minutes remaining</span>
        </div>
      )}

      {/* Critical warning toast */}
      {showCriticalWarning && (
        <div className="absolute -bottom-16 right-0 z-50 flex items-center gap-2 px-4 py-2 bg-destructive text-destructive-foreground rounded-lg shadow-lg animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          <span className="text-sm font-medium">Only 5 minutes left!</span>
        </div>
      )}

      <div 
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold transition-all duration-300 ${
          isCritical 
            ? 'bg-destructive/20 text-destructive animate-pulse' 
            : isWarning 
              ? 'bg-review/20 text-review' 
              : isHalfTime
                ? 'bg-review/10 text-review'
                : 'bg-primary/10 text-primary'
        }`}
      >
        <Clock className={`w-5 h-5 ${isCritical ? 'animate-bounce' : ''}`} />
        <span>
          {hours > 0 && `${formatNumber(hours)}:`}
          {formatNumber(minutes)}:{formatNumber(seconds)}
        </span>
      </div>
    </div>
  );
};
