import { TestData } from '../../types/test';

export const studyStyleTest: TestData = {
  id: 'study_style',
  title: '나의 공부 스타일은?',
  description: '당신만의 최적화된 학습 방법을 찾아보세요',
  emoji: '📚',
  color: 'green',
  duration: '3-4분',
  questionCount: 10,
  participants: 1278,
  questions: [
    {
      id: 1,
      text: '새로운 과목을 시작할 때 가장 먼저 하는 일은?',
      subtitle: '학습 시작 방식',
      emoji: '🎯',
      options: [
        {
          id: 'planned',
          text: '전체 커리큘럼과 학습 계획 세우기',
          description: '체계적인 계획 수립',
          emoji: '📋',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '전체적인 개념과 흐름 파악하기',
          description: '큰 그림 이해',
          emoji: '🌊',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '일단 문제를 풀어보며 감 잡기',
          description: '실전 체험',
          emoji: '🎲',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '친구들과 함께 스터디 그룹 만들기',
          description: '공동 학습',
          emoji: '👥',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '집중이 가장 잘 되는 환경은?',
      subtitle: '최적의 학습 환경',
      emoji: '🏠',
      options: [
        {
          id: 'planned',
          text: '조용하고 정리된 개인 공간',
          description: '깔끔한 환경',
          emoji: '🏢',
          scores: { planned: 3, intuitive: 1, experimental: 0, sensory: 0, memorization: 2, collaborative: 0 }
        },
        {
          id: 'sensory',
          text: '좋아하는 음악과 향초가 있는 공간',
          description: '감각적 환경',
          emoji: '🕯️',
          scores: { planned: 0, intuitive: 1, experimental: 0, sensory: 3, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '다양한 도구와 자료가 있는 공간',
          description: '실험 가능한 환경',
          emoji: '🔬',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 1, memorization: 0, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '도서관이나 카페 등 사람들과 함께',
          description: '공동 공간',
          emoji: '☕',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 1, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '어려운 개념을 이해할 때 선호하는 방법은?',
      subtitle: '이해 방식',
      emoji: '🤔',
      options: [
        {
          id: 'planned',
          text: '단계별로 차근차근 분석하기',
          description: '체계적 분석',
          emoji: '🔍',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '연관된 개념들과 연결해서 이해',
          description: '연상과 연결',
          emoji: '🔗',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '직접 실습하며 체험으로 학습',
          description: '체험 학습',
          emoji: '⚡',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 1, memorization: 0, collaborative: 0 }
        },
        {
          id: 'memorization',
          text: '반복해서 읽고 외워서 숙지',
          description: '반복 학습',
          emoji: '🔄',
          scores: { planned: 1, intuitive: 0, experimental: 0, sensory: 0, memorization: 3, collaborative: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '시험 준비를 할 때 가장 중요하게 생각하는 것은?',
      subtitle: '시험 대비 전략',
      emoji: '📝',
      options: [
        {
          id: 'planned',
          text: '체계적인 복습 스케줄 관리',
          description: '계획적 준비',
          emoji: '📅',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '전체적인 맥락과 논리 이해',
          description: '개념 이해',
          emoji: '🧭',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'memorization',
          text: '중요 내용 암기와 정리',
          description: '핵심 암기',
          emoji: '📋',
          scores: { planned: 1, intuitive: 0, experimental: 0, sensory: 0, memorization: 3, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '친구들과 서로 설명하며 점검',
          description: '상호 학습',
          emoji: '💬',
          scores: { planned: 0, intuitive: 1, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '새로운 언어를 배운다면 어떤 방법을 선택할까요?',
      subtitle: '언어 학습 방식',
      emoji: '🌍',
      options: [
        {
          id: 'planned',
          text: '문법부터 체계적으로 학습',
          description: '기초부터 차근차근',
          emoji: '📖',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 2, collaborative: 0 }
        },
        {
          id: 'sensory',
          text: '음악, 영화 등으로 자연스럽게',
          description: '감각적 접근',
          emoji: '🎵',
          scores: { planned: 0, intuitive: 1, experimental: 0, sensory: 3, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '현지인과 대화하며 실전 연습',
          description: '실전 경험',
          emoji: '🗣️',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 0, memorization: 0, collaborative: 1 }
        },
        {
          id: 'collaborative',
          text: '스터디 그룹에서 함께 학습',
          description: '그룹 학습',
          emoji: '👫',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '학습 내용을 기억하는 가장 효과적인 방법은?',
      subtitle: '기억 방법',
      emoji: '🧠',
      options: [
        {
          id: 'memorization',
          text: '반복해서 쓰고 읽으며 암기',
          description: '반복 암기',
          emoji: '✍️',
          scores: { planned: 1, intuitive: 0, experimental: 0, sensory: 0, memorization: 3, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '스토리나 이미지로 연상',
          description: '연상 기법',
          emoji: '🎨',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 1, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '실제로 적용해보며 체득',
          description: '실습을 통한 체득',
          emoji: '🛠️',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'sensory',
          text: '음성 녹음이나 시각 자료 활용',
          description: '감각 활용',
          emoji: '🎤',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 3, memorization: 1, collaborative: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '모르는 문제를 만났을 때 가장 먼저 하는 행동은?',
      subtitle: '문제 해결 방식',
      emoji: '❓',
      options: [
        {
          id: 'planned',
          text: '관련 이론을 차근차근 찾아보기',
          description: '체계적 접근',
          emoji: '🔍',
          scores: { planned: 3, intuitive: 1, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '비슷한 문제와 연결해서 추론',
          description: '직관적 추론',
          emoji: '💡',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '여러 방법으로 시도해보기',
          description: '시행착오',
          emoji: '🎯',
          scores: { planned: 0, intuitive: 0, experimental: 3, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '친구나 선생님께 물어보기',
          description: '도움 요청',
          emoji: '🙋',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '장시간 공부할 때 집중력을 유지하는 방법은?',
      subtitle: '집중력 관리',
      emoji: '⏰',
      options: [
        {
          id: 'planned',
          text: '정해진 시간표에 따라 휴식',
          description: '계획적 휴식',
          emoji: '⏱️',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'sensory',
          text: '음악이나 향 등으로 분위기 조성',
          description: '감각 자극',
          emoji: '🎧',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 3, memorization: 0, collaborative: 0 }
        },
        {
          id: 'experimental',
          text: '학습 방법을 자주 바꿔가며',
          description: '방법 변화',
          emoji: '🔄',
          scores: { planned: 0, intuitive: 1, experimental: 3, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '함께 공부하는 동료와 동기부여',
          description: '상호 격려',
          emoji: '🤝',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '복습할 때 가장 효과적이라고 생각하는 방법은?',
      subtitle: '복습 전략',
      emoji: '🔄',
      options: [
        {
          id: 'planned',
          text: '정해진 주기에 따라 반복 복습',
          description: '주기적 복습',
          emoji: '📊',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 2, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '전체 맥락 속에서 이해도 점검',
          description: '개념 재정리',
          emoji: '🗺️',
          scores: { planned: 0, intuitive: 3, experimental: 0, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'memorization',
          text: '중요 내용을 다시 써보며 암기',
          description: '필기 복습',
          emoji: '📝',
          scores: { planned: 1, intuitive: 0, experimental: 0, sensory: 0, memorization: 3, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '친구에게 설명하며 점검',
          description: '설명을 통한 복습',
          emoji: '👥',
          scores: { planned: 0, intuitive: 1, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '공부 동기를 얻는 가장 큰 원동력은?',
      subtitle: '학습 동기',
      emoji: '🚀',
      options: [
        {
          id: 'planned',
          text: '명확한 목표와 성취감',
          description: '목표 지향',
          emoji: '🎯',
          scores: { planned: 3, intuitive: 0, experimental: 0, sensory: 0, memorization: 1, collaborative: 0 }
        },
        {
          id: 'intuitive',
          text: '새로운 지식에 대한 호기심',
          description: '지적 호기심',
          emoji: '🔮',
          scores: { planned: 0, intuitive: 3, experimental: 1, sensory: 0, memorization: 0, collaborative: 0 }
        },
        {
          id: 'sensory',
          text: '공부하는 과정 자체의 즐거움',
          description: '과정의 즐거움',
          emoji: '😊',
          scores: { planned: 0, intuitive: 1, experimental: 0, sensory: 3, memorization: 0, collaborative: 0 }
        },
        {
          id: 'collaborative',
          text: '친구들과의 경쟁과 협력',
          description: '사회적 동기',
          emoji: '🏆',
          scores: { planned: 0, intuitive: 0, experimental: 0, sensory: 0, memorization: 0, collaborative: 3 }
        }
      ]
    }
  ],
  results: {
    planned: {
      id: 'planned',
      title: '📚 계획형',
      emoji: '📚',
      description: '체계적이고 계획적인 학습의 달인',
      detailedDescription: '당신은 체계적이고 계획적인 학습을 선호하는 타입입니다. 명확한 목표와 구체적인 계획 하에서 최고의 학습 효과를 발휘합니다. 시간 관리가 뛰어나고 꾸준한 노력으로 안정적인 성과를 만들어냅니다.',
      strengths: [
        '체계적이고 논리적인 학습 접근',
        '우수한 시간 관리 능력',
        '꾸준하고 안정적인 학습 습관',
        '명확한 목표 설정과 실행력'
      ],
      improvements: [
        '때로는 융통성 있는 접근도 시도해보세요',
        '창의적인 학습 방법도 탐색해보세요',
        '완벽주의를 조금 내려놓아도 좋아요',
        '다양한 관점에서 바라보는 연습을 해보세요'
      ],
      compatibleTypes: [
        { id: 'memorization', title: '암기형', emoji: '✏️', compatibility: 85 },
        { id: 'intuitive', title: '직관형', emoji: '💡', compatibility: 75 },
        { id: 'collaborative', title: '협력형', emoji: '🤝', compatibility: 70 }
      ],
      traits: [
        { name: '계획성', emoji: '📋', percentage: 95 },
        { name: '체계성', emoji: '🗂️', percentage: 92 },
        { name: '지속성', emoji: '⏰', percentage: 90 },
        { name: '목표지향', emoji: '🎯', percentage: 88 }
      ]
    },
    intuitive: {
      id: 'intuitive',
      title: '💡 직관형',
      emoji: '💡',
      description: '개념과 흐름을 중시하는 통찰력 있는 학습자',
      detailedDescription: '당신은 전체적인 개념과 흐름을 파악하는 것을 중시하는 직관적 학습자입니다. 단순 암기보다는 이해와 통찰을 통해 학습하며, 창의적 사고와 연관성 파악에 뛰어납니다.',
      strengths: [
        '뛰어난 개념 이해력과 통찰력',
        '창의적이고 유연한 사고',
        '지식 간 연관성 파악 능력',
        '본질을 꿰뚫는 학습 접근'
      ],
      improvements: [
        '기초 지식 암기도 병행하면 좋아요',
        '체계적인 정리 습관을 길러보세요',
        '세부 사항에도 관심을 가져보세요',
        '반복 학습의 중요성도 인식해보세요'
      ],
      compatibleTypes: [
        { id: 'experimental', title: '실험형', emoji: '🧪', compatibility: 88 },
        { id: 'sensory', title: '감각형', emoji: '🎧', compatibility: 80 },
        { id: 'planned', title: '계획형', emoji: '📚', compatibility: 75 }
      ],
      traits: [
        { name: '통찰력', emoji: '🔮', percentage: 94 },
        { name: '창의성', emoji: '🎨', percentage: 91 },
        { name: '이해력', emoji: '🧠', percentage: 93 },
        { name: '연관성', emoji: '🔗', percentage: 89 }
      ]
    },
    experimental: {
      id: 'experimental',
      title: '🧪 실험형',
      emoji: '🧪',
      description: '체험과 실습을 통해 배우는 실전형 학습자',
      detailedDescription: '당신은 직접 해보고 경험하며 배우는 것을 선호하는 실험형 학습자입니다. 이론보다는 실습과 체험을 통해 깊이 있는 학습을 추구하며, 능동적이고 적극적인 학습 태도를 가지고 있습니다.',
      strengths: [
        '실습과 체험을 통한 깊이 있는 학습',
        '능동적이고 적극적인 학습 태도',
        '문제 해결 능력과 응용력',
        '다양한 시도와 도전 정신'
      ],
      improvements: [
        '이론적 기초도 탄탄히 다져보세요',
        '체계적인 정리 시간을 가져보세요',
        '인내심을 가지고 기다리는 연습도 필요해요',
        '기본기 반복 연습도 중요해요'
      ],
      compatibleTypes: [
        { id: 'intuitive', title: '직관형', emoji: '💡', compatibility: 88 },
        { id: 'collaborative', title: '협력형', emoji: '🤝', compatibility: 82 },
        { id: 'sensory', title: '감각형', emoji: '🎧', compatibility: 78 }
      ],
      traits: [
        { name: '실행력', emoji: '⚡', percentage: 95 },
        { name: '응용력', emoji: '🛠️', percentage: 90 },
        { name: '도전성', emoji: '🎯', percentage: 92 },
        { name: '적응력', emoji: '🔄', percentage: 87 }
      ]
    },
    sensory: {
      id: 'sensory',
      title: '🎧 감각형',
      emoji: '🎧',
      description: '감각적 요소를 활용한 몰입형 학습자',
      detailedDescription: '당신은 음악, 향기, 분위기 등 감각적 요소를 활용해 학습하는 감각형 학습자입니다. 적절한 환경과 분위기 조성을 통해 높은 집중력과 학습 효과를 얻으며, 감성과 논리를 조화롭게 활용합니다.',
      strengths: [
        '감각을 활용한 효과적인 기억법',
        '적절한 환경 조성을 통한 높은 집중력',
        '다양한 매체를 활용한 학습 능력',
        '감성과 논리의 조화로운 활용'
      ],
      improvements: [
        '환경에 덜 의존하는 학습법도 연습해보세요',
        '순수 논리적 사고도 기르면 좋아요',
        '집중력 지속 시간을 늘려보세요',
        '기본적인 암기 능력도 기워보세요'
      ],
      compatibleTypes: [
        { id: 'intuitive', title: '직관형', emoji: '💡', compatibility: 80 },
        { id: 'experimental', title: '실험형', emoji: '🧪', compatibility: 78 },
        { id: 'collaborative', title: '협력형', emoji: '🤝', compatibility: 75 }
      ],
      traits: [
        { name: '감각활용', emoji: '👁️', percentage: 96 },
        { name: '몰입력', emoji: '🌊', percentage: 91 },
        { name: '창의성', emoji: '🎨', percentage: 88 },
        { name: '감성지능', emoji: '💕', percentage: 93 }
      ]
    },
    memorization: {
      id: 'memorization',
      title: '✏️ 암기형',
      emoji: '✏️',
      description: '반복과 정리를 통한 확실한 학습자',
      detailedDescription: '당신은 반복 학습과 체계적인 정리를 통해 확실하게 습득하는 암기형 학습자입니다. 꼼꼼하고 성실한 학습 태도로 기본기를 탄탄히 다지며, 안정적이고 지속적인 학습 성과를 만들어냅니다.',
      strengths: [
        '반복 학습을 통한 확실한 기억 정착',
        '체계적이고 꼼꼼한 정리 능력',
        '성실하고 끈기 있는 학습 태도',
        '기본기가 탄탄한 안정적 학습'
      ],
      improvements: [
        '이해 중심의 학습도 병행해보세요',
        '창의적인 접근 방법도 시도해보세요',
        '응용력 기르는 연습을 해보세요',
        '다양한 관점에서 생각해보세요'
      ],
      compatibleTypes: [
        { id: 'planned', title: '계획형', emoji: '📚', compatibility: 85 },
        { id: 'collaborative', title: '협력형', emoji: '🤝', compatibility: 75 },
        { id: 'sensory', title: '감각형', emoji: '🎧', compatibility: 70 }
      ],
      traits: [
        { name: '암기력', emoji: '🧠', percentage: 95 },
        { name: '꼼꼼함', emoji: '🔍', percentage: 93 },
        { name: '성실성', emoji: '⭐', percentage: 94 },
        { name: '지속성', emoji: '🔄', percentage: 90 }
      ]
    },
    collaborative: {
      id: 'collaborative',
      title: '🤝 협력형',
      emoji: '🤝',
      description: '함께 배우며 성장하는 사회적 학습자',
      detailedDescription: '당신은 다른 사람들과 함께 학습하며 동기부여를 받는 협력형 학습자입니다. 설명하고 토론하는 과정에서 깊이 있는 이해를 도모하며, 사회적 상호작용을 통해 학습 효과를 극대화합니다.',
      strengths: [
        '설명과 토론을 통한 깊이 있는 이해',
        '사회적 상호작용으로 학습 동기 향상',
        '다양한 관점을 수용하는 열린 마음',
        '서로 도우며 함께 성장하는 자세'
      ],
      improvements: [
        '혼자서도 집중할 수 있는 능력을 길러보세요',
        '개인적인 깊이 있는 사고 시간도 가져보세요',
        '자기주도적 학습 능력도 기워보세요',
        '독립적인 문제 해결 능력을 연습해보세요'
      ],
      compatibleTypes: [
        { id: 'experimental', title: '실험형', emoji: '🧪', compatibility: 82 },
        { id: 'memorization', title: '암기형', emoji: '✏️', compatibility: 75 },
        { id: 'sensory', title: '감각형', emoji: '🎧', compatibility: 75 }
      ],
      traits: [
        { name: '소통력', emoji: '💬', percentage: 95 },
        { name: '협력성', emoji: '🤝', percentage: 96 },
        { name: '공감능력', emoji: '💕', percentage: 90 },
        { name: '동기부여', emoji: '🚀', percentage: 88 }
      ]
    }
  }
};