import { TestData } from '../../types/test';

export const foodPersonalityTest: TestData = {
  id: 'food_personality',
  title: '음식 성격 테스트',
  description: '내 성격을 음식으로 표현한다면?',
  emoji: '🍽️',
  color: 'orange',
  duration: '2-3분',
  questionCount: 12,
  participants: 2358,
  questions: [
    {
      id: 1,
      text: '당신의 성격을 음식으로 표현한다면?',
      subtitle: '가장 어울리는 음식을 선택해주세요',
      emoji: '🍽️',
      options: [
        {
          id: 'a',
          text: '피자 - 다양하고 즐거운',
          description: '여러 재료가 어우러진 것처럼 다채로운 매력이 있어요',
          emoji: '🍕',
          scores: { pizza: 3, sushi: 0, salad: 0, soup: 1 }
        },
        {
          id: 'b',
          text: '초밥 - 정교하고 완벽한',
          description: '세심하고 정확한 것을 추구하는 성격이에요',
          emoji: '🍣',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 0 }
        },
        {
          id: 'c',
          text: '샐러드 - 건강하고 균형잡힌',
          description: '자연스럽고 조화로운 삶을 추구해요',
          emoji: '🥗',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '수프 - 따뜻하고 위로가 되는',
          description: '사람들에게 편안함과 따뜻함을 주는 성격이에요',
          emoji: '🍲',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '친구들과 함께 식사할 때 당신이 주문하는 것은?',
      subtitle: '단체 식사에서의 선택을 골라주세요',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '여러 가지 토핑이 들어간 다양한 메뉴',
          description: '모든 사람이 즐길 수 있는 다채로운 선택을 해요',
          emoji: '🎉',
          scores: { pizza: 3, sushi: 0, salad: 1, soup: 1 }
        },
        {
          id: 'b',
          text: '정성스럽게 준비된 고급 요리',
          description: '품질과 완성도를 중시하는 선택을 해요',
          emoji: '⭐',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 0 }
        },
        {
          id: 'c',
          text: '신선한 재료로 만든 건강한 음식',
          description: '몸에 좋고 자연스러운 음식을 선호해요',
          emoji: '🌱',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '모두가 편안하게 먹을 수 있는 따뜻한 음식',
          description: '분위기를 따뜻하게 만드는 선택을 해요',
          emoji: '🤗',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '요리를 만들 때 가장 중요하게 생각하는 것은?',
      subtitle: '요리에서 우선시하는 가치를 선택해주세요',
      emoji: '👨‍🍳',
      options: [
        {
          id: 'a',
          text: '창의적이고 재미있는 조합',
          description: '새롭고 흥미로운 맛의 조합을 시도해요',
          emoji: '🎨',
          scores: { pizza: 3, sushi: 1, salad: 1, soup: 0 }
        },
        {
          id: 'b',
          text: '정확한 레시피와 완벽한 기술',
          description: '정밀하고 완벽한 조리법을 추구해요',
          emoji: '📏',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 1 }
        },
        {
          id: 'c',
          text: '신선한 재료와 영양 균형',
          description: '건강하고 자연스러운 재료를 중시해요',
          emoji: '🥕',
          scores: { pizza: 1, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '마음을 담은 정성과 사랑',
          description: '정성과 따뜻한 마음을 담아 만들어요',
          emoji: '❤️',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '새로운 레스토랑을 선택하는 기준은?',
      subtitle: '식당 선택 시 중요한 요소를 골라주세요',
      emoji: '🏪',
      options: [
        {
          id: 'a',
          text: '독특하고 화려한 인테리어와 분위기',
          description: '시각적으로 즐겁고 특별한 경험을 중시해요',
          emoji: '🌈',
          scores: { pizza: 3, sushi: 1, salad: 0, soup: 1 }
        },
        {
          id: 'b',
          text: '세련되고 고급스러운 분위기',
          description: '품격 있고 정제된 환경을 선호해요',
          emoji: '✨',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 0 }
        },
        {
          id: 'c',
          text: '자연스럽고 건강한 콘셉트',
          description: '친환경적이고 건강한 가치를 중시해요',
          emoji: '🌿',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '아늑하고 편안한 가정적 분위기',
          description: '따뜻하고 포근한 느낌을 선호해요',
          emoji: '🏠',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '파티 음식을 준비한다면?',
      subtitle: '특별한 모임을 위한 음식 준비법을 선택해주세요',
      emoji: '🎊',
      options: [
        {
          id: 'a',
          text: '다양한 종류의 핑거푸드와 간식',
          description: '여러 가지 맛을 즐길 수 있는 풍성한 구성을 해요',
          emoji: '🎪',
          scores: { pizza: 3, sushi: 0, salad: 1, soup: 1 }
        },
        {
          id: 'b',
          text: '정성스럽게 만든 고급 요리 코스',
          description: '완벽하게 계획된 고품질 메뉴를 준비해요',
          emoji: '🍽️',
          scores: { pizza: 0, sushi: 3, salad: 0, soup: 1 }
        },
        {
          id: 'c',
          text: '신선한 재료로 만든 건강한 뷔페',
          description: '몸에 좋고 균형잡힌 음식들로 구성해요',
          emoji: '🥙',
          scores: { pizza: 1, sushi: 1, salad: 3, soup: 0 }
        },
        {
          id: 'd',
          text: '따뜻하고 든든한 집밥 스타일',
          description: '편안하고 정성이 담긴 음식을 준비해요',
          emoji: '🍱',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '음식 사진을 찍을 때 중요한 것은?',
      subtitle: 'SNS 음식 사진에서 중시하는 것을 선택해주세요',
      emoji: '📸',
      options: [
        {
          id: 'a',
          text: '화려하고 다채로운 색감',
          description: '보는 즐거움과 시각적 재미를 추구해요',
          emoji: '🌈',
          scores: { pizza: 3, sushi: 1, salad: 1, soup: 0 }
        },
        {
          id: 'b',
          text: '완벽한 구성과 세련된 플레이팅',
          description: '정확하고 아름다운 배치를 중시해요',
          emoji: '📐',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 0 }
        },
        {
          id: 'c',
          text: '자연스럽고 신선한 느낌',
          description: '있는 그대로의 자연스러운 아름다움을 좋아해요',
          emoji: '🌱',
          scores: { pizza: 1, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '따뜻하고 정감있는 분위기',
          description: '마음을 편안하게 하는 따뜻한 느낌을 중시해요',
          emoji: '☕',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '음식을 먹을 때 당신의 스타일은?',
      subtitle: '식사하는 방식을 선택해주세요',
      emoji: '🍴',
      options: [
        {
          id: 'a',
          text: '여러 가지를 조금씩 나누어 먹는다',
          description: '다양한 맛을 경험하며 즐겁게 식사해요',
          emoji: '🔀',
          scores: { pizza: 3, sushi: 0, salad: 2, soup: 0 }
        },
        {
          id: 'b',
          text: '정해진 순서대로 차근차근 먹는다',
          description: '체계적이고 정확한 방식으로 식사해요',
          emoji: '📋',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 1 }
        },
        {
          id: 'c',
          text: '천천히 음미하며 건강하게 먹는다',
          description: '몸에 좋은 것부터 차근차근 섭취해요',
          emoji: '🧘',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 2 }
        },
        {
          id: 'd',
          text: '편안하게 대화하며 여유롭게 먹는다',
          description: '분위기를 즐기며 천천히 식사해요',
          emoji: '💬',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '음식을 선택할 때 가장 중요한 기준은?',
      subtitle: '메뉴 선택 시 우선순위를 골라주세요',
      emoji: '🤔',
      options: [
        {
          id: 'a',
          text: '새롭고 흥미로운 경험',
          description: '처음 보는 독특한 음식에 도전하는 것을 좋아해요',
          emoji: '🆕',
          scores: { pizza: 3, sushi: 1, salad: 1, soup: 0 }
        },
        {
          id: 'b',
          text: '검증된 품질과 완성도',
          description: '확실하고 완벽한 맛을 추구해요',
          emoji: '💎',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 1 }
        },
        {
          id: 'c',
          text: '건강과 영양가',
          description: '몸에 좋은 영향을 주는 것을 우선시해요',
          emoji: '💪',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '편안함과 만족감',
          description: '마음이 편해지고 든든한 느낌을 중시해요',
          emoji: '😌',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '좋아하는 음식의 온도는?',
      subtitle: '선호하는 음식 온도를 선택해주세요',
      emoji: '🌡️',
      options: [
        {
          id: 'a',
          text: '뜨겁지도 차갑지도 않은 적당한 온도',
          description: '다양한 온도의 음식을 골고루 즐겨요',
          emoji: '🌤️',
          scores: { pizza: 3, sushi: 2, salad: 1, soup: 0 }
        },
        {
          id: 'b',
          text: '정확한 온도로 서빙되는 음식',
          description: '온도까지 완벽하게 맞춰진 음식을 선호해요',
          emoji: '🎯',
          scores: { pizza: 1, sushi: 3, salad: 0, soup: 1 }
        },
        {
          id: 'c',
          text: '시원하고 상쾌한 차가운 음식',
          description: '신선하고 깔끔한 차가운 음식을 좋아해요',
          emoji: '❄️',
          scores: { pizza: 0, sushi: 2, salad: 3, soup: 0 }
        },
        {
          id: 'd',
          text: '따뜻하고 김이 나는 뜨거운 음식',
          description: '마음까지 따뜻해지는 뜨거운 음식을 선호해요',
          emoji: '♨️',
          scores: { pizza: 1, sushi: 0, salad: 0, soup: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '음식을 통해 표현하고 싶은 감정은?',
      subtitle: '음식으로 전달하고 싶은 메시지를 선택해주세요',
      emoji: '💭',
      options: [
        {
          id: 'a',
          text: '즐거움과 활기',
          description: '함께 하는 즐거운 시간과 에너지를 나누고 싶어해요',
          emoji: '🎉',
          scores: { pizza: 3, sushi: 0, salad: 1, soup: 1 }
        },
        {
          id: 'b',
          text: '정성과 완벽함',
          description: '세심한 배려와 완벽한 준비를 보여주고 싶어해요',
          emoji: '💝',
          scores: { pizza: 0, sushi: 3, salad: 1, soup: 1 }
        },
        {
          id: 'c',
          text: '건강과 자연스러움',
          description: '건강한 삶과 자연의 소중함을 전하고 싶어해요',
          emoji: '🌿',
          scores: { pizza: 1, sushi: 1, salad: 3, soup: 0 }
        },
        {
          id: 'd',
          text: '따뜻함과 위로',
          description: '마음의 위안과 따뜻한 사랑을 전하고 싶어해요',
          emoji: '🤗',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 11,
      text: '가장 기억에 남는 음식 경험은?',
      subtitle: '특별했던 음식 관련 추억을 선택해주세요',
      emoji: '💫',
      options: [
        {
          id: 'a',
          text: '친구들과 함께 나눠 먹었던 다양한 음식들',
          description: '즐거운 사람들과의 다채로운 경험을 소중히 여겨요',
          emoji: '👨‍👩‍👧‍👦',
          scores: { pizza: 3, sushi: 0, salad: 1, soup: 2 }
        },
        {
          id: 'b',
          text: '완벽하게 만들어진 고급 요리',
          description: '최고 수준의 품질과 완성도에 감동받은 경험을 기억해요',
          emoji: '⭐',
          scores: { pizza: 0, sushi: 3, salad: 0, soup: 1 }
        },
        {
          id: 'c',
          text: '건강해진 것을 느낄 수 있었던 음식',
          description: '몸과 마음이 건강해지는 것을 체감한 경험을 소중히 해요',
          emoji: '💚',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '가족이 정성껏 만들어준 집밥',
          description: '사랑과 정성이 담긴 따뜻한 음식의 기억을 간직해요',
          emoji: '🏡',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    },
    {
      id: 12,
      text: '이상적인 마지막 식사라면?',
      subtitle: '인생 마지막 식사로 선택하고 싶은 것을 골라주세요',
      emoji: '🌟',
      options: [
        {
          id: 'a',
          text: '사랑하는 사람들과 함께하는 다채로운 파티 음식',
          description: '즐거운 추억과 다양한 맛을 함께 나누고 싶어해요',
          emoji: '🎊',
          scores: { pizza: 3, sushi: 0, salad: 1, soup: 1 }
        },
        {
          id: 'b',
          text: '평생 기억할 완벽한 맛의 최고급 요리',
          description: '인생 최고의 완벽한 경험으로 마무리하고 싶어해요',
          emoji: '👑',
          scores: { pizza: 0, sushi: 3, salad: 0, soup: 1 }
        },
        {
          id: 'c',
          text: '자연에서 얻은 신선하고 순수한 음식',
          description: '자연의 본질적인 맛으로 평화롭게 마무리하고 싶어해요',
          emoji: '🌱',
          scores: { pizza: 0, sushi: 1, salad: 3, soup: 1 }
        },
        {
          id: 'd',
          text: '어머니가 끓여주신 따뜻한 국물',
          description: '가장 따뜻하고 소중한 사랑의 맛으로 마무리하고 싶어해요',
          emoji: '❤️',
          scores: { pizza: 1, sushi: 0, salad: 1, soup: 3 }
        }
      ]
    }
  ],
  results: {
    pizza: {
      id: 'pizza',
      title: '다채로운 피자',
      emoji: '🍕',
      description: '다양하고 즐거운 당신!',
      detailedDescription: '피자처럼 다양한 매력을 가진 당신은 여러 분야에서 재능을 발휘하며 사람들을 즐겁게 해주는 사회적인 존재입니다. 창의적이고 융통성이 있으며, 새로운 시도를 두려워하지 않는 모험 정신이 넘쳐요. 다양한 사람들과 어울리며 분위기를 만들어가는 천재적인 재능을 가지고 있습니다.',
      strengths: [
        '다양한 재능과 관심사를 가지고 있어요',
        '사교적이고 분위기 메이커 역할을 잘해요',
        '창의적이고 새로운 아이디어가 풍부해요',
        '적응력이 뛰어나고 융통성이 있어요'
      ],
      improvements: [
        '때로는 한 가지에 집중하는 깊이도 필요해요',
        '계획성과 체계성을 키워보세요',
        '완벽함보다는 지속성을 추구해보세요',
        '깊이 있는 관계 형성에도 신경써보세요'
      ],
      compatibleTypes: [
        { id: 'soup', title: '따뜻한 수프', emoji: '🍲', compatibility: 85 },
        { id: 'salad', title: '균형잡힌 샐러드', emoji: '🥗', compatibility: 75 },
        { id: 'sushi', title: '정교한 초밥', emoji: '🍣', compatibility: 70 }
      ],
      traits: [
        { name: '다양성', emoji: '🌈', percentage: 95 },
        { name: '사교성', emoji: '🎉', percentage: 90 },
        { name: '창의성', emoji: '🎨', percentage: 88 },
        { name: '적응력', emoji: '🔄', percentage: 85 }
      ]
    },
    sushi: {
      id: 'sushi',
      title: '정교한 초밥',
      emoji: '🍣',
      description: '완벽주의자인 당신!',
      detailedDescription: '초밥처럼 정교하고 완벽한 것을 추구하는 당신은 모든 일에 최선을 다하며 높은 수준의 결과물을 만들어내는 장인 정신의 소유자입니다. 세심하고 꼼꼼하며, 품질과 완성도를 무엇보다 중요하게 생각해요. 느리더라도 확실하고 정확한 방법을 선호합니다.',
      strengths: [
        '완벽을 추구하고 높은 품질을 만들어내요',
        '세심하고 정확한 작업 능력이 뛰어나요',
        '집중력이 뛰어나고 깊이 있는 사고를 해요',
        '신뢰할 수 있고 책임감이 강해요'
      ],
      improvements: [
        '때로는 완벽함보다 융통성도 필요해요',
        '실패를 두려워하지 말고 새로운 시도를 해보세요',
        '과정의 즐거움도 찾아보세요',
        '다른 사람들과의 협력도 중요하게 여겨보세요'
      ],
      compatibleTypes: [
        { id: 'salad', title: '균형잡힌 샐러드', emoji: '🥗', compatibility: 80 },
        { id: 'soup', title: '따뜻한 수프', emoji: '🍲', compatibility: 75 },
        { id: 'pizza', title: '다채로운 피자', emoji: '🍕', compatibility: 70 }
      ],
      traits: [
        { name: '정교함', emoji: '🎯', percentage: 95 },
        { name: '완벽주의', emoji: '💎', percentage: 90 },
        { name: '집중력', emoji: '🔍', percentage: 88 },
        { name: '품질추구', emoji: '⭐', percentage: 85 }
      ]
    },
    salad: {
      id: 'salad',
      title: '균형잡힌 샐러드',
      emoji: '🥗',
      description: '건강하고 조화로운 당신!',
      detailedDescription: '샐러드처럼 균형잡히고 건강한 삶을 추구하는 당신은 자연스러운 매력과 조화로운 성격을 가진 사람입니다. 몸과 마음의 건강을 중시하며, 지속가능하고 의미있는 삶을 추구해요. 진정한 가치를 알아보는 안목이 있고, 자연스럽고 솔직한 매력이 있습니다.',
      strengths: [
        '균형감각이 뛰어나고 조화로운 관계를 만들어요',
        '건강한 생활 습관과 가치관을 가져요',
        '자연스럽고 진실한 매력이 있어요',
        '지속가능하고 장기적인 관점을 가져요'
      ],
      improvements: [
        '때로는 즉흥적인 재미와 모험도 즐겨보세요',
        '완벽한 균형만 추구하지 말고 새로운 경험도 해보세요',
        '감정 표현을 더 자유롭게 해보세요',
        '창의적이고 독특한 면도 발휘해보세요'
      ],
      compatibleTypes: [
        { id: 'soup', title: '따뜻한 수프', emoji: '🍲', compatibility: 82 },
        { id: 'sushi', title: '정교한 초밥', emoji: '🍣', compatibility: 80 },
        { id: 'pizza', title: '다채로운 피자', emoji: '🍕', compatibility: 75 }
      ],
      traits: [
        { name: '균형감', emoji: '⚖️', percentage: 95 },
        { name: '건강함', emoji: '🌱', percentage: 90 },
        { name: '자연스러움', emoji: '🌿', percentage: 88 },
        { name: '진실성', emoji: '💚', percentage: 85 }
      ]
    },
    soup: {
      id: 'soup',
      title: '따뜻한 수프',
      emoji: '🍲',
      description: '위로가 되는 당신!',
      detailedDescription: '수프처럼 따뜻하고 위로가 되는 당신은 사람들의 마음을 편안하게 해주는 천성적인 치유자입니다. 깊은 공감 능력과 배려심을 가지고 있으며, 진정한 정성과 사랑으로 주변 사람들을 돌봐주는 따뜻한 존재예요. 외적인 화려함보다는 내면의 진정성을 추구합니다.',
      strengths: [
        '따뜻한 마음과 깊은 공감 능력을 가져요',
        '사람들을 위로하고 치유해주는 능력이 있어요',
        '진정성 있고 신뢰할 수 있는 관계를 만들어요',
        '정성과 사랑으로 모든 일에 임해요'
      ],
      improvements: [
        '자신의 감정과 욕구도 소중히 여겨보세요',
        '때로는 단호함과 결단력도 필요해요',
        '새로운 도전과 변화를 두려워하지 마세요',
        '자신만의 독특함과 개성도 표현해보세요'
      ],
      compatibleTypes: [
        { id: 'pizza', title: '다채로운 피자', emoji: '🍕', compatibility: 85 },
        { id: 'salad', title: '균형잡힌 샐러드', emoji: '🥗', compatibility: 82 },
        { id: 'sushi', title: '정교한 초밥', emoji: '🍣', compatibility: 75 }
      ],
      traits: [
        { name: '따뜻함', emoji: '❤️', percentage: 95 },
        { name: '위로', emoji: '🤗', percentage: 90 },
        { name: '공감능력', emoji: '💝', percentage: 88 },
        { name: '정성', emoji: '🏠', percentage: 85 }
      ]
    }
  }
};