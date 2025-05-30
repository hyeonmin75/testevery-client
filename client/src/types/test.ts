export interface TestOption {
  id: string;
  text: string;
  description: string;
  emoji: string;
  scores: Record<string, number>;
}

export interface TestQuestion {
  id: number;
  text: string;
  subtitle: string;
  emoji: string;
  options: TestOption[];
}

export interface TestResult {
  id: string;
  title: string;
  emoji: string;
  description: string;
  detailedDescription: string;
  strengths: string[];
  improvements: string[];
  compatibleTypes: Array<{
    id: string;
    title: string;
    emoji: string;
    compatibility: number;
  }>;
  traits: Array<{
    name: string;
    emoji: string;
    percentage: number;
  }>;
}

export interface TestData {
  id: string;
  title: string;
  description: string;
  emoji: string;
  color: string;
  duration: string;
  questionCount: number;
  participants: number;
  questions: TestQuestion[];
  results: Record<string, TestResult>;
}

export interface UserAnswer {
  questionId: number;
  optionId: string;
  timestamp: number;
}

export interface TestSession {
  testId: string;
  currentQuestionIndex: number;
  answers: UserAnswer[];
  startTime: number;
  endTime?: number;
}

export interface CalculatedResult {
  resultId: string;
  result: TestResult;
  scores: Record<string, number>;
  completedAt: number;
  testId: string;
}
