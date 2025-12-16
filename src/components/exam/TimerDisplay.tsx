import React from 'react';
import { Clock } from 'lucide-react';

interface TimerDisplayProps {
  timeRemaining: number;
}

export const TimerDisplay: React.FC<TimerDisplayProps> = ({ timeRemaining }) => {
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  const isCritical = timeRemaining < 300; // Less than 5 minutes
  const isWarning = timeRemaining < 600 && timeRemaining >= 300; // Less than 10 minutes

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div 
      className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-lg font-bold transition-all duration-300 ${
        isCritical 
          ? 'bg-destructive/20 text-destructive animate-pulse' 
          : isWarning 
            ? 'bg-review/20 text-review' 
            : 'bg-primary/10 text-primary'
      }`}
    >
      <Clock className="w-5 h-5" />
      <span>
        {hours > 0 && `${formatNumber(hours)}:`}
        {formatNumber(minutes)}:{formatNumber(seconds)}
      </span>
    </div>
  );
};
