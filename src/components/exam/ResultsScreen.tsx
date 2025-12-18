import React from 'react';
import { ExamResult } from '@/types/exam';
import { Question } from '@/data/questions';
import { Trophy, Target, XCircle, MinusCircle, RefreshCw, CheckCircle, Download, TrendingDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { exportResultsToPDF } from '@/utils/pdfExport';

interface ResultsScreenProps {
  result: ExamResult;
  onRetake: () => void;
  questions: Question[];
  answers: Record<number, number>;
  attemptsRemaining: number;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ 
  result, 
  onRetake, 
  questions, 
  answers,
  attemptsRemaining 
}) => {
  const getGrade = () => {
    if (result.percentage >= 90) return { grade: 'A+', color: 'text-answered' };
    if (result.percentage >= 80) return { grade: 'A', color: 'text-answered' };
    if (result.percentage >= 70) return { grade: 'B', color: 'text-primary' };
    if (result.percentage >= 60) return { grade: 'C', color: 'text-review' };
    if (result.percentage >= 50) return { grade: 'D', color: 'text-review' };
    return { grade: 'F', color: 'text-destructive' };
  };

  const { grade, color } = getGrade();

  const handleDownload = () => {
    exportResultsToPDF({ result, questions, answers });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-xl w-full animate-fade-in">
        <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
          {/* Header */}
          <div className="exam-header p-6 md:p-8 text-center text-primary-foreground">
            <div className="w-20 h-20 mx-auto mb-4 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Trophy className="w-10 h-10" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Exam Completed!</h1>
            <p className="text-primary-foreground/80">Your results are ready</p>
          </div>

          {/* Score Card */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Main Score */}
            <div className="text-center p-6 bg-muted/30 rounded-xl">
              <div className={`text-6xl md:text-7xl font-bold ${color} mb-2`}>
                {grade}
              </div>
              <div className="text-3xl font-semibold text-foreground">
                {result.finalScore.toFixed(2)} / {result.totalQuestions}
              </div>
              <div className="text-lg text-muted-foreground">
                {result.percentage.toFixed(1)}%
              </div>
              <div className="text-sm text-muted-foreground mt-2">
                (Correct: {result.correct} | Negative: -{result.negativeMarks.toFixed(2)})
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-answered/10 rounded-xl border border-answered/20">
                <div className="flex items-center gap-2 text-answered mb-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Correct</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{result.correct}</div>
              </div>

              <div className="p-4 bg-destructive/10 rounded-xl border border-destructive/20">
                <div className="flex items-center gap-2 text-destructive mb-2">
                  <XCircle className="w-5 h-5" />
                  <span className="font-medium">Incorrect</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{result.incorrect}</div>
              </div>

              <div className="p-4 bg-destructive/5 rounded-xl border border-destructive/10">
                <div className="flex items-center gap-2 text-destructive/70 mb-2">
                  <MinusCircle className="w-5 h-5" />
                  <span className="font-medium">Unattempted</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{result.unattempted}</div>
                <div className="text-xs text-destructive">-{result.negativeMarks.toFixed(2)} marks</div>
              </div>

              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <div className="flex items-center gap-2 text-primary mb-2">
                  <Target className="w-5 h-5" />
                  <span className="font-medium">Attempted</span>
                </div>
                <div className="text-2xl font-bold text-foreground">{result.attempted}</div>
              </div>
            </div>

            {/* Download Button */}
            <Button
              onClick={handleDownload}
              size="lg"
              variant="outline"
              className="w-full gap-2"
            >
              <Download className="w-4 h-4" />
              Download Results (PDF)
            </Button>

            {/* Retake Button */}
            <Button
              onClick={onRetake}
              size="lg"
              className="w-full gap-2"
              disabled={attemptsRemaining <= 0}
            >
              <RefreshCw className="w-4 h-4" />
              {attemptsRemaining > 0 
                ? `Retake Exam (${attemptsRemaining} attempts left today)` 
                : 'No attempts left today'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
