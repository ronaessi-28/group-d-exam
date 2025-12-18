import React from 'react';
import { Question } from '@/data/questions';
import { cn } from '@/lib/utils';
import { Flag, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuestionDisplayProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  selectedOption: number | undefined;
  isMarkedForReview: boolean;
  onSelectOption: (optionIndex: number) => void;
  onToggleReview: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

export const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  questionIndex,
  totalQuestions,
  selectedOption,
  isMarkedForReview,
  onSelectOption,
  onToggleReview,
  onPrevious,
  onNext,
  onSubmit,
}) => {
  const isFirstQuestion = questionIndex === 0;
  const isLastQuestion = questionIndex === totalQuestions - 1;

  return (
    <div className="flex flex-col h-[calc(100vh-76px)] md:h-[calc(100vh-76px)] bg-card rounded-xl shadow-card border border-border overflow-hidden">
      {/* Question Header */}
      <div className="flex-shrink-0 p-3 md:p-4 border-b border-border bg-muted/30">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Question {questionIndex + 1} of {totalQuestions}
          </span>
          <Button
            variant={isMarkedForReview ? "default" : "outline"}
            size="sm"
            onClick={onToggleReview}
            className={cn(
              "gap-2 transition-all",
              isMarkedForReview && "bg-review hover:bg-review/90 text-review-foreground"
            )}
          >
            <Flag className="w-4 h-4" />
            <span className="hidden sm:inline">{isMarkedForReview ? 'Marked' : 'Mark for Review'}</span>
            <span className="sm:hidden">{isMarkedForReview ? '✓' : 'Mark'}</span>
          </Button>
        </div>
      </div>

      {/* Question Content - Scrollable */}
      <div className="flex-1 overflow-y-auto p-3 md:p-5">
        <div className="animate-fade-in">
          {/* English Question */}
          <h2 className="text-base md:text-lg font-medium text-foreground mb-2 leading-relaxed">
            {question.question}
          </h2>
          
          {/* Hindi Question (if available) */}
          {question.questionHindi && (
            <p className="text-sm md:text-base text-muted-foreground mb-4 leading-relaxed italic border-l-2 border-primary/30 pl-3">
              {question.questionHindi}
            </p>
          )}

          {/* Options */}
          <div className="space-y-2 md:space-y-3 mt-4">
            {question.options.map((option, index) => {
              const optionNumber = index + 1;
              const isSelected = selectedOption === optionNumber;
              const hindiOption = question.optionsHindi?.[index];
              
              return (
                <button
                  key={index}
                  onClick={() => onSelectOption(optionNumber)}
                  className={cn(
                    "option-card w-full text-left flex items-start gap-3 group py-2 md:py-3",
                    isSelected && "option-card-selected"
                  )}
                >
                  <span 
                    className={cn(
                      "flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                      isSelected 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    )}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <div className="flex-1 pt-0.5">
                    <span className="text-sm md:text-base text-foreground block">{option}</span>
                    {hindiOption && (
                      <span className="text-xs md:text-sm text-muted-foreground block mt-0.5 italic">{hindiOption}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Footer - Fixed at bottom */}
      <div className="flex-shrink-0 p-3 md:p-4 border-t border-border bg-muted/30">
        <div className="flex items-center justify-between gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className="gap-1 md:gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-2">
            {selectedOption && (
              <span className="text-xs md:text-sm text-muted-foreground hidden md:block">
                Option {String.fromCharCode(64 + selectedOption)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {!isLastQuestion && (
              <Button
                size="sm"
                onClick={onNext}
                className="gap-1 md:gap-2"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
            <Button
              size="sm"
              onClick={onSubmit}
              variant={isLastQuestion ? "default" : "outline"}
              className={`gap-1 md:gap-2 ${isLastQuestion ? 'bg-primary hover:bg-primary/90' : ''}`}
            >
              <Send className="w-4 h-4" />
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
