import { TestData } from '../../types/test';

export const mbtiTest: TestData = {
  id: 'mbti',
  title: 'MBTI 성격유형 테스트',
  description: '당신의 성격 유형을 정확하게 분석해보세요',
  emoji: '🧠',
  color: 'from-indigo-500 to-purple-600',
  duration: '10-15분',
  questionCount: 25,
  participants: 245892,
  questions: [
    {
      id: 1,
      text: '새로운 사람들과의 만남에서',
      subtitle: '당신의 일반적인 행동은?',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '먼저 다가가서 대화를 시작한다',
          description: '적극적으로 관계를 형성해요',
          emoji: '🗣️',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '누군가 먼저 말을 걸어주기를 기다린다',
          description: '신중하게 관계를 시작해요',
          emoji: '🤐',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 2,
      text: '주말에 에너지를 충전하는 방법은?',
      subtitle: '당신만의 휴식 방식',
      emoji: '🔋',
      options: [
        {
          id: 'a',
          text: '친구들과 함께 밖에서 활동한다',
          description: '사람들과 함께할 때 활력을 얻어요',
          emoji: '🎉',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '집에서 혼자만의 시간을 보낸다',
          description: '조용한 시간이 에너지를 충전해줘요',
          emoji: '🏠',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 3,
      text: '새로운 정보를 받아들일 때',
      subtitle: '어떤 방식을 선호하나요?',
      emoji: '📊',
      options: [
        {
          id: 'a',
          text: '구체적인 사실과 세부사항에 집중한다',
          description: '현실적이고 정확한 정보를 선호해요',
          emoji: '📈',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '전체적인 패턴과 가능성을 본다',
          description: '숨겨진 의미와 잠재력을 찾아요',
          emoji: '🔮',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '중요한 결정을 내릴 때',
      subtitle: '무엇을 가장 우선시하나요?',
      emoji: '⚖️',
      options: [
        {
          id: 'a',
          text: '논리적 분석과 객관적 사실',
          description: '합리적이고 논리적인 판단을 해요',
          emoji: '🧮',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '사람들의 감정과 가치관',
          description: '인간적이고 따뜻한 결정을 해요',
          emoji: '❤️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '일상생활에서 선호하는 방식은?',
      subtitle: '계획과 즉흥성 중에서',
      emoji: '📅',
      options: [
        {
          id: 'a',
          text: '미리 계획을 세우고 체계적으로 진행',
          description: '계획적이고 조직적으로 생활해요',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '상황에 따라 유연하게 적응',
          description: '자유롭고 융통성 있게 생활해요',
          emoji: '🌊',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    },
    {
      id: 6,
      text: '팀 프로젝트에서 당신의 역할은?',
      subtitle: '협업할 때의 모습',
      emoji: '👨‍💼',
      options: [
        {
          id: 'a',
          text: '팀원들과 적극적으로 소통하며 아이디어를 공유',
          description: '활발한 의견 교환을 주도해요',
          emoji: '💬',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '깊이 있게 생각한 후 신중하게 의견 제시',
          description: '숙고한 의견을 정확히 전달해요',
          emoji: '🤔',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '문제를 해결할 때',
      subtitle: '어떤 접근 방식을 사용하나요?',
      emoji: '🧩',
      options: [
        {
          id: 'a',
          text: '과거의 경험과 검증된 방법을 활용',
          description: '실용적이고 확실한 방법을 선택해요',
          emoji: '📚',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '새로운 아이디어와 창의적 해결책 시도',
          description: '혁신적이고 독창적인 방법을 찾아요',
          emoji: '💡',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 8,
      text: '갈등 상황에서',
      subtitle: '어떻게 대처하시나요?',
      emoji: '⚡',
      options: [
        {
          id: 'a',
          text: '원인을 분석하고 해결책을 논리적으로 제시',
          description: '체계적이고 이성적으로 접근해요',
          emoji: '🔍',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '상대방의 감정을 이해하고 조화를 추구',
          description: '공감하고 화합을 이루려 해요',
          emoji: '🤝',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 9,
      text: '여행을 계획할 때',
      subtitle: '어떤 스타일을 선호하나요?',
      emoji: '✈️',
      options: [
        {
          id: 'a',
          text: '일정표를 만들고 예약을 미리 완료',
          description: '체계적이고 안전한 여행을 준비해요',
          emoji: '🗓️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '대략적인 계획만 세우고 현지에서 결정',
          description: '자유롭고 즉흥적인 여행을 즐겨요',
          emoji: '🎒',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    },
    {
      id: 10,
      text: '스트레스를 받을 때',
      subtitle: '어떤 방법으로 해소하나요?',
      emoji: '😰',
      options: [
        {
          id: 'a',
          text: '친구들과 만나서 이야기하고 활동',
          description: '사람들과 함께할 때 스트레스가 해소돼요',
          emoji: '👥',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '혼자만의 시간을 가지며 생각 정리',
          description: '조용한 시간이 마음을 안정시켜줘요',
          emoji: '🧘',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 11,
      text: '새로운 기술이나 도구를 배울 때',
      subtitle: '어떤 방법을 선호하나요?',
      emoji: '💻',
      options: [
        {
          id: 'a',
          text: '매뉴얼을 읽고 단계별로 따라하기',
          description: '체계적이고 순서대로 학습해요',
          emoji: '📖',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '직접 만져보며 직관적으로 파악',
          description: '실험하면서 원리를 이해해요',
          emoji: '🔧',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 12,
      text: '친구가 고민을 털어놓을 때',
      subtitle: '어떻게 반응하시나요?',
      emoji: '👂',
      options: [
        {
          id: 'a',
          text: '해결책을 찾아서 구체적인 조언 제공',
          description: '실용적이고 효과적인 해결책을 제시해요',
          emoji: '💡',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '감정에 공감하며 따뜻하게 위로',
          description: '마음을 이해하고 정서적 지지를 해줘요',
          emoji: '🤗',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 13,
      text: '업무나 학습 환경에서',
      subtitle: '어떤 분위기를 선호하나요?',
      emoji: '📝',
      options: [
        {
          id: 'a',
          text: '마감시한이 정해져 있고 목표가 명확한 환경',
          description: '구조화되고 예측 가능한 환경을 좋아해요',
          emoji: '⏰',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '유연하고 자율적으로 진행할 수 있는 환경',
          description: '자유롭고 적응력이 필요한 환경을 선호해요',
          emoji: '🎨',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    },
    {
      id: 14,
      text: '파티나 모임에서',
      subtitle: '어떤 모습이신가요?',
      emoji: '🎊',
      options: [
        {
          id: 'a',
          text: '여러 사람들과 폭넓게 대화를 나눈다',
          description: '많은 사람들과 활발하게 소통해요',
          emoji: '🌟',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '친한 사람들과 깊이 있는 대화를 한다',
          description: '소수와 의미 있는 대화를 나눠요',
          emoji: '💭',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 15,
      text: '정보를 기억할 때',
      subtitle: '어떤 방식이 효과적인가요?',
      emoji: '🧠',
      options: [
        {
          id: 'a',
          text: '구체적인 예시와 실제 경험을 통해',
          description: '실질적이고 생생한 기억이 오래 남아요',
          emoji: '📸',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '개념과 이론의 연결고리를 통해',
          description: '추상적이고 체계적인 연관성으로 기억해요',
          emoji: '🕸️',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 16,
      text: '비판을 받을 때',
      subtitle: '어떻게 받아들이시나요?',
      emoji: '🎯',
      options: [
        {
          id: 'a',
          text: '객관적으로 분석하여 개선점을 찾는다',
          description: '논리적으로 검토하고 발전시켜요',
          emoji: '🔬',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '개인적으로 받아들여 감정적으로 반응',
          description: '마음으로 느끼고 인간관계를 고려해요',
          emoji: '💝',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 17,
      text: '프로젝트를 시작할 때',
      subtitle: '어떤 순서로 진행하나요?',
      emoji: '🚀',
      options: [
        {
          id: 'a',
          text: '계획을 완성한 후 실행에 옮긴다',
          description: '체계적으로 준비하고 시작해요',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '일단 시작하면서 계획을 수정해간다',
          description: '실행하면서 유연하게 조정해요',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    },
    {
      id: 18,
      text: '토론할 때',
      subtitle: '어떤 방식으로 참여하나요?',
      emoji: '💬',
      options: [
        {
          id: 'a',
          text: '적극적으로 의견을 표현하고 논쟁한다',
          description: '활발하게 아이디어를 주고받아요',
          emoji: '📢',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '신중하게 듣고 생각한 후 발언한다',
          description: '충분히 고민한 의견을 제시해요',
          emoji: '🤫',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 19,
      text: '책이나 영화를 고를 때',
      subtitle: '어떤 장르를 선호하나요?',
      emoji: '📚',
      options: [
        {
          id: 'a',
          text: '현실적이고 실제 일어날 수 있는 이야기',
          description: '현실감 있고 공감 가능한 내용을 좋아해요',
          emoji: '🌍',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '상상력이 풍부하고 환상적인 이야기',
          description: '창의적이고 독특한 세계관을 선호해요',
          emoji: '🦄',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 20,
      text: '중요한 선택을 해야 할 때',
      subtitle: '무엇을 가장 중시하나요?',
      emoji: '🤲',
      options: [
        {
          id: 'a',
          text: '효율성과 합리적 결과',
          description: '최적의 성과를 내는 선택을 해요',
          emoji: '⚡',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '관련된 사람들의 행복과 조화',
          description: '모두에게 좋은 선택을 하려 해요',
          emoji: '🌈',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 21,
      text: '하루 일과를 마무리할 때',
      subtitle: '어떤 방식을 선호하나요?',
      emoji: '🌙',
      options: [
        {
          id: 'a',
          text: '내일 할 일을 정리하고 계획을 세운다',
          description: '체계적으로 다음을 준비해요',
          emoji: '📝',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '그때그때 상황에 맞춰 자연스럽게',
          description: '자유롭게 흘러가는 대로 생활해요',
          emoji: '🌊',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    },
    {
      id: 22,
      text: '새로운 사람을 처음 만났을 때',
      subtitle: '어떤 인상을 주려고 하나요?',
      emoji: '👋',
      options: [
        {
          id: 'a',
          text: '활발하고 친근한 모습을 보여준다',
          description: '적극적이고 열린 자세로 다가가요',
          emoji: '😊',
          scores: { E: 2, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '신중하고 진중한 모습을 유지한다',
          description: '차분하고 신뢰할 수 있는 모습을 보여줘요',
          emoji: '🤝',
          scores: { E: 0, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 23,
      text: '복잡한 문제에 직면했을 때',
      subtitle: '어떤 관점에서 접근하나요?',
      emoji: '🔍',
      options: [
        {
          id: 'a',
          text: '세부사항을 하나씩 차근차근 분석',
          description: '구체적이고 단계적으로 해결해요',
          emoji: '🔢',
          scores: { E: 0, I: 0, S: 2, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '전체적인 그림을 보고 패턴을 찾기',
          description: '큰 흐름을 파악하고 통찰력을 발휘해요',
          emoji: '🌐',
          scores: { E: 0, I: 0, S: 0, N: 2, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 24,
      text: '팀에서 의견 충돌이 일어날 때',
      subtitle: '어떤 역할을 하시나요?',
      emoji: '⚔️',
      options: [
        {
          id: 'a',
          text: '냉정하게 사실을 분석하여 해결책 제시',
          description: '객관적이고 논리적으로 중재해요',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 0, J: 0, P: 0 }
        },
        {
          id: 'b',
          text: '각자의 입장을 이해하며 화합 도모',
          description: '감정적으로 공감하며 조화를 이뤄요',
          emoji: '🕊️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 2, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 25,
      text: '마감 기한이 다가올 때',
      subtitle: '어떤 방식으로 대처하나요?',
      emoji: '⏰',
      options: [
        {
          id: 'a',
          text: '계획대로 착실히 진행했으므로 여유가 있다',
          description: '미리미리 준비하는 스타일이에요',
          emoji: '✅',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 0 }
        },
        {
          id: 'b',
          text: '마지막에 집중해서 빠르게 마무리한다',
          description: '압박감 속에서 몰입하는 스타일이에요',
          emoji: '🏃‍♂️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 2 }
        }
      ]
    }
  ],
  results: {
    'ENTJ': {
      id: 'ENTJ',
      title: '지휘관형 (ENTJ)',
      emoji: '👨‍💼',
      description: '타고난 리더로 목표 지향적이고 체계적인 성격',
      detailedDescription: '당신은 강력한 리더십과 전략적 사고를 가진 지휘관형입니다. 목표를 설정하고 이를 달성하기 위해 체계적으로 계획을 세우며, 다른 사람들을 이끌어가는 능력이 뛰어납니다. 효율성을 중시하고 논리적 사고를 바탕으로 결정을 내립니다.',
      strengths: ['뛰어난 리더십', '전략적 사고', '목표 지향성', '효율성 추구'],
      improvements: ['감정적 배려 필요', '완벽주의 경향 조절', '타인 의견 수용'],
      compatibleTypes: [
        { id: 'INFP', title: '중재자형', emoji: '🌱', compatibility: 85 },
        { id: 'INTJ', title: '건축가형', emoji: '🏗️', compatibility: 90 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 75 },
        { name: '직관력', emoji: '💡', percentage: 70 },
        { name: '사고력', emoji: '🧠', percentage: 85 },
        { name: '판단력', emoji: '⚖️', percentage: 80 }
      ]
    },
    'ENTP': {
      id: 'ENTP',
      title: '토론가형 (ENTP)',
      emoji: '🎭',
      description: '창의적이고 혁신적인 아이디어의 소유자',
      detailedDescription: '당신은 뛰어난 창의력과 열정을 가진 토론가형입니다. 새로운 아이디어를 탐구하고 다양한 가능성을 모색하는 것을 좋아합니다. 토론과 논쟁을 즐기며, 기존의 틀을 깨는 혁신적인 해결책을 찾아냅니다.',
      strengths: ['창의적 사고', '뛰어난 소통능력', '적응력', '혁신성'],
      improvements: ['일관성 유지', '세부사항 관리', '감정적 민감성'],
      compatibleTypes: [
        { id: 'INFJ', title: '옹호자형', emoji: '🌟', compatibility: 88 },
        { id: 'INTJ', title: '건축가형', emoji: '🏗️', compatibility: 82 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 80 },
        { name: '직관력', emoji: '💡', percentage: 85 },
        { name: '사고력', emoji: '🧠', percentage: 75 },
        { name: '인식력', emoji: '🔍', percentage: 85 }
      ]
    },
    'ENFJ': {
      id: 'ENFJ',
      title: '선도자형 (ENFJ)',
      emoji: '🌟',
      description: '타인을 이끌고 성장시키는 따뜻한 리더',
      detailedDescription: '당신은 타인의 성장과 발전을 돕는 것에 보람을 느끼는 선도자형입니다. 뛰어난 공감능력과 소통능력을 바탕으로 사람들을 이끌고 영감을 줍니다. 조화로운 환경을 만들며 모든 사람이 자신의 잠재력을 발휘할 수 있도록 돕습니다.',
      strengths: ['뛰어난 공감능력', '리더십', '소통능력', '동기부여 능력'],
      improvements: ['자기돌봄 필요', '과도한 책임감 조절', '비판 수용'],
      compatibleTypes: [
        { id: 'INFP', title: '중재자형', emoji: '🌱', compatibility: 90 },
        { id: 'ISFP', title: '모험가형', emoji: '🎨', compatibility: 85 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 78 },
        { name: '직관력', emoji: '💡', percentage: 80 },
        { name: '감정력', emoji: '❤️', percentage: 90 },
        { name: '판단력', emoji: '⚖️', percentage: 75 }
      ]
    },
    'ENFP': {
      id: 'ENFP',
      title: '활동가형 (ENFP)',
      emoji: '🎉',
      description: '열정적이고 자유로운 영혼의 소유자',
      detailedDescription: '당신은 넘치는 열정과 창의력을 가진 활동가형입니다. 새로운 가능성을 탐구하고 사람들과의 깊은 관계를 중시합니다. 자유로운 환경에서 최고의 능력을 발휘하며, 다른 사람들에게 영감과 동기를 부여합니다.',
      strengths: ['창의성', '열정', '공감능력', '유연성'],
      improvements: ['집중력 향상', '계획성 개발', '현실감각 필요'],
      compatibleTypes: [
        { id: 'INTJ', title: '건축가형', emoji: '🏗️', compatibility: 85 },
        { id: 'INFJ', title: '옹호자형', emoji: '🌟', compatibility: 88 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 85 },
        { name: '직관력', emoji: '💡', percentage: 88 },
        { name: '감정력', emoji: '❤️', percentage: 80 },
        { name: '인식력', emoji: '🔍', percentage: 90 }
      ]
    },
    'ESTJ': {
      id: 'ESTJ',
      title: '경영자형 (ESTJ)',
      emoji: '📊',
      description: '체계적이고 실용적인 조직의 리더',
      detailedDescription: '당신은 체계적이고 실용적인 접근을 통해 조직을 이끄는 경영자형입니다. 전통과 질서를 중시하며, 효율적인 시스템을 구축하여 목표를 달성합니다. 책임감이 강하고 신뢰할 수 있는 리더입니다.',
      strengths: ['조직력', '책임감', '실용성', '리더십'],
      improvements: ['유연성 개발', '감정적 배려', '새로운 아이디어 수용'],
      compatibleTypes: [
        { id: 'ISFP', title: '모험가형', emoji: '🎨', compatibility: 80 },
        { id: 'INFP', title: '중재자형', emoji: '🌱', compatibility: 75 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 80 },
        { name: '감각력', emoji: '👁️', percentage: 85 },
        { name: '사고력', emoji: '🧠', percentage: 80 },
        { name: '판단력', emoji: '⚖️', percentage: 90 }
      ]
    },
    'ESTP': {
      id: 'ESTP',
      title: '사업가형 (ESTP)',
      emoji: '🏃‍♂️',
      description: '현실적이고 활동적인 실행가',
      detailedDescription: '당신은 현재에 집중하며 실제적인 결과를 만들어내는 사업가형입니다. 위기 상황에서 빠른 판단력을 발휘하고, 사람들과의 관계에서 자연스럽고 친근한 매력을 보입니다. 행동력이 뛰어나고 현실감각이 예리합니다.',
      strengths: ['실행력', '적응력', '현실감각', '사교성'],
      improvements: ['장기계획 수립', '신중함 필요', '감정적 깊이'],
      compatibleTypes: [
        { id: 'ISFJ', title: '수호자형', emoji: '🛡️', compatibility: 85 },
        { id: 'ISTJ', title: '논리학자형', emoji: '📋', compatibility: 80 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 88 },
        { name: '감각력', emoji: '👁️', percentage: 90 },
        { name: '사고력', emoji: '🧠', percentage: 70 },
        { name: '인식력', emoji: '🔍', percentage: 85 }
      ]
    },
    'ESFJ': {
      id: 'ESFJ',
      title: '집정관형 (ESFJ)',
      emoji: '🤗',
      description: '따뜻하고 헌신적인 돌봄의 리더',
      detailedDescription: '당신은 타인을 돌보고 조화로운 환경을 만드는 것을 중시하는 집정관형입니다. 강한 책임감과 헌신으로 주변 사람들을 지원하며, 전통적인 가치와 사회적 기대를 중요하게 생각합니다. 따뜻한 마음으로 사람들을 하나로 모으는 능력이 뛰어납니다.',
      strengths: ['배려심', '책임감', '조화 추구', '헌신성'],
      improvements: ['자기주장 필요', '비판 수용', '변화 적응'],
      compatibleTypes: [
        { id: 'ISFP', title: '모험가형', emoji: '🎨', compatibility: 88 },
        { id: 'ISTP', title: '장인형', emoji: '🔧', compatibility: 80 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 75 },
        { name: '감각력', emoji: '👁️', percentage: 80 },
        { name: '감정력', emoji: '❤️', percentage: 90 },
        { name: '판단력', emoji: '⚖️', percentage: 85 }
      ]
    },
    'ESFP': {
      id: 'ESFP',
      title: '연예인형 (ESFP)',
      emoji: '🌈',
      description: '자유롭고 낙천적인 삶의 예술가',
      detailedDescription: '당신은 순간을 즐기고 다른 사람들에게 기쁨을 주는 연예인형입니다. 자발적이고 열정적이며, 사람들과의 관계에서 따뜻함과 진정성을 보입니다. 현재를 살아가며 삶의 아름다운 순간들을 소중히 여깁니다.',
      strengths: ['사교성', '낙천성', '공감능력', '즉흥성'],
      improvements: ['장기계획 수립', '비판 수용', '집중력 향상'],
      compatibleTypes: [
        { id: 'ISTJ', title: '논리학자형', emoji: '📋', compatibility: 85 },
        { id: 'ISFJ', title: '수호자형', emoji: '🛡️', compatibility: 88 }
      ],
      traits: [
        { name: '외향성', emoji: '🗣️', percentage: 90 },
        { name: '감각력', emoji: '👁️', percentage: 85 },
        { name: '감정력', emoji: '❤️', percentage: 85 },
        { name: '인식력', emoji: '🔍', percentage: 88 }
      ]
    },
    'INTJ': {
      id: 'INTJ',
      title: '건축가형 (INTJ)',
      emoji: '🏗️',
      description: '독립적이고 전략적인 사고의 완벽주의자',
      detailedDescription: '당신은 장기적 비전을 가지고 체계적으로 목표를 달성하는 건축가형입니다. 독창적인 아이디어와 강한 의지력으로 복잡한 문제를 해결합니다. 독립적이고 결단력 있으며, 자신만의 기준에 따라 완벽을 추구합니다.',
      strengths: ['전략적 사고', '독창성', '결단력', '완벽추구'],
      improvements: ['감정표현 개발', '타인배려 필요', '유연성 향상'],
      compatibleTypes: [
        { id: 'ENFP', title: '활동가형', emoji: '🎉', compatibility: 85 },
        { id: 'ENTP', title: '토론가형', emoji: '🎭', compatibility: 82 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 80 },
        { name: '직관력', emoji: '💡', percentage: 90 },
        { name: '사고력', emoji: '🧠', percentage: 85 },
        { name: '판단력', emoji: '⚖️', percentage: 88 }
      ]
    },
    'INTP': {
      id: 'INTP',
      title: '논리술사형 (INTP)',
      emoji: '🔬',
      description: '창의적이고 독립적인 사고의 이론가',
      detailedDescription: '당신은 복잡한 이론과 아이디어를 탐구하는 것을 좋아하는 논리술사형입니다. 객관적이고 논리적인 분석을 통해 진리를 추구하며, 새로운 가능성과 개념에 대해 끊임없이 탐구합니다. 독립적이고 유연한 사고를 가지고 있습니다.',
      strengths: ['논리적 분석', '창의성', '객관성', '유연한 사고'],
      improvements: ['실행력 개발', '감정표현 필요', '일관성 유지'],
      compatibleTypes: [
        { id: 'ENTJ', title: '지휘관형', emoji: '👨‍💼', compatibility: 80 },
        { id: 'ENFJ', title: '선도자형', emoji: '🌟', compatibility: 78 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 85 },
        { name: '직관력', emoji: '💡', percentage: 88 },
        { name: '사고력', emoji: '🧠', percentage: 90 },
        { name: '인식력', emoji: '🔍', percentage: 85 }
      ]
    },
    'INFJ': {
      id: 'INFJ',
      title: '옹호자형 (INFJ)',
      emoji: '🌟',
      description: '이상주의적이고 통찰력 있는 보호자',
      detailedDescription: '당신은 깊은 통찰력과 강한 가치관을 가진 옹호자형입니다. 타인의 감정을 깊이 이해하고 도움을 주려고 노력하며, 이상적인 세상을 만들기 위해 헌신합니다. 직관력이 뛰어나고 창의적인 해결책을 찾아냅니다.',
      strengths: ['통찰력', '공감능력', '창의성', '이상추구'],
      improvements: ['현실감각 개발', '자기돌봄 필요', '완벽주의 조절'],
      compatibleTypes: [
        { id: 'ENTP', title: '토론가형', emoji: '🎭', compatibility: 88 },
        { id: 'ENFP', title: '활동가형', emoji: '🎉', compatibility: 88 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 78 },
        { name: '직관력', emoji: '💡', percentage: 85 },
        { name: '감정력', emoji: '❤️', percentage: 90 },
        { name: '판단력', emoji: '⚖️', percentage: 80 }
      ]
    },
    'INFP': {
      id: 'INFP',
      title: '중재자형 (INFP)',
      emoji: '🌱',
      description: '이상주의적이고 창의적인 치유자',
      detailedDescription: '당신은 깊은 가치관과 창의성을 가진 중재자형입니다. 진정성을 중시하며 자신만의 독특한 방식으로 세상에 기여하려고 합니다. 타인의 감정에 민감하고 조화로운 환경을 추구하며, 개인적 성장과 자아실현을 중요하게 생각합니다.',
      strengths: ['창의성', '공감능력', '진정성', '이상추구'],
      improvements: ['현실적 계획 수립', '자기주장 필요', '비판 수용'],
      compatibleTypes: [
        { id: 'ENFJ', title: '선도자형', emoji: '🌟', compatibility: 90 },
        { id: 'ENTJ', title: '지휘관형', emoji: '👨‍💼', compatibility: 85 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 80 },
        { name: '직관력', emoji: '💡', percentage: 85 },
        { name: '감정력', emoji: '❤️', percentage: 88 },
        { name: '인식력', emoji: '🔍', percentage: 85 }
      ]
    },
    'ISTJ': {
      id: 'ISTJ',
      title: '논리학자형 (ISTJ)',
      emoji: '📋',
      description: '신뢰할 수 있고 체계적인 실무자',
      detailedDescription: '당신은 책임감이 강하고 체계적인 논리학자형입니다. 전통과 질서를 중시하며, 꼼꼼하고 정확한 업무 처리로 신뢰를 받습니다. 안정성을 추구하고 계획적으로 일을 진행하며, 맡은 바 임무를 성실히 완수합니다.',
      strengths: ['책임감', '체계성', '신뢰성', '꼼꼼함'],
      improvements: ['유연성 개발', '새로운 아이디어 수용', '감정표현'],
      compatibleTypes: [
        { id: 'ESFP', title: '연예인형', emoji: '🌈', compatibility: 85 },
        { id: 'ESTP', title: '사업가형', emoji: '🏃‍♂️', compatibility: 80 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 75 },
        { name: '감각력', emoji: '👁️', percentage: 90 },
        { name: '사고력', emoji: '🧠', percentage: 80 },
        { name: '판단력', emoji: '⚖️', percentage: 88 }
      ]
    },
    'ISTP': {
      id: 'ISTP',
      title: '장인형 (ISTP)',
      emoji: '🔧',
      description: '실용적이고 적응력 있는 문제해결사',
      detailedDescription: '당신은 손재주가 뛰어나고 실용적인 장인형입니다. 논리적이고 객관적인 접근으로 문제를 해결하며, 필요에 따라 유연하게 적응합니다. 독립적이고 자유를 중시하며, 실제적인 경험을 통해 학습하는 것을 선호합니다.',
      strengths: ['문제해결능력', '실용성', '적응력', '논리성'],
      improvements: ['감정표현 개발', '장기계획 수립', '타인과의 소통'],
      compatibleTypes: [
        { id: 'ESFJ', title: '집정관형', emoji: '🤗', compatibility: 80 },
        { id: 'ESTJ', title: '경영자형', emoji: '📊', compatibility: 75 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 80 },
        { name: '감각력', emoji: '👁️', percentage: 85 },
        { name: '사고력', emoji: '🧠', percentage: 85 },
        { name: '인식력', emoji: '🔍', percentage: 80 }
      ]
    },
    'ISFJ': {
      id: 'ISFJ',
      title: '수호자형 (ISFJ)',
      emoji: '🛡️',
      description: '헌신적이고 따뜻한 보호자',
      detailedDescription: '당신은 타인을 돌보고 보호하는 것에 보람을 느끼는 수호자형입니다. 세심하고 배려심이 깊으며, 조화로운 환경을 만들기 위해 노력합니다. 책임감이 강하고 신뢰할 수 있으며, 전통적인 가치를 중시합니다.',
      strengths: ['배려심', '헌신성', '신뢰성', '세심함'],
      improvements: ['자기주장 필요', '변화 적응', '스트레스 관리'],
      compatibleTypes: [
        { id: 'ESFP', title: '연예인형', emoji: '🌈', compatibility: 88 },
        { id: 'ESTP', title: '사업가형', emoji: '🏃‍♂️', compatibility: 85 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 78 },
        { name: '감각력', emoji: '👁️', percentage: 85 },
        { name: '감정력', emoji: '❤️', percentage: 90 },
        { name: '판단력', emoji: '⚖️', percentage: 85 }
      ]
    },
    'ISFP': {
      id: 'ISFP',
      title: '모험가형 (ISFP)',
      emoji: '🎨',
      description: '유연하고 친화적인 예술가',
      detailedDescription: '당신은 개인적 가치와 조화를 중시하는 모험가형입니다. 창의적이고 예술적 감각이 뛰어나며, 자신만의 독특한 방식으로 세상을 표현합니다. 다른 사람들을 판단하지 않고 수용하며, 평화롭고 조화로운 환경을 선호합니다.',
      strengths: ['창의성', '예술감각', '수용성', '유연성'],
      improvements: ['계획성 개발', '자기주장 필요', '현실감각'],
      compatibleTypes: [
        { id: 'ESFJ', title: '집정관형', emoji: '🤗', compatibility: 88 },
        { id: 'ENFJ', title: '선도자형', emoji: '🌟', compatibility: 85 }
      ],
      traits: [
        { name: '내향성', emoji: '🤐', percentage: 82 },
        { name: '감각력', emoji: '👁️', percentage: 80 },
        { name: '감정력', emoji: '❤️', percentage: 85 },
        { name: '인식력', emoji: '🔍', percentage: 88 }
      ]
    }
  }
};