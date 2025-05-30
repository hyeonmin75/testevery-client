import { TestData } from '../../types/test';

export const colorTest: TestData = {
  id: 'color',
  title: '색깔 성격 테스트',
  description: '나를 나타내는 색깔을 찾아보세요',
  emoji: '🎨',
  color: 'purple',
  duration: '2-3분',
  questionCount: 8,
  participants: 3012,
  questions: [
    {
      id: 1,
      text: '가장 끌리는 색깔은 무엇인가요?',
      subtitle: '직감적으로 선택해주세요',
      emoji: '🎨',
      options: [
        {
          id: 'a',
          text: '빨간색 - 열정과 에너지',
          description: '강렬하고 적극적인 에너지를 가지고 있어요',
          emoji: '🔴',
          scores: { red: 3, blue: 0, yellow: 1, green: 0 }
        },
        {
          id: 'b',
          text: '파란색 - 평온과 신뢰',
          description: '차분하고 안정적인 성향을 가지고 있어요',
          emoji: '🔵',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '노란색 - 밝음과 창의',
          description: '밝고 창의적인 에너지를 가지고 있어요',
          emoji: '🟡',
          scores: { red: 1, blue: 0, yellow: 3, green: 1 }
        },
        {
          id: 'd',
          text: '초록색 - 자연과 조화',
          description: '평화롭고 균형잡힌 성격을 가지고 있어요',
          emoji: '🟢',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '스트레스받을 때 보고 싶은 풍경은?',
      subtitle: '마음이 편안해지는 장면을 선택해주세요',
      emoji: '🌅',
      options: [
        {
          id: 'a',
          text: '활활 타오르는 장작불',
          description: '따뜻하고 역동적인 에너지로 힐링받고 싶어해요',
          emoji: '🔥',
          scores: { red: 3, blue: 0, yellow: 1, green: 1 }
        },
        {
          id: 'b',
          text: '잔잔한 바다나 호수',
          description: '평온하고 고요한 분위기에서 마음을 정리하고 싶어해요',
          emoji: '🌊',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '눈부신 해바라기 밭',
          description: '밝고 긍정적인 에너지로 기분전환하고 싶어해요',
          emoji: '🌻',
          scores: { red: 1, blue: 0, yellow: 3, green: 1 }
        },
        {
          id: 'd',
          text: '울창한 숲속 풍경',
          description: '자연 속에서 평화로운 휴식을 취하고 싶어해요',
          emoji: '🌲',
          scores: { red: 0, blue: 1, yellow: 0, green: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '가장 선호하는 계절은?',
      subtitle: '당신이 가장 좋아하는 계절을 선택해주세요',
      emoji: '🗓️',
      options: [
        {
          id: 'a',
          text: '뜨거운 여름',
          description: '활동적이고 열정적인 시간을 좋아해요',
          emoji: '☀️',
          scores: { red: 3, blue: 0, yellow: 2, green: 0 }
        },
        {
          id: 'b',
          text: '차가운 겨울',
          description: '조용하고 차분한 분위기를 선호해요',
          emoji: '❄️',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '따뜻한 봄',
          description: '새로운 시작과 희망찬 에너지를 좋아해요',
          emoji: '🌸',
          scores: { red: 1, blue: 0, yellow: 3, green: 2 }
        },
        {
          id: 'd',
          text: '선선한 가을',
          description: '성숙하고 안정된 분위기를 선호해요',
          emoji: '🍂',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '친구들이 당신을 어떻게 표현할까요?',
      subtitle: '다른 사람들 눈에 비친 당신의 모습을 선택해주세요',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '활력이 넘치고 리더십이 강한 사람',
          description: '에너지가 넘치고 추진력이 강해요',
          emoji: '⚡',
          scores: { red: 3, blue: 0, yellow: 1, green: 0 }
        },
        {
          id: 'b',
          text: '신뢰할 수 있고 차분한 사람',
          description: '안정감을 주고 믿음직스러워요',
          emoji: '🛡️',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '밝고 창의적인 사람',
          description: '긍정적이고 아이디어가 풍부해요',
          emoji: '💡',
          scores: { red: 1, blue: 0, yellow: 3, green: 1 }
        },
        {
          id: 'd',
          text: '평화롭고 조화로운 사람',
          description: '균형감이 있고 갈등을 잘 중재해요',
          emoji: '☮️',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '가장 선호하는 음식 스타일은?',
      subtitle: '당신의 음식 취향을 선택해주세요',
      emoji: '🍽️',
      options: [
        {
          id: 'a',
          text: '매콤하고 자극적인 음식',
          description: '강렬하고 인상적인 맛을 선호해요',
          emoji: '🌶️',
          scores: { red: 3, blue: 0, yellow: 1, green: 0 }
        },
        {
          id: 'b',
          text: '담백하고 깔끔한 음식',
          description: '은은하고 정제된 맛을 좋아해요',
          emoji: '🐟',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '달콤하고 화려한 음식',
          description: '즐겁고 기분 좋아지는 맛을 선호해요',
          emoji: '🍰',
          scores: { red: 1, blue: 0, yellow: 3, green: 0 }
        },
        {
          id: 'd',
          text: '건강하고 자연스러운 음식',
          description: '몸에 좋고 균형잡힌 음식을 좋아해요',
          emoji: '🥗',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '집을 꾸밀 때 선호하는 인테리어는?',
      subtitle: '이상적인 공간 분위기를 선택해주세요',
      emoji: '🏠',
      options: [
        {
          id: 'a',
          text: '강렬하고 모던한 스타일',
          description: '임팩트 있고 세련된 공간을 선호해요',
          emoji: '🔥',
          scores: { red: 3, blue: 0, yellow: 1, green: 0 }
        },
        {
          id: 'b',
          text: '깔끔하고 미니멀한 스타일',
          description: '정돈되고 차분한 공간을 좋아해요',
          emoji: '🔷',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '밝고 화사한 스타일',
          description: '활기차고 즐거운 분위기를 만들고 싶어해요',
          emoji: '🌟',
          scores: { red: 1, blue: 0, yellow: 3, green: 1 }
        },
        {
          id: 'd',
          text: '자연스럽고 편안한 스타일',
          description: '따뜻하고 아늑한 분위기를 선호해요',
          emoji: '🌿',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '가장 좋아하는 시간대는?',
      subtitle: '하루 중 가장 활력이 넘치는 시간을 선택해주세요',
      emoji: '⏰',
      options: [
        {
          id: 'a',
          text: '뜨거운 한낮',
          description: '에너지가 최고조에 달하는 시간을 좋아해요',
          emoji: '🌞',
          scores: { red: 3, blue: 0, yellow: 2, green: 0 }
        },
        {
          id: 'b',
          text: '고요한 밤',
          description: '차분하고 집중할 수 있는 시간을 선호해요',
          emoji: '🌙',
          scores: { red: 0, blue: 3, yellow: 0, green: 1 }
        },
        {
          id: 'c',
          text: '상쾌한 아침',
          description: '새로운 시작과 희망으로 가득한 시간을 좋아해요',
          emoji: '🌅',
          scores: { red: 1, blue: 0, yellow: 3, green: 2 }
        },
        {
          id: 'd',
          text: '따뜻한 오후',
          description: '평화롭고 여유로운 시간을 즐겨요',
          emoji: '🌇',
          scores: { red: 0, blue: 1, yellow: 1, green: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '가장 끌리는 보석은?',
      subtitle: '직감적으로 선택해주세요',
      emoji: '💎',
      options: [
        {
          id: 'a',
          text: '타오르는 루비',
          description: '강렬하고 열정적인 에너지에 끌려요',
          emoji: '💎',
          scores: { red: 3, blue: 0, yellow: 0, green: 0 }
        },
        {
          id: 'b',
          text: '깊고 푸른 사파이어',
          description: '신비롭고 깊이 있는 아름다움을 선호해요',
          emoji: '💙',
          scores: { red: 0, blue: 3, yellow: 0, green: 0 }
        },
        {
          id: 'c',
          text: '밝게 빛나는 시트린',
          description: '밝고 긍정적인 에너지에 끌려요',
          emoji: '💛',
          scores: { red: 0, blue: 0, yellow: 3, green: 0 }
        },
        {
          id: 'd',
          text: '자연스러운 에메랄드',
          description: '자연스럽고 조화로운 아름다움을 좋아해요',
          emoji: '💚',
          scores: { red: 0, blue: 0, yellow: 0, green: 3 }
        }
      ]
    }
  ],
  results: {
    red: {
      id: 'red',
      title: '열정적인 빨간색',
      emoji: '🔴',
      description: '에너지 넘치고 리더십이 강한 당신!',
      detailedDescription: '빨간색은 열정, 에너지, 리더십을 상징합니다. 당신은 강한 추진력과 확실한 목표의식을 가진 역동적인 사람이에요. 어떤 상황에서도 적극적으로 나서서 문제를 해결하려고 하며, 주변 사람들에게 큰 영향력을 발휘합니다.',
      strengths: [
        '강한 리더십과 추진력을 가지고 있어요',
        '목표 달성을 위한 열정이 뛰어나요',
        '어려운 상황에서도 용기를 발휘해요',
        '주변 사람들에게 동기부여를 잘해줘요'
      ],
      improvements: [
        '때로는 인내심을 기르는 것이 필요해요',
        '다른 사람의 의견도 충분히 들어보세요',
        '완벽함보다는 협력을 중시해보세요',
        '휴식의 중요성도 인정해보세요'
      ],
      compatibleTypes: [
        { id: 'yellow', title: '밝은 노란색', emoji: '🟡', compatibility: 90 },
        { id: 'green', title: '조화로운 초록색', emoji: '🟢', compatibility: 75 },
        { id: 'blue', title: '차분한 파란색', emoji: '🔵', compatibility: 65 }
      ],
      traits: [
        { name: '열정', emoji: '🔥', percentage: 95 },
        { name: '리더십', emoji: '👑', percentage: 90 },
        { name: '에너지', emoji: '⚡', percentage: 88 },
        { name: '추진력', emoji: '🚀', percentage: 85 }
      ]
    },
    blue: {
      id: 'blue',
      title: '차분한 파란색',
      emoji: '🔵',
      description: '신뢰할 수 있고 안정적인 당신!',
      detailedDescription: '파란색은 평온, 신뢰, 안정을 상징합니다. 당신은 차분하고 신중한 성격으로 주변 사람들에게 믿음을 주는 사람이에요. 깊이 있는 사고력과 분석적인 능력으로 현명한 판단을 내리며, 어떤 상황에서도 냉정함을 유지할 수 있습니다.',
      strengths: [
        '신뢰할 수 있고 책임감이 강해요',
        '차분하고 냉정한 판단력을 가지고 있어요',
        '깊이 있는 사고와 분석 능력이 뛰어나요',
        '안정적이고 일관성 있는 행동을 해요'
      ],
      improvements: [
        '때로는 감정 표현도 적극적으로 해보세요',
        '새로운 도전에 더 열린 마음을 가져보세요',
        '즉흥적인 재미도 즐겨보세요',
        '리더십을 발휘할 기회를 만들어보세요'
      ],
      compatibleTypes: [
        { id: 'green', title: '조화로운 초록색', emoji: '🟢', compatibility: 88 },
        { id: 'red', title: '열정적인 빨간색', emoji: '🔴', compatibility: 70 },
        { id: 'yellow', title: '밝은 노란색', emoji: '🟡', compatibility: 75 }
      ],
      traits: [
        { name: '신뢰성', emoji: '🛡️', percentage: 95 },
        { name: '안정성', emoji: '⚖️', percentage: 90 },
        { name: '분석력', emoji: '🔍', percentage: 88 },
        { name: '냉정함', emoji: '🧊', percentage: 85 }
      ]
    },
    yellow: {
      id: 'yellow',
      title: '밝은 노란색',
      emoji: '🟡',
      description: '창의적이고 긍정적인 당신!',
      detailedDescription: '노란색은 창의성, 밝음, 긍정을 상징합니다. 당신은 밝고 긍정적인 에너지로 주변을 환하게 만드는 사람이에요. 창의적인 아이디어가 풍부하고 새로운 것에 대한 호기심이 많으며, 어떤 상황에서도 희망적인 면을 찾아내는 재능이 있습니다.',
      strengths: [
        '창의적이고 독창적인 아이디어가 풍부해요',
        '밝고 긍정적인 에너지를 가지고 있어요',
        '새로운 것에 대한 호기심이 많아요',
        '주변 사람들에게 즐거움을 줄 수 있어요'
      ],
      improvements: [
        '때로는 현실적인 계획도 세워보세요',
        '집중력을 기르는 연습을 해보세요',
        '깊이 있는 사고도 함께 발전시켜보세요',
        '장기적인 목표 설정도 중요해요'
      ],
      compatibleTypes: [
        { id: 'red', title: '열정적인 빨간색', emoji: '🔴', compatibility: 92 },
        { id: 'green', title: '조화로운 초록색', emoji: '🟢', compatibility: 80 },
        { id: 'blue', title: '차분한 파란색', emoji: '🔵', compatibility: 75 }
      ],
      traits: [
        { name: '창의성', emoji: '💡', percentage: 95 },
        { name: '긍정성', emoji: '😊', percentage: 90 },
        { name: '호기심', emoji: '🔍', percentage: 88 },
        { name: '밝음', emoji: '☀️', percentage: 85 }
      ]
    },
    green: {
      id: 'green',
      title: '조화로운 초록색',
      emoji: '🟢',
      description: '평화롭고 균형잡힌 당신!',
      detailedDescription: '초록색은 조화, 평화, 균형을 상징합니다. 당신은 자연스럽고 균형잡힌 성격으로 주변과 조화를 이루며 살아가는 사람이에요. 갈등 상황에서 중재 역할을 잘하며, 모든 사람이 편안함을 느낄 수 있는 분위기를 만드는 재능이 있습니다.',
      strengths: [
        '조화롭고 균형잡힌 관점을 가지고 있어요',
        '갈등 상황에서 중재 역할을 잘해요',
        '자연스럽고 편안한 분위기를 만들어요',
        '모든 사람을 포용하는 마음이 넓어요'
      ],
      improvements: [
        '때로는 자신의 의견도 강하게 표현해보세요',
        '새로운 도전에 더 적극적으로 나서보세요',
        '리더십을 발휘할 기회를 만들어보세요',
        '완벽함을 추구하는 것도 때로는 필요해요'
      ],
      compatibleTypes: [
        { id: 'blue', title: '차분한 파란색', emoji: '🔵', compatibility: 88 },
        { id: 'yellow', title: '밝은 노란색', emoji: '🟡', compatibility: 82 },
        { id: 'red', title: '열정적인 빨간색', emoji: '🔴', compatibility: 75 }
      ],
      traits: [
        { name: '조화로움', emoji: '☮️', percentage: 95 },
        { name: '균형감', emoji: '⚖️', percentage: 90 },
        { name: '포용력', emoji: '🤗', percentage: 88 },
        { name: '평화로움', emoji: '🌿', percentage: 85 }
      ]
    }
  }
};