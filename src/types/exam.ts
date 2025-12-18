export type QuestionStatus = 'unattempted' | 'answered' | 'review';

export interface ExamState {
  currentQuestion: number;
  answers: Record<number, number>;
  markedForReview: Set<number>;
  timeRemaining: number;
  isSubmitted: boolean;
  violations: number;
  isFullscreen: boolean;
  cameraEnabled: boolean;
  micEnabled: boolean;
}

export interface ExamResult {
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  percentage: number;
  negativeMarks: number;
  finalScore: number;
}
