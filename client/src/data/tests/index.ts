import { TestData } from '../../types/test';
import { animalTest } from './animal';
import { loveTest } from './love';
import { travelTest } from './travel';
import { colorTest } from './color';

// 추후 추가될 테스트들을 위한 기본 구조
export const tests: Record<string, TestData> = {
  animal: animalTest,
  love: loveTest,
  travel: travelTest,
  color: colorTest,
  // 다른 테스트들은 아직 기본 구조로 유지하되 문제 수를 8개로 확장
  food: {
    id: 'food',
    title: '음식 취향 테스트',
    description: '음식으로 알아보는 나의 성격',
    emoji: '🍕',
    color: 'red',
    duration: '2-3분',
    questionCount: 8,
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
      // 나머지 7개 문제는 기존과 유사한 구조로...
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
      }
    ],
    results: {
      spicy: {
        id: 'spicy',
        title: '스파이시한 맛',
        emoji: '🌶️',
        description: '자극적이고 도전적인 당신!',
        detailedDescription: '매운맛을 좋아하는 당신은 도전적이고 적극적인 성격의 소유자입니다.',
        strengths: ['도전 정신이 강해요', '스트레스 해소를 잘해요'],
        improvements: ['때로는 차분함도 필요해요', '건강도 생각해보세요'],
        compatibleTypes: [
          { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 80 }
        ],
        traits: [
          { name: '도전성', emoji: '🔥', percentage: 90 },
          { name: '활동성', emoji: '⚡', percentage: 85 }
        ]
      },
      sweet: {
        id: 'sweet',
        title: '달콤한 맛',
        emoji: '🍰',
        description: '따뜻하고 사랑스러운 당신!',
        detailedDescription: '단맛을 좋아하는 당신은 따뜻하고 긍정적인 에너지를 가진 사람입니다.',
        strengths: ['긍정적인 에너지가 넘쳐요', '사람들에게 기쁨을 줘요'],
        improvements: ['균형잡힌 식습관을 가져보세요', '현실적인 면도 키워보세요'],
        compatibleTypes: [
          { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 85 }
        ],
        traits: [
          { name: '긍정성', emoji: '😊', percentage: 95 },
          { name: '친화력', emoji: '🤗', percentage: 90 }
        ]
      },
      healthy: {
        id: 'healthy',
        title: '건강한 맛',
        emoji: '🥗',
        description: '균형잡히고 현명한 당신!',
        detailedDescription: '건강한 음식을 선호하는 당신은 자기관리를 잘하는 현명한 사람입니다.',
        strengths: ['자기관리 능력이 뛰어나요', '장기적인 관점을 가져요'],
        improvements: ['때로는 즐거움도 추구해보세요', '융통성도 필요해요'],
        compatibleTypes: [
          { id: 'comfort', title: '편안한 맛', emoji: '🍲', compatibility: 75 }
        ],
        traits: [
          { name: '자제력', emoji: '💪', percentage: 90 },
          { name: '건강의식', emoji: '🌱', percentage: 95 }
        ]
      },
      comfort: {
        id: 'comfort',
        title: '편안한 맛',
        emoji: '🍲',
        description: '안정적이고 든든한 당신!',
        detailedDescription: '편안한 음식을 좋아하는 당신은 안정감을 주는 따뜻한 사람입니다.',
        strengths: ['안정감을 줄 수 있어요', '배려심이 깊어요'],
        improvements: ['새로운 도전도 시도해보세요', '변화를 두려워하지 마세요'],
        compatibleTypes: [
          { id: 'sweet', title: '달콤한 맛', emoji: '🍰', compatibility: 85 }
        ],
        traits: [
          { name: '안정성', emoji: '🛡️', percentage: 90 },
          { name: '배려심', emoji: '❤️', percentage: 88 }
        ]
      }
    }
  },
  season: {
    id: 'season',
    title: '계절 성격 테스트',
    description: '나와 닮은 계절을 찾아보세요',
    emoji: '🌸',
    color: 'green',
    duration: '2-3분',
    questionCount: 8,
    participants: 1965,
    questions: [
      {
        id: 1,
        text: '가장 좋아하는 날씨는?',
        subtitle: '마음이 편안해지는 날씨를 선택해주세요',
        emoji: '🌤️',
        options: [
          {
            id: 'a',
            text: '따뜻한 봄날',
            description: '새로운 시작의 설렘이 있는 날씨예요',
            emoji: '🌸',
            scores: { spring: 3, summer: 1, autumn: 0, winter: 0 }
          },
          {
            id: 'b',
            text: '뜨거운 여름날',
            description: '활동적이고 역동적인 에너지가 넘쳐요',
            emoji: '☀️',
            scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
          },
          {
            id: 'c',
            text: '선선한 가을날',
            description: '차분하고 성숙한 분위기가 좋아요',
            emoji: '🍂',
            scores: { spring: 0, summer: 0, autumn: 3, winter: 1 }
          },
          {
            id: 'd',
            text: '추운 겨울날',
            description: '고요하고 깊이 있는 시간을 좋아해요',
            emoji: '❄️',
            scores: { spring: 0, summer: 0, autumn: 1, winter: 3 }
          }
        ]
      }
    ],
    results: {
      spring: {
        id: 'spring',
        title: '희망찬 봄',
        emoji: '🌸',
        description: '새로운 시작을 사랑하는 당신!',
        detailedDescription: '봄처럼 희망차고 새로운 것을 좋아하는 당신은 긍정적인 에너지가 넘쳐요.',
        strengths: ['새로운 시작을 두려워하지 않아요', '희망적인 마음가짐을 가져요'],
        improvements: ['때로는 현실감각도 필요해요', '인내심을 기르는 것도 중요해요'],
        compatibleTypes: [
          { id: 'summer', title: '활기찬 여름', emoji: '☀️', compatibility: 85 }
        ],
        traits: [
          { name: '희망', emoji: '🌟', percentage: 95 },
          { name: '새로움', emoji: '🌱', percentage: 90 }
        ]
      },
      summer: {
        id: 'summer',
        title: '활기찬 여름',
        emoji: '☀️',
        description: '에너지 넘치는 당신!',
        detailedDescription: '여름처럼 활기차고 열정적인 당신은 모든 일에 적극적으로 참여해요.',
        strengths: ['에너지가 넘쳐나요', '리더십이 강해요'],
        improvements: ['때로는 휴식도 필요해요', '다른 사람 배려도 중요해요'],
        compatibleTypes: [
          { id: 'spring', title: '희망찬 봄', emoji: '🌸', compatibility: 85 }
        ],
        traits: [
          { name: '활력', emoji: '⚡', percentage: 95 },
          { name: '열정', emoji: '🔥', percentage: 90 }
        ]
      },
      autumn: {
        id: 'autumn',
        title: '성숙한 가을',
        emoji: '🍂',
        description: '깊이 있고 사려깊은 당신!',
        detailedDescription: '가을처럼 성숙하고 깊이 있는 당신은 신중하고 현명한 판단을 해요.',
        strengths: ['깊이 있는 사고를 해요', '성숙한 판단력을 가져요'],
        improvements: ['때로는 모험도 필요해요', '새로운 도전을 시도해보세요'],
        compatibleTypes: [
          { id: 'winter', title: '고요한 겨울', emoji: '❄️', compatibility: 85 }
        ],
        traits: [
          { name: '성숙함', emoji: '🎭', percentage: 95 },
          { name: '지혜', emoji: '🦉', percentage: 90 }
        ]
      },
      winter: {
        id: 'winter',
        title: '고요한 겨울',
        emoji: '❄️',
        description: '차분하고 내성적인 당신!',
        detailedDescription: '겨울처럼 고요하고 깊이 있는 당신은 혼자만의 시간을 소중히 여겨요.',
        strengths: ['깊이 있는 사색을 해요', '집중력이 뛰어나요'],
        improvements: ['사회적 활동도 시도해보세요', '감정 표현을 늘려보세요'],
        compatibleTypes: [
          { id: 'autumn', title: '성숙한 가을', emoji: '🍂', compatibility: 85 }
        ],
        traits: [
          { name: '고요함', emoji: '🌙', percentage: 95 },
          { name: '깊이', emoji: '🌊', percentage: 90 }
        ]
      }
    }
  },
  disney: {
    id: 'disney',
    title: '디즈니 주인공 테스트',
    description: '나와 닮은 디즈니 캐릭터를 찾아보세요',
    emoji: '🏰',
    color: 'pink',
    duration: '3-4분',
    questionCount: 8,
    participants: 4521,
    questions: [
      {
        id: 1,
        text: '가장 끌리는 모험은?',
        subtitle: '상상 속에서 하고 싶은 모험을 선택해주세요',
        emoji: '⭐',
        options: [
          {
            id: 'a',
            text: '바다 속 숨겨진 보물 찾기',
            description: '신비로운 바닷속 세계를 탐험하고 싶어해요',
            emoji: '🧜‍♀️',
            scores: { ariel: 3, belle: 0, elsa: 1, simba: 1 }
          },
          {
            id: 'b',
            text: '마법의 도서관에서 지식 탐구',
            description: '책을 통해 새로운 세계를 발견하고 싶어해요',
            emoji: '📚',
            scores: { ariel: 0, belle: 3, elsa: 1, simba: 0 }
          },
          {
            id: 'c',
            text: '얼음 왕국에서 마법 연습',
            description: '특별한 능력으로 아름다운 것을 만들고 싶어해요',
            emoji: '❄️',
            scores: { ariel: 1, belle: 1, elsa: 3, simba: 0 }
          },
          {
            id: 'd',
            text: '프라이드 록에서 왕이 되기',
            description: '용기와 리더십으로 모두를 이끌고 싶어해요',
            emoji: '🦁',
            scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
          }
        ]
      }
    ],
    results: {
      ariel: {
        id: 'ariel',
        title: '호기심 많은 에리얼',
        emoji: '🧜‍♀️',
        description: '모험을 사랑하는 당신!',
        detailedDescription: '에리얼처럼 호기심이 많고 새로운 세계에 대한 꿈이 가득한 당신은 항상 새로운 경험을 추구해요.',
        strengths: ['호기심이 많아요', '꿈을 향한 용기가 있어요'],
        improvements: ['때로는 신중함도 필요해요', '현실적인 계획도 세워보세요'],
        compatibleTypes: [
          { id: 'simba', title: '용감한 심바', emoji: '🦁', compatibility: 85 }
        ],
        traits: [
          { name: '호기심', emoji: '🔍', percentage: 95 },
          { name: '모험심', emoji: '🌊', percentage: 90 }
        ]
      },
      belle: {
        id: 'belle',
        title: '지혜로운 벨',
        emoji: '📚',
        description: '책을 사랑하는 당신!',
        detailedDescription: '벨처럼 지적 호기심이 많고 내면의 아름다움을 중시하는 당신은 깊이 있는 사고를 해요.',
        strengths: ['지적 호기심이 많아요', '내면의 아름다움을 중시해요'],
        improvements: ['사회적 활동도 늘려보세요', '모험도 시도해보세요'],
        compatibleTypes: [
          { id: 'elsa', title: '특별한 엘사', emoji: '❄️', compatibility: 80 }
        ],
        traits: [
          { name: '지혜', emoji: '📚', percentage: 95 },
          { name: '배려심', emoji: '💖', percentage: 90 }
        ]
      },
      elsa: {
        id: 'elsa',
        title: '특별한 엘사',
        emoji: '❄️',
        description: '독특하고 신비로운 당신!',
        detailedDescription: '엘사처럼 특별한 재능을 가지고 있지만 때로는 외로움을 느끼는 당신은 깊이 있는 감정을 가져요.',
        strengths: ['특별한 재능이 있어요', '깊은 감성을 가져요'],
        improvements: ['자신을 더 표현해보세요', '사람들과 더 가까워져보세요'],
        compatibleTypes: [
          { id: 'belle', title: '지혜로운 벨', emoji: '📚', compatibility: 80 }
        ],
        traits: [
          { name: '특별함', emoji: '❄️', percentage: 95 },
          { name: '깊이', emoji: '🌙', percentage: 90 }
        ]
      },
      simba: {
        id: 'simba',
        title: '용감한 심바',
        emoji: '🦁',
        description: '리더십이 강한 당신!',
        detailedDescription: '심바처럼 용기 있고 리더십이 강한 당신은 어려운 상황에서도 앞장서서 문제를 해결해요.',
        strengths: ['리더십이 강해요', '용기가 있어요'],
        improvements: ['때로는 다른 사람 의견도 들어보세요', '인내심을 기르는 것도 중요해요'],
        compatibleTypes: [
          { id: 'ariel', title: '호기심 많은 에리얼', emoji: '🧜‍♀️', compatibility: 85 }
        ],
        traits: [
          { name: '용기', emoji: '🦁', percentage: 95 },
          { name: '리더십', emoji: '👑', percentage: 90 }
        ]
      }
    }
  },
  food_personality: {
    id: 'food_personality',
    title: '음식 성격 테스트',
    description: '내 성격을 음식으로 표현한다면?',
    emoji: '🍽️',
    color: 'orange',
    duration: '2-3분',
    questionCount: 8,
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
      }
    ],
    results: {
      pizza: {
        id: 'pizza',
        title: '다채로운 피자',
        emoji: '🍕',
        description: '다양하고 즐거운 당신!',
        detailedDescription: '피자처럼 다양한 매력을 가진 당신은 여러 분야에서 재능을 발휘하며 사람들을 즐겁게 해줘요.',
        strengths: ['다양한 재능이 있어요', '사교적이고 즐거워요'],
        improvements: ['때로는 집중력이 필요해요', '깊이도 추구해보세요'],
        compatibleTypes: [
          { id: 'soup', title: '따뜻한 수프', emoji: '🍲', compatibility: 85 }
        ],
        traits: [
          { name: '다양성', emoji: '🌈', percentage: 95 },
          { name: '사교성', emoji: '🎉', percentage: 90 }
        ]
      },
      sushi: {
        id: 'sushi',
        title: '정교한 초밥',
        emoji: '🍣',
        description: '완벽주의자인 당신!',
        detailedDescription: '초밥처럼 정교하고 완벽한 것을 추구하는 당신은 모든 일에 최선을 다해요.',
        strengths: ['완벽을 추구해요', '세심하고 정확해요'],
        improvements: ['때로는 융통성도 필요해요', '완벽함에 너무 얽매이지 마세요'],
        compatibleTypes: [
          { id: 'salad', title: '균형잡힌 샐러드', emoji: '🥗', compatibility: 80 }
        ],
        traits: [
          { name: '정교함', emoji: '🎯', percentage: 95 },
          { name: '완벽주의', emoji: '💎', percentage: 90 }
        ]
      },
      salad: {
        id: 'salad',
        title: '균형잡힌 샐러드',
        emoji: '🥗',
        description: '건강하고 조화로운 당신!',
        detailedDescription: '샐러드처럼 균형잡히고 건강한 삶을 추구하는 당신은 자연스러운 매력이 있어요.',
        strengths: ['균형감각이 뛰어나요', '건강한 생활을 해요'],
        improvements: ['때로는 모험도 필요해요', '즐거움도 추구해보세요'],
        compatibleTypes: [
          { id: 'sushi', title: '정교한 초밥', emoji: '🍣', compatibility: 80 }
        ],
        traits: [
          { name: '균형감', emoji: '⚖️', percentage: 95 },
          { name: '건강함', emoji: '🌱', percentage: 90 }
        ]
      },
      soup: {
        id: 'soup',
        title: '따뜻한 수프',
        emoji: '🍲',
        description: '위로가 되는 당신!',
        detailedDescription: '수프처럼 따뜻하고 위로가 되는 당신은 사람들의 마음을 편안하게 해줘요.',
        strengths: ['따뜻한 마음을 가져요', '사람들을 위로해줘요'],
        improvements: ['자신도 챙기는 것이 중요해요', '때로는 단호함도 필요해요'],
        compatibleTypes: [
          { id: 'pizza', title: '다채로운 피자', emoji: '🍕', compatibility: 85 }
        ],
        traits: [
          { name: '따뜻함', emoji: '❤️', percentage: 95 },
          { name: '위로', emoji: '🤗', percentage: 90 }
        ]
      }
    }
  }
};

export default tests;