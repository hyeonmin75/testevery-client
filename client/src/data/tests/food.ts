import { TestData } from '../../types/test';

export const foodTest: TestData = {
  id: 'food',
  title: '음식 취향 테스트',
  description: '음식으로 알아보는 나의 성격',
  emoji: '🍕',
  color: 'red',
  duration: '2-3분',
  questionCount: 10,
  participants: 2847,
  questions: [
    {
      id: 1,
      text: '가장 좋아하는 음식 카테고리는?',
      subtitle: '평소 선호하는 음식 종류를 선택해주세요',
      emoji: '🍽️',
      options: [
        {
          id: 'a',
          text: '매콤하고 자극적인 음식',
          description: '강렬한 맛으로 스트레스를 날려요',
          emoji: '🌶️',
          scores: { spicy: 3, sweet: 0, healthy: 0, comfort: 1 }
        },
        {
          id: 'b',
          text: '달콤하고 부드러운 음식',
          description: '기분을 좋게 만드는 달콤함을 선호해요',
          emoji: '🍰',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '건강하고 깔끔한 음식',
          description: '몸에 좋은 영양가 있는 음식을 중시해요',
          emoji: '🥗',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '따뜻하고 든든한 음식',
          description: '마음을 편안하게 해주는 음식을 좋아해요',
          emoji: '🍲',
          scores: { spicy: 1, sweet: 1, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '스트레스받을 때 찾게 되는 음식은?',
      subtitle: '힘들 때 생각나는 음식을 선택해주세요',
      emoji: '😰',
      options: [
        {
          id: 'a',
          text: '매운 떡볶이나 라면',
          description: '자극적인 맛으로 스트레스를 확실히 풀어요',
          emoji: '🍜',
          scores: { spicy: 3, sweet: 0, healthy: 0, comfort: 1 }
        },
        {
          id: 'b',
          text: '초콜릿이나 아이스크림',
          description: '달콤함으로 기분을 전환해요',
          emoji: '🍫',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '과일이나 견과류',
          description: '건강한 간식으로 몸도 마음도 챙겨요',
          emoji: '🍎',
          scores: { spicy: 0, sweet: 1, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '따뜻한 국물이나 죽',
          description: '따뜻한 음식으로 마음을 달래요',
          emoji: '🥣',
          scores: { spicy: 0, sweet: 0, healthy: 2, comfort: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '새로운 음식을 시도할 때 당신의 접근법은?',
      subtitle: '처음 보는 음식에 대한 반응을 선택해주세요',
      emoji: '🆕',
      options: [
        {
          id: 'a',
          text: '가장 매운 것부터 도전한다',
          description: '강렬한 경험을 추구하며 도전적으로 접근해요',
          emoji: '🔥',
          scores: { spicy: 3, sweet: 0, healthy: 1, comfort: 0 }
        },
        {
          id: 'b',
          text: '달콤하고 친숙한 맛부터 시작한다',
          description: '안전하고 즐거운 선택을 먼저 해요',
          emoji: '🧁',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '영양성분을 확인한 후 선택한다',
          description: '건강을 고려해서 신중하게 선택해요',
          emoji: '📊',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '현지인들이 추천하는 전통음식을 찾는다',
          description: '편안하고 검증된 맛을 선호해요',
          emoji: '👥',
          scores: { spicy: 1, sweet: 1, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '친구들과 식사할 때 당신의 역할은?',
      subtitle: '함께 식사할 때의 모습을 선택해주세요',
      emoji: '👨‍👩‍👧‍👦',
      options: [
        {
          id: 'a',
          text: '가장 맛있는 숨은 맛집을 찾아낸다',
          description: '모험적이고 독특한 곳을 발굴하는 것을 좋아해요',
          emoji: '🕵️',
          scores: { spicy: 3, sweet: 1, healthy: 0, comfort: 1 }
        },
        {
          id: 'b',
          text: '모든 사람이 좋아할 만한 달콤한 디저트 카페를 추천한다',
          description: '모두가 즐거워할 수 있는 선택을 해요',
          emoji: '🎂',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '건강한 재료로 만든 레스토랑을 제안한다',
          description: '모두의 건강을 생각해서 선택해요',
          emoji: '🌱',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '편안하고 분위기 좋은 가정식 레스토랑을 선택한다',
          description: '편안하게 대화할 수 있는 곳을 선호해요',
          emoji: '🏠',
          scores: { spicy: 0, sweet: 1, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '요리를 할 때 가장 중요하게 생각하는 것은?',
      subtitle: '요리에서 우선시하는 가치를 선택해주세요',
      emoji: '👨‍🍳',
      options: [
        {
          id: 'a',
          text: '강렬하고 인상적인 맛',
          description: '한 번 먹으면 잊을 수 없는 임팩트를 추구해요',
          emoji: '💥',
          scores: { spicy: 3, sweet: 1, healthy: 0, comfort: 0 }
        },
        {
          id: 'b',
          text: '예쁘고 맛있는 비주얼',
          description: '보기에도 즐겁고 달콤한 맛을 중시해요',
          emoji: '📸',
          scores: { spicy: 0, sweet: 3, healthy: 1, comfort: 1 }
        },
        {
          id: 'c',
          text: '영양 균형과 건강함',
          description: '몸에 좋은 재료와 조리법을 우선시해요',
          emoji: '⚖️',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 2 }
        },
        {
          id: 'd',
          text: '집에서 만든 따뜻한 정성',
          description: '마음을 담은 정성스러운 맛을 중시해요',
          emoji: '❤️',
          scores: { spicy: 1, sweet: 2, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '다이어트를 할 때 당신의 전략은?',
      subtitle: '식단 관리 방식을 선택해주세요',
      emoji: '💪',
      options: [
        {
          id: 'a',
          text: '매운 음식으로 신진대사를 촉진시킨다',
          description: '적극적이고 강렬한 방법을 선호해요',
          emoji: '🌡️',
          scores: { spicy: 3, sweet: 0, healthy: 2, comfort: 0 }
        },
        {
          id: 'b',
          text: '달콤한 대체재로 만족감을 유지한다',
          description: '즐거움을 포기하지 않으면서 조절해요',
          emoji: '🍓',
          scores: { spicy: 0, sweet: 3, healthy: 2, comfort: 1 }
        },
        {
          id: 'c',
          text: '영양소를 계산해서 체계적으로 관리한다',
          description: '과학적이고 건강한 방법을 추구해요',
          emoji: '📱',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '든든하지만 칼로리 낮은 음식을 찾는다',
          description: '포만감을 유지하면서 무리하지 않아요',
          emoji: '🥄',
          scores: { spicy: 1, sweet: 1, healthy: 2, comfort: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '해외여행에서 현지음식을 선택하는 기준은?',
      subtitle: '여행지에서의 음식 선택법을 선택해주세요',
      emoji: '✈️',
      options: [
        {
          id: 'a',
          text: '가장 매운 현지 특산물에 도전한다',
          description: '용기 있게 새로운 자극을 경험하고 싶어해요',
          emoji: '🗺️',
          scores: { spicy: 3, sweet: 0, healthy: 1, comfort: 0 }
        },
        {
          id: 'b',
          text: '달콤한 디저트나 과자부터 시작한다',
          description: '안전하고 즐거운 선택을 먼저 해요',
          emoji: '🧳',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '신선한 재료로 만든 건강한 음식을 찾는다',
          description: '여행 중에도 건강을 챙기는 것이 중요해요',
          emoji: '🥑',
          scores: { spicy: 0, sweet: 1, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '현지인들이 자주 가는 가정식 식당을 찾는다',
          description: '진짜 현지 맛을 편안하게 경험하고 싶어해요',
          emoji: '🏘️',
          scores: { spicy: 1, sweet: 1, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '야식을 선택할 때 당신의 기준은?',
      subtitle: '늦은 시간 음식 선택을 선택해주세요',
      emoji: '🌙',
      options: [
        {
          id: 'a',
          text: '속이 확 뚫리는 매운 음식',
          description: '강렬한 맛으로 잠을 깨우고 싶어해요',
          emoji: '🌃',
          scores: { spicy: 3, sweet: 0, healthy: 0, comfort: 1 }
        },
        {
          id: 'b',
          text: '달콤한 케이크나 과자',
          description: '하루의 마무리를 달콤하게 하고 싶어해요',
          emoji: '🍪',
          scores: { spicy: 0, sweet: 3, healthy: 0, comfort: 2 }
        },
        {
          id: 'c',
          text: '소화 잘 되는 가벼운 음식',
          description: '몸에 부담 주지 않는 선택을 해요',
          emoji: '🥛',
          scores: { spicy: 0, sweet: 1, healthy: 3, comfort: 2 }
        },
        {
          id: 'd',
          text: '따뜻하고 속을 채워주는 음식',
          description: '편안하고 든든한 마무리를 원해요',
          emoji: '🍵',
          scores: { spicy: 1, sweet: 1, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '음식 사진을 찍을 때 중요한 요소는?',
      subtitle: 'SNS 음식 사진에서 중시하는 것을 선택해주세요',
      emoji: '📱',
      options: [
        {
          id: 'a',
          text: '화끈한 빨간색이 돋보이는 비주얼',
          description: '강렬하고 임팩트 있는 색상을 선호해요',
          emoji: '🔴',
          scores: { spicy: 3, sweet: 1, healthy: 0, comfort: 0 }
        },
        {
          id: 'b',
          text: '예쁘고 달콤해 보이는 파스텔 톤',
          description: '보기만 해도 기분 좋아지는 색감을 좋아해요',
          emoji: '🌸',
          scores: { spicy: 0, sweet: 3, healthy: 1, comfort: 2 }
        },
        {
          id: 'c',
          text: '신선하고 자연스러운 그린 컬러',
          description: '건강하고 자연스러운 느낌을 추구해요',
          emoji: '🌿',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '따뜻하고 아늑한 브라운 톤',
          description: '편안하고 포근한 분위기를 좋아해요',
          emoji: '🤎',
          scores: { spicy: 0, sweet: 2, healthy: 1, comfort: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '인생 음식이라고 할 수 있는 당신의 소울푸드는?',
      subtitle: '가장 특별한 의미를 가진 음식을 선택해주세요',
      emoji: '💖',
      options: [
        {
          id: 'a',
          text: '매운맛의 끝판왕, 불닭볶음면',
          description: '도전적이고 강렬한 경험을 소중히 여겨요',
          emoji: '🔥',
          scores: { spicy: 3, sweet: 0, healthy: 0, comfort: 1 }
        },
        {
          id: 'b',
          text: '달콤한 추억이 담긴 엄마표 팬케이크',
          description: '달콤하고 행복한 기억을 소중히 해요',
          emoji: '🥞',
          scores: { spicy: 0, sweet: 3, healthy: 1, comfort: 3 }
        },
        {
          id: 'c',
          text: '영양 만점 건강 샐러드 볼',
          description: '몸과 마음의 건강을 최우선으로 생각해요',
          emoji: '🥙',
          scores: { spicy: 0, sweet: 0, healthy: 3, comfort: 1 }
        },
        {
          id: 'd',
          text: '할머니가 끓여주신 따뜻한 미역국',
          description: '정성과 사랑이 담긴 음식을 가장 소중히 여겨요',
          emoji: '🍲',
          scores: { spicy: 0, sweet: 1, healthy: 2, comfort: 3 }
        }
      ]
    }
  ],
  results: {
    spicy: {
      id: 'spicy',
      title: '스파이시한 맛',
      emoji: '🌶️',
      description: '자극적이고 도전적인 당신!',
      detailedDescription: '매운맛을 좋아하는 당신은 도전적이고 적극적인 성격의 소유자입니다. 평범함을 거부하고 항상 새로운 자극과 경험을 추구하는 열정적인 사람이에요. 어떤 어려움이 와도 정면돌파하는 용기와 에너지가 넘칩니다.',
      strengths: [
        '도전 정신이 강하고 용기가 있어요',
        '새로운 경험을 두려워하지 않아요',
        '스트레스를 빠르게 해소하는 능력이 있어요',
        '열정적이고 추진력이 뛰어나요'
      ],
      improvements: [
        '때로는 차분함과 인내심도 필요해요',
        '건강도 함께 고려해보세요',
        '다른 사람들의 취향도 배려해보세요',
        '급하지 않게 천천히 즐기는 여유도 가져보세요'
      ],
      compatibleTypes: [
        { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 80 },
        { id: 'sweet', title: '달콤한 맛', emoji: '🍰', compatibility: 70 },
        { id: 'healthy', title: '건강한 맛', emoji: '🥗', compatibility: 65 }
      ],
      traits: [
        { name: '도전성', emoji: '🔥', percentage: 95 },
        { name: '활동성', emoji: '⚡', percentage: 90 },
        { name: '열정', emoji: '💪', percentage: 88 },
        { name: '용기', emoji: '🦁', percentage: 85 }
      ]
    },
    sweet: {
      id: 'sweet',
      title: '달콤한 맛',
      emoji: '🍰',
      description: '따뜻하고 사랑스러운 당신!',
      detailedDescription: '단맛을 좋아하는 당신은 따뜻하고 긍정적인 에너지를 가진 사람입니다. 삶의 아름다운 순간들을 소중히 여기고, 주변 사람들에게 기쁨과 행복을 나누어주는 달콤한 매력의 소유자예요.',
      strengths: [
        '긍정적인 에너지가 넘치고 밝아요',
        '사람들에게 기쁨과 행복을 줄 수 있어요',
        '아름다운 것을 추구하고 감성이 풍부해요',
        '사교적이고 친근한 매력이 있어요'
      ],
      improvements: [
        '균형잡힌 식습관과 건강관리도 중요해요',
        '때로는 현실적인 면도 키워보세요',
        '다양한 경험에도 도전해보세요',
        '자신만의 독특함도 발전시켜보세요'
      ],
      compatibleTypes: [
        { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 85 },
        { id: 'healthy', title: '건강한 맛', emoji: '🥗', compatibility: 75 },
        { id: 'spicy', title: '스파이시한 맛', emoji: '🌶️', compatibility: 70 }
      ],
      traits: [
        { name: '긍정성', emoji: '😊', percentage: 95 },
        { name: '친화력', emoji: '🤗', percentage: 90 },
        { name: '감성', emoji: '💖', percentage: 88 },
        { name: '창의성', emoji: '🎨', percentage: 85 }
      ]
    },
    healthy: {
      id: 'healthy',
      title: '건강한 맛',
      emoji: '🥗',
      description: '균형잡히고 현명한 당신!',
      detailedDescription: '건강한 음식을 선호하는 당신은 자기관리를 잘하는 현명한 사람입니다. 장기적인 관점에서 삶을 바라보고, 몸과 마음의 균형을 중시하는 지혜로운 생활철학을 가지고 있어요.',
      strengths: [
        '자기관리 능력이 뛰어나고 규칙적이에요',
        '장기적인 관점으로 현명한 선택을 해요',
        '몸과 마음의 균형을 잘 맞춰요',
        '꾸준함과 인내력이 있어요'
      ],
      improvements: [
        '때로는 즐거움과 재미도 추구해보세요',
        '완벽함에 너무 얽매이지 말고 유연함도 가져보세요',
        '새로운 도전과 모험도 시도해보세요',
        '감정 표현도 더 자유롭게 해보세요'
      ],
      compatibleTypes: [
        { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 80 },
        { id: 'sweet', title: '달콤한 맛', emoji: '🍰', compatibility: 75 },
        { id: 'spicy', title: '스파이시한 맛', emoji: '🌶️', compatibility: 65 }
      ],
      traits: [
        { name: '자제력', emoji: '💪', percentage: 95 },
        { name: '건강의식', emoji: '🌱', percentage: 90 },
        { name: '균형감', emoji: '⚖️', percentage: 88 },
        { name: '지혜', emoji: '🧠', percentage: 85 }
      ]
    },
    comfort: {
      id: 'comfort',
      title: '편안한 맛',
      emoji: '🍲',
      description: '안정적이고 든든한 당신!',
      detailedDescription: '편안한 음식을 좋아하는 당신은 안정감을 주는 따뜻한 사람입니다. 진정한 행복은 소소하지만 확실한 것에서 온다는 것을 알고, 주변 사람들에게 든든한 지지와 위로를 주는 포근한 존재예요.',
      strengths: [
        '안정감을 주고 믿음직스러워요',
        '배려심이 깊고 따뜻한 마음을 가져요',
        '진정한 가치를 알아보는 안목이 있어요',
        '인내심이 있고 꾸준해요'
      ],
      improvements: [
        '새로운 도전과 변화도 시도해보세요',
        '모험심을 발휘할 기회를 만들어보세요',
        '자신의 의견을 더 적극적으로 표현해보세요',
        '다양한 경험의 폭을 넓혀보세요'
      ],
      compatibleTypes: [
        { id: 'sweet', title: '달콤한 맛', emoji: '🍰', compatibility: 85 },
        { id: 'healthy', title: '건강한 맛', emoji: '🥗', compatibility: 80 },
        { id: 'spicy', title: '스파이시한 맛', emoji: '🌶️', compatibility: 75 }
      ],
      traits: [
        { name: '안정성', emoji: '🛡️', percentage: 95 },
        { name: '배려심', emoji: '❤️', percentage: 90 },
        { name: '신뢰성', emoji: '🤝', percentage: 88 },
        { name: '포근함', emoji: '🏠', percentage: 85 }
      ]
    }
  }
};