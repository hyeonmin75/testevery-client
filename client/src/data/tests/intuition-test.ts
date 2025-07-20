import { TestData } from '../../types/test';

export const intuitionTest: TestData = {
  id: 'intuition_test',
  title: '좌우 선택 눈치 테스트',
  description: '빠르게 스쳐 지나가는 이미지 중, 좌우 중 어느 쪽이 이상한지를 파악하는 눈치력 테스트입니다!',
  emoji: '👀',
  color: 'green',
  duration: '1분',
  questionCount: 10,
  participants: 4219,
  questions: [
    {
      id: 1,
      text: '준비되셨나요?',
      subtitle: '빠르게 스쳐가는 이미지에서 이상한 부분을 찾아보세요!',
      emoji: '👀',
      options: [
        {
          id: 'start',
          text: '시작하기',
          description: '10라운드 눈치력 테스트 시작',
          emoji: '🚀',
          scores: { correct: 0 }
        }
      ]
    }
  ],
  results: {
    master: {
      id: 'master',
      title: '눈치 핵고수',
      emoji: '🧠',
      description: '당신은 주변 공기의 흐름도 읽어내는 관찰자입니다!',
      detailedDescription: '10점 만점을 달성한 당신은 타고난 관찰력과 순간 판단력을 가지고 있습니다. 미세한 차이도 놓치지 않는 뛰어난 눈치력으로 어떤 상황에서도 핵심을 파악할 수 있는 능력자입니다.',
      strengths: [
        '탁월한 관찰력과 집중력',
        '빠른 상황 판단 능력',
        '미세한 변화도 감지하는 예민함',
        '직감과 논리의 완벽한 조화'
      ],
      improvements: [
        '가끔은 너무 예민할 수 있으니 적당한 휴식 필요',
        '완벽주의 성향 조절'
      ],
      compatibleTypes: [
        { id: 'expert', title: '눈치 만렙 근접', emoji: '🎯', compatibility: 95 },
        { id: 'good', title: '눈치 50%', emoji: '👁️', compatibility: 80 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 100 },
        { name: '집중력', emoji: '🎯', percentage: 95 },
        { name: '직감', emoji: '⚡', percentage: 98 },
        { name: '판단력', emoji: '🧠', percentage: 100 }
      ]
    },
    expert: {
      id: 'expert',
      title: '눈치 만렙 근접',
      emoji: '🎯',
      description: '거의 완벽에 가까운 눈치력을 보여주고 있습니다!',
      detailedDescription: '8-9점을 기록한 당신은 뛰어난 관찰력과 빠른 판단력을 가지고 있습니다. 대부분의 상황에서 핵심을 빠르게 파악하며, 조금만 더 연습하면 완벽한 눈치력을 갖출 수 있습니다.',
      strengths: [
        '뛰어난 관찰력',
        '빠른 반응속도',
        '좋은 집중력',
        '상황 파악 능력'
      ],
      improvements: [
        '조금 더 세심한 관찰 필요',
        '실수를 줄이기 위한 신중함'
      ],
      compatibleTypes: [
        { id: 'master', title: '눈치 핵고수', emoji: '🧠', compatibility: 95 },
        { id: 'good', title: '눈치 50%', emoji: '👁️', compatibility: 85 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 90 },
        { name: '집중력', emoji: '🎯', percentage: 85 },
        { name: '직감', emoji: '⚡', percentage: 88 },
        { name: '판단력', emoji: '🧠', percentage: 87 }
      ]
    },
    good: {
      id: 'good',
      title: '눈치 50%',
      emoji: '👁️',
      description: '평균적인 눈치력을 가지고 있습니다!',
      detailedDescription: '6-7점을 기록한 당신은 기본적인 관찰력을 가지고 있습니다. 평상시에는 적당한 눈치를 발휘하지만, 조금 더 집중하고 연습한다면 더 뛰어난 관찰력을 기를 수 있습니다.',
      strengths: [
        '기본적인 관찰력',
        '균형잡힌 판단',
        '적당한 집중력'
      ],
      improvements: [
        '더 세심한 관찰 연습',
        '집중력 향상 훈련',
        '빠른 판단력 개발'
      ],
      compatibleTypes: [
        { id: 'expert', title: '눈치 만렙 근접', emoji: '🎯', compatibility: 85 },
        { id: 'beginner', title: '사회성 훈련 필요', emoji: '📚', compatibility: 75 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 65 },
        { name: '집중력', emoji: '🎯', percentage: 60 },
        { name: '직감', emoji: '⚡', percentage: 70 },
        { name: '판단력', emoji: '🧠', percentage: 65 }
      ]
    },
    beginner: {
      id: 'beginner',
      title: '사회성 훈련 필요',
      emoji: '📚',
      description: '눈치력 개발이 필요한 단계입니다!',
      detailedDescription: '3-5점을 기록한 당신은 아직 관찰력을 기르는 단계입니다. 주변을 더 자세히 살펴보고 변화에 민감하게 반응하는 연습을 통해 눈치력을 향상시킬 수 있습니다.',
      strengths: [
        '성장 가능성',
        '솔직한 성격',
        '개선 의지'
      ],
      improvements: [
        '관찰력 향상 연습',
        '집중력 강화',
        '상황 인식 능력 개발',
        '세심함 기르기'
      ],
      compatibleTypes: [
        { id: 'good', title: '눈치 50%', emoji: '👁️', compatibility: 75 },
        { id: 'oblivious', title: '멍때리는 타입', emoji: '😴', compatibility: 70 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 45 },
        { name: '집중력', emoji: '🎯', percentage: 40 },
        { name: '직감', emoji: '⚡', percentage: 50 },
        { name: '판단력', emoji: '🧠', percentage: 45 }
      ]
    },
    oblivious: {
      id: 'oblivious',
      title: '멍때리는 타입',
      emoji: '😴',
      description: '여유로운 마음가짐을 가진 타입입니다!',
      detailedDescription: '0-2점을 기록한 당신은 세상을 여유롭게 바라보는 타입입니다. 작은 것에 신경쓰지 않는 대범함이 장점이지만, 때로는 주변 상황에 더 관심을 가져보는 것도 좋겠습니다.',
      strengths: [
        '여유로운 성격',
        '스트레스를 덜 받음',
        '대범한 마음가짐',
        '순수한 시각'
      ],
      improvements: [
        '주변 관찰 연습',
        '집중력 향상',
        '상황 인식 능력 개발'
      ],
      compatibleTypes: [
        { id: 'beginner', title: '사회성 훈련 필요', emoji: '📚', compatibility: 70 },
        { id: 'good', title: '눈치 50%', emoji: '👁️', compatibility: 60 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 25 },
        { name: '집중력', emoji: '🎯', percentage: 30 },
        { name: '직감', emoji: '⚡', percentage: 35 },
        { name: '판단력', emoji: '🧠', percentage: 25 }
      ]
    }
  }
};