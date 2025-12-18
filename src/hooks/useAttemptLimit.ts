import { useState, useEffect } from 'react';

const MAX_ATTEMPTS_PER_DAY = 3;
const STORAGE_KEY = 'exam_attempts';

interface AttemptData {
  date: string;
  count: number;
}

export const useAttemptLimit = () => {
  const [attemptsRemaining, setAttemptsRemaining] = useState(MAX_ATTEMPTS_PER_DAY);
  const [canAttempt, setCanAttempt] = useState(true);

  const getTodayDate = () => new Date().toISOString().split('T')[0];

  const getAttemptData = (): AttemptData => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
    return { date: getTodayDate(), count: 0 };
  };

  const checkAttempts = () => {
    const data = getAttemptData();
    const today = getTodayDate();
    
    if (data.date !== today) {
      // Reset for new day
      const newData = { date: today, count: 0 };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
      setAttemptsRemaining(MAX_ATTEMPTS_PER_DAY);
      setCanAttempt(true);
    } else {
      const remaining = MAX_ATTEMPTS_PER_DAY - data.count;
      setAttemptsRemaining(remaining);
      setCanAttempt(remaining > 0);
    }
  };

  const recordAttempt = () => {
    const data = getAttemptData();
    const today = getTodayDate();
    
    if (data.date !== today) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count: 1 }));
      setAttemptsRemaining(MAX_ATTEMPTS_PER_DAY - 1);
    } else {
      const newCount = data.count + 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: today, count: newCount }));
      setAttemptsRemaining(MAX_ATTEMPTS_PER_DAY - newCount);
      setCanAttempt(newCount < MAX_ATTEMPTS_PER_DAY);
    }
  };

  useEffect(() => {
    checkAttempts();
  }, []);

  return { attemptsRemaining, canAttempt, recordAttempt, checkAttempts };
};
