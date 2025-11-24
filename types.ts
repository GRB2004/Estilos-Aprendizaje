export type LearningStyle = 'Activo' | 'Reflexivo' | 'Teórico' | 'Pragmático';

export interface Question {
  id: number;
  text: string;
  style: LearningStyle;
}

export interface Technique {
  id: number;
  title: string;
  description: string;
  details: string; // HTML content or rich text
  style: LearningStyle;
  imageUrl?: string;
}

export interface AssessmentResult {
  scores: Record<LearningStyle, number>;
  percentages: Record<LearningStyle, number>;
  dominantStyle: LearningStyle;
}

export interface LearningStyleInfo {
  name: LearningStyle;
  description: string;
  characteristics: string[];
}