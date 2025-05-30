import { TestData } from '../../types/test';

export const fairytaleTest: TestData = {
  id: 'fairytale',
  title: '나는 어떤 동화 속 주인공일까?',
  description: '당신의 성격과 가장 닮은 동화 속 캐릭터를 찾아보세요',
  emoji: '📚',
  color: 'pink',
  duration: '3-4분',
  questionCount: 10,
  participants: 925000,
  questions: [
    {
      id: 1,
      text: '어려운 상황에 처했을 때 당신의 첫 반응은?',
      subtitle: '문제 해결 방식',
      emoji: '⚡',
      options: [
        {
          id: 'cinderella',
          text: '참고 견디며 차근차근 해결책을 찾는다',
          description: '인내와 성실함',
          emoji: '💪',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 1, mermaid: 0, peter: 0 }
        },
        {
          id: 'redhood',
          text: '직접 나서서 적극적으로 해결한다',
          description: '용기와 행동력',
          emoji: '🔥',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 0, mermaid: 1, peter: 1 }
        },
        {
          id: 'belle',
          text: '먼저 상황을 분석하고 최선의 방법을 찾는다',
          description: '신중한 판단',
          emoji: '🤔',
          scores: { cinderella: 1, redhood: 0, frog: 1, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'peter',
          text: '긍정적으로 생각하며 새로운 관점을 찾는다',
          description: '창의적 사고',
          emoji: '✨',
          scores: { cinderella: 0, redhood: 0, frog: 0, belle: 0, mermaid: 1, peter: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '친구들과 함께 있을 때 당신의 역할은?',
      subtitle: '사회적 역할',
      emoji: '👥',
      options: [
        {
          id: 'cinderella',
          text: '다른 사람들을 도와주는 헌신적인 역할',
          description: '배려와 봉사',
          emoji: '🤝',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 0, mermaid: 2, peter: 0 }
        },
        {
          id: 'redhood',
          text: '모험을 제안하고 분위기를 이끄는 역할',
          description: '리더십과 활력',
          emoji: '🎉',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 0, mermaid: 0, peter: 2 }
        },
        {
          id: 'belle',
          text: '조언을 해주고 문제를 해결해주는 역할',
          description: '지혜와 통찰',
          emoji: '💡',
          scores: { cinderella: 0, redhood: 0, frog: 1, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'frog',
          text: '겉으로는 조용하지만 중요한 순간에 도움을 주는 역할',
          description: '숨겨진 능력',
          emoji: '🎭',
          scores: { cinderella: 1, redhood: 0, frog: 3, belle: 1, mermaid: 0, peter: 0 }
        }
      ]
    },
    {
      id: 3,
      text: '사랑에 빠졌을 때 당신의 모습은?',
      subtitle: '사랑의 표현 방식',
      emoji: '💕',
      options: [
        {
          id: 'mermaid',
          text: '모든 것을 걸고 사랑을 위해 희생한다',
          description: '헌신적 사랑',
          emoji: '💖',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 0 }
        },
        {
          id: 'belle',
          text: '겉모습보다 내면의 아름다움을 본다',
          description: '진정한 사랑',
          emoji: '👁️',
          scores: { cinderella: 1, redhood: 0, frog: 1, belle: 3, mermaid: 1, peter: 0 }
        },
        {
          id: 'cinderella',
          text: '꾸준히 노력하며 진심을 보여준다',
          description: '성실한 사랑',
          emoji: '🌹',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 0, mermaid: 1, peter: 0 }
        },
        {
          id: 'peter',
          text: '자유롭고 순수한 마음으로 사랑한다',
          description: '순수한 사랑',
          emoji: '🕊️',
          scores: { cinderella: 0, redhood: 1, frog: 0, belle: 0, mermaid: 1, peter: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '새로운 환경에 적응해야 할 때 당신의 방법은?',
      subtitle: '적응 방식',
      emoji: '🌟',
      options: [
        {
          id: 'redhood',
          text: '호기심을 갖고 적극적으로 탐험한다',
          description: '모험적 탐색',
          emoji: '🗺️',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 1, mermaid: 0, peter: 2 }
        },
        {
          id: 'frog',
          text: '처음엔 조용히 관찰하다가 천천히 적응한다',
          description: '신중한 적응',
          emoji: '👀',
          scores: { cinderella: 1, redhood: 0, frog: 3, belle: 1, mermaid: 0, peter: 0 }
        },
        {
          id: 'belle',
          text: '먼저 그 환경에 대해 공부하고 이해한다',
          description: '학습적 접근',
          emoji: '📖',
          scores: { cinderella: 0, redhood: 0, frog: 0, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'mermaid',
          text: '감정적으로 연결되려고 노력한다',
          description: '감성적 적응',
          emoji: '💫',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 1 }
        }
      ]
    },
    {
      id: 5,
      text: '가장 큰 꿈이나 목표는 무엇인가요?',
      subtitle: '인생의 목표',
      emoji: '🎯',
      options: [
        {
          id: 'cinderella',
          text: '노력한 만큼 인정받는 공정한 세상',
          description: '정의로운 삶',
          emoji: '⚖️',
          scores: { cinderella: 3, redhood: 1, frog: 0, belle: 1, mermaid: 0, peter: 0 }
        },
        {
          id: 'peter',
          text: '영원히 자유롭고 즐거운 삶',
          description: '자유로운 삶',
          emoji: '🌈',
          scores: { cinderella: 0, redhood: 1, frog: 0, belle: 0, mermaid: 0, peter: 3 }
        },
        {
          id: 'belle',
          text: '지혜로워져서 세상을 더 잘 이해하는 것',
          description: '지적 성장',
          emoji: '🧠',
          scores: { cinderella: 0, redhood: 0, frog: 1, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'mermaid',
          text: '진정한 사랑을 찾아 행복해지는 것',
          description: '사랑의 완성',
          emoji: '💒',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 0 }
        }
      ]
    },
    {
      id: 6,
      text: '갈등 상황에서 당신의 대처 방식은?',
      subtitle: '갈등 해결법',
      emoji: '⚔️',
      options: [
        {
          id: 'belle',
          text: '대화를 통해 서로를 이해하려고 노력한다',
          description: '소통으로 해결',
          emoji: '🗣️',
          scores: { cinderella: 1, redhood: 0, frog: 1, belle: 3, mermaid: 1, peter: 0 }
        },
        {
          id: 'redhood',
          text: '정면으로 맞서서 해결한다',
          description: '직접적 대응',
          emoji: '⚡',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 0, mermaid: 0, peter: 1 }
        },
        {
          id: 'cinderella',
          text: '참고 견디면서 상황이 나아지기를 기다린다',
          description: '인내로 극복',
          emoji: '🕊️',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 0, mermaid: 1, peter: 0 }
        },
        {
          id: 'frog',
          text: '겉으로는 조용하지만 나만의 방법으로 해결한다',
          description: '은밀한 해결',
          emoji: '🤫',
          scores: { cinderella: 0, redhood: 0, frog: 3, belle: 1, mermaid: 0, peter: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '친구가 힘들어할 때 당신의 위로 방법은?',
      subtitle: '위로의 방식',
      emoji: '🤗',
      options: [
        {
          id: 'cinderella',
          text: '묵묵히 곁에서 도움이 되는 일을 해준다',
          description: '실질적 도움',
          emoji: '🤲',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 0, mermaid: 1, peter: 0 }
        },
        {
          id: 'mermaid',
          text: '진심으로 공감해주고 함께 슬퍼해준다',
          description: '감정적 공감',
          emoji: '😢',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 0 }
        },
        {
          id: 'belle',
          text: '조언을 해주고 해결책을 함께 찾아준다',
          description: '지혜로운 조언',
          emoji: '💡',
          scores: { cinderella: 0, redhood: 0, frog: 0, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'peter',
          text: '재미있는 일로 기분을 전환시켜준다',
          description: '긍정적 전환',
          emoji: '🎈',
          scores: { cinderella: 0, redhood: 1, frog: 0, belle: 0, mermaid: 0, peter: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '자신만의 특별한 매력이라고 생각하는 것은?',
      subtitle: '개인적 매력',
      emoji: '✨',
      options: [
        {
          id: 'frog',
          text: '겉으로는 평범해 보이지만 숨겨진 재능',
          description: '숨은 보석',
          emoji: '💎',
          scores: { cinderella: 1, redhood: 0, frog: 3, belle: 1, mermaid: 0, peter: 0 }
        },
        {
          id: 'belle',
          text: '깊이 있는 사고와 통찰력',
          description: '지적 매력',
          emoji: '🔍',
          scores: { cinderella: 0, redhood: 0, frog: 1, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'mermaid',
          text: '따뜻하고 순수한 마음',
          description: '순수한 마음',
          emoji: '💖',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 1 }
        },
        {
          id: 'redhood',
          text: '용감하고 당당한 모습',
          description: '용기와 자신감',
          emoji: '🦁',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 0, mermaid: 0, peter: 1 }
        }
      ]
    },
    {
      id: 9,
      text: '스트레스를 받을 때 하고 싶은 일은?',
      subtitle: '스트레스 해소법',
      emoji: '😤',
      options: [
        {
          id: 'peter',
          text: '상상 속 세계로 떠나기',
          description: '현실 도피',
          emoji: '🌙',
          scores: { cinderella: 0, redhood: 0, frog: 0, belle: 0, mermaid: 1, peter: 3 }
        },
        {
          id: 'redhood',
          text: '밖으로 나가서 활동적인 일 하기',
          description: '활동적 해소',
          emoji: '🏃‍♀️',
          scores: { cinderella: 0, redhood: 3, frog: 0, belle: 0, mermaid: 0, peter: 1 }
        },
        {
          id: 'belle',
          text: '책을 읽거나 새로운 것을 배우기',
          description: '지적 활동',
          emoji: '📚',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'cinderella',
          text: '집안일이나 정리정돈하기',
          description: '생산적 활동',
          emoji: '🧹',
          scores: { cinderella: 3, redhood: 0, frog: 0, belle: 0, mermaid: 0, peter: 0 }
        }
      ]
    },
    {
      id: 10,
      text: '인생에서 가장 중요하게 생각하는 가치는?',
      subtitle: '인생 가치관',
      emoji: '🌟',
      options: [
        {
          id: 'cinderella',
          text: '성실함과 끈기',
          description: '꾸준한 노력',
          emoji: '⭐',
          scores: { cinderella: 3, redhood: 0, frog: 1, belle: 1, mermaid: 0, peter: 0 }
        },
        {
          id: 'belle',
          text: '지혜와 진실',
          description: '참된 깨달음',
          emoji: '🔮',
          scores: { cinderella: 0, redhood: 0, frog: 1, belle: 3, mermaid: 0, peter: 0 }
        },
        {
          id: 'mermaid',
          text: '사랑과 희생',
          description: '헌신적 사랑',
          emoji: '💝',
          scores: { cinderella: 1, redhood: 0, frog: 0, belle: 0, mermaid: 3, peter: 0 }
        },
        {
          id: 'peter',
          text: '자유와 꿈',
          description: '무한한 가능성',
          emoji: '🌈',
          scores: { cinderella: 0, redhood: 1, frog: 0, belle: 0, mermaid: 0, peter: 3 }
        }
      ]
    }
  ],
  results: {
    cinderella: {
      id: 'cinderella',
      title: '🧚 신데렐라형',
      emoji: '🧚',
      description: '성실하고 인내심 강하며 반전의 힘을 지닌 주인공',
      detailedDescription: '당신은 신데렐라처럼 어떤 어려운 상황에서도 포기하지 않는 강인한 의지를 가진 사람입니다. 성실함과 인내심으로 묵묵히 노력하며, 다른 사람들을 위해 희생할 줄 아는 따뜻한 마음을 가지고 있습니다. 겉으로는 평범해 보일 수 있지만, 내면에는 놀라운 힘과 아름다움을 간직하고 있어 언젠가는 반드시 빛을 발하게 됩니다.',
      strengths: [
        '뛰어난 인내심과 끈기',
        '다른 사람을 배려하는 따뜻한 마음',
        '어려움을 극복하는 강인한 정신력',
        '성실하고 책임감 있는 태도'
      ],
      improvements: [
        '때로는 자신의 욕구도 중요하게 생각하세요',
        '도움을 요청하는 것도 용기입니다',
        '자신의 가치를 더 인정해보세요',
        '완벽하지 않아도 괜찮다는 것을 기억하세요'
      ],
      compatibleTypes: [
        { id: 'belle', title: '벨형', emoji: '🕯️', compatibility: 85 },
        { id: 'mermaid', title: '인어공주형', emoji: '🐠', compatibility: 80 },
        { id: 'frog', title: '개구리왕자형', emoji: '🐸', compatibility: 75 }
      ],
      traits: [
        { name: '성실함', emoji: '⭐', percentage: 96 },
        { name: '인내심', emoji: '🕊️', percentage: 94 },
        { name: '배려심', emoji: '💝', percentage: 92 },
        { name: '희생정신', emoji: '🤲', percentage: 90 }
      ]
    },
    redhood: {
      id: 'redhood',
      title: '🐺 빨간모자형',
      emoji: '🐺',
      description: '호기심과 용기를 겸비한 활발한 탐험가',
      detailedDescription: '당신은 빨간모자처럼 호기심이 많고 용감한 모험가입니다. 새로운 것에 대한 탐구심이 강하고, 위험을 무릅쓰고도 자신의 길을 가는 용기가 있습니다. 때로는 무모해 보일 수 있지만, 그 순수한 호기심과 용기로 다른 사람들에게 영감을 주고 새로운 가능성을 열어갑니다.',
      strengths: [
        '강한 호기심과 탐험 정신',
        '어떤 상황에서도 굴복하지 않는 용기',
        '활발하고 긍정적인 에너지',
        '새로운 도전을 두려워하지 않는 마음'
      ],
      improvements: [
        '때로는 신중함도 필요해요',
        '다른 사람의 조언에도 귀 기울여보세요',
        '안전을 고려하는 습관을 길러보세요',
        '계획성도 함께 기르면 좋겠어요'
      ],
      compatibleTypes: [
        { id: 'peter', title: '피터팬형', emoji: '🪄', compatibility: 88 },
        { id: 'frog', title: '개구리왕자형', emoji: '🐸', compatibility: 78 },
        { id: 'belle', title: '벨형', emoji: '🕯️', compatibility: 72 }
      ],
      traits: [
        { name: '용기', emoji: '🦁', percentage: 96 },
        { name: '호기심', emoji: '🔍', percentage: 94 },
        { name: '활력', emoji: '⚡', percentage: 92 },
        { name: '모험심', emoji: '🗺️', percentage: 95 }
      ]
    },
    frog: {
      id: 'frog',
      title: '🐸 개구리왕자형',
      emoji: '🐸',
      description: '겉보기와는 다른 내면의 매력을 가진 캐릭터',
      detailedDescription: '당신은 개구리왕자처럼 겉으로는 평범해 보이지만 내면에 특별한 매력과 능력을 숨기고 있는 사람입니다. 첫인상은 조용하고 수줍어 보일 수 있지만, 시간이 지날수록 당신의 진정한 가치와 매력이 드러납니다. 진실한 사랑과 관심을 받을 때 가장 아름다운 모습을 보여주며, 다른 사람들을 놀라게 할 만한 숨겨진 재능을 가지고 있습니다.',
      strengths: [
        '겸손하고 진실한 성격',
        '숨겨진 재능과 잠재력',
        '진정성 있는 인간관계 구축 능력',
        '깊이 있는 사고와 통찰력'
      ],
      improvements: [
        '자신감을 더 가져보세요',
        '재능을 숨기지 말고 표현해보세요',
        '적극적으로 나서는 연습을 해보세요',
        '자신의 가치를 인정하는 법을 배워보세요'
      ],
      compatibleTypes: [
        { id: 'belle', title: '벨형', emoji: '🕯️', compatibility: 90 },
        { id: 'cinderella', title: '신데렐라형', emoji: '🧚', compatibility: 75 },
        { id: 'mermaid', title: '인어공주형', emoji: '🐠', compatibility: 70 }
      ],
      traits: [
        { name: '겸손함', emoji: '🙏', percentage: 94 },
        { name: '잠재력', emoji: '💎', percentage: 96 },
        { name: '진실성', emoji: '🔮', percentage: 92 },
        { name: '신중함', emoji: '🤔', percentage: 88 }
      ]
    },
    belle: {
      id: 'belle',
      title: '🕯️ 벨형',
      emoji: '🕯️',
      description: '지적이고 본질을 꿰뚫는 통찰력 있는 인물',
      detailedDescription: '당신은 미녀와 야수의 벨처럼 지적이고 통찰력이 뛰어난 사람입니다. 겉모습에 현혹되지 않고 사물의 본질을 꿰뚫어 보는 능력이 있으며, 학습에 대한 열정과 지적 호기심이 강합니다. 다른 사람들이 보지 못하는 진실을 발견하고, 편견 없는 시각으로 세상을 바라보는 지혜를 가지고 있습니다.',
      strengths: [
        '뛰어난 통찰력과 판단력',
        '편견 없는 공정한 시각',
        '강한 학습 욕구와 지적 호기심',
        '본질을 꿰뚫어 보는 능력'
      ],
      improvements: [
        '때로는 감정적인 면도 중요해요',
        '완벽함보다는 인간적인 따뜻함을 추구해보세요',
        '다른 사람의 입장에서도 생각해보세요',
        '논리뿐만 아니라 직감도 믿어보세요'
      ],
      compatibleTypes: [
        { id: 'frog', title: '개구리왕자형', emoji: '🐸', compatibility: 90 },
        { id: 'cinderella', title: '신데렐라형', emoji: '🧚', compatibility: 85 },
        { id: 'mermaid', title: '인어공주형', emoji: '🐠', compatibility: 78 }
      ],
      traits: [
        { name: '지혜', emoji: '🧠', percentage: 96 },
        { name: '통찰력', emoji: '👁️', percentage: 95 },
        { name: '공정함', emoji: '⚖️', percentage: 92 },
        { name: '학습력', emoji: '📚', percentage: 94 }
      ]
    },
    mermaid: {
      id: 'mermaid',
      title: '🐠 인어공주형',
      emoji: '🐠',
      description: '사랑과 희생에 강한 감성파 주인공',
      detailedDescription: '당신은 인어공주처럼 사랑에 대한 순수한 마음과 희생정신을 가진 로맨틱한 사람입니다. 감정이 풍부하고 직관적이며, 사랑하는 사람을 위해서라면 무엇이든 할 수 있는 헌신적인 마음을 가지고 있습니다. 꿈과 이상을 추구하며, 아름다운 것들에 대한 감수성이 뛰어납니다.',
      strengths: [
        '순수하고 깊은 사랑의 마음',
        '뛰어난 감수성과 직관력',
        '꿈과 이상을 추구하는 낭만성',
        '헌신적이고 희생적인 정신'
      ],
      improvements: [
        '자신도 소중히 여기는 법을 배워보세요',
        '현실적인 판단력도 기워보세요',
        '감정에만 의존하지 말고 이성적 사고도 해보세요',
        '자신의 행복도 중요하다는 걸 기억하세요'
      ],
      compatibleTypes: [
        { id: 'cinderella', title: '신데렐라형', emoji: '🧚', compatibility: 80 },
        { id: 'peter', title: '피터팬형', emoji: '🪄', compatibility: 78 },
        { id: 'belle', title: '벨형', emoji: '🕯️', compatibility: 78 }
      ],
      traits: [
        { name: '사랑', emoji: '💖', percentage: 96 },
        { name: '감수성', emoji: '🌊', percentage: 94 },
        { name: '희생정신', emoji: '💝', percentage: 92 },
        { name: '순수함', emoji: '🐚', percentage: 95 }
      ]
    },
    peter: {
      id: 'peter',
      title: '🪄 피터팬형',
      emoji: '🪄',
      description: '현실보다 상상을 믿는 자유로운 영혼',
      detailedDescription: '당신은 피터팬처럼 영원히 젊고 자유로운 영혼을 가진 사람입니다. 상상력이 풍부하고 창의적이며, 어른이 되어서도 순수함과 동심을 잃지 않습니다. 현실의 제약에 얽매이지 않고 자신만의 세계에서 꿈을 키우며, 다른 사람들에게도 꿈과 희망을 선사합니다.',
      strengths: [
        '무한한 상상력과 창의성',
        '순수하고 자유로운 정신',
        '긍정적이고 낙관적인 성격',
        '꿈과 희망을 잃지 않는 마음'
      ],
      improvements: [
        '현실적인 책임감도 필요해요',
        '다른 사람의 감정도 배려해보세요',
        '때로는 성숙한 판단이 필요할 수 있어요',
        '계획성과 지속성을 기르는 것도 좋겠어요'
      ],
      compatibleTypes: [
        { id: 'redhood', title: '빨간모자형', emoji: '🐺', compatibility: 88 },
        { id: 'mermaid', title: '인어공주형', emoji: '🐠', compatibility: 78 },
        { id: 'belle', title: '벨형', emoji: '🕯️', compatibility: 70 }
      ],
      traits: [
        { name: '상상력', emoji: '🌙', percentage: 96 },
        { name: '자유로움', emoji: '🕊️', percentage: 95 },
        { name: '순수함', emoji: '✨', percentage: 94 },
        { name: '창의성', emoji: '🎨', percentage: 92 }
      ]
    }
  }
};