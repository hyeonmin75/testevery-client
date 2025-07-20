import { TestData } from '../../types/test';

export const petTest: TestData = {
  id: 'pet',
  title: '반려동물 성향 테스트',
  description: '내가 키운다면 어울리는 반려동물은?',
  emoji: '🐾',
  color: 'teal',
  duration: '3-4분',
  questionCount: 10,
  participants: 1567,
  questions: [
    {
      id: 1,
      text: '주말에 집에서 보내는 시간, 당신의 모습은?',
      subtitle: '평소 라이프스타일을 선택해주세요',
      emoji: '🏠',
      options: [
        {
          id: 'a',
          text: '활발한 활동',
          description: '산책하거나 운동을 하며 활동적으로 보냄',
          emoji: '🏃‍♀️',
          scores: { dog: 3, cat: 1, bird: 2, turtle: 0, rabbit: 1, fish: 0, hamster: 1, reptile: 1 }
        },
        {
          id: 'b',
          text: '조용한 휴식',
          description: '책을 읽거나 혼자만의 시간을 즐김',
          emoji: '📚',
          scores: { dog: 0, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '친구들과 수다',
          description: '사람들과 모여서 대화를 나누며 시간을 보냄',
          emoji: '💬',
          scores: { dog: 2, cat: 0, bird: 3, turtle: 0, rabbit: 1, fish: 0, hamster: 2, reptile: 1 }
        },
        {
          id: 'd',
          text: '규칙적인 일상',
          description: '정해진 스케줄에 따라 차분히 시간을 보냄',
          emoji: '⏰',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 3, rabbit: 1, fish: 2, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 2,
      text: '스트레스를 받았을 때 당신의 해소 방법은?',
      subtitle: '가장 효과적인 방법을 선택해주세요',
      emoji: '😌',
      options: [
        {
          id: 'a',
          text: '격렬한 운동',
          description: '몸을 움직여서 스트레스를 해소함',
          emoji: '💪',
          scores: { dog: 3, cat: 0, bird: 1, turtle: 0, rabbit: 0, fish: 0, hamster: 1, reptile: 1 }
        },
        {
          id: 'b',
          text: '혼자만의 시간',
          description: '조용한 곳에서 혼자 시간을 보냄',
          emoji: '🤫',
          scores: { dog: 0, cat: 3, bird: 0, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '누군가와 대화',
          description: '가족이나 친구와 이야기하며 마음을 풀어냄',
          emoji: '🗣️',
          scores: { dog: 2, cat: 1, bird: 3, turtle: 1, rabbit: 2, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '명상이나 수면',
          description: '충분한 휴식을 취하며 마음을 진정시킴',
          emoji: '😴',
          scores: { dog: 0, cat: 2, bird: 0, turtle: 3, rabbit: 1, fish: 2, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 3,
      text: '새로운 환경에서 당신의 적응 방식은?',
      subtitle: '처음 가는 곳에서의 행동을 선택해주세요',
      emoji: '🌍',
      options: [
        {
          id: 'a',
          text: '적극적으로 탐험',
          description: '호기심을 갖고 모든 곳을 둘러봄',
          emoji: '🔍',
          scores: { dog: 3, cat: 1, bird: 2, turtle: 0, rabbit: 0, fish: 0, hamster: 2, reptile: 1 }
        },
        {
          id: 'b',
          text: '신중하게 관찰',
          description: '일단 상황을 파악한 후 천천히 행동함',
          emoji: '👀',
          scores: { dog: 1, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 2, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '다른 사람들과 어울림',
          description: '주변 사람들과 소통하며 적응함',
          emoji: '👥',
          scores: { dog: 2, cat: 0, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '숨어서 적응 시간 기다림',
          description: '조용한 곳에서 충분히 익숙해질 때까지 기다림',
          emoji: '🫥',
          scores: { dog: 0, cat: 2, bird: 0, turtle: 3, rabbit: 3, fish: 3, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 4,
      text: '친구들과의 모임에서 당신의 역할은?',
      subtitle: '평소 모임에서의 모습을 선택해주세요',
      emoji: '🎉',
      options: [
        {
          id: 'a',
          text: '분위기 메이커',
          description: '모두를 즐겁게 해주는 역할',
          emoji: '🎭',
          scores: { dog: 3, cat: 0, bird: 3, turtle: 0, rabbit: 1, fish: 0, hamster: 2, reptile: 1 }
        },
        {
          id: 'b',
          text: '조용한 관찰자',
          description: '말보다는 듣기를 좋아하는 타입',
          emoji: '🤐',
          scores: { dog: 0, cat: 3, bird: 0, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '대화의 중심',
          description: '이야기하기를 좋아하고 소통을 이끄는 역할',
          emoji: '🗨️',
          scores: { dog: 2, cat: 1, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '차분한 조율자',
          description: '갈등을 중재하고 균형을 맞춰주는 역할',
          emoji: '⚖️',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 3, rabbit: 2, fish: 2, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 5,
      text: '선물을 받을 때 가장 기쁜 것은?',
      subtitle: '받고 싶은 선물의 종류를 선택해주세요',
      emoji: '🎁',
      options: [
        {
          id: 'a',
          text: '활동적인 선물',
          description: '스포츠 용품이나 야외 활동 관련 선물',
          emoji: '⚽',
          scores: { dog: 3, cat: 0, bird: 2, turtle: 0, rabbit: 1, fish: 0, hamster: 1, reptile: 1 }
        },
        {
          id: 'b',
          text: '실용적인 선물',
          description: '일상에서 유용하게 쓸 수 있는 실용적인 아이템',
          emoji: '🛠️',
          scores: { dog: 1, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 2, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '즐거운 경험',
          description: '콘서트나 여행 등 특별한 체험',
          emoji: '🎪',
          scores: { dog: 2, cat: 1, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 1 }
        },
        {
          id: 'd',
          text: '귀여운 소품',
          description: '아기자기하고 예쁜 장식품이나 소품',
          emoji: '🧸',
          scores: { dog: 1, cat: 2, bird: 2, turtle: 2, rabbit: 3, fish: 1, hamster: 3, reptile: 0 }
        }
      ]
    },
    {
      id: 6,
      text: '하루 중 가장 좋아하는 시간은?',
      subtitle: '가장 편안하고 활기찬 시간을 선택해주세요',
      emoji: '🕐',
      options: [
        {
          id: 'a',
          text: '활동적인 오전',
          description: '상쾌한 아침에 운동하거나 활동하는 시간',
          emoji: '🌅',
          scores: { dog: 3, cat: 1, bird: 2, turtle: 1, rabbit: 2, fish: 1, hamster: 2, reptile: 1 }
        },
        {
          id: 'b',
          text: '한적한 밤',
          description: '조용하고 평화로운 밤시간',
          emoji: '🌙',
          scores: { dog: 0, cat: 3, bird: 0, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '사람들과 함께하는 저녁',
          description: '가족이나 친구들과 보내는 저녁시간',
          emoji: '🌆',
          scores: { dog: 2, cat: 1, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '여유로운 오후',
          description: '느긋하고 편안한 오후시간',
          emoji: '☀️',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 3, rabbit: 2, fish: 2, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 7,
      text: '새로운 취미를 시작한다면?',
      subtitle: '관심있는 취미 분야를 선택해주세요',
      emoji: '🎨',
      options: [
        {
          id: 'a',
          text: '몸으로 하는 활동',
          description: '댄스, 스포츠, 등산 등 신체 활동',
          emoji: '🏃‍♂️',
          scores: { dog: 3, cat: 0, bird: 2, turtle: 0, rabbit: 1, fish: 0, hamster: 1, reptile: 1 }
        },
        {
          id: 'b',
          text: '조용한 창작 활동',
          description: '그림 그리기, 글쓰기, 수공예 등',
          emoji: '✍️',
          scores: { dog: 0, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 3, hamster: 2, reptile: 2 }
        },
        {
          id: 'c',
          text: '사람들과 함께하는 활동',
          description: '밴드 활동, 동호회, 팀 스포츠 등',
          emoji: '👫',
          scores: { dog: 2, cat: 0, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '독특하고 특별한 활동',
          description: '남들이 잘 하지 않는 특이한 취미',
          emoji: '🔮',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 2, rabbit: 1, fish: 2, hamster: 1, reptile: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '집 안에서 가장 좋아하는 공간은?',
      subtitle: '가장 편안하게 느끼는 공간을 선택해주세요',
      emoji: '🏡',
      options: [
        {
          id: 'a',
          text: '넓은 거실',
          description: '활동할 수 있는 넓고 밝은 공간',
          emoji: '🛋️',
          scores: { dog: 3, cat: 1, bird: 2, turtle: 1, rabbit: 1, fish: 0, hamster: 1, reptile: 1 }
        },
        {
          id: 'b',
          text: '아늑한 침실',
          description: '혼자만의 프라이빗한 공간',
          emoji: '🛏️',
          scores: { dog: 0, cat: 3, bird: 0, turtle: 2, rabbit: 3, fish: 3, hamster: 2, reptile: 2 }
        },
        {
          id: 'c',
          text: '소통할 수 있는 주방',
          description: '가족들과 자연스럽게 만날 수 있는 공간',
          emoji: '🍳',
          scores: { dog: 2, cat: 1, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '조용한 서재',
          description: '차분하고 집중할 수 있는 공간',
          emoji: '📖',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 3, rabbit: 2, fish: 2, hamster: 1, reptile: 2 }
        }
      ]
    },
    {
      id: 9,
      text: '감정 표현 방식을 가장 잘 나타낸 것은?',
      subtitle: '평소 감정을 표현하는 방법을 선택해주세요',
      emoji: '💝',
      options: [
        {
          id: 'a',
          text: '직접적이고 솔직하게',
          description: '기쁘면 기쁘다고, 싫으면 싫다고 표현',
          emoji: '😊',
          scores: { dog: 3, cat: 0, bird: 2, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 1 }
        },
        {
          id: 'b',
          text: '은근하고 섬세하게',
          description: '직접 말하기보다는 행동으로 보여줌',
          emoji: '😌',
          scores: { dog: 1, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '활발하고 표현력 풍부하게',
          description: '온몸으로 감정을 표현하는 타입',
          emoji: '🤗',
          scores: { dog: 2, cat: 0, bird: 3, turtle: 0, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '조심스럽고 신중하게',
          description: '상대방을 배려하며 천천히 마음을 열어줌',
          emoji: '🥺',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 3, rabbit: 3, fish: 2, hamster: 2, reptile: 1 }
        }
      ]
    },
    {
      id: 10,
      text: '가장 중요하게 생각하는 가치는?',
      subtitle: '인생에서 가장 소중한 것을 선택해주세요',
      emoji: '💎',
      options: [
        {
          id: 'a',
          text: '충성과 신뢰',
          description: '진실한 관계와 변하지 않는 마음',
          emoji: '🤝',
          scores: { dog: 3, cat: 1, bird: 2, turtle: 2, rabbit: 2, fish: 1, hamster: 2, reptile: 1 }
        },
        {
          id: 'b',
          text: '자유와 독립',
          description: '누구에게도 얽매이지 않는 자유로운 삶',
          emoji: '🕊️',
          scores: { dog: 1, cat: 3, bird: 1, turtle: 2, rabbit: 2, fish: 3, hamster: 1, reptile: 2 }
        },
        {
          id: 'c',
          text: '소통과 화합',
          description: '사람들과의 즐거운 교감과 소통',
          emoji: '💞',
          scores: { dog: 2, cat: 0, bird: 3, turtle: 1, rabbit: 1, fish: 0, hamster: 2, reptile: 0 }
        },
        {
          id: 'd',
          text: '개성과 특별함',
          description: '남들과 다른 나만의 독특함',
          emoji: '🌟',
          scores: { dog: 1, cat: 2, bird: 1, turtle: 2, rabbit: 2, fish: 2, hamster: 2, reptile: 3 }
        }
      ]
    }
  ],
  results: {
    dog: {
      id: 'dog',
      title: '활발한 강아지형',
      emoji: '🐶',
      description: '충성스럽고 에너지 넘치는 당신! 교감과 소통을 중요하게 생각하는 따뜻한 성격이에요.',
      detailedDescription: '당신은 사람들과의 관계를 무엇보다 소중히 여기고, 충성심이 강한 성격을 가지고 있어요. 활동적이고 에너지가 넘치며, 새로운 사람들과 만나는 것을 좋아합니다. 감정 표현이 솔직하고 직접적이며, 사랑하는 사람들을 위해서라면 무엇이든 할 수 있는 따뜻한 마음의 소유자예요.',
      strengths: [
        '충성심이 강하고 신뢰할 수 있음',
        '활발하고 긍정적인 에너지',
        '사교적이고 친화력이 뛰어남',
        '솔직하고 진실한 감정 표현'
      ],
      improvements: [
        '때로는 혼자만의 시간도 필요해요',
        '상대방의 개인 공간을 존중하기',
        '감정 조절 능력 기르기',
        '계획성 있는 행동하기'
      ],
      compatibleTypes: [
        { id: 'bird', title: '수다쟁이 앵무새형', emoji: '🐦', compatibility: 85 },
        { id: 'hamster', title: '귀여운 햄스터형', emoji: '🐹', compatibility: 80 },
        { id: 'rabbit', title: '감성적인 토끼형', emoji: '🐇', compatibility: 75 }
      ],
      traits: [
        { name: '사교성', emoji: '👥', percentage: 90 },
        { name: '충성심', emoji: '🤝', percentage: 95 },
        { name: '활동성', emoji: '⚡', percentage: 85 },
        { name: '감정표현', emoji: '😊', percentage: 90 }
      ]
    },
    cat: {
      id: 'cat',
      title: '독립적인 고양이형',
      emoji: '🐱',
      description: '자유롭고 독립적인 당신! 섬세한 감각과 우아한 매력을 가진 신비로운 성격이에요.',
      detailedDescription: '당신은 독립적이고 자유로운 영혼을 가지고 있어요. 혼자만의 시간을 소중히 여기며, 깊이 있는 사고를 좋아합니다. 섬세한 감각과 예술적 취향을 가지고 있으며, 자신만의 독특한 세계관을 구축하고 있어요. 겉으로는 차갑게 보일 수 있지만, 한번 마음을 열면 깊고 진실한 애정을 보여줍니다.',
      strengths: [
        '독립적이고 자립심이 강함',
        '섬세하고 예술적인 감각',
        '깊이 있는 사고력',
        '우아하고 신비로운 매력'
      ],
      improvements: [
        '때로는 다른 사람들과의 소통도 필요해요',
        '감정 표현을 조금 더 적극적으로',
        '새로운 환경에 빨리 적응하기',
        '팀워크 능력 기르기'
      ],
      compatibleTypes: [
        { id: 'fish', title: '조용한 물고기형', emoji: '🐠', compatibility: 85 },
        { id: 'turtle', title: '차분한 거북이형', emoji: '🐢', compatibility: 80 },
        { id: 'reptile', title: '개성 강한 파충류형', emoji: '🐍', compatibility: 75 }
      ],
      traits: [
        { name: '독립성', emoji: '🕊️', percentage: 95 },
        { name: '예술성', emoji: '🎨', percentage: 85 },
        { name: '신중함', emoji: '🤔', percentage: 90 },
        { name: '신비로움', emoji: '✨', percentage: 88 }
      ]
    },
    bird: {
      id: 'bird',
      title: '수다쟁이 앵무새형',
      emoji: '🐦',
      description: '명랑하고 수다스러운 당신! 사람들과 어울리기를 좋아하고 분위기를 밝게 만드는 매력이 있어요.',
      detailedDescription: '당신은 타고난 커뮤니케이터예요. 사람들과 대화하는 것을 좋아하고, 어떤 상황에서든 분위기를 밝게 만드는 능력이 있습니다. 호기심이 많고 새로운 것을 배우기 좋아하며, 다양한 사람들과 폭넓은 관계를 맺는 것을 즐깁니다. 표현력이 뛰어나고 감정이 풍부해서 주변 사람들에게 즐거움을 선사해요.',
      strengths: [
        '뛰어난 커뮤니케이션 능력',
        '밝고 긍정적인 성격',
        '높은 호기심과 학습 능력',
        '풍부한 표현력과 감정'
      ],
      improvements: [
        '때로는 조용히 듣기도 필요해요',
        '깊이 있는 관계 맺기',
        '집중력 향상하기',
        '상대방의 말을 끝까지 들어주기'
      ],
      compatibleTypes: [
        { id: 'dog', title: '활발한 강아지형', emoji: '🐶', compatibility: 85 },
        { id: 'hamster', title: '귀여운 햄스터형', emoji: '🐹', compatibility: 80 },
        { id: 'rabbit', title: '감성적인 토끼형', emoji: '🐇', compatibility: 75 }
      ],
      traits: [
        { name: '소통능력', emoji: '💬', percentage: 95 },
        { name: '사교성', emoji: '👥', percentage: 90 },
        { name: '호기심', emoji: '🔍', percentage: 88 },
        { name: '표현력', emoji: '🎭', percentage: 92 }
      ]
    },
    turtle: {
      id: 'turtle',
      title: '차분한 거북이형',
      emoji: '🐢',
      description: '느긋하고 신중한 당신! 안정감 있고 규칙적인 일상을 좋아하는 평화로운 성격이에요.',
      detailedDescription: '당신은 느긋하고 차분한 성격을 가지고 있어요. 급하게 서두르기보다는 신중하게 생각하고 행동하는 것을 선호합니다. 안정적이고 규칙적인 생활을 좋아하며, 평화로운 환경에서 가장 편안함을 느껴요. 지혜롭고 인내심이 강하며, 다른 사람들에게 든든한 지지자가 되어줍니다.',
      strengths: [
        '높은 인내심과 끈기',
        '신중하고 현명한 판단력',
        '안정감 있는 성격',
        '규칙적이고 계획적인 생활'
      ],
      improvements: [
        '때로는 좀 더 적극적인 행동이 필요해요',
        '새로운 도전에 열린 마음 갖기',
        '변화에 대한 적응력 기르기',
        '빠른 결정이 필요한 상황에 대비하기'
      ],
      compatibleTypes: [
        { id: 'cat', title: '독립적인 고양이형', emoji: '🐱', compatibility: 80 },
        { id: 'fish', title: '조용한 물고기형', emoji: '🐠', compatibility: 85 },
        { id: 'reptile', title: '개성 강한 파충류형', emoji: '🐍', compatibility: 75 }
      ],
      traits: [
        { name: '인내심', emoji: '⏳', percentage: 95 },
        { name: '안정감', emoji: '🛡️', percentage: 90 },
        { name: '신중함', emoji: '🤔', percentage: 92 },
        { name: '지혜', emoji: '🧠', percentage: 88 }
      ]
    },
    rabbit: {
      id: 'rabbit',
      title: '감성적인 토끼형',
      emoji: '🐇',
      description: '따뜻하고 감성적인 당신! 겁은 많지만 사랑스럽고 배려심 깊은 마음을 가지고 있어요.',
      detailedDescription: '당신은 따뜻하고 감성이 풍부한 성격을 가지고 있어요. 다른 사람들의 마음을 잘 헤아리고, 배려심이 깊습니다. 새로운 상황에서는 조금 조심스럽지만, 한번 익숙해지면 사랑스러운 매력을 발산해요. 감정이 섬세하고 예술적 감각이 뛰어나며, 아름다운 것들을 좋아합니다.',
      strengths: [
        '깊은 감성과 공감 능력',
        '뛰어난 배려심',
        '예술적이고 섬세한 감각',
        '따뜻하고 사랑스러운 매력'
      ],
      improvements: [
        '자신감을 좀 더 기르기',
        '새로운 도전에 용기 내기',
        '자신의 의견을 적극적으로 표현하기',
        '스트레스 관리 능력 향상하기'
      ],
      compatibleTypes: [
        { id: 'dog', title: '활발한 강아지형', emoji: '🐶', compatibility: 75 },
        { id: 'hamster', title: '귀여운 햄스터형', emoji: '🐹', compatibility: 85 },
        { id: 'cat', title: '독립적인 고양이형', emoji: '🐱', compatibility: 70 }
      ],
      traits: [
        { name: '감성', emoji: '💝', percentage: 95 },
        { name: '배려심', emoji: '🤗', percentage: 90 },
        { name: '예술성', emoji: '🎨', percentage: 85 },
        { name: '섬세함', emoji: '🌸', percentage: 92 }
      ]
    },
    fish: {
      id: 'fish',
      title: '조용한 물고기형',
      emoji: '🐠',
      description: '평온하고 사색적인 당신! 혼자만의 시간을 소중히 여기고 조용한 환경을 선호해요.',
      detailedDescription: '당신은 평온하고 사색적인 성격을 가지고 있어요. 혼자만의 시간을 매우 소중히 여기며, 조용하고 평화로운 환경에서 가장 편안함을 느낍니다. 깊이 있는 사고를 좋아하고, 내면의 세계가 풍부해요. 스트레스를 받지 않는 환경에서 자신만의 능력을 최대한 발휘할 수 있는 타입입니다.',
      strengths: [
        '깊이 있는 사고력',
        '평온하고 안정된 성격',
        '집중력이 뛰어남',
        '스트레스에 잘 대처함'
      ],
      improvements: [
        '사회적 활동에도 참여해보기',
        '다른 사람들과의 소통 늘리기',
        '새로운 환경에 적응하는 연습하기',
        '자신의 생각을 표현하는 능력 기르기'
      ],
      compatibleTypes: [
        { id: 'cat', title: '독립적인 고양이형', emoji: '🐱', compatibility: 85 },
        { id: 'turtle', title: '차분한 거북이형', emoji: '🐢', compatibility: 85 },
        { id: 'reptile', title: '개성 강한 파충류형', emoji: '🐍', compatibility: 70 }
      ],
      traits: [
        { name: '평온함', emoji: '☮️', percentage: 95 },
        { name: '사색력', emoji: '🧘', percentage: 90 },
        { name: '집중력', emoji: '🎯', percentage: 88 },
        { name: '내성', emoji: '🏠', percentage: 92 }
      ]
    },
    hamster: {
      id: 'hamster',
      title: '귀여운 햄스터형',
      emoji: '🐹',
      description: '사랑스럽고 활발한 당신! 작은 것에도 기쁨을 느끼며 귀여운 것을 좋아하는 순수한 성격이에요.',
      detailedDescription: '당신은 순수하고 사랑스러운 성격을 가지고 있어요. 작은 것에서도 큰 기쁨을 찾을 수 있고, 일상의 소소한 행복을 소중히 여깁니다. 귀여운 것들을 좋아하고, 사람들에게 즐거움을 선사하는 능력이 있어요. 에너지가 넘치지만 사랑스러운 방식으로 표현하며, 주변 사람들의 마음을 따뜻하게 만들어줍니다.',
      strengths: [
        '순수하고 긍정적인 마음',
        '작은 행복을 찾는 능력',
        '사랑스럽고 매력적인 성격',
        '사람들에게 즐거움을 주는 능력'
      ],
      improvements: [
        '좀 더 깊이 있는 관계 맺기',
        '진지한 상황에서의 집중력 기르기',
        '계획성 있는 행동하기',
        '감정 조절 능력 향상하기'
      ],
      compatibleTypes: [
        { id: 'rabbit', title: '감성적인 토끼형', emoji: '🐇', compatibility: 85 },
        { id: 'dog', title: '활발한 강아지형', emoji: '🐶', compatibility: 80 },
        { id: 'bird', title: '수다쟁이 앵무새형', emoji: '🐦', compatibility: 80 }
      ],
      traits: [
        { name: '순수함', emoji: '🌟', percentage: 95 },
        { name: '사랑스러움', emoji: '💕', percentage: 90 },
        { name: '활발함', emoji: '⚡', percentage: 85 },
        { name: '낙천성', emoji: '😊', percentage: 88 }
      ]
    },
    reptile: {
      id: 'reptile',
      title: '개성 강한 파충류형',
      emoji: '🐍',
      description: '독특하고 개성적인 당신! 남들과 다른 길을 걷는 것을 두려워하지 않는 특별한 성격이에요.',
      detailedDescription: '당신은 독특하고 개성이 강한 성격을 가지고 있어요. 남들이 선택하지 않는 길을 걷는 것을 두려워하지 않으며, 자신만의 독특한 세계관을 가지고 있습니다. 신비롭고 카리스마가 있으며, 깊이 있는 사고를 좋아해요. 대중적이지 않을 수 있지만 확고한 자신만의 철학을 가지고 있는 특별한 사람입니다.',
      strengths: [
        '강한 개성과 독창성',
        '독립적이고 주관이 뚜렷함',
        '신비롭고 카리스마 있는 매력',
        '깊이 있는 사고와 철학'
      ],
      improvements: [
        '다른 사람들과의 소통 늘리기',
        '때로는 대중적인 것도 수용하기',
        '팀워크 능력 기르기',
        '감정 표현을 좀 더 적극적으로'
      ],
      compatibleTypes: [
        { id: 'cat', title: '독립적인 고양이형', emoji: '🐱', compatibility: 75 },
        { id: 'turtle', title: '차분한 거북이형', emoji: '🐢', compatibility: 75 },
        { id: 'fish', title: '조용한 물고기형', emoji: '🐠', compatibility: 70 }
      ],
      traits: [
        { name: '개성', emoji: '🌟', percentage: 95 },
        { name: '독창성', emoji: '🎨', percentage: 90 },
        { name: '신비로움', emoji: '🔮', percentage: 88 },
        { name: '독립성', emoji: '🕊️', percentage: 85 }
      ]
    }
  }
};