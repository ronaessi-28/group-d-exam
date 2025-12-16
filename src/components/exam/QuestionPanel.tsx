import React from 'react';
import { QuestionStatus } from '@/types/exam';
import { cn } from '@/lib/utils';

interface QuestionPanelProps {
  totalQuestions: number;
  currentQuestion: number;
  getQuestionStatus: (index: number) => QuestionStatus;
  onQuestionClick: (index: number) => void;
  stats: {
    answered: number;
    markedForReview: number;
    unattempted: number;
  };
}

export const QuestionPanel: React.FC<QuestionPanelProps> = ({
  totalQuestions,
  currentQuestion,
  getQuestionStatus,
  onQuestionClick,
  stats,
}) => {
  const getButtonClass = (status: QuestionStatus, isCurrent: boolean) => {
    const baseClass = 'question-btn';
    const statusClass = `question-btn-${status}`;
    const currentClass = isCurrent ? 'question-btn-current' : '';
    return cn(baseClass, statusClass, currentClass);
  };

  return (
    <div className="flex flex-col h-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
      {/* Header */}
      <div className="p-4 border-b border-border bg-muted/30">
        <h3 className="font-semibold text-foreground">Questions</h3>
      </div>

      {/* Legend */}
      <div className="p-3 border-b border-border space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="w-4 h-4 rounded bg-answered"></span>
          <span className="text-muted-foreground">Answered ({stats.answered})</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-4 h-4 rounded bg-unattempted"></span>
          <span className="text-muted-foreground">Unattempted ({stats.unattempted})</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-4 h-4 rounded bg-review"></span>
          <span className="text-muted-foreground">Marked for Review ({stats.markedForReview})</span>
        </div>
      </div>

      {/* Question Grid */}
      <div className="flex-1 overflow-y-auto p-3">
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const status = getQuestionStatus(index);
            const isCurrent = index === currentQuestion;
            
            return (
              <button
                key={index}
                onClick={() => onQuestionClick(index)}
                className={getButtonClass(status, isCurrent)}
                aria-label={`Question ${index + 1}, ${status}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
