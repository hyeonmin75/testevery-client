import { TestData } from '../../types/test';

export const animalTest: TestData = {
  id: 'animal',
  title: '동물 캐릭터 테스트',
  description: '당신의 성격을 닮은 동물을 찾아보세요',
  emoji: '🦁',
  color: 'orange',
  duration: '3-5분',
  questionCount: 8,
  participants: 2847,
  questions: [
    {
      id: 1,
      text: '친구들과 놀 때 당신의 모습은?',
      subtitle: '가장 어울리는 상황을 선택해주세요',
      emoji: '🎉',
      options: [
        {
          id: 'a',
          text: '모든 사람과 어울리며 분위기를 이끈다',
          description: '자연스럽게 리더가 되어 즐거운 시간을 만들어요',
          emoji: '🎉',
          scores: { lion: 3, rabbit: 0, owl: 0, wolf: 1 }
        },
        {
          id: 'b',
          text: '친한 몇 명과 깊은 대화를 나눈다',
          description: '소수의 사람들과 의미 있는 시간을 보내요',
          emoji: '👥',
          scores: { lion: 1, rabbit: 2, owl: 3, wolf: 2 }
        },
        {
          id: 'c',
          text: '계획된 활동을 차근차근 즐긴다',
          description: '미리 정한 계획대로 체계적으로 시간을 보내요',
          emoji: '🎯',
          scores: { lion: 2, rabbit: 3, owl: 3, wolf: 0 }
        },
        {
          id: 'd',
          text: '분위기를 관찰하며 적절히 참여한다',
          description: '상황을 파악하고 필요할 때 조화롭게 어울려요',
          emoji: '👀',
          scores: { lion: 0, rabbit: 1, owl: 2, wolf: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '새로운 도전이 앞에 있을 때 당신은?',
      subtitle: '가장 가까운 반응을 선택해주세요',
      emoji: '🎯',
      options: [
        {
          id: 'a',
          text: '즉시 도전에 뛰어든다',
          description: '망설임 없이 적극적으로 행동해요',
          emoji: '🚀',
          scores: { lion: 3, rabbit: 0, owl: 0, wolf: 2 }
        },
        {
          id: 'b',
          text: '신중하게 계획을 세운 후 시작한다',
          description: '충분한 준비를 통해 성공 확률을 높여요',
          emoji: '📋',
          scores: { lion: 1, rabbit: 2, owl: 3, wolf: 1 }
        },
        {
          id: 'c',
          text: '다른 사람들과 함께 도전한다',
          description: '협력을 통해 더 나은 결과를 만들어요',
          emoji: '🤝',
          scores: { lion: 2, rabbit: 3, owl: 1, wolf: 1 }
        },
        {
          id: 'd',
          text: '나만의 독특한 방식으로 접근한다',
          description: '창의적이고 독창적인 해결책을 찾아요',
          emoji: '🎨',
          scores: { lion: 1, rabbit: 0, owl: 2, wolf: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '스트레스를 받을 때 당신의 해결법은?',
      subtitle: '평소 스트레스 해소 방법을 선택해주세요',
      emoji: '😰',
      options: [
        {
          id: 'a',
          text: '직접적으로 문제를 해결하려고 노력한다',
          description: '적극적으로 상황을 개선하려고 해요',
          emoji: '⚡',
          scores: { lion: 3, rabbit: 1, owl: 2, wolf: 1 }
        },
        {
          id: 'b',
          text: '가족이나 친구에게 이야기한다',
          description: '주변 사람들의 지지와 조언을 구해요',
          emoji: '💬',
          scores: { lion: 1, rabbit: 3, owl: 0, wolf: 0 }
        },
        {
          id: 'c',
          text: '혼자만의 시간을 갖고 생각한다',
          description: '조용한 공간에서 마음을 정리해요',
          emoji: '🧘',
          scores: { lion: 0, rabbit: 1, owl: 3, wolf: 2 }
        },
        {
          id: 'd',
          text: '새로운 환경이나 활동으로 기분전환한다',
          description: '변화를 통해 스트레스를 해소해요',
          emoji: '🌍',
          scores: { lion: 2, rabbit: 0, owl: 0, wolf: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '갈등 상황이 발생했을 때 당신의 대처법은?',
      subtitle: '어려운 상황에서의 행동 방식을 선택해주세요',
      emoji: '⚡',
      options: [
        {
          id: 'a',
          text: '문제의 핵심을 파악하고 직접 해결한다',
          description: '정면으로 맞서서 명확한 해결책을 찾아요',
          emoji: '🎯',
          scores: { lion: 3, rabbit: 0, owl: 2, wolf: 1 }
        },
        {
          id: 'b',
          text: '양쪽의 입장을 들어보고 중재한다',
          description: '모든 사람이 만족할 수 있는 방법을 찾아요',
          emoji: '⚖️',
          scores: { lion: 1, rabbit: 3, owl: 1, wolf: 0 }
        },
        {
          id: 'c',
          text: '상황을 차분히 분석하고 신중하게 판단한다',
          description: '감정보다는 논리적으로 접근해요',
          emoji: '🔍',
          scores: { lion: 0, rabbit: 1, owl: 3, wolf: 1 }
        },
        {
          id: 'd',
          text: '잠시 거리를 두고 시간을 갖는다',
          description: '급하게 결정하지 않고 여유를 가져요',
          emoji: '🌊',
          scores: { lion: 1, rabbit: 0, owl: 1, wolf: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '주말에 가장 하고 싶은 활동은?',
      subtitle: '이상적인 휴식 방법을 선택해주세요',
      emoji: '🌟',
      options: [
        {
          id: 'a',
          text: '친구들과 활동적인 야외 활동',
          description: '에너지 넘치는 시간을 보내고 싶어요',
          emoji: '⛰️',
          scores: { lion: 3, rabbit: 2, owl: 0, wolf: 1 }
        },
        {
          id: 'b',
          text: '가족이나 연인과 따뜻한 시간',
          description: '소중한 사람들과 편안하게 시간을 보내요',
          emoji: '❤️',
          scores: { lion: 1, rabbit: 3, owl: 1, wolf: 0 }
        },
        {
          id: 'c',
          text: '독서나 공부 등 자기계발',
          description: '의미 있고 생산적인 시간을 보내고 싶어요',
          emoji: '📚',
          scores: { lion: 2, rabbit: 0, owl: 3, wolf: 1 }
        },
        {
          id: 'd',
          text: '혼자만의 자유로운 시간',
          description: '누구의 방해도 받지 않는 시간이 필요해요',
          emoji: '🎨',
          scores: { lion: 0, rabbit: 0, owl: 2, wolf: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '팀 프로젝트에서 당신의 역할은?',
      subtitle: '협업할 때의 모습을 선택해주세요',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '팀을 이끌고 전체적인 방향을 제시한다',
          description: '리더십을 발휘해서 팀을 이끌어가요',
          emoji: '👑',
          scores: { lion: 3, rabbit: 1, owl: 1, wolf: 0 }
        },
        {
          id: 'b',
          text: '팀원들 간의 소통을 돕고 분위기를 좋게 만든다',
          description: '화합과 협력을 위해 노력해요',
          emoji: '🤝',
          scores: { lion: 1, rabbit: 3, owl: 0, wolf: 1 }
        },
        {
          id: 'c',
          text: '정확한 분석과 체계적인 계획을 담당한다',
          description: '전문성과 정확성으로 기여해요',
          emoji: '📊',
          scores: { lion: 1, rabbit: 1, owl: 3, wolf: 0 }
        },
        {
          id: 'd',
          text: '창의적인 아이디어와 독특한 관점을 제공한다',
          description: '새로운 시각으로 문제를 바라봐요',
          emoji: '💡',
          scores: { lion: 0, rabbit: 0, owl: 1, wolf: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '중요한 결정을 내릴 때 가장 중요하게 생각하는 것은?',
      subtitle: '의사결정 기준을 선택해주세요',
      emoji: '🤔',
      options: [
        {
          id: 'a',
          text: '목표 달성과 성과',
          description: '결과와 효율성을 최우선으로 생각해요',
          emoji: '🎯',
          scores: { lion: 3, rabbit: 0, owl: 2, wolf: 1 }
        },
        {
          id: 'b',
          text: '주변 사람들에게 미치는 영향',
          description: '다른 사람들의 감정과 상황을 고려해요',
          emoji: '💝',
          scores: { lion: 1, rabbit: 3, owl: 0, wolf: 0 }
        },
        {
          id: 'c',
          text: '논리적 근거와 정확한 정보',
          description: '객관적인 데이터를 바탕으로 판단해요',
          emoji: '📋',
          scores: { lion: 0, rabbit: 1, owl: 3, wolf: 1 }
        },
        {
          id: 'd',
          text: '개인적인 가치관과 직감',
          description: '자신만의 기준과 느낌을 신뢰해요',
          emoji: '✨',
          scores: { lion: 1, rabbit: 0, owl: 0, wolf: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '새로운 사람들과 만날 때 당신은?',
      subtitle: '첫 만남에서의 모습을 선택해주세요',
      emoji: '👋',
      options: [
        {
          id: 'a',
          text: '적극적으로 다가가서 대화를 시작한다',
          description: '먼저 말을 걸고 분위기를 주도해요',
          emoji: '🗣️',
          scores: { lion: 3, rabbit: 1, owl: 0, wolf: 1 }
        },
        {
          id: 'b',
          text: '상대방이 편안해할 수 있도록 배려한다',
          description: '따뜻하고 친근한 모습으로 다가가요',
          emoji: '😊',
          scores: { lion: 1, rabbit: 3, owl: 1, wolf: 0 }
        },
        {
          id: 'c',
          text: '신중하게 관찰하며 천천히 알아간다',
          description: '상대방을 파악한 후에 적절히 대응해요',
          emoji: '🔍',
          scores: { lion: 0, rabbit: 1, owl: 3, wolf: 2 }
        },
        {
          id: 'd',
          text: '자연스럽게 흘러가는 대로 둔다',
          description: '억지로 만들지 않고 자연스러운 관계를 선호해요',
          emoji: '🌿',
          scores: { lion: 0, rabbit: 0, owl: 1, wolf: 3 }
        }
      ]
    }
  ],
  results: {
    lion: {
      id: 'lion',
      title: '용감한 사자',
      emoji: '🦁',
      description: '리더십이 강하고 자신감 넘치는 당신!',
      detailedDescription: '어떤 상황에서도 당당하게 앞장서는 타입이에요. 강한 카리스마와 추진력으로 주변 사람들을 이끌어가는 천생 리더입니다.',
      strengths: [
        '자연스러운 리더십으로 팀을 이끌어요',
        '어려운 상황에서도 결단력을 발휘해요',
        '목표를 향해 끈기있게 나아가요',
        '주변 사람들에게 용기를 주는 존재예요'
      ],
      improvements: [
        '때로는 다른 사람의 의견도 들어보세요',
        '완벽주의보다는 유연함을 길러보세요',
        '휴식도 성공의 중요한 요소예요',
        '팀원들과의 소통을 더욱 늘려보세요'
      ],
      compatibleTypes: [
        { id: 'wolf', title: '늑대', emoji: '🐺', compatibility: 95 },
        { id: 'owl', title: '올빼미', emoji: '🦉', compatibility: 88 },
        { id: 'rabbit', title: '토끼', emoji: '🐰', compatibility: 82 }
      ],
      traits: [
        { name: '리더십', emoji: '💪', percentage: 95 },
        { name: '열정', emoji: '🔥', percentage: 88 },
        { name: '추진력', emoji: '⚡', percentage: 92 },
        { name: '목표지향', emoji: '🎯', percentage: 85 }
      ]
    },
    rabbit: {
      id: 'rabbit',
      title: '따뜻한 토끼',
      emoji: '🐰',
      description: '친근하고 배려심 많은 당신!',
      detailedDescription: '다른 사람들을 배려하고 조화로운 관계를 만들어가는 따뜻한 성격의 소유자입니다. 공감 능력이 뛰어나고 주변을 편안하게 만드는 재능이 있어요.',
      strengths: [
        '뛰어난 공감 능력과 배려심을 가지고 있어요',
        '갈등 상황에서 중재 역할을 잘해요',
        '친구들에게 든든한 지지자가 되어줘요',
        '안정적이고 신뢰할 수 있는 성격이에요'
      ],
      improvements: [
        '자신의 의견도 당당하게 표현해보세요',
        '때로는 자신을 위한 시간도 가져보세요',
        '거절하는 것도 필요할 때가 있어요',
        '리더십을 발휘할 기회를 만들어보세요'
      ],
      compatibleTypes: [
        { id: 'lion', title: '사자', emoji: '🦁', compatibility: 92 },
        { id: 'owl', title: '올빼미', emoji: '🦉', compatibility: 85 },
        { id: 'wolf', title: '늑대', emoji: '🐺', compatibility: 78 }
      ],
      traits: [
        { name: '배려심', emoji: '❤️', percentage: 95 },
        { name: '공감능력', emoji: '🤗', percentage: 90 },
        { name: '안정성', emoji: '🛡️', percentage: 88 },
        { name: '협력성', emoji: '🤝', percentage: 92 }
      ]
    },
    owl: {
      id: 'owl',
      title: '지혜로운 올빼미',
      emoji: '🦉',
      description: '신중하고 분석적인 당신!',
      detailedDescription: '깊이 있는 사고력과 분석 능력을 가진 현명한 성격입니다. 신중하게 상황을 판단하고 최선의 해결책을 찾아내는 전략가형 인재예요.',
      strengths: [
        '뛰어난 분석력과 판단력을 가지고 있어요',
        '신중한 계획을 통해 실수를 줄여요',
        '복잡한 문제도 차근차근 해결해요',
        '깊이 있는 지식과 통찰력을 가지고 있어요'
      ],
      improvements: [
        '완벽을 추구하다 기회를 놓치지 않도록 주의하세요',
        '때로는 직감도 믿어보세요',
        '더 적극적으로 의견을 표현해보세요',
        '새로운 도전에 열린 마음을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'lion', title: '사자', emoji: '🦁', compatibility: 90 },
        { id: 'rabbit', title: '토끼', emoji: '🐰', compatibility: 87 },
        { id: 'wolf', title: '늑대', emoji: '🐺', compatibility: 75 }
      ],
      traits: [
        { name: '분석력', emoji: '🔍', percentage: 95 },
        { name: '신중함', emoji: '⚖️', percentage: 92 },
        { name: '지혜', emoji: '🧠', percentage: 90 },
        { name: '계획성', emoji: '📋', percentage: 88 }
      ]
    },
    wolf: {
      id: 'wolf',
      title: '독립적인 늑대',
      emoji: '🐺',
      description: '자유롭고 독창적인 당신!',
      detailedDescription: '독립적이고 창의적인 사고를 가진 자유로운 영혼입니다. 남들과 다른 길을 걷는 것을 두려워하지 않고, 독특한 아이디어로 새로운 가치를 만들어냅니다.',
      strengths: [
        '독창적이고 창의적인 아이디어를 가지고 있어요',
        '독립적으로 문제를 해결하는 능력이 뛰어나요',
        '새로운 것에 대한 도전정신이 강해요',
        '자유로운 사고로 혁신을 만들어내요'
      ],
      improvements: [
        '때로는 팀워크의 중요성도 인정해보세요',
        '다른 사람들과의 소통을 늘려보세요',
        '혼자만의 시간과 함께하는 시간의 균형을 맞춰보세요',
        '안정성도 고려한 계획을 세워보세요'
      ],
      compatibleTypes: [
        { id: 'lion', title: '사자', emoji: '🦁', compatibility: 88 },
        { id: 'owl', title: '올빼미', emoji: '🦉', compatibility: 82 },
        { id: 'rabbit', title: '토끼', emoji: '🐰', compatibility: 75 }
      ],
      traits: [
        { name: '독립성', emoji: '🗽', percentage: 95 },
        { name: '창의성', emoji: '💡', percentage: 90 },
        { name: '자유로움', emoji: '🌊', percentage: 92 },
        { name: '도전정신', emoji: '🎪', percentage: 87 }
      ]
    }
  }
};