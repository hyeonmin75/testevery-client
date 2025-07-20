import { TestData } from '../../types/test';

export const egenTetoTest: TestData = {
  id: 'egen_teto',
  title: '에겐-테토 성격 유형 테스트',
  description: '호르몬 특성으로 알아보는 나의 연애 성향과 성격 유형',
  emoji: '💝',
  color: 'rose',
  duration: '3-4분',
  questionCount: 12,
  participants: 127843,
  questions: [
    {
      id: 1,
      text: '새로운 모임에서 처음 만난 사람들과 어떻게 지내나요?',
      subtitle: '사회적 상황에서의 행동 패턴',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '먼저 다가가서 대화를 시작한다',
          description: '적극적이고 외향적인 성향',
          emoji: '🗣️',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 2 }
        },
        {
          id: 'b',
          text: '상대방이 먼저 말을 걸어올 때까지 기다린다',
          description: '조용하고 신중한 접근',
          emoji: '🤐',
          scores: { egen_male: 3, teto_male: 0, egen_female: 2, teto_female: 0 }
        },
        {
          id: 'c',
          text: '자연스럽게 분위기를 파악하며 적절히 참여한다',
          description: '상황에 따라 유연하게 대처',
          emoji: '👀',
          scores: { egen_male: 1, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'd',
          text: '리더십을 발휘해서 분위기를 이끈다',
          description: '주도적이고 카리스마 있는 행동',
          emoji: '👑',
          scores: { egen_male: 0, teto_male: 2, egen_female: 0, teto_female: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '연애에서 가장 중요하게 생각하는 것은?',
      subtitle: '연애 가치관과 우선순위',
      emoji: '💕',
      options: [
        {
          id: 'a',
          text: '깊은 감정적 교감과 이해',
          description: '마음과 마음이 통하는 관계',
          emoji: '💫',
          scores: { egen_male: 3, teto_male: 0, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '서로를 존중하는 평등한 관계',
          description: '상호 존중과 독립성',
          emoji: '⚖️',
          scores: { egen_male: 1, teto_male: 1, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '안정적이고 신뢰할 수 있는 관계',
          description: '믿음과 안정감이 우선',
          emoji: '🏠',
          scores: { egen_male: 2, teto_male: 2, egen_female: 2, teto_female: 1 }
        },
        {
          id: 'd',
          text: '서로의 성장을 도와주는 관계',
          description: '함께 발전하는 파트너십',
          emoji: '🌱',
          scores: { egen_male: 1, teto_male: 3, egen_female: 1, teto_female: 2 }
        }
      ]
    },
    {
      id: 3,
      text: '갈등이 생겼을 때 어떻게 해결하나요?',
      subtitle: '문제 해결 방식과 갈등 대처법',
      emoji: '🤝',
      options: [
        {
          id: 'a',
          text: '직접적으로 문제를 제기하고 해결책을 찾는다',
          description: '솔직하고 직설적인 접근',
          emoji: '💬',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'b',
          text: '상대방의 감정을 먼저 헤아려보고 조심스럽게 접근한다',
          description: '배려심 있고 섬세한 해결',
          emoji: '🤲',
          scores: { egen_male: 3, teto_male: 0, egen_female: 3, teto_female: 0 }
        },
        {
          id: 'c',
          text: '시간을 두고 감정이 가라앉기를 기다린다',
          description: '인내심 있고 신중한 대처',
          emoji: '⏰',
          scores: { egen_male: 2, teto_male: 1, egen_female: 2, teto_female: 1 }
        },
        {
          id: 'd',
          text: '논리적으로 분석해서 합리적인 해결책을 제시한다',
          description: '이성적이고 체계적인 접근',
          emoji: '📊',
          scores: { egen_male: 1, teto_male: 2, egen_female: 0, teto_female: 2 }
        }
      ]
    },
    {
      id: 4,
      text: '이성에게 관심을 표현하는 방식은?',
      subtitle: '연애 초기 어프로치 스타일',
      emoji: '😍',
      options: [
        {
          id: 'a',
          text: '직접적으로 관심을 표현하고 데이트를 제안한다',
          description: '적극적이고 당당한 어프로치',
          emoji: '💪',
          scores: { egen_male: 0, teto_male: 3, egen_female: 0, teto_female: 3 }
        },
        {
          id: 'b',
          text: '은근히 관심을 표현하며 상대방의 반응을 살핀다',
          description: '조심스럽고 신중한 접근',
          emoji: '👀',
          scores: { egen_male: 3, teto_male: 0, egen_female: 3, teto_female: 0 }
        },
        {
          id: 'c',
          text: '친구로 시작해서 자연스럽게 발전시킨다',
          description: '단계적이고 안전한 접근',
          emoji: '🤝',
          scores: { egen_male: 2, teto_male: 1, egen_female: 2, teto_female: 1 }
        },
        {
          id: 'd',
          text: '상대방이 먼저 신호를 보내기를 기다린다',
          description: '수동적이고 보수적인 접근',
          emoji: '🙈',
          scores: { egen_male: 1, teto_male: 0, egen_female: 1, teto_female: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '데이트 장소를 정할 때 어떤 기준으로 선택하나요?',
      subtitle: '데이트 선호도와 계획 스타일',
      emoji: '📍',
      options: [
        {
          id: 'a',
          text: '조용하고 대화하기 좋은 분위기 있는 곳',
          description: '감성적이고 로맨틱한 분위기',
          emoji: '🕯️',
          scores: { egen_male: 3, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '활동적이고 재미있는 체험이 가능한 곳',
          description: '활동적이고 에너지 넘치는 곳',
          emoji: '🎢',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '편안하고 부담없이 즐길 수 있는 곳',
          description: '편안하고 자연스러운 분위기',
          emoji: '☕',
          scores: { egen_male: 2, teto_male: 0, egen_female: 2, teto_female: 0 }
        },
        {
          id: 'd',
          text: '새롭고 특별한 경험을 할 수 있는 곳',
          description: '독특하고 인상적인 경험',
          emoji: '✨',
          scores: { egen_male: 1, teto_male: 2, egen_female: 0, teto_female: 2 }
        }
      ]
    },
    {
      id: 6,
      text: '연인과 의견이 다를 때 어떻게 하나요?',
      subtitle: '연애 관계에서의 의사결정 방식',
      emoji: '🤔',
      options: [
        {
          id: 'a',
          text: '서로의 의견을 충분히 듣고 타협점을 찾는다',
          description: '조화롭고 균형 잡힌 해결',
          emoji: '⚖️',
          scores: { egen_male: 3, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '논리적으로 설득하거나 더 나은 방법을 제시한다',
          description: '합리적이고 주도적인 해결',
          emoji: '🧠',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '상대방의 의견을 존중하며 양보한다',
          description: '배려심 있고 겸손한 태도',
          emoji: '🙏',
          scores: { egen_male: 2, teto_male: 0, egen_female: 2, teto_female: 0 }
        },
        {
          id: 'd',
          text: '각자의 개성을 인정하고 다름을 받아들인다',
          description: '독립적이고 개방적인 태도',
          emoji: '🎨',
          scores: { egen_male: 1, teto_male: 2, egen_female: 1, teto_female: 2 }
        }
      ]
    },
    {
      id: 7,
      text: '스트레스를 받을 때 주로 어떻게 해소하나요?',
      subtitle: '스트레스 대처 방식과 감정 조절',
      emoji: '😤',
      options: [
        {
          id: 'a',
          text: '혼자만의 시간을 가지며 조용히 생각한다',
          description: '내향적이고 성찰적인 방식',
          emoji: '🤫',
          scores: { egen_male: 3, teto_male: 0, egen_female: 2, teto_female: 0 }
        },
        {
          id: 'b',
          text: '운동이나 활동적인 취미로 에너지를 발산한다',
          description: '활동적이고 에너지 발산형',
          emoji: '🏃',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '가족이나 친구들과 이야기하며 위로받는다',
          description: '관계 지향적이고 소통형',
          emoji: '👫',
          scores: { egen_male: 2, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'd',
          text: '새로운 도전이나 목표를 설정해서 집중한다',
          description: '목표 지향적이고 건설적',
          emoji: '🎯',
          scores: { egen_male: 1, teto_male: 2, egen_female: 0, teto_female: 2 }
        }
      ]
    },
    {
      id: 8,
      text: '친구들 사이에서 주로 어떤 역할을 하나요?',
      subtitle: '사회적 관계에서의 포지션',
      emoji: '👭',
      options: [
        {
          id: 'a',
          text: '분위기를 이끌고 모임을 주도한다',
          description: '리더십 있고 추진력 있는 역할',
          emoji: '👑',
          scores: { egen_male: 0, teto_male: 3, egen_female: 0, teto_female: 3 }
        },
        {
          id: 'b',
          text: '조용히 듣고 공감하며 조언을 해준다',
          description: '따뜻하고 지지적인 역할',
          emoji: '🤗',
          scores: { egen_male: 3, teto_male: 0, egen_female: 3, teto_female: 0 }
        },
        {
          id: 'c',
          text: '분위기를 살피며 적절히 참여한다',
          description: '균형 잡힌 중재자 역할',
          emoji: '😊',
          scores: { egen_male: 2, teto_male: 1, egen_female: 2, teto_female: 1 }
        },
        {
          id: 'd',
          text: '필요할 때 도움을 주고 문제를 해결한다',
          description: '실용적이고 해결사 역할',
          emoji: '🛠️',
          scores: { egen_male: 1, teto_male: 2, egen_female: 1, teto_female: 2 }
        }
      ]
    },
    {
      id: 9,
      text: '중요한 결정을 내려야 할 때 어떻게 하나요?',
      subtitle: '의사결정 과정과 판단 기준',
      emoji: '🔍',
      options: [
        {
          id: 'a',
          text: '직감과 감정에 의존해서 결정한다',
          description: '감성적이고 직관적인 판단',
          emoji: '💭',
          scores: { egen_male: 3, teto_male: 0, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '논리적으로 분석하고 계산해서 결정한다',
          description: '이성적이고 체계적인 판단',
          emoji: '📊',
          scores: { egen_male: 0, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '주변 사람들의 조언을 구하고 의견을 참고한다',
          description: '관계 지향적이고 신중한 판단',
          emoji: '🗣️',
          scores: { egen_male: 2, teto_male: 1, egen_female: 2, teto_female: 0 }
        },
        {
          id: 'd',
          text: '충분한 정보를 수집한 후 신중히 결정한다',
          description: '정보 기반의 체계적 판단',
          emoji: '📚',
          scores: { egen_male: 1, teto_male: 2, egen_female: 0, teto_female: 2 }
        }
      ]
    },
    {
      id: 10,
      text: '연인에게 사랑을 표현하는 방식은?',
      subtitle: '애정 표현 스타일과 사랑의 언어',
      emoji: '💌',
      options: [
        {
          id: 'a',
          text: '말로 사랑한다고 자주 표현한다',
          description: '언어적 표현을 통한 애정',
          emoji: '💬',
          scores: { egen_male: 2, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '행동으로 보여주며 실질적인 도움을 준다',
          description: '행동으로 증명하는 사랑',
          emoji: '🤝',
          scores: { egen_male: 1, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '특별한 선물이나 깜짝 이벤트를 준비한다',
          description: '창의적이고 로맨틱한 표현',
          emoji: '🎁',
          scores: { egen_male: 1, teto_male: 2, egen_female: 2, teto_female: 2 }
        },
        {
          id: 'd',
          text: '스킨십이나 물리적 접촉으로 표현한다',
          description: '신체적 접촉을 통한 애정',
          emoji: '🤗',
          scores: { egen_male: 3, teto_male: 0, egen_female: 0, teto_female: 0 }
        }
      ]
    },
    {
      id: 11,
      text: '연인과 함께 보내는 시간에 대한 생각은?',
      subtitle: '연애 관계에서의 시간 배분과 가치관',
      emoji: '⏰',
      options: [
        {
          id: 'a',
          text: '가능한 한 많은 시간을 함께 보내고 싶다',
          description: '애착이 강하고 관계 중심적',
          emoji: '💕',
          scores: { egen_male: 3, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '함께하는 시간과 개인 시간의 균형이 중요하다',
          description: '독립적이고 균형 잡힌 관계',
          emoji: '⚖️',
          scores: { egen_male: 1, teto_male: 2, egen_female: 2, teto_female: 3 }
        },
        {
          id: 'c',
          text: '서로의 일정을 존중하며 자연스럽게 만난다',
          description: '상호 존중과 배려심',
          emoji: '🤝',
          scores: { egen_male: 2, teto_male: 1, egen_female: 1, teto_female: 1 }
        },
        {
          id: 'd',
          text: '특별한 날이나 계획이 있을 때 집중적으로 만난다',
          description: '목표 지향적이고 효율적',
          emoji: '📅',
          scores: { egen_male: 0, teto_male: 3, egen_female: 0, teto_female: 2 }
        }
      ]
    },
    {
      id: 12,
      text: '이상적인 연애 관계는 어떤 모습인가요?',
      subtitle: '연애 관계에 대한 궁극적 가치관',
      emoji: '🌟',
      options: [
        {
          id: 'a',
          text: '서로의 마음을 완전히 이해하고 소통하는 관계',
          description: '정신적 교감과 깊은 이해',
          emoji: '🧠',
          scores: { egen_male: 3, teto_male: 1, egen_female: 3, teto_female: 1 }
        },
        {
          id: 'b',
          text: '서로를 자극하고 성장시키는 파트너십',
          description: '상호 발전과 동기부여',
          emoji: '📈',
          scores: { egen_male: 1, teto_male: 3, egen_female: 1, teto_female: 3 }
        },
        {
          id: 'c',
          text: '편안하고 안정적인 동반자 관계',
          description: '안정감과 신뢰 기반',
          emoji: '🏠',
          scores: { egen_male: 2, teto_male: 1, egen_female: 2, teto_female: 1 }
        },
        {
          id: 'd',
          text: '각자의 개성을 존중하면서도 함께하는 관계',
          description: '독립성과 유대감의 조화',
          emoji: '🎭',
          scores: { egen_male: 1, teto_male: 2, egen_female: 1, teto_female: 2 }
        }
      ]
    }
  ],
  results: {
    egen_male: {
      id: 'egen_male',
      title: '에겐남 (에스트로겐 남성)',
      emoji: '🌸',
      description: '감정적 섬세함과 내향적 매력을 가진 당신',
      detailedDescription: '에겐남인 당신은 감정적으로 매우 섬세하고 깊이 있는 사람입니다. 타인의 감정을 잘 읽고 공감하는 능력이 뛰어나며, 조화로운 관계를 중시합니다. 연애에서는 깊은 정서적 교감을 추구하며, 상대방을 세심하게 배려합니다.',
      strengths: [
        '뛰어난 감정적 공감 능력',
        '세심하고 배려심 많은 성격',
        '깊이 있는 대화와 관계 선호',
        '조화롭고 평화로운 분위기 조성',
        '예술적 감성과 창의력'
      ],
      improvements: [
        '때로는 더 적극적인 표현이 필요할 수 있음',
        '갈등 상황에서 직접적 소통 연습',
        '자신의 의견을 명확히 표현하는 능력 개발',
        '스트레스 상황에서의 대처 능력 향상'
      ],
      compatibleTypes: [
        {
          id: 'teto_female',
          title: '테토녀',
          emoji: '💪',
          compatibility: 85
        },
        {
          id: 'egen_female',
          title: '에겐녀',
          emoji: '💖',
          compatibility: 70
        }
      ],
      traits: [
        {
          name: '감정적 섬세함',
          emoji: '🌸',
          percentage: 90
        },
        {
          name: '배려심',
          emoji: '🤗',
          percentage: 85
        },
        {
          name: '조화 추구',
          emoji: '☮️',
          percentage: 80
        },
        {
          name: '예술적 감성',
          emoji: '🎨',
          percentage: 75
        }
      ],
      celebrities: ['차은우', '정해인', '최우식', '박보검'],
      loveStyle: '깊은 감정적 교감을 통한 로맨틱한 사랑',
      bestMatch: '테토녀 - 서로의 부족한 부분을 보완하는 완벽한 케미',
      animalMetaphor: '우아한 고양이 - 섬세하고 감성적이며 조용한 매력',
      percentage: 28,
      rarity: '흔하지 않은 유형'
    },
    teto_male: {
      id: 'teto_male',
      title: '테토남 (테스토스테론 남성)',
      emoji: '💪',
      description: '강한 리더십과 추진력을 가진 당신',
      detailedDescription: '테토남인 당신은 자연스러운 리더십과 강한 추진력을 가진 사람입니다. 직설적이고 목표 지향적이며, 자신감 넘치는 행동으로 주변 사람들에게 영향력을 발휘합니다. 연애에서는 주도적이고 적극적인 모습을 보이며, 파트너를 보호하고 이끌어가려 합니다.',
      strengths: [
        '강한 리더십과 카리스마',
        '목표 지향적이고 추진력 있음',
        '직설적이고 솔직한 소통',
        '자신감 있고 당당한 태도',
        '문제 해결 능력이 뛰어남'
      ],
      improvements: [
        '상대방의 감정을 더 세심하게 고려',
        '때로는 부드러운 접근이 필요',
        '인내심을 가지고 기다리는 연습',
        '타인의 의견을 경청하는 자세'
      ],
      compatibleTypes: [
        {
          id: 'egen_female',
          title: '에겐녀',
          emoji: '💖',
          compatibility: 90
        },
        {
          id: 'teto_female',
          title: '테토녀',
          emoji: '💪',
          compatibility: 65
        }
      ],
      traits: [
        {
          name: '리더십',
          emoji: '👑',
          percentage: 95
        },
        {
          name: '추진력',
          emoji: '🚀',
          percentage: 90
        },
        {
          name: '자신감',
          emoji: '💪',
          percentage: 85
        },
        {
          name: '직설성',
          emoji: '💬',
          percentage: 80
        }
      ],
      celebrities: ['김종국', '옥택연', '안보현', '강동원'],
      loveStyle: '보호적이고 주도적인 남성적 사랑',
      bestMatch: '에겐녀 - 자신의 강함을 인정하고 의지하는 완벽한 상대',
      animalMetaphor: '당당한 사자 - 강한 카리스마와 리더십을 가진 존재',
      percentage: 35,
      rarity: '일반적인 유형'
    },
    egen_female: {
      id: 'egen_female',
      title: '에겐녀 (에스트로겐 여성)',
      emoji: '💖',
      description: '따뜻한 감성과 관계 중심적인 당신',
      detailedDescription: '에겐녀인 당신은 따뜻하고 감성적인 매력을 가진 사람입니다. 인간관계를 매우 중시하며, 타인을 돌보고 챙기는 것을 자연스럽게 여깁니다. 연애에서는 깊은 감정적 유대를 중시하고, 상대방과의 조화로운 관계를 추구합니다.',
      strengths: [
        '뛰어난 공감 능력과 배려심',
        '따뜻하고 포용적인 성격',
        '관계 중심적이고 소통을 잘함',
        '직감적이고 감각적인 판단',
        '세심하고 디테일을 잘 파악'
      ],
      improvements: [
        '때로는 더 독립적인 모습이 필요',
        '자신의 의견을 명확히 표현하기',
        '갈등 상황에서 더 적극적인 대처',
        '논리적 사고력 보완'
      ],
      compatibleTypes: [
        {
          id: 'teto_male',
          title: '테토남',
          emoji: '💪',
          compatibility: 90
        },
        {
          id: 'egen_male',
          title: '에겐남',
          emoji: '🌸',
          compatibility: 70
        }
      ],
      traits: [
        {
          name: '감정 표현',
          emoji: '💕',
          percentage: 90
        },
        {
          name: '관계 중심',
          emoji: '👥',
          percentage: 85
        },
        {
          name: '직감력',
          emoji: '✨',
          percentage: 80
        },
        {
          name: '돌봄 본능',
          emoji: '🤱',
          percentage: 85
        }
      ],
      celebrities: ['아이유', '수지', '김고은', '박소담'],
      loveStyle: '따뜻하고 헌신적인 사랑',
      bestMatch: '테토남 - 강한 남성성에 끌리며 서로를 보완하는 관계',
      animalMetaphor: '다정한 강아지 - 충성스럽고 애정이 많은 존재',
      percentage: 32,
      rarity: '일반적인 유형'
    },
    teto_female: {
      id: 'teto_female',
      title: '테토녀 (테스토스테론 여성)',
      emoji: '🔥',
      description: '독립적이고 주도적인 당신',
      detailedDescription: '테토녀인 당신은 독립적이고 주도적인 성격을 가진 사람입니다. 자신의 의견을 명확히 표현하며, 경쟁을 즐기고 목표 달성을 위해 노력합니다. 연애에서는 평등한 관계를 추구하며, 서로를 존중하는 파트너십을 중시합니다.',
      strengths: [
        '강한 독립성과 자립심',
        '직설적이고 솔직한 소통',
        '경쟁심과 도전 정신',
        '논리적이고 합리적인 사고',
        '활동적이고 에너지 넘침'
      ],
      improvements: [
        '때로는 더 부드러운 접근이 필요',
        '상대방의 감정을 더 세심하게 배려',
        '인내심을 가지고 기다리는 연습',
        '감정적 표현력 향상'
      ],
      compatibleTypes: [
        {
          id: 'teto_male',
          title: '테토남',
          emoji: '💪',
          compatibility: 80
        },
        {
          id: 'egen_male',
          title: '에겐남',
          emoji: '🌸',
          compatibility: 85
        }
      ],
      traits: [
        {
          name: '독립성',
          emoji: '🦅',
          percentage: 90
        },
        {
          name: '직설성',
          emoji: '💬',
          percentage: 85
        },
        {
          name: '경쟁심',
          emoji: '🏆',
          percentage: 80
        },
        {
          name: '논리적 사고',
          emoji: '🧠',
          percentage: 85
        }
      ],
      celebrities: ['전지현', '김희선', '송혜교', '강소라'],
      loveStyle: '평등하고 독립적인 현대적 사랑',
      bestMatch: '에겐남 - 자신의 리더십을 인정하고 따라주는 이상적인 상대',
      animalMetaphor: '당당한 독수리 - 자유롭고 강인한 정신력을 가진 존재',
      percentage: 25,
      rarity: '특별한 유형'
    }
  }
};