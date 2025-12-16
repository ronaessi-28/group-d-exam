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
    <div className="flex flex-col h-full bg-card rounded-xl shadow-card border border-border overflow-hidden">
      {/* Question Header */}
      <div className="p-4 md:p-6 border-b border-border bg-muted/30">
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
            {isMarkedForReview ? 'Marked' : 'Mark for Review'}
          </Button>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6">
        <div className="animate-fade-in">
          <h2 className="text-lg md:text-xl font-medium text-foreground mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const optionNumber = index + 1;
              const isSelected = selectedOption === optionNumber;
              
              return (
                <button
                  key={index}
                  onClick={() => onSelectOption(optionNumber)}
                  className={cn(
                    "option-card w-full text-left flex items-start gap-4 group",
                    isSelected && "option-card-selected"
                  )}
                >
                  <span 
                    className={cn(
                      "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all",
                      isSelected 
                        ? "bg-primary text-primary-foreground" 
                        : "bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
                    )}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 pt-1 text-foreground">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="p-4 md:p-6 border-t border-border bg-muted/30">
        <div className="flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className="gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
          </Button>

          <div className="flex items-center gap-2">
            {selectedOption && (
              <span className="text-sm text-muted-foreground hidden sm:block">
                Selected: Option {String.fromCharCode(64 + selectedOption)}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2">
            {isLastQuestion ? (
              <Button
                onClick={onSubmit}
                className="gap-2 bg-primary hover:bg-primary/90"
              >
                <Send className="w-4 h-4" />
                Submit
              </Button>
            ) : (
              <Button
                onClick={onNext}
                className="gap-2"
              >
                <span className="hidden sm:inline">Next</span>
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
