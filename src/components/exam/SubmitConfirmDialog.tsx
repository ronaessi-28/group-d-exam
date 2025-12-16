import React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { AlertTriangle } from 'lucide-react';

interface SubmitConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  unansweredCount: number;
  markedForReviewCount: number;
}

export const SubmitConfirmDialog: React.FC<SubmitConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  unansweredCount,
  markedForReviewCount,
}) => {
  return (
    <AlertDialog open={isOpen} onOpenChange={onClose}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-review" />
            Submit Exam?
          </AlertDialogTitle>
          <AlertDialogDescription className="space-y-3">
            <p>Are you sure you want to submit your exam? This action cannot be undone.</p>
            
            {(unansweredCount > 0 || markedForReviewCount > 0) && (
              <div className="bg-muted/50 p-3 rounded-lg space-y-2 text-left">
                {unansweredCount > 0 && (
                  <p className="text-destructive flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive"></span>
                    {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}
                  </p>
                )}
                {markedForReviewCount > 0 && (
                  <p className="text-review flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-review"></span>
                    {markedForReviewCount} question{markedForReviewCount > 1 ? 's' : ''} marked for review
                  </p>
                )}
              </div>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Go Back</AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className="bg-primary hover:bg-primary/90"
          >
            Submit Exam
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
