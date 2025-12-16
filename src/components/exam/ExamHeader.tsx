import React from 'react';
import { TimerDisplay } from './TimerDisplay';
import { ThemeToggle } from '../ThemeToggle';
import { Shield, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ExamHeaderProps {
  timeRemaining: number;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
  violations: number;
}

export const ExamHeader: React.FC<ExamHeaderProps> = ({
  timeRemaining,
  onToggleSidebar,
  isSidebarOpen,
  violations,
}) => {
  return (
    <header className="exam-header sticky top-0 z-40 shadow-soft">
      <div className="px-4 py-3 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="lg:hidden text-primary-foreground hover:bg-primary-foreground/10"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Shield className="w-5 h-5" />
            <span className="font-semibold hidden sm:inline">HSSC Group D Mock Test</span>
            <span className="font-semibold sm:hidden">Mock Test</span>
          </div>
        </div>

        {/* Center/Right Section */}
        <div className="flex items-center gap-4">
        {violations > 0 && (
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-destructive/20 text-destructive rounded-lg text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
              Warning: {violations}
            </div>
          )}
          <TimerDisplay timeRemaining={timeRemaining} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
