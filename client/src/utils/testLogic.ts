import { TestData, UserAnswer, CalculatedResult } from '../types/test';

export function calculateTestResult(
  testData: TestData,
  answers: UserAnswer[]
): CalculatedResult {
  const scores: Record<string, number> = {};
  
  // Initialize scores for all possible results
  Object.keys(testData.results).forEach(resultId => {
    scores[resultId] = 0;
  });
  
  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = testData.questions.find(q => q.id === answer.questionId);
    if (!question) return;
    
    const option = question.options.find(opt => opt.id === answer.optionId);
    if (!option) return;
    
    // Add scores from this option to the total
    Object.entries(option.scores).forEach(([resultId, score]) => {
      scores[resultId] = (scores[resultId] || 0) + score;
    });
  });
  
  // Find the result with the highest score
  const resultId = Object.keys(scores).reduce((a, b) => 
    scores[a] > scores[b] ? a : b
  );
  
  return {
    resultId,
    result: testData.results[resultId],
    scores,
    completedAt: Date.now(),
    testId: testData.id
  };
}

export function saveTestResult(result: CalculatedResult): void {
  const savedResults = getTestHistory();
  savedResults.push(result);
  localStorage.setItem('psychTest_history', JSON.stringify(savedResults));
}

export function getTestHistory(): CalculatedResult[] {
  try {
    const saved = localStorage.getItem('psychTest_history');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function getTestProgress(testData: TestData, currentQuestionIndex: number): number {
  return Math.round((currentQuestionIndex / testData.questions.length) * 100);
}

export function formatDuration(duration: string): string {
  return duration;
}

export function formatParticipants(count: number): string {
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}K+`;
  }
  return count.toLocaleString();
}
