import { useState, useCallback } from 'react';
import { ExamState, QuestionStatus, ExamResult } from '@/types/exam';
import { questions, EXAM_DURATION_MINUTES } from '@/data/questions';

const initialState: ExamState = {
  currentQuestion: 0,
  answers: {},
  markedForReview: new Set(),
  timeRemaining: EXAM_DURATION_MINUTES * 60,
  isSubmitted: false,
  violations: 0,
  isFullscreen: false,
  cameraEnabled: false,
  micEnabled: false,
};

export const useExamState = () => {
  const [state, setState] = useState<ExamState>(initialState);

  const setAnswer = useCallback((questionIndex: number, optionIndex: number) => {
    setState(prev => ({
      ...prev,
      answers: {
        ...prev.answers,
        [questionIndex]: optionIndex,
      },
    }));
  }, []);

  const toggleReview = useCallback((questionIndex: number) => {
    setState(prev => {
      const newMarked = new Set(prev.markedForReview);
      if (newMarked.has(questionIndex)) {
        newMarked.delete(questionIndex);
      } else {
        newMarked.add(questionIndex);
      }
      return {
        ...prev,
        markedForReview: newMarked,
      };
    });
  }, []);

  const goToQuestion = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      currentQuestion: index,
    }));
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.min(prev.currentQuestion + 1, questions.length - 1),
    }));
  }, []);

  const prevQuestion = useCallback(() => {
    setState(prev => ({
      ...prev,
      currentQuestion: Math.max(prev.currentQuestion - 1, 0),
    }));
  }, []);

  const decrementTime = useCallback(() => {
    setState(prev => ({
      ...prev,
      timeRemaining: Math.max(prev.timeRemaining - 1, 0),
    }));
  }, []);

  const submitExam = useCallback(() => {
    setState(prev => ({
      ...prev,
      isSubmitted: true,
    }));
  }, []);

  const addViolation = useCallback(() => {
    setState(prev => ({
      ...prev,
      violations: prev.violations + 1,
    }));
  }, []);

  const setFullscreen = useCallback((value: boolean) => {
    setState(prev => ({
      ...prev,
      isFullscreen: value,
    }));
  }, []);

  const setPermissions = useCallback((camera: boolean, mic: boolean) => {
    setState(prev => ({
      ...prev,
      cameraEnabled: camera,
      micEnabled: mic,
    }));
  }, []);

  const getQuestionStatus = useCallback((index: number): QuestionStatus => {
    if (state.markedForReview.has(index)) return 'review';
    if (state.answers[index] !== undefined) return 'answered';
    return 'unattempted';
  }, [state.answers, state.markedForReview]);

  const getStats = useCallback(() => {
    const answered = Object.keys(state.answers).length;
    const markedForReview = state.markedForReview.size;
    const unattempted = questions.length - answered;
    return { answered, markedForReview, unattempted };
  }, [state.answers, state.markedForReview]);

  const calculateResult = useCallback((): ExamResult => {
    let correct = 0;
    let incorrect = 0;
    
    Object.entries(state.answers).forEach(([qIndex, answer]) => {
      const question = questions[parseInt(qIndex)];
      if (answer === question.correctOption) {
        correct++;
      } else {
        incorrect++;
      }
    });

    const attempted = Object.keys(state.answers).length;
    const unattempted = questions.length - attempted;
    const negativeMarks = unattempted * 0.95;
    const score = correct;
    const finalScore = Math.max(0, score - negativeMarks);
    const percentage = (finalScore / questions.length) * 100;

    return {
      totalQuestions: questions.length,
      attempted,
      correct,
      incorrect,
      unattempted,
      score,
      percentage,
      negativeMarks,
      finalScore,
    };
  }, [state.answers]);

  const resetExam = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    setAnswer,
    toggleReview,
    goToQuestion,
    nextQuestion,
    prevQuestion,
    decrementTime,
    submitExam,
    addViolation,
    setFullscreen,
    setPermissions,
    getQuestionStatus,
    getStats,
    calculateResult,
    resetExam,
  };
};
