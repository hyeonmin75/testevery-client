import { TestData, UserAnswer, CalculatedResult } from '../types/test';

export function calculateTestResult(
  testData: TestData,
  answers: UserAnswer[]
): CalculatedResult {
  const scores: Record<string, number> = {};
  
  // MBTI 테스트인 경우 특별한 계산 로직
  if (testData.id === 'mbti') {
    return calculateMBTIResult(testData, answers);
  }
  
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

function calculateMBTIResult(testData: TestData, answers: UserAnswer[]): CalculatedResult {
  const mbtiScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  // Calculate MBTI dimension scores
  answers.forEach(answer => {
    const question = testData.questions.find(q => q.id === answer.questionId);
    if (!question) return;
    
    const option = question.options.find(opt => opt.id === answer.optionId);
    if (!option) return;
    
    // Add scores for MBTI dimensions
    Object.entries(option.scores).forEach(([dimension, score]) => {
      if (mbtiScores.hasOwnProperty(dimension)) {
        mbtiScores[dimension as keyof typeof mbtiScores] += score;
      }
    });
  });
  
  // Determine MBTI type
  const mbtiType = 
    (mbtiScores.E >= mbtiScores.I ? 'E' : 'I') +
    (mbtiScores.S >= mbtiScores.N ? 'S' : 'N') +
    (mbtiScores.T >= mbtiScores.F ? 'T' : 'F') +
    (mbtiScores.J >= mbtiScores.P ? 'J' : 'P');
  
  // Calculate percentages for each dimension
  const totalE_I = mbtiScores.E + mbtiScores.I;
  const totalS_N = mbtiScores.S + mbtiScores.N;
  const totalT_F = mbtiScores.T + mbtiScores.F;
  const totalJ_P = mbtiScores.J + mbtiScores.P;
  
  const percentages = {
    E: totalE_I > 0 ? Math.round((mbtiScores.E / totalE_I) * 100) : 50,
    I: totalE_I > 0 ? Math.round((mbtiScores.I / totalE_I) * 100) : 50,
    S: totalS_N > 0 ? Math.round((mbtiScores.S / totalS_N) * 100) : 50,
    N: totalS_N > 0 ? Math.round((mbtiScores.N / totalS_N) * 100) : 50,
    T: totalT_F > 0 ? Math.round((mbtiScores.T / totalT_F) * 100) : 50,
    F: totalT_F > 0 ? Math.round((mbtiScores.F / totalT_F) * 100) : 50,
    J: totalJ_P > 0 ? Math.round((mbtiScores.J / totalJ_P) * 100) : 50,
    P: totalJ_P > 0 ? Math.round((mbtiScores.P / totalJ_P) * 100) : 50
  };
  
  return {
    resultId: mbtiType,
    result: testData.results[mbtiType],
    scores: { ...mbtiScores, ...percentages },
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
