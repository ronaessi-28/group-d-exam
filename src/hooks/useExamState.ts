import { useState, useCallback, useRef } from 'react';
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
  timeSpentPerQuestion: {},
  lastQuestionChangeTime: Date.now(),
};

export const useExamState = () => {
  const [state, setState] = useState<ExamState>(initialState);

  const updateTimeSpent = useCallback((fromQuestion: number) => {
    setState(prev => {
      const now = Date.now();
      const timeSpent = Math.floor((now - prev.lastQuestionChangeTime) / 1000);
      return {
        ...prev,
        timeSpentPerQuestion: {
          ...prev.timeSpentPerQuestion,
          [fromQuestion]: (prev.timeSpentPerQuestion[fromQuestion] || 0) + timeSpent,
        },
        lastQuestionChangeTime: now,
      };
    });
  }, []);

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
    setState(prev => {
      const now = Date.now();
      const timeSpent = Math.floor((now - prev.lastQuestionChangeTime) / 1000);
      return {
        ...prev,
        timeSpentPerQuestion: {
          ...prev.timeSpentPerQuestion,
          [prev.currentQuestion]: (prev.timeSpentPerQuestion[prev.currentQuestion] || 0) + timeSpent,
        },
        currentQuestion: index,
        lastQuestionChangeTime: now,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setState(prev => {
      const now = Date.now();
      const timeSpent = Math.floor((now - prev.lastQuestionChangeTime) / 1000);
      return {
        ...prev,
        timeSpentPerQuestion: {
          ...prev.timeSpentPerQuestion,
          [prev.currentQuestion]: (prev.timeSpentPerQuestion[prev.currentQuestion] || 0) + timeSpent,
        },
        currentQuestion: Math.min(prev.currentQuestion + 1, questions.length - 1),
        lastQuestionChangeTime: now,
      };
    });
  }, []);

  const prevQuestion = useCallback(() => {
    setState(prev => {
      const now = Date.now();
      const timeSpent = Math.floor((now - prev.lastQuestionChangeTime) / 1000);
      return {
        ...prev,
        timeSpentPerQuestion: {
          ...prev.timeSpentPerQuestion,
          [prev.currentQuestion]: (prev.timeSpentPerQuestion[prev.currentQuestion] || 0) + timeSpent,
        },
        currentQuestion: Math.max(prev.currentQuestion - 1, 0),
        lastQuestionChangeTime: now,
      };
    });
  }, []);

  const decrementTime = useCallback(() => {
    setState(prev => ({
      ...prev,
      timeRemaining: Math.max(prev.timeRemaining - 1, 0),
    }));
  }, []);

  const submitExam = useCallback(() => {
    setState(prev => {
      const now = Date.now();
      const timeSpent = Math.floor((now - prev.lastQuestionChangeTime) / 1000);
      return {
        ...prev,
        timeSpentPerQuestion: {
          ...prev.timeSpentPerQuestion,
          [prev.currentQuestion]: (prev.timeSpentPerQuestion[prev.currentQuestion] || 0) + timeSpent,
        },
        isSubmitted: true,
      };
    });
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
    const finalScore = score - negativeMarks; // Allow negative scores
    const percentage = Math.max(0, (finalScore / questions.length) * 100);

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
    setState({
      ...initialState,
      markedForReview: new Set(),
      lastQuestionChangeTime: Date.now(),
    });
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
