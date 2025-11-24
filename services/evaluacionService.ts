import { QUESTIONS } from '../data';
import { AssessmentResult, LearningStyle } from '../types';

export const calculateResult = (answers: Record<number, boolean>): AssessmentResult => {
  const scores: Record<LearningStyle, number> = {
    'Activo': 0,
    'Reflexivo': 0,
    'Teórico': 0,
    'Pragmático': 0
  };

  const totalQuestionsPerStyle: Record<LearningStyle, number> = {
    'Activo': 0,
    'Reflexivo': 0,
    'Teórico': 0,
    'Pragmático': 0
  };

  QUESTIONS.forEach(q => {
    totalQuestionsPerStyle[q.style]++;
    // In Honey-Alonso, "True" (Agree) adds a point. "False" does not.
    if (answers[q.id]) {
      scores[q.style]++;
    }
  });

  const percentages: Record<LearningStyle, number> = {
    'Activo': 0,
    'Reflexivo': 0,
    'Teórico': 0,
    'Pragmático': 0
  };

  let maxScore = -1;
  let dominant: LearningStyle = 'Activo'; // Default

  (Object.keys(scores) as LearningStyle[]).forEach(style => {
    // Calculate percentage based on max possible score for that style
    const maxPossible = totalQuestionsPerStyle[style];
    percentages[style] = maxPossible > 0 ? Math.round((scores[style] / maxPossible) * 100) : 0;

    if (scores[style] > maxScore) {
      maxScore = scores[style];
      dominant = style;
    }
  });

  return {
    scores,
    percentages,
    dominantStyle: dominant
  };
};

export const generateMockResult = (): AssessmentResult => {
  return {
    scores: { 'Activo': 18, 'Reflexivo': 12, 'Teórico': 15, 'Pragmático': 10 },
    percentages: { 'Activo': 90, 'Reflexivo': 60, 'Teórico': 75, 'Pragmático': 50 },
    dominantStyle: 'Activo'
  };
};