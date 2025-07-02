import { TestData } from '../../types/test';

export const tappingEnduranceTest: TestData = {
  id: 'tapping_endurance',
  title: '1분 안에 몇 번 탭하나요?',
  description: '60초 동안 화면을 얼마나 빠르게 탭할 수 있는지 당신의 지구력과 집중력을 테스트해보세요!',
  emoji: '⚡',
  color: 'blue',
  duration: '1분',
  questionCount: 1,
  participants: 2847,
  questions: [
    {
      id: 1,
      text: '준비되셨나요?',
      subtitle: '1분 동안 최대한 빠르게 화면을 탭해주세요!',
      emoji: '⚡',
      options: [
        {
          id: 'ready',
          text: '시작하기',
          description: '60초 탭핑 챌린지 시작',
          emoji: '🚀',
          scores: { tapCount: 0 }
        }
      ]
    }
  ],
  results: {
    legendary: {
      id: 'legendary',
      title: '전설급 탭핑 마스터',
      emoji: '👑',
      description: '놀라운 속도와 지구력을 보여주는 전설적인 실력입니다!',
      detailedDescription: '당신은 1분 동안 400회 이상의 탭핑을 기록한 전설급 마스터입니다. 이는 초당 6.7회 이상의 놀라운 속도로, 프로 게이머 수준의 반응속도와 집중력을 보여줍니다.',
      strengths: [
        '뛰어난 반응속도와 손목 지구력',
        '극도의 집중력과 정확성',
        '스트레스 상황에서도 안정적인 퍼포먼스'
      ],
      improvements: [
        '장시간 게임이나 작업 시 적절한 휴식 필요',
        '손목 건강 관리에 주의'
      ],
      compatibleTypes: [
        { id: 'master', title: '마스터급', emoji: '🔥', compatibility: 95 },
        { id: 'grandmaster', title: '그랜드마스터급', emoji: '⭐', compatibility: 90 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 100 },
        { name: '집중력', emoji: '🎯', percentage: 98 },
        { name: '지구력', emoji: '💪', percentage: 95 },
        { name: '정확성', emoji: '🔍', percentage: 92 }
      ]
    },
    master: {
      id: 'master',
      title: '마스터급 탭핑 고수',
      emoji: '🔥',
      description: '뛰어난 탭핑 실력으로 마스터 등급에 도달했습니다!',
      detailedDescription: '350-399회의 탭핑을 기록한 마스터급 실력자입니다. 초당 5.8-6.6회의 빠른 속도로 상위 1% 수준의 실력을 보여주고 있습니다.',
      strengths: [
        '매우 빠른 반응속도',
        '뛰어난 손목 지구력',
        '높은 집중력 유지 능력'
      ],
      improvements: [
        '더 안정적인 리듬감 개발',
        '전설급 도달을 위한 추가 연습'
      ],
      compatibleTypes: [
        { id: 'legendary', title: '전설급', emoji: '👑', compatibility: 95 },
        { id: 'grandmaster', title: '그랜드마스터급', emoji: '⭐', compatibility: 88 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 95 },
        { name: '집중력', emoji: '🎯', percentage: 90 },
        { name: '지구력', emoji: '💪', percentage: 88 },
        { name: '정확성', emoji: '🔍', percentage: 85 }
      ]
    },
    grandmaster: {
      id: 'grandmaster',
      title: '그랜드마스터급',
      emoji: '⭐',
      description: '상당한 탭핑 실력을 보여주는 그랜드마스터입니다!',
      detailedDescription: '300-349회의 탭핑을 기록한 그랜드마스터급입니다. 초당 5.0-5.8회의 빠른 속도로 상위 5% 수준의 우수한 실력을 보여줍니다.',
      strengths: [
        '빠른 반응속도',
        '좋은 손목 컨트롤',
        '집중력 유지 능력'
      ],
      improvements: [
        '더 빠른 속도 개발',
        '마스터급 도약을 위한 훈련'
      ],
      compatibleTypes: [
        { id: 'master', title: '마스터급', emoji: '🔥', compatibility: 88 },
        { id: 'diamond', title: '다이아몬드급', emoji: '💎', compatibility: 85 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 85 },
        { name: '집중력', emoji: '🎯', percentage: 82 },
        { name: '지구력', emoji: '💪', percentage: 80 },
        { name: '정확성', emoji: '🔍', percentage: 78 }
      ]
    },
    diamond: {
      id: 'diamond',
      title: '다이아몬드급',
      emoji: '💎',
      description: '다이아몬드급 탭핑 실력을 보여줍니다!',
      detailedDescription: '270-299회의 탭핑을 기록한 다이아몬드급입니다. 초당 4.5-5.0회의 속도로 상위 10% 수준의 실력을 보여줍니다.',
      strengths: [
        '안정적인 탭핑 리듬',
        '좋은 집중력',
        '꾸준한 퍼포먼스'
      ],
      improvements: [
        '더 빠른 속도 훈련',
        '지구력 향상 연습'
      ],
      compatibleTypes: [
        { id: 'grandmaster', title: '그랜드마스터급', emoji: '⭐', compatibility: 85 },
        { id: 'platinum', title: '플래티넘급', emoji: '🏆', compatibility: 82 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 75 },
        { name: '집중력', emoji: '🎯', percentage: 78 },
        { name: '지구력', emoji: '💪', percentage: 72 },
        { name: '정확성', emoji: '🔍', percentage: 70 }
      ]
    },
    platinum: {
      id: 'platinum',
      title: '플래티넘급',
      emoji: '🏆',
      description: '플래티넘급 탭핑 실력자입니다!',
      detailedDescription: '240-269회의 탭핑을 기록한 플래티넘급입니다. 초당 4.0-4.5회의 속도로 상위 20% 수준의 좋은 실력을 보여줍니다.',
      strengths: [
        '안정적인 탭핑',
        '적절한 집중력',
        '꾸준한 리듬감'
      ],
      improvements: [
        '속도 향상 훈련',
        '더 긴 지구력 개발'
      ],
      compatibleTypes: [
        { id: 'diamond', title: '다이아몬드급', emoji: '💎', compatibility: 82 },
        { id: 'gold', title: '골드급', emoji: '🥇', compatibility: 80 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 68 },
        { name: '집중력', emoji: '🎯', percentage: 70 },
        { name: '지구력', emoji: '💪', percentage: 65 },
        { name: '정확성', emoji: '🔍', percentage: 68 }
      ]
    },
    gold: {
      id: 'gold',
      title: '골드급',
      emoji: '🥇',
      description: '골드급 탭핑 실력을 보여줍니다!',
      detailedDescription: '210-239회의 탭핑을 기록한 골드급입니다. 초당 3.5-4.0회의 속도로 평균 이상의 실력을 보여줍니다.',
      strengths: [
        '평균 이상의 반응속도',
        '기본적인 집중력',
        '안정적인 탭핑'
      ],
      improvements: [
        '더 빠른 속도 개발',
        '집중력 향상 훈련'
      ],
      compatibleTypes: [
        { id: 'platinum', title: '플래티넘급', emoji: '🏆', compatibility: 80 },
        { id: 'silver', title: '실버급', emoji: '🥈', compatibility: 78 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 60 },
        { name: '집중력', emoji: '🎯', percentage: 62 },
        { name: '지구력', emoji: '💪', percentage: 58 },
        { name: '정확성', emoji: '🔍', percentage: 60 }
      ]
    },
    silver: {
      id: 'silver',
      title: '실버급',
      emoji: '🥈',
      description: '실버급 탭핑 실력입니다!',
      detailedDescription: '180-209회의 탭핑을 기록한 실버급입니다. 초당 3.0-3.5회의 속도로 평균적인 실력을 보여줍니다.',
      strengths: [
        '기본적인 탭핑 능력',
        '적절한 손목 컨트롤',
        '안정성'
      ],
      improvements: [
        '반응속도 향상',
        '지구력 강화 훈련'
      ],
      compatibleTypes: [
        { id: 'gold', title: '골드급', emoji: '🥇', compatibility: 78 },
        { id: 'bronze', title: '브론즈급', emoji: '🥉', compatibility: 75 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 52 },
        { name: '집중력', emoji: '🎯', percentage: 55 },
        { name: '지구력', emoji: '💪', percentage: 50 },
        { name: '정확성', emoji: '🔍', percentage: 52 }
      ]
    },
    bronze: {
      id: 'bronze',
      title: '브론즈급',
      emoji: '🥉',
      description: '브론즈급 탭핑 실력입니다!',
      detailedDescription: '150-179회의 탭핑을 기록한 브론즈급입니다. 초당 2.5-3.0회의 속도로 기본적인 실력을 보여줍니다.',
      strengths: [
        '꾸준한 탭핑',
        '기본적인 집중력',
        '안정성'
      ],
      improvements: [
        '속도 향상 연습',
        '집중력 강화',
        '지구력 개발'
      ],
      compatibleTypes: [
        { id: 'silver', title: '실버급', emoji: '🥈', compatibility: 75 },
        { id: 'beginner', title: '초보자급', emoji: '📈', compatibility: 72 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 45 },
        { name: '집중력', emoji: '🎯', percentage: 48 },
        { name: '지구력', emoji: '💪', percentage: 42 },
        { name: '정확성', emoji: '🔍', percentage: 45 }
      ]
    },
    beginner: {
      id: 'beginner',
      title: '초보자급',
      emoji: '📈',
      description: '초보자급이지만 발전 가능성이 무궁무진합니다!',
      detailedDescription: '120-149회의 탭핑을 기록한 초보자급입니다. 초당 2.0-2.5회의 속도로 연습을 통해 충분히 향상될 수 있습니다.',
      strengths: [
        '성장 가능성',
        '기본적인 탭핑',
        '꾸준함'
      ],
      improvements: [
        '반응속도 훈련',
        '집중력 향상',
        '꾸준한 연습'
      ],
      compatibleTypes: [
        { id: 'bronze', title: '브론즈급', emoji: '🥉', compatibility: 72 },
        { id: 'starter', title: '입문자급', emoji: '🌱', compatibility: 70 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 38 },
        { name: '집중력', emoji: '🎯', percentage: 40 },
        { name: '지구력', emoji: '💪', percentage: 35 },
        { name: '정확성', emoji: '🔍', percentage: 38 }
      ]
    },
    starter: {
      id: 'starter',
      title: '입문자급',
      emoji: '🌱',
      description: '입문자급! 시작이 반입니다!',
      detailedDescription: '120회 미만의 탭핑을 기록한 입문자급입니다. 초당 2.0회 미만의 속도이지만 꾸준한 연습으로 충분히 향상될 수 있습니다.',
      strengths: [
        '새로운 시작',
        '발전 의지',
        '학습 능력'
      ],
      improvements: [
        '기본 탭핑 연습',
        '집중력 개발',
        '꾸준한 훈련'
      ],
      compatibleTypes: [
        { id: 'beginner', title: '초보자급', emoji: '📈', compatibility: 70 },
        { id: 'bronze', title: '브론즈급', emoji: '🥉', compatibility: 65 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 30 },
        { name: '집중력', emoji: '🎯', percentage: 32 },
        { name: '지구력', emoji: '💪', percentage: 28 },
        { name: '정확성', emoji: '🔍', percentage: 30 }
      ]
    }
  }
};