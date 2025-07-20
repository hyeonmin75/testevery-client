import { TestData } from '../../types/test';

export const creativityTest: TestData = {
  id: 'creativity',
  title: '창의력 진단 테스트',
  description: '일상 사물의 다양한 활용법을 생각해보며 당신의 창의력을 측정해보세요!',
  emoji: '💡',
  color: 'bg-gradient-to-br from-yellow-400 to-orange-500',
  duration: '5-10분',
  questionCount: 1,
  participants: 24847,
  questions: [
    {
      id: 1,
      text: '제시된 사물의 다양한 활용법을 생각해보세요',
      subtitle: '창의적이고 독창적인 아이디어일수록 높은 점수를 받습니다',
      emoji: '🤔',
      options: [] // 창의력 테스트는 옵션이 아닌 자유 입력
    }
  ],
  results: {
    'creative_genius': {
      id: 'creative_genius',
      title: '창의적 천재',
      emoji: '🌟',
      description: '당신은 뛰어난 창의력을 가진 혁신가입니다!',
      detailedDescription: '상상력이 풍부하고 독창적인 아이디어를 많이 제시하며, 다양한 관점에서 사물을 바라볼 수 있는 능력이 뛰어납니다.',
      strengths: [
        '풍부한 상상력과 아이디어 생성 능력',
        '독창적이고 혁신적인 사고',
        '다양한 관점에서 문제 접근',
        '세부적이고 구체적인 설명 능력'
      ],
      improvements: [
        '아이디어의 실현 가능성 검토',
        '체계적인 창의 과정 관리',
        '협업을 통한 아이디어 발전'
      ],
      compatibleTypes: [],
      traits: [
        { name: '유창성', emoji: '🌊', percentage: 90 },
        { name: '독창성', emoji: '✨', percentage: 95 },
        { name: '유연성', emoji: '🤸', percentage: 88 },
        { name: '정교성', emoji: '🔍', percentage: 92 }
      ]
    },
    'creative_innovator': {
      id: 'creative_innovator',
      title: '창의적 혁신가',
      emoji: '🚀',
      description: '당신은 실용적인 창의력을 가진 혁신가입니다!',
      detailedDescription: '아이디어를 많이 생성하며, 실용적이고 현실적인 활용법을 잘 찾아냅니다.',
      strengths: [
        '실용적인 아이디어 생성',
        '현실적인 문제 해결 능력',
        '다양한 분야의 지식 활용',
        '체계적인 사고 과정'
      ],
      improvements: [
        '더 대담하고 독창적인 발상',
        '상상력의 확장',
        '예술적 감성 개발'
      ],
      compatibleTypes: [],
      traits: [
        { name: '유창성', emoji: '🌊', percentage: 85 },
        { name: '독창성', emoji: '✨', percentage: 75 },
        { name: '유연성', emoji: '🤸', percentage: 90 },
        { name: '정교성', emoji: '🔍', percentage: 80 }
      ]
    },
    'creative_explorer': {
      id: 'creative_explorer',
      title: '창의적 탐험가',
      emoji: '🧭',
      description: '당신은 호기심 많은 창의적 탐험가입니다!',
      detailedDescription: '다양한 분야에 관심이 많고, 새로운 관점에서 사물을 바라보는 능력이 있습니다.',
      strengths: [
        '다양한 관점의 사고',
        '호기심과 탐구 정신',
        '융합적 사고 능력',
        '새로운 분야 도전'
      ],
      improvements: [
        '아이디어의 구체화',
        '지속적인 아이디어 개발',
        '실행력 강화'
      ],
      compatibleTypes: [],
      traits: [
        { name: '유창성', emoji: '🌊', percentage: 70 },
        { name: '독창성', emoji: '✨', percentage: 80 },
        { name: '유연성', emoji: '🤸', percentage: 85 },
        { name: '정교성', emoji: '🔍', percentage: 65 }
      ]
    },
    'creative_builder': {
      id: 'creative_builder',
      title: '창의적 실행가',
      emoji: '🔨',
      description: '당신은 아이디어를 현실로 만드는 실행가입니다!',
      detailedDescription: '적은 수의 아이디어이지만 매우 구체적이고 실현 가능한 방안을 제시합니다.',
      strengths: [
        '구체적이고 실현 가능한 아이디어',
        '세밀한 계획 수립 능력',
        '현실적인 문제 해결',
        '체계적인 접근 방식'
      ],
      improvements: [
        '아이디어 양의 확장',
        '더 다양한 관점 시도',
        '상상력의 자유로운 활용'
      ],
      compatibleTypes: [],
      traits: [
        { name: '유창성', emoji: '🌊', percentage: 60 },
        { name: '독창성', emoji: '✨', percentage: 65 },
        { name: '유연성', emoji: '🤸', percentage: 70 },
        { name: '정교성', emoji: '🔍', percentage: 90 }
      ]
    }
  }
};