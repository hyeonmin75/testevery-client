import { TestData } from '../../types/test';

export const seasonTest: TestData = {
  id: 'season',
  title: '계절 성격 테스트',
  description: '나와 닮은 계절을 찾아보세요',
  emoji: '🌸',
  color: 'green',
  duration: '2-3분',
  questionCount: 10,
  participants: 523,
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
    },
    {
      id: 2,
      text: '가장 마음에 드는 색상 조합은?',
      subtitle: '직감적으로 끌리는 색깔을 선택해주세요',
      emoji: '🎨',
      options: [
        {
          id: 'a',
          text: '연둥과 분홍의 파스텔 조합',
          description: '부드럽고 희망찬 느낌을 좋아해요',
          emoji: '🌷',
          scores: { spring: 3, summer: 1, autumn: 0, winter: 0 }
        },
        {
          id: 'b',
          text: '생생한 빨강과 노란색',
          description: '활기차고 에너지 넘치는 색상을 선호해요',
          emoji: '🏖️',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '따뜻한 오렌지와 갈색',
          description: '안정적이고 성숙한 색감을 좋아해요',
          emoji: '🍁',
          scores: { spring: 0, summer: 1, autumn: 3, winter: 0 }
        },
        {
          id: 'd',
          text: '차가운 파랑과 하얀색',
          description: '깔끔하고 순수한 색상에 끌려요',
          emoji: '🌨️',
          scores: { spring: 0, summer: 0, autumn: 0, winter: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '스트레스를 받을 때 가장 하고 싶은 활동은?',
      subtitle: '마음이 힘들 때의 치유 방법을 선택해주세요',
      emoji: '💆',
      options: [
        {
          id: 'a',
          text: '화사한 꽃밭을 산책하며 새로운 희망 찾기',
          description: '자연 속에서 새로운 에너지를 얻고 싶어해요',
          emoji: '🌺',
          scores: { spring: 3, summer: 1, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '바다에서 수영하며 활발하게 움직이기',
          description: '활동적인 방법으로 스트레스를 해소해요',
          emoji: '🏊',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '단풍길을 걸으며 조용히 생각 정리하기',
          description: '차분한 사색을 통해 마음을 다스려요',
          emoji: '🚶',
          scores: { spring: 0, summer: 0, autumn: 3, winter: 2 }
        },
        {
          id: 'd',
          text: '따뜻한 실내에서 혼자만의 시간 갖기',
          description: '고요한 공간에서 깊은 휴식을 취해요',
          emoji: '🛋️',
          scores: { spring: 0, summer: 0, autumn: 1, winter: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '친구들과 모임을 가질 때 선호하는 장소는?',
      subtitle: '사람들과 어울릴 때 좋아하는 환경을 선택해주세요',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '피크닉하기 좋은 공원이나 정원',
          description: '자연스럽고 편안한 분위기를 선호해요',
          emoji: '🧺',
          scores: { spring: 3, summer: 2, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '시원한 수영장이나 워터파크',
          description: '활동적이고 즐거운 장소를 좋아해요',
          emoji: '🏊‍♀️',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '분위기 있는 카페나 갤러리',
          description: '차분하고 문화적인 공간을 선호해요',
          emoji: '☕',
          scores: { spring: 1, summer: 0, autumn: 3, winter: 2 }
        },
        {
          id: 'd',
          text: '아늑한 실내 공간이나 독서실',
          description: '조용하고 집중할 수 있는 곳을 좋아해요',
          emoji: '📚',
          scores: { spring: 0, summer: 0, autumn: 2, winter: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '가장 선호하는 휴가 스타일은?',
      subtitle: '이상적인 휴식 방법을 선택해주세요',
      emoji: '🏖️',
      options: [
        {
          id: 'a',
          text: '새로운 도시 탐험과 문화 체험',
          description: '새로운 경험과 배움을 추구해요',
          emoji: '🗽',
          scores: { spring: 3, summer: 2, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '해변 리조트에서 액티비티 삼매경',
          description: '활동적이고 역동적인 휴가를 원해요',
          emoji: '🏄',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '단풍 명소나 온천에서 힐링',
          description: '자연과 함께 조용한 휴식을 취해요',
          emoji: '♨️',
          scores: { spring: 1, summer: 0, autumn: 3, winter: 1 }
        },
        {
          id: 'd',
          text: '스키장이나 눈 덮인 산장에서 명상',
          description: '고요한 환경에서 깊은 사색을 해요',
          emoji: '⛷️',
          scores: { spring: 0, summer: 0, autumn: 1, winter: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '새로운 사람들과 만날 때 당신의 모습은?',
      subtitle: '첫 만남에서의 행동 방식을 선택해주세요',
      emoji: '🤝',
      options: [
        {
          id: 'a',
          text: '밝고 긍정적인 에너지로 먼저 다가간다',
          description: '희망찬 분위기를 만들며 친근하게 접근해요',
          emoji: '😊',
          scores: { spring: 3, summer: 2, autumn: 0, winter: 0 }
        },
        {
          id: 'b',
          text: '활발하게 대화를 이끌며 분위기를 주도한다',
          description: '에너지 넘치게 모든 사람과 어울려요',
          emoji: '🎉',
          scores: { spring: 2, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '차분하게 관찰하며 상황에 맞게 대응한다',
          description: '신중하고 성숙하게 관계를 만들어가요',
          emoji: '🤔',
          scores: { spring: 0, summer: 0, autumn: 3, winter: 2 }
        },
        {
          id: 'd',
          text: '조용히 듣고 있다가 필요할 때만 말한다',
          description: '깊이 있는 대화를 통해 진정한 관계를 만들어요',
          emoji: '🤫',
          scores: { spring: 0, summer: 0, autumn: 1, winter: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '감정이 복잡할 때 당신의 표현 방식은?',
      subtitle: '마음이 어려울 때의 대처법을 선택해주세요',
      emoji: '💭',
      options: [
        {
          id: 'a',
          text: '희망적인 면을 찾아 긍정적으로 표현한다',
          description: '어려운 상황에서도 밝은 면을 찾으려고 해요',
          emoji: '🌈',
          scores: { spring: 3, summer: 1, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '에너지 넘치게 감정을 솔직히 드러낸다',
          description: '감정을 숨기지 않고 적극적으로 표현해요',
          emoji: '💪',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '차분하게 상황을 분석하며 현실적으로 접근한다',
          description: '이성적이고 성숙하게 감정을 다스려요',
          emoji: '📝',
          scores: { spring: 0, summer: 0, autumn: 3, winter: 1 }
        },
        {
          id: 'd',
          text: '혼자서 조용히 생각하며 깊이 성찰한다',
          description: '내면의 목소리에 귀 기울이며 스스로 해결해요',
          emoji: '🧘‍♀️',
          scores: { spring: 0, summer: 0, autumn: 2, winter: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '가장 좋아하는 향기는?',
      subtitle: '마음을 편안하게 해주는 향을 선택해주세요',
      emoji: '🌸',
      options: [
        {
          id: 'a',
          text: '꽃향기나 과일향',
          description: '상큼하고 달콤한 향기를 좋아해요',
          emoji: '🌺',
          scores: { spring: 3, summer: 2, autumn: 0, winter: 0 }
        },
        {
          id: 'b',
          text: '바다 냄새나 상쾌한 민트향',
          description: '시원하고 활기찬 향기를 선호해요',
          emoji: '🌊',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 1 }
        },
        {
          id: 'c',
          text: '나무향이나 따뜻한 계피향',
          description: '자연스럽고 포근한 향기에 끌려요',
          emoji: '🌰',
          scores: { spring: 0, summer: 0, autumn: 3, winter: 1 }
        },
        {
          id: 'd',
          text: '은은한 향초나 깔끔한 비누향',
          description: '깨끗하고 차분한 향기를 좋아해요',
          emoji: '🕯️',
          scores: { spring: 0, summer: 0, autumn: 1, winter: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '이상적인 하루 일과는?',
      subtitle: '가장 마음에 드는 하루 시간표를 선택해주세요',
      emoji: '⏰',
      options: [
        {
          id: 'a',
          text: '일찍 일어나 산책 후 새로운 일에 도전',
          description: '활기차게 시작해서 성장하는 하루를 보내요',
          emoji: '🌅',
          scores: { spring: 3, summer: 2, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '늦잠 자고 친구들과 신나게 놀기',
          description: '자유롭고 즐거운 시간으로 가득 채워요',
          emoji: '🎈',
          scores: { spring: 2, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '적당히 일하고 여유롭게 취미 생활',
          description: '균형잡힌 일상 속에서 만족감을 찾아요',
          emoji: '🎭',
          scores: { spring: 1, summer: 1, autumn: 3, winter: 1 }
        },
        {
          id: 'd',
          text: '조용히 책 읽고 깊은 사색에 잠기기',
          description: '고요한 시간 속에서 내면을 탐구해요',
          emoji: '📖',
          scores: { spring: 0, summer: 0, autumn: 2, winter: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '인생에서 가장 중요하게 생각하는 가치는?',
      subtitle: '당신의 핵심 가치관을 선택해주세요',
      emoji: '💎',
      options: [
        {
          id: 'a',
          text: '성장과 새로운 가능성',
          description: '끊임없이 발전하고 희망을 품는 것을 중시해요',
          emoji: '🌱',
          scores: { spring: 3, summer: 1, autumn: 1, winter: 0 }
        },
        {
          id: 'b',
          text: '자유와 열정적인 삶',
          description: '제약없이 자신답게 살며 모든 것을 즐기는 것을 중시해요',
          emoji: '🦋',
          scores: { spring: 1, summer: 3, autumn: 0, winter: 0 }
        },
        {
          id: 'c',
          text: '안정과 의미있는 성취',
          description: '차근차근 쌓아가며 의미있는 결과를 만드는 것을 중시해요',
          emoji: '🏆',
          scores: { spring: 1, summer: 0, autumn: 3, winter: 1 }
        },
        {
          id: 'd',
          text: '깊이와 진실한 관계',
          description: '표면적이지 않은 진정한 가치와 관계를 중시해요',
          emoji: '💝',
          scores: { spring: 0, summer: 0, autumn: 2, winter: 3 }
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
      detailedDescription: '봄처럼 희망차고 새로운 것을 좋아하는 당신은 언제나 긍정적인 에너지가 넘쳐납니다. 어떤 어려움이 와도 그 속에서 새로운 가능성을 찾아내는 놀라운 능력을 가지고 있어요. 성장하고 발전하는 것을 즐기며, 주변 사람들에게도 희망과 용기를 전해주는 따뜻한 존재입니다.',
      strengths: [
        '새로운 시작을 두려워하지 않고 용기있게 도전해요',
        '희망적이고 긍정적인 마음가짐을 가지고 있어요',
        '적응력이 뛰어나고 변화를 잘 받아들여요',
        '주변 사람들에게 에너지와 영감을 줄 수 있어요'
      ],
      improvements: [
        '때로는 현실감각과 신중함도 필요해요',
        '완벽하지 않은 것도 받아들이는 인내심을 길러보세요',
        '깊이 있는 사고와 계획성을 키워보세요',
        '감정의 기복이 클 때 안정감을 찾는 방법을 배워보세요'
      ],
      compatibleTypes: [
        { id: 'summer', title: '활기찬 여름', emoji: '☀️', compatibility: 85 },
        { id: 'autumn', title: '성숙한 가을', emoji: '🍂', compatibility: 75 },
        { id: 'winter', title: '고요한 겨울', emoji: '❄️', compatibility: 65 }
      ],
      traits: [
        { name: '희망', emoji: '🌟', percentage: 95 },
        { name: '새로움', emoji: '🌱', percentage: 90 },
        { name: '성장', emoji: '📈', percentage: 88 },
        { name: '긍정성', emoji: '😊', percentage: 85 }
      ]
    },
    summer: {
      id: 'summer',
      title: '활기찬 여름',
      emoji: '☀️',
      description: '에너지 넘치는 당신!',
      detailedDescription: '여름처럼 활기차고 열정적인 당신은 모든 일에 적극적으로 참여하며 삶을 즐깁니다. 강한 추진력과 리더십으로 주변을 이끌어가며, 어떤 상황에서도 밝은 에너지로 분위기를 만들어내는 타고난 리더예요. 자유롭고 개방적인 마음으로 모든 경험을 받아들입니다.',
      strengths: [
        '에너지가 넘치고 활동적이며 추진력이 강해요',
        '리더십이 뛰어나고 사람들을 이끄는 능력이 있어요',
        '자유롭고 개방적인 사고를 가지고 있어요',
        '어떤 환경에서도 적극적으로 적응하고 즐길 수 있어요'
      ],
      improvements: [
        '때로는 휴식과 여유도 필요해요',
        '다른 사람들의 의견을 더 세심하게 들어보세요',
        '장기적인 계획과 지속성을 키워보세요',
        '깊이 있는 사고와 신중함도 발전시켜보세요'
      ],
      compatibleTypes: [
        { id: 'spring', title: '희망찬 봄', emoji: '🌸', compatibility: 85 },
        { id: 'autumn', title: '성숙한 가을', emoji: '🍂', compatibility: 70 },
        { id: 'winter', title: '고요한 겨울', emoji: '❄️', compatibility: 60 }
      ],
      traits: [
        { name: '활력', emoji: '⚡', percentage: 95 },
        { name: '열정', emoji: '🔥', percentage: 90 },
        { name: '리더십', emoji: '👑', percentage: 88 },
        { name: '자유로움', emoji: '🦅', percentage: 85 }
      ]
    },
    autumn: {
      id: 'autumn',
      title: '성숙한 가을',
      emoji: '🍂',
      description: '깊이 있고 사려깊은 당신!',
      detailedDescription: '가을처럼 성숙하고 깊이 있는 당신은 신중하고 현명한 판단력을 가진 지혜로운 사람입니다. 경험을 통해 얻은 통찰력으로 균형잡힌 시각을 가지고 있으며, 진정한 가치가 무엇인지 알고 있어요. 차분하고 안정적인 분위기로 주변에 신뢰감을 줍니다.',
      strengths: [
        '깊이 있는 사고력과 현명한 판단력을 가지고 있어요',
        '성숙하고 안정적인 마음가짐을 가지고 있어요',
        '균형감각이 뛰어나고 조화로운 관계를 만들어요',
        '진정한 가치를 알아보는 안목과 통찰력이 있어요'
      ],
      improvements: [
        '때로는 새로운 도전과 모험도 시도해보세요',
        '완벽주의를 조금 내려놓고 유연함을 키워보세요',
        '감정 표현을 더 자유롭게 해보세요',
        '즉흥성과 창의성을 발휘할 기회를 만들어보세요'
      ],
      compatibleTypes: [
        { id: 'winter', title: '고요한 겨울', emoji: '❄️', compatibility: 85 },
        { id: 'spring', title: '희망찬 봄', emoji: '🌸', compatibility: 75 },
        { id: 'summer', title: '활기찬 여름', emoji: '☀️', compatibility: 70 }
      ],
      traits: [
        { name: '성숙함', emoji: '🎭', percentage: 95 },
        { name: '지혜', emoji: '🦉', percentage: 90 },
        { name: '균형감', emoji: '⚖️', percentage: 88 },
        { name: '안정성', emoji: '🛡️', percentage: 85 }
      ]
    },
    winter: {
      id: 'winter',
      title: '고요한 겨울',
      emoji: '❄️',
      description: '차분하고 내성적인 당신!',
      detailedDescription: '겨울처럼 고요하고 깊이 있는 당신은 혼자만의 시간을 소중히 여기며 내면의 성찰을 통해 성장하는 사람입니다. 표면적이지 않은 진정한 관계와 가치를 추구하며, 조용하지만 강한 내면의 힘을 가지고 있어요. 깊은 사고력과 집중력으로 의미있는 결과를 만들어냅니다.',
      strengths: [
        '깊은 사색과 성찰을 통해 지혜를 쌓아가요',
        '집중력이 뛰어나고 한 가지 일을 깊이 파고들어요',
        '진정한 가치와 의미를 추구하는 철학적 사고를 해요',
        '조용하지만 강한 내면의 힘과 인내력을 가지고 있어요'
      ],
      improvements: [
        '사회적 활동과 다양한 경험도 시도해보세요',
        '감정을 더 적극적으로 표현하고 소통해보세요',
        '새로운 사람들과의 만남을 두려워하지 마세요',
        '완벽함보다는 과정의 즐거움도 찾아보세요'
      ],
      compatibleTypes: [
        { id: 'autumn', title: '성숙한 가을', emoji: '🍂', compatibility: 85 },
        { id: 'spring', title: '희망찬 봄', emoji: '🌸', compatibility: 70 },
        { id: 'summer', title: '활기찬 여름', emoji: '☀️', compatibility: 60 }
      ],
      traits: [
        { name: '고요함', emoji: '🌙', percentage: 95 },
        { name: '깊이', emoji: '🌊', percentage: 90 },
        { name: '성찰', emoji: '🧘', percentage: 88 },
        { name: '집중력', emoji: '🎯', percentage: 85 }
      ]
    }
  }
};