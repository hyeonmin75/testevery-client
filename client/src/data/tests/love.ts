import { TestData } from '../../types/test';

export const loveTest: TestData = {
  id: 'love',
  title: '연애 스타일 테스트',
  description: '나만의 특별한 사랑 방식을 알아보세요',
  emoji: '💕',
  color: 'pink',
  duration: '4-6분',
  questionCount: 9,
  participants: 2156,
  questions: [
    {
      id: 1,
      text: '이상형과 처음 만났을 때 당신의 반응은?',
      subtitle: '첫인상에서의 행동을 선택해주세요',
      emoji: '😍',
      options: [
        {
          id: 'a',
          text: '적극적으로 다가가서 대화를 시도한다',
          description: '직접적이고 솔직한 어프로치를 선호해요',
          emoji: '🗣️',
          scores: { passionate: 3, romantic: 1, realistic: 0, free: 2 }
        },
        {
          id: 'b',
          text: '자연스럽게 관심을 표현하며 기회를 만든다',
          description: '로맨틱하고 섬세한 접근을 해요',
          emoji: '🌹',
          scores: { passionate: 1, romantic: 3, realistic: 1, free: 0 }
        },
        {
          id: 'c',
          text: '신중하게 상대방을 관찰하고 파악한다',
          description: '현실적이고 분석적으로 접근해요',
          emoji: '🔍',
          scores: { passionate: 0, romantic: 0, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '부담스럽지 않게 자연스럽게 친해진다',
          description: '자유롭고 편안한 관계를 추구해요',
          emoji: '😊',
          scores: { passionate: 1, romantic: 2, realistic: 1, free: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '연인과의 데이트에서 가장 중요한 것은?',
      subtitle: '데이트에서 우선시하는 것을 선택해주세요',
      emoji: '💑',
      options: [
        {
          id: 'a',
          text: '서로의 마음을 깊이 나누는 시간',
          description: '진솔한 대화와 감정 교류를 중시해요',
          emoji: '💭',
          scores: { passionate: 3, romantic: 2, realistic: 0, free: 1 }
        },
        {
          id: 'b',
          text: '특별하고 로맨틱한 분위기',
          description: '아름다운 순간과 추억을 만들고 싶어해요',
          emoji: '✨',
          scores: { passionate: 1, romantic: 3, realistic: 0, free: 1 }
        },
        {
          id: 'c',
          text: '서로에게 도움이 되는 의미있는 활동',
          description: '실질적이고 건설적인 시간을 보내고 싶어요',
          emoji: '🎯',
          scores: { passionate: 0, romantic: 0, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '편안하고 자유로운 시간',
          description: '부담없이 자연스럽게 즐기고 싶어해요',
          emoji: '🌿',
          scores: { passionate: 1, romantic: 1, realistic: 1, free: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '연인과 갈등이 생겼을 때 당신의 해결 방식은?',
      subtitle: '관계에서의 문제 해결 방법을 선택해주세요',
      emoji: '💔',
      options: [
        {
          id: 'a',
          text: '즉시 대화로 문제를 해결하려고 한다',
          description: '직접적이고 빠른 해결을 추구해요',
          emoji: '🗣️',
          scores: { passionate: 3, romantic: 0, realistic: 2, free: 0 }
        },
        {
          id: 'b',
          text: '상대방의 마음을 달래고 관계를 회복한다',
          description: '감정적 치유와 화해를 우선시해요',
          emoji: '💝',
          scores: { passionate: 1, romantic: 3, realistic: 1, free: 0 }
        },
        {
          id: 'c',
          text: '문제의 원인을 분석하고 체계적으로 접근한다',
          description: '논리적이고 근본적인 해결을 추구해요',
          emoji: '📋',
          scores: { passionate: 0, romantic: 0, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '시간을 두고 자연스럽게 풀리기를 기다린다',
          description: '급하지 않게 여유를 두고 해결해요',
          emoji: '⏰',
          scores: { passionate: 0, romantic: 1, realistic: 0, free: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '연인에게 사랑을 표현하는 당신만의 방식은?',
      subtitle: '사랑 표현 방법을 선택해주세요',
      emoji: '💖',
      options: [
        {
          id: 'a',
          text: '직접적이고 강렬한 말과 행동으로 표현한다',
          description: '확실하고 열정적인 표현을 해요',
          emoji: '🔥',
          scores: { passionate: 3, romantic: 1, realistic: 0, free: 1 }
        },
        {
          id: 'b',
          text: '섬세하고 아름다운 방식으로 표현한다',
          description: '로맨틱하고 감성적인 표현을 선호해요',
          emoji: '🌹',
          scores: { passionate: 1, romantic: 3, realistic: 0, free: 1 }
        },
        {
          id: 'c',
          text: '실질적인 도움과 배려로 표현한다',
          description: '행동과 실천으로 사랑을 보여줘요',
          emoji: '🤝',
          scores: { passionate: 1, romantic: 0, realistic: 3, free: 0 }
        },
        {
          id: 'd',
          text: '자연스럽고 편안한 방식으로 표현한다',
          description: '부담스럽지 않게 자연스럽게 표현해요',
          emoji: '☺️',
          scores: { passionate: 0, romantic: 1, realistic: 1, free: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '연인과의 미래를 생각할 때 가장 중요한 것은?',
      subtitle: '장기적인 관계에서 중시하는 가치를 선택해주세요',
      emoji: '🔮',
      options: [
        {
          id: 'a',
          text: '서로에 대한 변하지 않는 사랑과 헌신',
          description: '깊고 진실한 감정적 유대를 중시해요',
          emoji: '💞',
          scores: { passionate: 3, romantic: 2, realistic: 0, free: 0 }
        },
        {
          id: 'b',
          text: '함께 만들어갈 아름다운 추억과 경험',
          description: '로맨틱하고 특별한 순간들을 중시해요',
          emoji: '🌟',
          scores: { passionate: 1, romantic: 3, realistic: 1, free: 1 }
        },
        {
          id: 'c',
          text: '안정적이고 현실적인 미래 계획',
          description: '실질적이고 구체적인 미래를 중시해요',
          emoji: '🏡',
          scores: { passionate: 0, romantic: 0, realistic: 3, free: 0 }
        },
        {
          id: 'd',
          text: '서로의 자유와 개성을 존중하는 관계',
          description: '독립성과 개인적 성장을 중시해요',
          emoji: '🦋',
          scores: { passionate: 0, romantic: 1, realistic: 1, free: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '연인이 힘들어할 때 당신의 위로 방식은?',
      subtitle: '상대방을 돕는 방법을 선택해주세요',
      emoji: '🤗',
      options: [
        {
          id: 'a',
          text: '온 마음으로 공감하고 함께 아파한다',
          description: '깊은 감정적 지지를 제공해요',
          emoji: '💗',
          scores: { passionate: 3, romantic: 2, realistic: 0, free: 0 }
        },
        {
          id: 'b',
          text: '따뜻한 말과 세심한 배려로 위로한다',
          description: '부드럽고 감성적인 위로를 해요',
          emoji: '🌸',
          scores: { passionate: 1, romantic: 3, realistic: 1, free: 1 }
        },
        {
          id: 'c',
          text: '구체적인 해결책과 도움을 제시한다',
          description: '실질적이고 논리적인 도움을 줘요',
          emoji: '🛠️',
          scores: { passionate: 0, romantic: 0, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '옆에서 조용히 함께 있어준다',
          description: '부담주지 않고 자연스럽게 지지해요',
          emoji: '🤲',
          scores: { passionate: 1, romantic: 1, realistic: 0, free: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '연인과의 특별한 기념일을 보내는 방법은?',
      subtitle: '기념일 계획 방식을 선택해주세요',
      emoji: '🎉',
      options: [
        {
          id: 'a',
          text: '마음을 담은 깊이 있는 시간을 보낸다',
          description: '의미있고 진심이 담긴 시간을 만들어요',
          emoji: '💝',
          scores: { passionate: 3, romantic: 1, realistic: 1, free: 0 }
        },
        {
          id: 'b',
          text: '완벽하게 준비된 로맨틱한 이벤트를 한다',
          description: '아름답고 특별한 순간을 연출해요',
          emoji: '🎭',
          scores: { passionate: 1, romantic: 3, realistic: 0, free: 0 }
        },
        {
          id: 'c',
          text: '실용적이면서도 의미있는 선물을 준비한다',
          description: '가치있고 유용한 것으로 마음을 표현해요',
          emoji: '🎁',
          scores: { passionate: 0, romantic: 1, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '부담없이 편안한 시간을 함께 보낸다',
          description: '자연스럽고 여유로운 시간을 즐겨요',
          emoji: '☕',
          scores: { passionate: 0, romantic: 0, realistic: 1, free: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '연인의 단점을 발견했을 때 당신의 반응은?',
      subtitle: '상대방의 부족한 면에 대한 태도를 선택해주세요',
      emoji: '🤔',
      options: [
        {
          id: 'a',
          text: '사랑으로 포용하고 함께 극복하려고 한다',
          description: '무조건적인 사랑으로 받아들여요',
          emoji: '💪',
          scores: { passionate: 3, romantic: 2, realistic: 0, free: 0 }
        },
        {
          id: 'b',
          text: '아름다운 면을 더 부각시켜 표현한다',
          description: '긍정적인 면에 집중하고 격려해요',
          emoji: '✨',
          scores: { passionate: 1, romantic: 3, realistic: 1, free: 1 }
        },
        {
          id: 'c',
          text: '솔직하게 이야기하고 개선 방법을 찾는다',
          description: '건설적이고 현실적으로 접근해요',
          emoji: '📈',
          scores: { passionate: 1, romantic: 0, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '있는 그대로 받아들이고 존중한다',
          description: '개성으로 인정하고 자유롭게 둬요',
          emoji: '🌈',
          scores: { passionate: 0, romantic: 1, realistic: 0, free: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '이상적인 연애 관계는 어떤 모습인가요?',
      subtitle: '꿈꾸는 사랑의 형태를 선택해주세요',
      emoji: '💕',
      options: [
        {
          id: 'a',
          text: '서로를 위해 모든 것을 바칠 수 있는 관계',
          description: '깊고 강렬한 사랑을 추구해요',
          emoji: '🔥',
          scores: { passionate: 3, romantic: 1, realistic: 0, free: 0 }
        },
        {
          id: 'b',
          text: '동화 속 같은 아름다운 사랑 이야기',
          description: '로맨틱하고 이상적인 사랑을 꿈꿔요',
          emoji: '👑',
          scores: { passionate: 1, romantic: 3, realistic: 0, free: 0 }
        },
        {
          id: 'c',
          text: '서로 성장하며 함께 발전하는 관계',
          description: '실질적이고 건설적인 관계를 원해요',
          emoji: '🌱',
          scores: { passionate: 0, romantic: 1, realistic: 3, free: 1 }
        },
        {
          id: 'd',
          text: '서로의 삶을 존중하며 함께하는 관계',
          description: '자유롭고 균형잡힌 관계를 추구해요',
          emoji: '⚖️',
          scores: { passionate: 0, romantic: 0, realistic: 1, free: 3 }
        }
      ]
    }
  ],
  results: {
    passionate: {
      id: 'passionate',
      title: '열정적인 연인',
      emoji: '🔥',
      description: '뜨겁고 진실한 사랑을 하는 당신!',
      detailedDescription: '사랑에 있어서 진실하고 열정적인 마음을 가진 당신은 상대방에게 온 마음을 다해 사랑을 표현합니다. 깊고 강렬한 감정으로 모든 것을 바칠 수 있는 진정한 사랑을 추구해요.',
      strengths: [
        '진실하고 깊은 마음으로 사랑해요',
        '열정적이고 확실한 사랑 표현을 해요',
        '연인을 위해 헌신할 수 있는 마음이 커요',
        '강한 유대감으로 관계를 발전시켜요'
      ],
      improvements: [
        '때로는 여유를 가지고 상대방을 바라보세요',
        '상대방의 개인 공간도 존중해보세요',
        '감정적 균형을 유지하는 것도 중요해요',
        '다양한 사랑 표현 방식을 시도해보세요'
      ],
      compatibleTypes: [
        { id: 'romantic', title: '로맨틱한 연인', emoji: '🌹', compatibility: 90 },
        { id: 'realistic', title: '현실적인 연인', emoji: '💎', compatibility: 75 },
        { id: 'free', title: '자유로운 연인', emoji: '🌊', compatibility: 65 }
      ],
      traits: [
        { name: '열정', emoji: '🔥', percentage: 95 },
        { name: '진실성', emoji: '💎', percentage: 90 },
        { name: '헌신', emoji: '💪', percentage: 88 },
        { name: '깊이', emoji: '🌊', percentage: 85 }
      ]
    },
    romantic: {
      id: 'romantic',
      title: '로맨틱한 연인',
      emoji: '🌹',
      description: '아름다운 사랑을 꿈꾸는 당신!',
      detailedDescription: '로맨틱하고 감성적인 사랑을 추구하는 당신은 특별한 순간들을 만들어가는 것을 좋아합니다. 아름다운 추억과 감동적인 경험으로 사랑을 표현하는 감성적인 연인이에요.',
      strengths: [
        '감성적이고 아름다운 사랑 표현을 해요',
        '특별한 순간과 추억을 만드는 재능이 있어요',
        '섬세한 배려와 관심으로 상대방을 감동시켜요',
        '로맨틱한 분위기를 연출하는 센스가 뛰어나요'
      ],
      improvements: [
        '현실적인 면도 함께 고려해보세요',
        '일상적인 소통도 중요하게 생각해보세요',
        '완벽한 순간만 추구하지 말고 자연스러움도 즐겨보세요',
        '상대방의 실질적인 필요도 살펴보세요'
      ],
      compatibleTypes: [
        { id: 'passionate', title: '열정적인 연인', emoji: '🔥', compatibility: 88 },
        { id: 'free', title: '자유로운 연인', emoji: '🌊', compatibility: 80 },
        { id: 'realistic', title: '현실적인 연인', emoji: '💎', compatibility: 70 }
      ],
      traits: [
        { name: '로맨스', emoji: '🌹', percentage: 95 },
        { name: '감성', emoji: '🎭', percentage: 88 },
        { name: '창의성', emoji: '✨', percentage: 85 },
        { name: '섬세함', emoji: '🌸', percentage: 90 }
      ]
    },
    realistic: {
      id: 'realistic',
      title: '현실적인 연인',
      emoji: '💎',
      description: '안정적이고 신중한 사랑을 하는 당신!',
      detailedDescription: '현실적이고 안정적인 관계를 추구하는 당신은 장기적인 관점에서 사랑을 바라봅니다. 실질적인 도움과 건설적인 관계 발전을 통해 진정한 파트너십을 만들어가요.',
      strengths: [
        '안정적이고 지속가능한 관계를 만들어요',
        '실질적인 도움과 지원을 아끼지 않아요',
        '신중하고 책임감 있는 사랑을 해요',
        '장기적인 미래를 함께 계획하고 준비해요'
      ],
      improvements: [
        '때로는 감성적인 표현도 시도해보세요',
        '로맨틱한 순간을 만드는 것도 중요해요',
        '완벽한 계획보다 즉흥적인 재미도 즐겨보세요',
        '감정적인 소통에도 더 집중해보세요'
      ],
      compatibleTypes: [
        { id: 'free', title: '자유로운 연인', emoji: '🌊', compatibility: 85 },
        { id: 'passionate', title: '열정적인 연인', emoji: '🔥', compatibility: 75 },
        { id: 'romantic', title: '로맨틱한 연인', emoji: '🌹', compatibility: 70 }
      ],
      traits: [
        { name: '안정성', emoji: '🛡️', percentage: 95 },
        { name: '신중함', emoji: '⚖️', percentage: 90 },
        { name: '책임감', emoji: '💪', percentage: 88 },
        { name: '현실감각', emoji: '🎯', percentage: 92 }
      ]
    },
    free: {
      id: 'free',
      title: '자유로운 연인',
      emoji: '🌊',
      description: '편안하고 자연스러운 사랑을 하는 당신!',
      detailedDescription: '자유롭고 편안한 관계를 추구하는 당신은 서로의 개성을 존중하며 사랑합니다. 부담스럽지 않은 자연스러운 관계에서 진정한 행복을 찾는 균형잡힌 연인이에요.',
      strengths: [
        '자유롭고 부담없는 관계를 만들어요',
        '서로의 개성과 독립성을 존중해요',
        '편안하고 자연스러운 소통을 해요',
        '균형잡힌 관계를 유지하는 지혜가 있어요'
      ],
      improvements: [
        '때로는 더 깊은 감정 표현도 시도해보세요',
        '특별한 순간을 만드는 노력도 해보세요',
        '상대방이 원하는 관심도 적극적으로 표현해보세요',
        '장기적인 계획도 함께 세워보세요'
      ],
      compatibleTypes: [
        { id: 'realistic', title: '현실적인 연인', emoji: '💎', compatibility: 82 },
        { id: 'romantic', title: '로맨틱한 연인', emoji: '🌹', compatibility: 78 },
        { id: 'passionate', title: '열정적인 연인', emoji: '🔥', compatibility: 70 }
      ],
      traits: [
        { name: '자유로움', emoji: '🌊', percentage: 95 },
        { name: '균형감', emoji: '⚖️', percentage: 88 },
        { name: '존중', emoji: '🤝', percentage: 90 },
        { name: '자연스러움', emoji: '🌿', percentage: 85 }
      ]
    }
  }
};