import { TestData } from '../../types/test';

export const healingStyleTest: TestData = {
  id: 'healing_style',
  title: '나에게 맞는 힐링 스타일은?',
  description: '당신만의 특별한 힐링 방법을 찾아보세요',
  emoji: '🌿',
  color: 'green',
  duration: '3-4분',
  questionCount: 9,
  participants: 698,
  questions: [
    {
      id: 1,
      text: '스트레스가 쌓였을 때 가장 먼저 하고 싶은 일은?',
      subtitle: '스트레스 해소 방식',
      emoji: '😰',
      options: [
        {
          id: 'nature',
          text: '공원이나 바닷가로 나가기',
          description: '자연 속에서 휴식',
          emoji: '🌳',
          scores: { nature: 3, alone: 0, social: 0, adventure: 1, art: 0, mindful: 0 }
        },
        {
          id: 'alone',
          text: '방에서 혼자 조용히 쉬기',
          description: '개인적인 시간',
          emoji: '🏠',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 1, mindful: 1 }
        },
        {
          id: 'social',
          text: '친구들과 만나서 수다떨기',
          description: '사회적 소통',
          emoji: '☕',
          scores: { nature: 0, alone: 0, social: 3, adventure: 1, art: 0, mindful: 0 }
        },
        {
          id: 'adventure',
          text: '새로운 곳으로 떠나기',
          description: '환경 변화',
          emoji: '🚗',
          scores: { nature: 1, alone: 0, social: 0, adventure: 3, art: 0, mindful: 0 }
        }
      ]
    },
    {
      id: 2,
      text: '주말에 가장 이상적인 하루는?',
      subtitle: '휴식의 형태',
      emoji: '🌅',
      options: [
        {
          id: 'art',
          text: '좋아하는 음악 들으며 그림 그리기',
          description: '예술적 활동',
          emoji: '🎨',
          scores: { nature: 0, alone: 2, social: 0, adventure: 0, art: 3, mindful: 1 }
        },
        {
          id: 'nature',
          text: '산책하며 자연 감상하기',
          description: '자연과의 교감',
          emoji: '🚶',
          scores: { nature: 3, alone: 1, social: 0, adventure: 1, art: 0, mindful: 1 }
        },
        {
          id: 'social',
          text: '가족이나 친구들과 함께 시간 보내기',
          description: '인간관계 중심',
          emoji: '👨‍👩‍👧‍👦',
          scores: { nature: 0, alone: 0, social: 3, adventure: 0, art: 0, mindful: 0 }
        },
        {
          id: 'mindful',
          text: '명상이나 요가로 마음 정리하기',
          description: '내면 집중',
          emoji: '🧘‍♀️',
          scores: { nature: 1, alone: 2, social: 0, adventure: 0, art: 0, mindful: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '마음이 복잡할 때 가장 도움이 되는 것은?',
      subtitle: '마음의 정리 방법',
      emoji: '💭',
      options: [
        {
          id: 'alone',
          text: '혼자서 깊게 생각해보기',
          description: '개인적 성찰',
          emoji: '🤔',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 1, mindful: 2 }
        },
        {
          id: 'social',
          text: '신뢰하는 사람과 대화하기',
          description: '소통을 통한 해결',
          emoji: '💬',
          scores: { nature: 0, alone: 0, social: 3, adventure: 0, art: 0, mindful: 0 }
        },
        {
          id: 'art',
          text: '감동적인 영화나 음악 감상',
          description: '감성적 치유',
          emoji: '🎬',
          scores: { nature: 0, alone: 1, social: 0, adventure: 0, art: 3, mindful: 0 }
        },
        {
          id: 'nature',
          text: '자연 속에서 바람 맞으며 산책',
          description: '자연을 통한 정화',
          emoji: '🌬️',
          scores: { nature: 3, alone: 1, social: 0, adventure: 0, art: 0, mindful: 1 }
        }
      ]
    },
    {
      id: 4,
      text: '피곤할 때 가장 회복이 되는 활동은?',
      subtitle: '에너지 충전 방법',
      emoji: '🔋',
      options: [
        {
          id: 'alone',
          text: '침대에서 아무것도 안 하기',
          description: '완전한 휴식',
          emoji: '🛏️',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 0, mindful: 1 }
        },
        {
          id: 'adventure',
          text: '새로운 카페나 맛집 탐방',
          description: '새로운 경험',
          emoji: '🍰',
          scores: { nature: 0, alone: 0, social: 1, adventure: 3, art: 0, mindful: 0 }
        },
        {
          id: 'nature',
          text: '햇볕 쬐며 공원에서 낮잠',
          description: '자연 속 휴식',
          emoji: '☀️',
          scores: { nature: 3, alone: 1, social: 0, adventure: 0, art: 0, mindful: 0 }
        },
        {
          id: 'social',
          text: '사랑하는 사람들과 시간 보내기',
          description: '정서적 충전',
          emoji: '💕',
          scores: { nature: 0, alone: 0, social: 3, adventure: 0, art: 0, mindful: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '힘든 일이 있을 때 위로받는 방법은?',
      subtitle: '위로의 형태',
      emoji: '🤗',
      options: [
        {
          id: 'social',
          text: '따뜻한 포옹과 격려의 말',
          description: '물리적 위로',
          emoji: '🫂',
          scores: { nature: 0, alone: 0, social: 3, adventure: 0, art: 0, mindful: 0 }
        },
        {
          id: 'art',
          text: '슬픈 노래 들으며 울기',
          description: '감정적 카타르시스',
          emoji: '😢',
          scores: { nature: 0, alone: 2, social: 0, adventure: 0, art: 3, mindful: 0 }
        },
        {
          id: 'mindful',
          text: '일기 쓰며 마음 정리하기',
          description: '내면 정리',
          emoji: '📔',
          scores: { nature: 0, alone: 2, social: 0, adventure: 0, art: 1, mindful: 3 }
        },
        {
          id: 'nature',
          text: '바다나 강가에서 멍 때리기',
          description: '자연과의 교감',
          emoji: '🌊',
          scores: { nature: 3, alone: 1, social: 0, adventure: 0, art: 0, mindful: 1 }
        }
      ]
    },
    {
      id: 6,
      text: '가장 행복감을 느끼는 순간은?',
      subtitle: '행복의 순간',
      emoji: '😊',
      options: [
        {
          id: 'adventure',
          text: '새로운 여행지에서 멋진 풍경을 볼 때',
          description: '모험과 발견',
          emoji: '🏔️',
          scores: { nature: 2, alone: 0, social: 0, adventure: 3, art: 1, mindful: 0 }
        },
        {
          id: 'social',
          text: '소중한 사람들과 웃으며 대화할 때',
          description: '인간관계의 따뜻함',
          emoji: '😂',
          scores: { nature: 0, alone: 0, social: 3, adventure: 0, art: 0, mindful: 0 }
        },
        {
          id: 'art',
          text: '좋아하는 예술 작품을 감상할 때',
          description: '예술적 감동',
          emoji: '🖼️',
          scores: { nature: 0, alone: 1, social: 0, adventure: 0, art: 3, mindful: 0 }
        },
        {
          id: 'mindful',
          text: '마음이 평온해지는 순간',
          description: '내적 평화',
          emoji: '🕊️',
          scores: { nature: 1, alone: 1, social: 0, adventure: 0, art: 0, mindful: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '집중력이 떨어질 때 어떻게 회복하나요?',
      subtitle: '집중력 회복 방법',
      emoji: '🎯',
      options: [
        {
          id: 'nature',
          text: '창문을 열고 신선한 공기 마시기',
          description: '자연의 기운',
          emoji: '🪟',
          scores: { nature: 3, alone: 1, social: 0, adventure: 0, art: 0, mindful: 1 }
        },
        {
          id: 'alone',
          text: '조용한 곳에서 잠깐 눈 감기',
          description: '고요한 휴식',
          emoji: '👁️',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 0, mindful: 2 }
        },
        {
          id: 'art',
          text: '좋아하는 음악으로 기분 전환',
          description: '감각적 자극',
          emoji: '🎵',
          scores: { nature: 0, alone: 1, social: 0, adventure: 0, art: 3, mindful: 0 }
        },
        {
          id: 'mindful',
          text: '깊게 호흡하며 마음 가라앉히기',
          description: '의식적 조절',
          emoji: '💨',
          scores: { nature: 1, alone: 1, social: 0, adventure: 0, art: 0, mindful: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '기분이 우울할 때 가장 효과적인 방법은?',
      subtitle: '우울감 극복 방법',
      emoji: '☁️',
      options: [
        {
          id: 'social',
          text: '친구들과 만나서 재미있는 이야기하기',
          description: '사회적 지지',
          emoji: '🎉',
          scores: { nature: 0, alone: 0, social: 3, adventure: 1, art: 0, mindful: 0 }
        },
        {
          id: 'adventure',
          text: '평소 안 가본 곳으로 드라이브',
          description: '환경 변화',
          emoji: '🛣️',
          scores: { nature: 1, alone: 0, social: 0, adventure: 3, art: 0, mindful: 0 }
        },
        {
          id: 'art',
          text: '감동적인 드라마나 책 보기',
          description: '감정적 몰입',
          emoji: '📚',
          scores: { nature: 0, alone: 2, social: 0, adventure: 0, art: 3, mindful: 0 }
        },
        {
          id: 'alone',
          text: '혼자서 좋아하는 취미 활동하기',
          description: '개인적 즐거움',
          emoji: '🎮',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 1, mindful: 0 }
        }
      ]
    },
    {
      id: 9,
      text: '완벽한 휴가라고 생각하는 것은?',
      subtitle: '이상적인 휴가',
      emoji: '🏖️',
      options: [
        {
          id: 'nature',
          text: '아름다운 자연 속에서 캠핑',
          description: '자연과의 조화',
          emoji: '⛺',
          scores: { nature: 3, alone: 1, social: 0, adventure: 2, art: 0, mindful: 1 }
        },
        {
          id: 'adventure',
          text: '새로운 나라에서 문화 체험',
          description: '모험과 탐험',
          emoji: '🗺️',
          scores: { nature: 0, alone: 0, social: 1, adventure: 3, art: 1, mindful: 0 }
        },
        {
          id: 'alone',
          text: '호텔에서 아무 계획 없이 쉬기',
          description: '완전한 자유',
          emoji: '🏨',
          scores: { nature: 0, alone: 3, social: 0, adventure: 0, art: 1, mindful: 2 }
        },
        {
          id: 'mindful',
          text: '조용한 템플스테이나 요가 리트리트',
          description: '영적 충전',
          emoji: '🛕',
          scores: { nature: 1, alone: 2, social: 0, adventure: 0, art: 0, mindful: 3 }
        }
      ]
    }
  ],
  results: {
    nature: {
      id: 'nature',
      title: '🌿 자연형',
      emoji: '🌿',
      description: '자연과 함께할 때 진정한 평화를 찾는 타입',
      detailedDescription: '당신은 자연의 품에서 가장 깊은 힐링을 경험하는 자연형입니다. 바다의 파도 소리, 숲의 새소리, 따뜻한 햇살과 시원한 바람이 당신의 마음을 치유해줍니다. 도시의 소음과 스트레스에서 벗어나 자연 속에서 진정한 나를 찾고 에너지를 충전하는 것을 선호합니다.',
      strengths: [
        '자연을 통한 빠른 스트레스 해소',
        '환경 변화에 민감한 직감',
        '건강한 라이프스타일 추구',
        '깊은 내적 평화 추구 능력'
      ],
      improvements: [
        '도시 생활에서도 적응할 수 있는 방법을 찾아보세요',
        '실내에서도 자연을 느낄 수 있는 공간을 만들어보세요',
        '날씨에 상관없는 힐링 방법도 준비해두세요',
        '자연 보호에도 관심을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'mindful', title: '마음집중형', emoji: '🧘', compatibility: 85 },
        { id: 'adventure', title: '모험형', emoji: '✈️', compatibility: 80 },
        { id: 'alone', title: '혼자형', emoji: '🎧', compatibility: 75 }
      ],
      traits: [
        { name: '자연친화', emoji: '🌱', percentage: 96 },
        { name: '평온함', emoji: '🕊️', percentage: 92 },
        { name: '직감력', emoji: '💫', percentage: 88 },
        { name: '순수함', emoji: '💎', percentage: 90 }
      ]
    },
    alone: {
      id: 'alone',
      title: '🎧 혼자형',
      emoji: '🎧',
      description: '혼자만의 공간에서 진정한 쉼을 얻는 타입',
      detailedDescription: '당신은 혼자만의 시간과 공간에서 가장 효과적으로 힐링하는 혼자형입니다. 이어폰을 끼고 좋아하는 음악을 듣거나, 조용한 공간에서 독서를 하거나, 아무도 방해하지 않는 곳에서 자신만의 취미 활동을 할 때 진정한 평안을 느낍니다.',
      strengths: [
        '독립적이고 자기 주도적인 성격',
        '깊이 있는 사고와 성찰 능력',
        '집중력과 몰입 능력이 뛰어남',
        '자기 자신과의 건강한 관계'
      ],
      improvements: [
        '때로는 다른 사람들과의 소통도 필요해요',
        '고립되지 않도록 주의하세요',
        '사회적 관계도 소중히 여겨보세요',
        '혼자만의 시간과 사회적 시간의 균형을 맞춰보세요'
      ],
      compatibleTypes: [
        { id: 'mindful', title: '마음집중형', emoji: '🧘', compatibility: 88 },
        { id: 'art', title: '예술형', emoji: '🎨', compatibility: 82 },
        { id: 'nature', title: '자연형', emoji: '🌿', compatibility: 75 }
      ],
      traits: [
        { name: '독립성', emoji: '🦅', percentage: 95 },
        { name: '집중력', emoji: '🎯', percentage: 93 },
        { name: '성찰력', emoji: '🔍', percentage: 90 },
        { name: '자율성', emoji: '🗝️', percentage: 94 }
      ]
    },
    social: {
      id: 'social',
      title: '🧑‍🤝‍🧑 사람형',
      emoji: '🧑‍🤝‍🧑',
      description: '사람들과 함께하며 위로받는 따뜻한 타입',
      detailedDescription: '당신은 사람들과의 따뜻한 관계 속에서 가장 큰 위로와 힐링을 받는 사람형입니다. 가족, 친구, 연인 등 소중한 사람들과 함께 시간을 보내고, 서로의 이야기를 나누며, 따뜻한 관심과 사랑을 주고받을 때 마음의 평안을 찾습니다.',
      strengths: [
        '뛰어난 공감 능력과 소통 능력',
        '따뜻하고 배려심 많은 성격',
        '사회적 관계에서 에너지를 얻는 능력',
        '다른 사람들에게 위로를 주는 재능'
      ],
      improvements: [
        '혼자만의 시간도 필요하다는 걸 기억하세요',
        '다른 사람에게만 의존하지 말고 자립심도 기워보세요',
        '경계 설정도 중요해요',
        '자기 자신도 소중히 여기세요'
      ],
      compatibleTypes: [
        { id: 'adventure', title: '모험형', emoji: '✈️', compatibility: 85 },
        { id: 'art', title: '예술형', emoji: '🎨', compatibility: 78 },
        { id: 'nature', title: '자연형', emoji: '🌿', compatibility: 72 }
      ],
      traits: [
        { name: '소통력', emoji: '💬', percentage: 96 },
        { name: '공감능력', emoji: '💕', percentage: 94 },
        { name: '친화력', emoji: '🤝', percentage: 95 },
        { name: '배려심', emoji: '🫶', percentage: 92 }
      ]
    },
    adventure: {
      id: 'adventure',
      title: '✈️ 모험형',
      emoji: '✈️',
      description: '새로운 도전과 미지의 공간에서 에너지를 얻는 스타일',
      detailedDescription: '당신은 새로운 환경과 도전을 통해 힐링하는 모험형입니다. 여행, 새로운 장소 탐험, 평소 해보지 않았던 활동 등을 통해 일상의 스트레스를 날려버리고 새로운 에너지를 충전합니다. 변화와 자극을 통해 자신을 재발견하고 성장하는 것을 즐깁니다.',
      strengths: [
        '변화에 대한 적응력과 개방성',
        '새로운 경험에 대한 열정',
        '도전 정신과 용기',
        '창의적이고 유연한 사고'
      ],
      improvements: [
        '때로는 안정감도 필요해요',
        '계획성 있는 모험을 해보세요',
        '무리한 도전은 피하세요',
        '일상의 소소한 즐거움도 찾아보세요'
      ],
      compatibleTypes: [
        { id: 'social', title: '사람형', emoji: '🧑‍🤝‍🧑', compatibility: 85 },
        { id: 'nature', title: '자연형', emoji: '🌿', compatibility: 80 },
        { id: 'art', title: '예술형', emoji: '🎨', compatibility: 75 }
      ],
      traits: [
        { name: '모험심', emoji: '🚀', percentage: 96 },
        { name: '적응력', emoji: '🔄', percentage: 92 },
        { name: '호기심', emoji: '🔍', percentage: 90 },
        { name: '활동성', emoji: '⚡', percentage: 94 }
      ]
    },
    art: {
      id: 'art',
      title: '🎨 예술형',
      emoji: '🎨',
      description: '감성적인 콘텐츠를 통해 치유받는 감각적 타입',
      detailedDescription: '당신은 예술과 감성적 콘텐츠를 통해 깊은 힐링을 경험하는 예술형입니다. 아름다운 음악, 감동적인 영화, 그림이나 사진 같은 시각 예술, 문학 작품 등을 통해 마음의 위로를 받고 영감을 얻습니다. 예술적 감수성이 뛰어나고 감정적 카타르시스를 중요하게 여깁니다.',
      strengths: [
        '뛰어난 예술적 감수성과 미적 안목',
        '감정 표현과 공감 능력',
        '창의적이고 상상력이 풍부함',
        '깊이 있는 감정적 경험 추구'
      ],
      improvements: [
        '현실적인 문제 해결 능력도 기워보세요',
        '감정에만 의존하지 말고 논리적 사고도 해보세요',
        '실용적인 측면도 고려해보세요',
        '균형 잡힌 관점을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'alone', title: '혼자형', emoji: '🎧', compatibility: 82 },
        { id: 'social', title: '사람형', emoji: '🧑‍🤝‍🧑', compatibility: 78 },
        { id: 'adventure', title: '모험형', emoji: '✈️', compatibility: 75 }
      ],
      traits: [
        { name: '감성지능', emoji: '💕', percentage: 96 },
        { name: '창의력', emoji: '💡', percentage: 94 },
        { name: '미적감각', emoji: '🎨', percentage: 95 },
        { name: '표현력', emoji: '✨', percentage: 90 }
      ]
    },
    mindful: {
      id: 'mindful',
      title: '🧘 마음집중형',
      emoji: '🧘',
      description: '내면에 집중하며 평온을 찾는 명상적 타입',
      detailedDescription: '당신은 내면의 평화와 마음의 안정을 통해 힐링하는 마음집중형입니다. 명상, 요가, 깊은 호흡, 정리정돈 등을 통해 마음을 가라앉히고 현재 순간에 집중합니다. 정신적 웰빙을 중시하며 의식적인 자기 관리를 통해 균형 잡힌 삶을 추구합니다.',
      strengths: [
        '높은 자기 인식과 성찰 능력',
        '감정 조절과 마음 관리 능력',
        '현재에 집중하는 마인드풀니스',
        '내적 평화 추구와 정신적 성숙'
      ],
      improvements: [
        '때로는 즉흥성과 재미도 필요해요',
        '과도한 완벽주의는 피하세요',
        '사회적 관계도 소중히 여기세요',
        '유연성을 기르는 것도 중요해요'
      ],
      compatibleTypes: [
        { id: 'nature', title: '자연형', emoji: '🌿', compatibility: 85 },
        { id: 'alone', title: '혼자형', emoji: '🎧', compatibility: 88 },
        { id: 'art', title: '예술형', emoji: '🎨', compatibility: 75 }
      ],
      traits: [
        { name: '명상력', emoji: '🧘', percentage: 96 },
        { name: '평온함', emoji: '🕊️', percentage: 94 },
        { name: '자기인식', emoji: '🔍', percentage: 92 },
        { name: '균형감', emoji: '⚖️', percentage: 90 }
      ]
    }
  }
};