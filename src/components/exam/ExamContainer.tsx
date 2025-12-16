import React, { useState, useEffect, useCallback } from 'react';
import { questions } from '@/data/questions';
import { useExamState } from '@/hooks/useExamState';
import { useProctoring } from '@/hooks/useProctoring';
import { useMediaPermissions } from '@/hooks/useMediaPermissions';
import { PermissionsScreen } from './PermissionsScreen';
import { ResultsScreen } from './ResultsScreen';
import { ExamHeader } from './ExamHeader';
import { QuestionPanel } from './QuestionPanel';
import { QuestionDisplay } from './QuestionDisplay';
import { CameraPreview } from './CameraPreview';
import { SubmitConfirmDialog } from './SubmitConfirmDialog';
import { cn } from '@/lib/utils';

type ExamPhase = 'permissions' | 'exam' | 'results';

export const ExamContainer: React.FC = () => {
  const [phase, setPhase] = useState<ExamPhase>('permissions');
  const [showSubmitDialog, setShowSubmitDialog] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const {
    state,
    setAnswer,
    toggleReview,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    decrementTime,
    submitExam,
    addViolation,
    getQuestionStatus,
    getStats,
    calculateResult,
    resetExam,
  } = useExamState();

  const {
    cameraGranted,
    micGranted,
    cameraStream,
    error,
    isRequesting,
    requestPermissions,
    stopStream,
  } = useMediaPermissions();

  const handleForceSubmit = useCallback(() => {
    submitExam();
    setPhase('results');
  }, [submitExam]);

  const { requestFullscreen, exitFullscreen } = useProctoring({
    onViolation: addViolation,
    onForceSubmit: handleForceSubmit,
    isExamActive: phase === 'exam',
    violationCount: state.violations,
  });

  // Timer effect
  useEffect(() => {
    if (phase !== 'exam' || state.isSubmitted) return;

    const timer = setInterval(() => {
      decrementTime();
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, state.isSubmitted, decrementTime]);

  // Auto-submit when time expires
  useEffect(() => {
    if (state.timeRemaining === 0 && phase === 'exam' && !state.isSubmitted) {
      handleForceSubmit();
    }
  }, [state.timeRemaining, phase, state.isSubmitted, handleForceSubmit]);

  const handleStartExam = useCallback(async () => {
    const fullscreenSuccess = await requestFullscreen();
    if (fullscreenSuccess) {
      setPhase('exam');
    }
  }, [requestFullscreen]);

  const handleConfirmSubmit = useCallback(() => {
    setShowSubmitDialog(false);
    submitExam();
    exitFullscreen();
    stopStream();
    setPhase('results');
  }, [submitExam, exitFullscreen, stopStream]);

  const handleRetake = useCallback(() => {
    resetExam();
    setPhase('permissions');
  }, [resetExam]);

  const stats = getStats();
  const currentQuestion = questions[state.currentQuestion];

  // Render based on phase
  if (phase === 'permissions') {
    return (
      <PermissionsScreen
        onRequestPermissions={requestPermissions}
        isRequesting={isRequesting}
        error={error}
        cameraGranted={cameraGranted}
        micGranted={micGranted}
        onStartExam={handleStartExam}
      />
    );
  }

  if (phase === 'results') {
    return (
      <ResultsScreen
        result={calculateResult()}
        onRetake={handleRetake}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background exam-mode">
      <ExamHeader
        timeRemaining={state.timeRemaining}
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
        violations={state.violations}
      />

      <div className="flex min-h-[calc(100vh-60px)]">
        {/* Sidebar - Question Panel */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-30 w-64 lg:w-72 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 pt-[60px] lg:pt-0",
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <div className="h-full p-4 bg-background lg:bg-transparent">
            <QuestionPanel
              totalQuestions={questions.length}
              currentQuestion={state.currentQuestion}
              getQuestionStatus={getQuestionStatus}
              onQuestionClick={(index) => {
                goToQuestion(index);
                setIsSidebarOpen(false);
              }}
              stats={stats}
            />
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content - Question Display */}
        <main className="flex-1 p-4 lg:p-6">
          <QuestionDisplay
            question={currentQuestion}
            questionIndex={state.currentQuestion}
            totalQuestions={questions.length}
            selectedOption={state.answers[state.currentQuestion]}
            isMarkedForReview={state.markedForReview.has(state.currentQuestion)}
            onSelectOption={(optionIndex) => setAnswer(state.currentQuestion, optionIndex)}
            onToggleReview={() => toggleReview(state.currentQuestion)}
            onPrevious={prevQuestion}
            onNext={nextQuestion}
            onSubmit={() => setShowSubmitDialog(true)}
          />
        </main>
      </div>

      {/* Camera Preview */}
      <CameraPreview stream={cameraStream} />

      {/* Submit Confirmation Dialog */}
      <SubmitConfirmDialog
        isOpen={showSubmitDialog}
        onClose={() => setShowSubmitDialog(false)}
        onConfirm={handleConfirmSubmit}
        unansweredCount={stats.unattempted}
        markedForReviewCount={stats.markedForReview}
      />
    </div>
  );
};
