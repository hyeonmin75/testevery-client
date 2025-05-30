// 이 파일은 더 이상 사용되지 않습니다. tests/index.ts를 사용하세요.
// 하위 호환성을 위해 새로운 구조를 re-export합니다.
export { tests } from './tests/index';
    emoji: '🦁',
    color: 'orange',
    duration: '3-5분',
    questionCount: 12,
    participants: 1247,
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
  },
  love: {
    id: 'love',
    title: '연애 스타일 테스트',
    description: '나만의 특별한 사랑 방식을 알아보세요',
    emoji: '💕',
    color: 'pink',
    duration: '4-6분',
    questionCount: 15,
    participants: 2156,
    questions: [
      {
        id: 1,
        text: '이상형과 처음 만났을 때 당신의 반응은?',
        subtitle: '첫인상에서의 행동을 선택해주세요',
        emoji: '😍',
        options: [
          {
            id: 'a',
            text: '적극적으로 다가가서 대화를 시도한다',
            description: '직접적이고 솔직한 어프로치를 선호해요',
            emoji: '🗣️',
            scores: { passionate: 3, romantic: 1, realistic: 0, free: 2 }
          },
          {
            id: 'b',
            text: '자연스럽게 관심을 표현하며 기회를 만든다',
            description: '로맨틱하고 섬세한 접근을 해요',
            emoji: '🌹',
            scores: { passionate: 1, romantic: 3, realistic: 1, free: 0 }
          },
          {
            id: 'c',
            text: '신중하게 상대방을 관찰하고 파악한다',
            description: '현실적이고 분석적으로 접근해요',
            emoji: '🔍',
            scores: { passionate: 0, romantic: 0, realistic: 3, free: 1 }
          },
          {
            id: 'd',
            text: '부담스럽지 않게 자연스럽게 친해진다',
            description: '자유롭고 편안한 관계를 추구해요',
            emoji: '😊',
            scores: { passionate: 1, romantic: 2, realistic: 1, free: 3 }
          }
        ]
      }
    ],
    results: {
      passionate: {
        id: 'passionate',
        title: '열정적인 연인',
        emoji: '🔥',
        description: '뜨겁고 진실한 사랑을 하는 당신!',
        detailedDescription: '사랑에 있어서 진실하고 열정적인 마음을 가진 당신은 상대방에게 온 마음을 다해 사랑을 표현합니다.',
        strengths: ['진실한 마음', '열정적인 표현', '확실한 의사표현', '깊은 사랑'],
        improvements: ['때로는 여유를 가져보세요', '상대방의 공간을 존중해보세요'],
        compatibleTypes: [
          { id: 'romantic', title: '로맨틱', emoji: '🌹', compatibility: 90 }
        ],
        traits: [
          { name: '열정', emoji: '🔥', percentage: 95 },
          { name: '진실성', emoji: '💎', percentage: 90 }
        ]
      },
      romantic: {
        id: 'romantic',
        title: '로맨틱한 연인',
        emoji: '🌹',
        description: '아름다운 사랑을 꿈꾸는 당신!',
        detailedDescription: '로맨틱하고 감성적인 사랑을 추구하는 당신은 특별한 순간들을 만들어가는 것을 좋아합니다.',
        strengths: ['감성적인 표현', '특별한 순간 연출', '섬세한 배려', '아름다운 추억'],
        improvements: ['현실적인 면도 고려해보세요', '소통을 더 늘려보세요'],
        compatibleTypes: [
          { id: 'passionate', title: '열정적', emoji: '🔥', compatibility: 88 }
        ],
        traits: [
          { name: '로맨스', emoji: '🌹', percentage: 95 },
          { name: '감성', emoji: '🎭', percentage: 88 }
        ]
      },
      realistic: {
        id: 'realistic',
        title: '현실적인 연인',
        emoji: '💎',
        description: '안정적이고 신중한 사랑을 하는 당신!',
        detailedDescription: '현실적이고 안정적인 관계를 추구하는 당신은 장기적인 관점에서 사랑을 바라봅니다.',
        strengths: ['안정적인 관계', '신중한 판단', '책임감', '장기적 관점'],
        improvements: ['때로는 감성도 표현해보세요', '로맨틱한 순간도 만들어보세요'],
        compatibleTypes: [
          { id: 'free', title: '자유로운', emoji: '🌊', compatibility: 85 }
        ],
        traits: [
          { name: '안정성', emoji: '🛡️', percentage: 95 },
          { name: '신중함', emoji: '⚖️', percentage: 90 }
        ]
      },
      free: {
        id: 'free',
        title: '자유로운 연인',
        emoji: '🌊',
        description: '편안하고 자연스러운 사랑을 하는 당신!',
        detailedDescription: '자유롭고 편안한 관계를 추구하는 당신은 서로의 개성을 존중하며 사랑합니다.',
        strengths: ['자유로운 관계', '개성 존중', '편안한 소통', '균형감'],
        improvements: ['때로는 깊은 감정도 표현해보세요', '더 적극적으로 다가가보세요'],
        compatibleTypes: [
          { id: 'realistic', title: '현실적', emoji: '💎', compatibility: 82 }
        ],
        traits: [
          { name: '자유로움', emoji: '🌊', percentage: 95 },
          { name: '균형감', emoji: '⚖️', percentage: 88 }
        ]
      }
    }
  },
  travel: {
    id: 'travel',
    title: '여행 스타일 테스트',
    description: '당신만의 여행 스타일을 찾아보세요',
    emoji: '🗺️',
    color: 'blue',
    duration: '3-4분',
    questionCount: 10,
    participants: 1823,
    questions: [
      {
        id: 1,
        text: '여행 계획을 세울 때 당신의 방식은?',
        subtitle: '평소 여행 준비 스타일을 선택해주세요',
        emoji: '📋',
        options: [
          {
            id: 'a',
            text: '세세한 일정까지 미리 계획한다',
            description: '완벽한 계획으로 안전하고 알찬 여행을 해요',
            emoji: '📅',
            scores: { planner: 3, relaxed: 0, adventurer: 0, cultural: 2 }
          },
          {
            id: 'b',
            text: '대략적인 방향만 정하고 즉흥적으로 움직인다',
            description: '자유롭고 유연한 여행을 선호해요',
            emoji: '🎲',
            scores: { planner: 0, relaxed: 2, adventurer: 3, cultural: 1 }
          },
          {
            id: 'c',
            text: '현지 문화와 역사를 중심으로 계획한다',
            description: '의미 있고 교육적인 여행을 추구해요',
            emoji: '🏛️',
            scores: { planner: 2, relaxed: 1, adventurer: 1, cultural: 3 }
          },
          {
            id: 'd',
            text: '휴식과 힐링 위주로 계획한다',
            description: '편안하고 여유로운 시간을 보내고 싶어해요',
            emoji: '🧘',
            scores: { planner: 1, relaxed: 3, adventurer: 0, cultural: 1 }
          }
        ]
      }
    ],
    results: {
      planner: {
        id: 'planner',
        title: '계획형 여행자',
        emoji: '📋',
        description: '체계적이고 완벽한 여행을 추구하는 당신!',
        detailedDescription: '철저한 계획과 준비를 통해 안전하고 알찬 여행을 만들어가는 체계적인 여행자입니다.',
        strengths: ['완벽한 계획', '효율적인 일정', '안전한 여행', '알찬 경험'],
        improvements: ['때로는 즉흥적인 재미도 즐겨보세요', '예상치 못한 상황도 받아들여보세요'],
        compatibleTypes: [
          { id: 'cultural', title: '문화탐방', emoji: '🏛️', compatibility: 90 }
        ],
        traits: [
          { name: '계획성', emoji: '📋', percentage: 95 },
          { name: '체계성', emoji: '🎯', percentage: 90 }
        ]
      },
      relaxed: {
        id: 'relaxed',
        title: '힐링형 여행자',
        emoji: '🧘',
        description: '여유롭고 편안한 여행을 즐기는 당신!',
        detailedDescription: '바쁜 일상에서 벗어나 진정한 휴식과 힐링을 추구하는 여유로운 여행자입니다.',
        strengths: ['완전한 휴식', '스트레스 해소', '여유로운 일정', '마음의 평화'],
        improvements: ['새로운 경험도 시도해보세요', '활동적인 재미도 찾아보세요'],
        compatibleTypes: [
          { id: 'planner', title: '계획형', emoji: '📋', compatibility: 85 }
        ],
        traits: [
          { name: '여유로움', emoji: '🧘', percentage: 95 },
          { name: '평온함', emoji: '☮️', percentage: 88 }
        ]
      },
      adventurer: {
        id: 'adventurer',
        title: '모험형 여행자',
        emoji: '🎪',
        description: '스릴과 모험을 추구하는 당신!',
        detailedDescription: '새로운 도전과 짜릿한 경험을 통해 삶의 활력을 얻는 모험적인 여행자입니다.',
        strengths: ['새로운 도전', '독특한 경험', '활동적인 여행', '용기와 모험심'],
        improvements: ['안전도 고려해보세요', '때로는 휴식도 필요해요'],
        compatibleTypes: [
          { id: 'cultural', title: '문화탐방', emoji: '🏛️', compatibility: 82 }
        ],
        traits: [
          { name: '모험심', emoji: '🎪', percentage: 95 },
          { name: '도전정신', emoji: '⛰️', percentage: 90 }
        ]
      },
      cultural: {
        id: 'cultural',
        title: '문화탐방형 여행자',
        emoji: '🏛️',
        description: '역사와 문화를 탐구하는 당신!',
        detailedDescription: '각 지역의 독특한 문화와 역사를 깊이 있게 경험하고 배우는 것을 추구하는 지적인 여행자입니다.',
        strengths: ['깊이 있는 경험', '문화적 이해', '의미 있는 여행', '지식 확장'],
        improvements: ['때로는 단순한 재미도 즐겨보세요', '현지인들과 더 교류해보세요'],
        compatibleTypes: [
          { id: 'planner', title: '계획형', emoji: '📋', compatibility: 88 }
        ],
        traits: [
          { name: '호기심', emoji: '🔍', percentage: 95 },
          { name: '학습욕구', emoji: '📚', percentage: 90 }
        ]
      }
    }
  },
  color: {
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
            scores: { red: 1, blue: 0, yellow: 3, green: 2 }
          },
          {
            id: 'd',
            text: '초록색 - 자연과 조화',
            description: '조화롭고 균형잡힌 성향을 가지고 있어요',
            emoji: '🟢',
            scores: { red: 0, blue: 2, yellow: 1, green: 3 }
          }
        ]
      }
    ],
    results: {
      red: {
        id: 'red',
        title: '열정의 빨간색',
        emoji: '🔴',
        description: '에너지 넘치고 열정적인 당신!',
        detailedDescription: '강렬한 에너지와 추진력을 가진 당신은 무엇이든 열정적으로 임하며 주변에 활력을 불어넣습니다.',
        strengths: ['강한 추진력', '리더십', '열정적인 성격', '적극적인 행동력'],
        improvements: ['때로는 차분함도 필요해요', '다른 사람의 속도도 고려해보세요'],
        compatibleTypes: [
          { id: 'yellow', title: '노란색', emoji: '🟡', compatibility: 88 }
        ],
        traits: [
          { name: '열정', emoji: '🔥', percentage: 95 },
          { name: '에너지', emoji: '⚡', percentage: 90 }
        ]
      },
      blue: {
        id: 'blue',
        title: '평온의 파란색',
        emoji: '🔵',
        description: '차분하고 신뢰할 수 있는 당신!',
        detailedDescription: '안정적이고 신뢰할 수 있는 성격으로 주변 사람들에게 평안함과 신뢰를 주는 존재입니다.',
        strengths: ['높은 신뢰도', '차분한 판단력', '안정적인 성격', '깊은 사고력'],
        improvements: ['때로는 적극성도 발휘해보세요', '새로운 도전도 시도해보세요'],
        compatibleTypes: [
          { id: 'green', title: '초록색', emoji: '🟢', compatibility: 90 }
        ],
        traits: [
          { name: '안정성', emoji: '🛡️', percentage: 95 },
          { name: '신뢰도', emoji: '🤝', percentage: 92 }
        ]
      },
      yellow: {
        id: 'yellow',
        title: '창의의 노란색',
        emoji: '🟡',
        description: '밝고 창의적인 당신!',
        detailedDescription: '밝은 에너지와 창의적인 아이디어로 주변을 즐겁게 만드는 긍정적인 성격의 소유자입니다.',
        strengths: ['뛰어난 창의력', '밝은 에너지', '긍정적인 사고', '독창적인 아이디어'],
        improvements: ['때로는 현실적인 면도 고려해보세요', '꾸준함도 기를 수 있어요'],
        compatibleTypes: [
          { id: 'red', title: '빨간색', emoji: '🔴', compatibility: 85 }
        ],
        traits: [
          { name: '창의성', emoji: '💡', percentage: 95 },
          { name: '밝음', emoji: '☀️', percentage: 90 }
        ]
      },
      green: {
        id: 'green',
        title: '조화의 초록색',
        emoji: '🟢',
        description: '균형잡히고 조화로운 당신!',
        detailedDescription: '모든 면에서 균형을 추구하며 주변과 조화롭게 어울리는 평화로운 성격의 소유자입니다.',
        strengths: ['뛰어난 균형감', '조화로운 관계', '평화로운 성격', '중재 능력'],
        improvements: ['때로는 자신의 의견도 강하게 표현해보세요', '리더십도 발휘해보세요'],
        compatibleTypes: [
          { id: 'blue', title: '파란색', emoji: '🔵', compatibility: 88 }
        ],
        traits: [
          { name: '균형감', emoji: '⚖️', percentage: 95 },
          { name: '조화', emoji: '🕊️', percentage: 92 }
        ]
      }
    }
  }
};
