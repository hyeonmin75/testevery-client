import { TestData } from '../../types/test';

export const disneyTest: TestData = {
  id: 'disney',
  title: '디즈니 주인공 테스트',
  description: '나와 닮은 디즈니 캐릭터를 찾아보세요',
  emoji: '🏰',
  color: 'pink',
  duration: '3-4분',
  questionCount: 11,
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
    },
    {
      id: 2,
      text: '가장 소중하게 생각하는 가치는?',
      subtitle: '인생에서 중요하게 여기는 것을 선택해주세요',
      emoji: '💖',
      options: [
        {
          id: 'a',
          text: '자유롭게 꿈을 추구할 수 있는 권리',
          description: '제약없이 원하는 것을 할 수 있는 자유를 중시해요',
          emoji: '🌊',
          scores: { ariel: 3, belle: 1, elsa: 2, simba: 1 }
        },
        {
          id: 'b',
          text: '지식과 학습을 통한 성장',
          description: '배움을 통해 더 나은 사람이 되는 것을 중시해요',
          emoji: '📖',
          scores: { ariel: 0, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '자신만의 특별함을 인정받는 것',
          description: '있는 그대로의 모습을 사랑받는 것을 중시해요',
          emoji: '✨',
          scores: { ariel: 1, belle: 1, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '책임감 있는 리더로 인정받는 것',
          description: '다른 사람들을 이끌고 보호하는 것을 중시해요',
          emoji: '👑',
          scores: { ariel: 0, belle: 0, elsa: 1, simba: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '친구들과의 관계에서 당신의 역할은?',
      subtitle: '주변 사람들과 어떻게 지내는지 선택해주세요',
      emoji: '👭',
      options: [
        {
          id: 'a',
          text: '호기심 많은 탐험가',
          description: '새로운 것을 발견하고 친구들과 공유해요',
          emoji: '🔍',
          scores: { ariel: 3, belle: 1, elsa: 0, simba: 1 }
        },
        {
          id: 'b',
          text: '지혜로운 조언자',
          description: '친구들의 고민을 들어주고 현명한 조언을 해줘요',
          emoji: '🦉',
          scores: { ariel: 0, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '독특하지만 따뜻한 친구',
          description: '다르지만 진심으로 친구들을 아껴요',
          emoji: '💙',
          scores: { ariel: 1, belle: 1, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '든든한 리더',
          description: '친구들을 보호하고 이끌어주는 역할을 해요',
          emoji: '🛡️',
          scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '어려운 상황에 직면했을 때 당신의 반응은?',
      subtitle: '힘든 일이 생겼을 때의 대처법을 선택해주세요',
      emoji: '⚡',
      options: [
        {
          id: 'a',
          text: '용기를 내어 새로운 길을 찾아본다',
          description: '과감하게 도전하며 해결책을 찾으려고 해요',
          emoji: '🚀',
          scores: { ariel: 3, belle: 1, elsa: 0, simba: 2 }
        },
        {
          id: 'b',
          text: '신중하게 상황을 분석하고 최선의 방법을 찾는다',
          description: '차근차근 생각해서 현명한 선택을 해요',
          emoji: '🤔',
          scores: { ariel: 0, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '혼자서 조용히 해결하려고 노력한다',
          description: '다른 사람에게 피해를 주지 않으려고 혼자 감당해요',
          emoji: '❄️',
          scores: { ariel: 0, belle: 0, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '책임감을 가지고 정면으로 맞선다',
          description: '당당하게 문제와 맞서며 해결하려고 해요',
          emoji: '⚔️',
          scores: { ariel: 1, belle: 1, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '가장 좋아하는 시간대는?',
      subtitle: '하루 중 가장 마음에 드는 시간을 선택해주세요',
      emoji: '🕐',
      options: [
        {
          id: 'a',
          text: '새벽, 모든 것이 조용하고 신비로운 시간',
          description: '고요하고 신비로운 분위기를 좋아해요',
          emoji: '🌅',
          scores: { ariel: 3, belle: 0, elsa: 2, simba: 0 }
        },
        {
          id: 'b',
          text: '오후, 햇살이 따뜻하고 책 읽기 좋은 시간',
          description: '평온하고 집중하기 좋은 시간을 선호해요',
          emoji: '📚',
          scores: { ariel: 0, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '밤, 혼자만의 조용한 사색의 시간',
          description: '깊이 생각하고 자신과 마주하는 시간을 좋아해요',
          emoji: '🌙',
          scores: { ariel: 1, belle: 1, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '한낮, 활기차고 에너지 넘치는 시간',
          description: '밝고 활동적인 시간을 선호해요',
          emoji: '☀️',
          scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '가장 매력적인 장소는?',
      subtitle: '꼭 가보고 싶은 꿈의 장소를 선택해주세요',
      emoji: '🗺️',
      options: [
        {
          id: 'a',
          text: '신비로운 바다 속 궁전',
          description: '환상적이고 아름다운 수중 세계에 끌려요',
          emoji: '🏰',
          scores: { ariel: 3, belle: 0, elsa: 1, simba: 0 }
        },
        {
          id: 'b',
          text: '고풍스러운 도서관이 있는 성',
          description: '지식과 문화가 가득한 곳에 끌려요',
          emoji: '📚',
          scores: { ariel: 0, belle: 3, elsa: 0, simba: 1 }
        },
        {
          id: 'c',
          text: '눈으로 덮인 아름다운 얼음 궁전',
          description: '순수하고 고요한 아름다움에 끌려요',
          emoji: '❄️',
          scores: { ariel: 1, belle: 0, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '웅장한 사바나의 프라이드 록',
          description: '자연의 웅장함과 자유로움에 끌려요',
          emoji: '🌍',
          scores: { ariel: 0, belle: 1, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '사랑에 빠졌을 때 당신의 모습은?',
      subtitle: '연애를 할 때의 스타일을 선택해주세요',
      emoji: '💕',
      options: [
        {
          id: 'a',
          text: '모든 것을 포기하고라도 사랑을 선택한다',
          description: '사랑을 위해서라면 큰 희생도 감수해요',
          emoji: '💗',
          scores: { ariel: 3, belle: 0, elsa: 0, simba: 1 }
        },
        {
          id: 'b',
          text: '천천히 알아가며 진정한 사랑을 찾는다',
          description: '겉모습보다 내면을 중시하며 깊은 사랑을 해요',
          emoji: '🌹',
          scores: { ariel: 1, belle: 3, elsa: 1, simba: 0 }
        },
        {
          id: 'c',
          text: '사랑하지만 상대방을 위해 거리를 둔다',
          description: '상대방의 안전과 행복을 위해 자신을 희생해요',
          emoji: '💙',
          scores: { ariel: 0, belle: 1, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '당당하고 자신감 있게 사랑을 표현한다',
          description: '자신의 감정에 솔직하고 적극적으로 표현해요',
          emoji: '❤️',
          scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '가장 두려워하는 것은?',
      subtitle: '마음 깊은 곳의 두려움을 선택해주세요',
      emoji: '😰',
      options: [
        {
          id: 'a',
          text: '자유를 잃고 갇혀서 살게 되는 것',
          description: '제약과 구속을 가장 두려워해요',
          emoji: '🔒',
          scores: { ariel: 3, belle: 1, elsa: 1, simba: 0 }
        },
        {
          id: 'b',
          text: '무지하고 편견에 사로잡힌 채로 사는 것',
          description: '진실을 보지 못하고 사는 것을 두려워해요',
          emoji: '👁️',
          scores: { ariel: 0, belle: 3, elsa: 0, simba: 1 }
        },
        {
          id: 'c',
          text: '내 능력으로 사랑하는 사람들을 다치게 하는 것',
          description: '자신의 특별함이 타인에게 해가 되는 것을 두려워해요',
          emoji: '💔',
          scores: { ariel: 0, belle: 0, elsa: 3, simba: 1 }
        },
        {
          id: 'd',
          text: '책임을 다하지 못하고 실망시키는 것',
          description: '기대를 저버리고 실패하는 것을 두려워해요',
          emoji: '😔',
          scores: { ariel: 1, belle: 1, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '친구가 위험에 처했을 때 당신의 행동은?',
      subtitle: '소중한 사람을 구하는 방법을 선택해주세요',
      emoji: '🆘',
      options: [
        {
          id: 'a',
          text: '즉시 달려가서 함께 위험을 맞선다',
          description: '망설임 없이 친구를 구하러 가요',
          emoji: '🏃‍♀️',
          scores: { ariel: 3, belle: 1, elsa: 0, simba: 2 }
        },
        {
          id: 'b',
          text: '지혜를 동원해 안전한 구조 계획을 세운다',
          description: '신중하게 계획을 세워서 확실하게 구해요',
          emoji: '🧠',
          scores: { ariel: 1, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '자신의 특별한 능력을 사용해서 구한다',
          description: '자신만의 방법으로 친구를 도와요',
          emoji: '✨',
          scores: { ariel: 0, belle: 0, elsa: 3, simba: 1 }
        },
        {
          id: 'd',
          text: '용감하게 앞장서서 모든 위험을 감수한다',
          description: '리더로서 책임감을 가지고 행동해요',
          emoji: '🦸‍♂️',
          scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '꿈을 이루기 위해 가장 중요한 것은?',
      subtitle: '목표 달성을 위한 핵심 요소를 선택해주세요',
      emoji: '🌟',
      options: [
        {
          id: 'a',
          text: '포기하지 않는 끈기와 열정',
          description: '어떤 어려움이 와도 꿈을 향한 의지를 잃지 않아요',
          emoji: '🔥',
          scores: { ariel: 3, belle: 1, elsa: 1, simba: 2 }
        },
        {
          id: 'b',
          text: '지식과 지혜로 준비하는 것',
          description: '충분한 공부와 준비를 통해 꿈에 다가가요',
          emoji: '📚',
          scores: { ariel: 0, belle: 3, elsa: 1, simba: 1 }
        },
        {
          id: 'c',
          text: '자신만의 독특함을 받아들이는 것',
          description: '남들과 다른 자신을 인정하고 그 힘을 믿어요',
          emoji: '❄️',
          scores: { ariel: 1, belle: 1, elsa: 3, simba: 0 }
        },
        {
          id: 'd',
          text: '용기 있게 책임을 지는 것',
          description: '두려움을 극복하고 맡은 역할을 다해요',
          emoji: '👑',
          scores: { ariel: 1, belle: 0, elsa: 0, simba: 3 }
        }
      ]
    },
    {
      id: 11,
      text: '인생에서 가장 행복한 순간은?',
      subtitle: '가장 완벽한 행복의 모습을 선택해주세요',
      emoji: '😊',
      options: [
        {
          id: 'a',
          text: '자유롭게 꿈꾸던 새로운 세상을 탐험하는 순간',
          description: '제약없이 원하는 것을 탐구할 수 있을 때 행복해요',
          emoji: '🌊',
          scores: { ariel: 3, belle: 0, elsa: 1, simba: 1 }
        },
        {
          id: 'b',
          text: '진정한 사랑과 이해를 받는 순간',
          description: '있는 그대로의 모습을 사랑받을 때 행복해요',
          emoji: '💖',
          scores: { ariel: 1, belle: 3, elsa: 2, simba: 0 }
        },
        {
          id: 'c',
          text: '자신의 진정한 모습을 당당히 드러낼 수 있는 순간',
          description: '숨기지 않고 자신답게 살 수 있을 때 행복해요',
          emoji: '✨',
          scores: { ariel: 1, belle: 1, elsa: 3, simba: 1 }
        },
        {
          id: 'd',
          text: '사랑하는 사람들과 함께 평화로운 시간을 보내는 순간',
          description: '소중한 사람들과 조화롭게 살 때 행복해요',
          emoji: '🌅',
          scores: { ariel: 0, belle: 1, elsa: 1, simba: 3 }
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
      detailedDescription: '에리얼처럼 호기심이 많고 새로운 세계에 대한 꿈이 가득한 당신은 항상 새로운 경험을 추구하며 자유로운 영혼을 가지고 있습니다. 제약과 한계를 거부하고 자신만의 길을 개척해나가는 용감한 모험가예요. 때로는 무모할 수 있지만, 그 순수한 열정과 꿈을 향한 의지는 주변 사람들에게 큰 영감을 줍니다.',
      strengths: [
        '끝없는 호기심과 탐구 정신을 가지고 있어요',
        '꿈을 향한 용기와 결단력이 뛰어나요',
        '새로운 것에 대한 개방적인 마음을 가져요',
        '자유로운 사고와 창의적인 아이디어가 풍부해요'
      ],
      improvements: [
        '때로는 신중함과 계획성도 필요해요',
        '주변 사람들의 걱정과 조언도 귀담아 들어보세요',
        '무모한 도전보다는 준비된 모험을 해보세요',
        '현실적인 제약도 인정하고 받아들이는 지혜를 키워보세요'
      ],
      compatibleTypes: [
        { id: 'simba', title: '용감한 심바', emoji: '🦁', compatibility: 85 },
        { id: 'belle', title: '지혜로운 벨', emoji: '📚', compatibility: 75 },
        { id: 'elsa', title: '특별한 엘사', emoji: '❄️', compatibility: 70 }
      ],
      traits: [
        { name: '호기심', emoji: '🔍', percentage: 95 },
        { name: '모험심', emoji: '🌊', percentage: 90 },
        { name: '자유로움', emoji: '🦋', percentage: 88 },
        { name: '용기', emoji: '💪', percentage: 85 }
      ]
    },
    belle: {
      id: 'belle',
      title: '지혜로운 벨',
      emoji: '📚',
      description: '책을 사랑하는 당신!',
      detailedDescription: '벨처럼 지적 호기심이 많고 내면의 아름다움을 중시하는 당신은 깊이 있는 사고와 현명한 판단력을 가진 사람입니다. 겉모습보다는 진정한 가치를 알아보는 안목이 뛰어나며, 편견 없는 열린 마음으로 세상을 바라봅니다. 학습과 성장을 통해 더 나은 사람이 되려고 끊임없이 노력하는 지혜로운 존재예요.',
      strengths: [
        '깊이 있는 지적 호기심과 학습 욕구를 가져요',
        '편견 없이 사물의 본질을 보는 통찰력이 있어요',
        '내면의 아름다움과 진정한 가치를 중시해요',
        '현명하고 신중한 판단력을 가지고 있어요'
      ],
      improvements: [
        '책 속 지식뿐만 아니라 실제 경험도 쌓아보세요',
        '사회적 활동과 다양한 사람들과의 교류를 늘려보세요',
        '때로는 직감과 감정도 믿어보세요',
        '완벽을 추구하기보다는 과정을 즐겨보세요'
      ],
      compatibleTypes: [
        { id: 'elsa', title: '특별한 엘사', emoji: '❄️', compatibility: 80 },
        { id: 'ariel', title: '호기심 많은 에리얼', emoji: '🧜‍♀️', compatibility: 75 },
        { id: 'simba', title: '용감한 심바', emoji: '🦁', compatibility: 70 }
      ],
      traits: [
        { name: '지혜', emoji: '📚', percentage: 95 },
        { name: '통찰력', emoji: '👁️', percentage: 90 },
        { name: '배려심', emoji: '💖', percentage: 88 },
        { name: '학습욕구', emoji: '🧠', percentage: 85 }
      ]
    },
    elsa: {
      id: 'elsa',
      title: '특별한 엘사',
      emoji: '❄️',
      description: '독특하고 신비로운 당신!',
      detailedDescription: '엘사처럼 특별한 재능을 가지고 있지만 때로는 외로움을 느끼는 당신은 깊은 감성과 강한 내면의 힘을 가진 사람입니다. 자신의 독특함 때문에 고민하기도 하지만, 그것이 바로 당신만의 특별한 매력이에요. 사랑하는 사람들을 보호하기 위해서라면 자신을 희생할 줄도 아는 깊은 사랑의 소유자입니다.',
      strengths: [
        '독특하고 특별한 재능과 능력을 가지고 있어요',
        '깊은 감성과 섬세한 마음을 가져요',
        '사랑하는 사람을 위한 희생정신이 강해요',
        '강한 내면의 힘과 독립성을 가지고 있어요'
      ],
      improvements: [
        '자신의 특별함을 더 당당하게 받아들이고 표현해보세요',
        '혼자 감당하려 하지 말고 다른 사람들과 소통해보세요',
        '완벽하게 통제하려 하지 말고 때로는 자연스럽게 흘러가도록 해보세요',
        '자신을 사랑하고 용서하는 마음을 키워보세요'
      ],
      compatibleTypes: [
        { id: 'belle', title: '지혜로운 벨', emoji: '📚', compatibility: 80 },
        { id: 'ariel', title: '호기심 많은 에리얼', emoji: '🧜‍♀️', compatibility: 70 },
        { id: 'simba', title: '용감한 심바', emoji: '🦁', compatibility: 65 }
      ],
      traits: [
        { name: '특별함', emoji: '❄️', percentage: 95 },
        { name: '깊이', emoji: '🌙', percentage: 90 },
        { name: '희생정신', emoji: '💙', percentage: 88 },
        { name: '독립성', emoji: '🗽', percentage: 85 }
      ]
    },
    simba: {
      id: 'simba',
      title: '용감한 심바',
      emoji: '🦁',
      description: '리더십이 강한 당신!',
      detailedDescription: '심바처럼 용기 있고 리더십이 강한 당신은 어려운 상황에서도 앞장서서 문제를 해결하는 천생 리더입니다. 책임감이 강하고 정의로우며, 사랑하는 사람들을 보호하기 위해서라면 어떤 위험도 감수할 수 있는 용감한 마음을 가지고 있어요. 때로는 과거의 실수로 고민하기도 하지만, 그것을 통해 더욱 성숙해지는 지혜를 얻습니다.',
      strengths: [
        '타고난 리더십과 카리스마를 가지고 있어요',
        '용기 있고 정의로운 마음을 가져요',
        '강한 책임감으로 다른 사람들을 보호해요',
        '실수를 통해 배우고 성장하는 지혜가 있어요'
      ],
      improvements: [
        '완벽하려고 하지 말고 때로는 다른 사람의 도움도 받아보세요',
        '과거의 실수에 너무 얽매이지 말고 현재에 집중해보세요',
        '혼자서 모든 것을 해결하려 하지 말고 팀워크의 힘을 믿어보세요',
        '감정 표현을 더 자유롭게 하고 진솔한 소통을 해보세요'
      ],
      compatibleTypes: [
        { id: 'ariel', title: '호기심 많은 에리얼', emoji: '🧜‍♀️', compatibility: 85 },
        { id: 'belle', title: '지혜로운 벨', emoji: '📚', compatibility: 75 },
        { id: 'elsa', title: '특별한 엘사', emoji: '❄️', compatibility: 70 }
      ],
      traits: [
        { name: '용기', emoji: '🦁', percentage: 95 },
        { name: '리더십', emoji: '👑', percentage: 90 },
        { name: '책임감', emoji: '🛡️', percentage: 88 },
        { name: '정의감', emoji: '⚖️', percentage: 85 }
      ]
    }
  }
};