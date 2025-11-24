import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AssessmentResult } from '../types';
import { calculateResult, generateMockResult } from '../services/evaluacionService';

interface AssessmentContextType {
  answers: Record<number, boolean>; // QuestionID -> Agree/Disagree
  setAnswer: (questionId: number, value: boolean) => void;
  result: AssessmentResult | null;
  calculateAndSetResult: () => void;
  useMockResult: () => void;
  reset: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

export const AssessmentProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [result, setResult] = useState<AssessmentResult | null>(null);

  const setAnswer = (questionId: number, value: boolean) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateAndSetResult = () => {
    const res = calculateResult(answers);
    setResult(res);
  };

  const useMockResult = () => {
    setResult(generateMockResult());
  };

  const reset = () => {
    setAnswers({});
    setResult(null);
  };

  return (
    <AssessmentContext.Provider value={{ answers, setAnswer, result, calculateAndSetResult, useMockResult, reset }}>
      {children}
    </AssessmentContext.Provider>
  );
};

export const useAssessment = () => {
  const context = useContext(AssessmentContext);
  if (!context) throw new Error("useAssessment must be used within AssessmentProvider");
  return context;
};