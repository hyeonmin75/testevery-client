import { TestData } from '../../types/test';

export const reactionSpeedTest: TestData = {
  id: 'reaction_speed',
  title: '반응속도 테스트',
  description: '당신의 순간 반응속도를 정확히 측정해보세요',
  emoji: '⚡',
  color: 'red',
  duration: '2-3분',
  questionCount: 5,
  participants: 1200000,
  questions: [
    {
      id: 1,
      text: '반응속도 테스트',
      subtitle: '화면이 초록색으로 바뀌면 즉시 클릭하세요',
      emoji: '⚡',
      options: [
        {
          id: 'ready',
          text: '준비 완료',
          description: '클릭하여 테스트 시작',
          emoji: '🚀',
          scores: { fast: 0, normal: 0, slow: 0, careful: 0 }
        }
      ]
    },
    {
      id: 2,
      text: '2라운드',
      subtitle: '빨간색에서 초록색으로 바뀌는 순간 클릭',
      emoji: '🎯',
      options: [
        {
          id: 'ready',
          text: '시작하기',
          description: '준비되면 클릭하세요',
          emoji: '▶️',
          scores: { fast: 0, normal: 0, slow: 0, careful: 0 }
        }
      ]
    },
    {
      id: 3,
      text: '3라운드',
      subtitle: '집중하세요! 신호를 기다리다가 클릭',
      emoji: '🔥',
      options: [
        {
          id: 'ready',
          text: '계속하기',
          description: '다음 라운드 준비',
          emoji: '⭐',
          scores: { fast: 0, normal: 0, slow: 0, careful: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '4라운드',
      subtitle: '거의 다 왔습니다! 최고 기록에 도전하세요',
      emoji: '💫',
      options: [
        {
          id: 'ready',
          text: '도전하기',
          description: '집중력을 최대로!',
          emoji: '🏆',
          scores: { fast: 0, normal: 0, slow: 0, careful: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '마지막 라운드',
      subtitle: '최종 도전! 최고의 반응속도를 보여주세요',
      emoji: '🚀',
      options: [
        {
          id: 'ready',
          text: '마지막 도전',
          description: '모든 것을 쏟아부으세요',
          emoji: '🎊',
          scores: { fast: 0, normal: 0, slow: 0, careful: 0 }
        }
      ]
    }
  ],
  results: {
    lightning: {
      id: 'lightning',
      title: '⚡ 번개형',
      emoji: '⚡',
      description: '놀라운 반응속도의 소유자',
      detailedDescription: '당신의 반응속도는 정말 놀랍습니다! 순간적인 판단력과 빠른 행동력을 가지고 있어 어떤 상황에서도 재빠르게 대응할 수 있습니다. 스포츠나 게임에서 뛰어난 실력을 발휘할 수 있는 타입입니다.',
      strengths: [
        '순간적인 판단력이 뛰어나요',
        '위급상황에서 빠르게 대응해요',
        '동적인 활동에서 실력 발휘해요',
        '집중력이 매우 높아요'
      ],
      improvements: [
        '때로는 신중함도 필요해요',
        '실수를 줄이기 위해 한 번 더 생각해보세요',
        '장기적인 계획도 중요해요',
        '충분한 휴식으로 컨디션을 관리하세요'
      ],
      compatibleTypes: [
        { id: 'cheetah', title: '치타형', emoji: '🐆', compatibility: 95 },
        { id: 'eagle', title: '독수리형', emoji: '🦅', compatibility: 88 },
        { id: 'steady', title: '안정형', emoji: '🛡️', compatibility: 70 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 98 },
        { name: '집중력', emoji: '🎯', percentage: 92 },
        { name: '순발력', emoji: '💨', percentage: 95 },
        { name: '동적능력', emoji: '🏃', percentage: 90 }
      ]
    },
    cheetah: {
      id: 'cheetah',
      title: '🐆 치타형',
      emoji: '🐆',
      description: '빠르고 정확한 반응의 대가',
      detailedDescription: '치타처럼 빠르고 정확한 반응속도를 가지고 있습니다. 균형 잡힌 속도와 정확성으로 다양한 상황에서 최적의 성과를 낼 수 있습니다. 경쟁적인 환경에서 특히 빛을 발하는 타입입니다.',
      strengths: [
        '속도와 정확성의 균형이 좋아요',
        '경쟁상황에서 강한 면모를 보여요',
        '학습능력이 뛰어나요',
        '적응력이 매우 높아요'
      ],
      improvements: [
        '과도한 경쟁심을 조절해보세요',
        '팀워크도 중요하게 생각해보세요',
        '완벽주의 성향을 줄여보세요',
        '여유로운 마음가짐을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'lightning', title: '번개형', emoji: '⚡', compatibility: 95 },
        { id: 'eagle', title: '독수리형', emoji: '🦅', compatibility: 85 },
        { id: 'steady', title: '안정형', emoji: '🛡️', compatibility: 75 }
      ],
      traits: [
        { name: '반응속도', emoji: '⚡', percentage: 89 },
        { name: '정확성', emoji: '🎯', percentage: 91 },
        { name: '경쟁력', emoji: '🏆', percentage: 94 },
        { name: '적응력', emoji: '🔄', percentage: 87 }
      ]
    },
    eagle: {
      id: 'eagle',
      title: '🦅 독수리형',
      emoji: '🦅',
      description: '예리한 관찰력과 적절한 타이밍',
      detailedDescription: '독수리처럼 예리한 관찰력으로 최적의 타이밍을 포착합니다. 무작정 빠르기보다는 정확한 순간을 기다렸다가 정확하게 반응하는 현명한 타입입니다. 전략적 사고와 실행력을 겸비했습니다.',
      strengths: [
        '관찰력이 매우 뛰어나요',
        '타이밍 감각이 정확해요',
        '전략적 사고를 잘해요',
        '실수가 적어요'
      ],
      improvements: [
        '때로는 더 과감해져도 좋아요',
        '직감을 믿어보세요',
        '완벽한 타이밍만 기다리지 마세요',
        '실패를 두려워하지 마세요'
      ],
      compatibleTypes: [
        { id: 'steady', title: '안정형', emoji: '🛡️', compatibility: 90 },
        { id: 'cheetah', title: '치타형', emoji: '🐆', compatibility: 85 },
        { id: 'lightning', title: '번개형', emoji: '⚡', compatibility: 78 }
      ],
      traits: [
        { name: '관찰력', emoji: '👁️', percentage: 95 },
        { name: '타이밍', emoji: '⏰', percentage: 92 },
        { name: '전략성', emoji: '🧠', percentage: 88 },
        { name: '정확성', emoji: '🎯', percentage: 90 }
      ]
    },
    steady: {
      id: 'steady',
      title: '🛡️ 안정형',
      emoji: '🛡️',
      description: '신중하고 안정적인 대응 능력',
      detailedDescription: '빠른 속도보다는 안정성과 정확성을 중시하는 신중한 타입입니다. 실수를 최소화하고 확실한 결과를 만들어내는 것을 선호합니다. 지속적이고 꾸준한 성과를 내는 든든한 존재입니다.',
      strengths: [
        '실수가 거의 없어요',
        '신중하고 안정적이에요',
        '지속적인 성과를 내요',
        '신뢰할 수 있는 성격이에요'
      ],
      improvements: [
        '때로는 더 빠른 결정도 필요해요',
        '도전정신을 길러보세요',
        '직감도 중요한 능력이에요',
        '변화에 더 열린 마음을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'eagle', title: '독수리형', emoji: '🦅', compatibility: 90 },
        { id: 'cheetah', title: '치타형', emoji: '🐆', compatibility: 75 },
        { id: 'lightning', title: '번개형', emoji: '⚡', compatibility: 70 }
      ],
      traits: [
        { name: '안정성', emoji: '🛡️', percentage: 95 },
        { name: '신중함', emoji: '🤔', percentage: 92 },
        { name: '정확성', emoji: '🎯', percentage: 89 },
        { name: '신뢰성', emoji: '🤝', percentage: 94 }
      ]
    }
  }
};