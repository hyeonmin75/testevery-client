import { TestData } from '../../types/test';

export const careerTest: TestData = {
  id: 'career',
  title: '나에게 어울리는 직업은?',
  description: '당신의 성향과 능력에 맞는 최적의 직업을 찾아보세요',
  emoji: '💼',
  color: 'purple',
  duration: '4-5분',
  questionCount: 10,
  participants: 2634,
  questions: [
    {
      id: 1,
      text: '새로운 프로젝트를 시작할 때 가장 중요하게 생각하는 것은?',
      subtitle: '업무 접근 방식',
      emoji: '🚀',
      options: [
        {
          id: 'teacher',
          text: '팀원들과 함께 성장할 수 있는 기회',
          description: '협력과 성장 중시',
          emoji: '👥',
          scores: { teacher: 3, developer: 0, designer: 1, leader: 1, chef: 0, creator: 0, researcher: 0, planner: 0 }
        },
        {
          id: 'planner',
          text: '체계적인 계획과 전략 수립',
          description: '계획과 전략 중시',
          emoji: '📋',
          scores: { teacher: 0, developer: 1, designer: 0, leader: 2, chef: 0, creator: 0, researcher: 1, planner: 3 }
        },
        {
          id: 'designer',
          text: '창의적이고 혁신적인 아이디어',
          description: '창의성과 혁신',
          emoji: '💡',
          scores: { teacher: 0, developer: 0, designer: 3, leader: 1, chef: 1, creator: 2, researcher: 0, planner: 0 }
        },
        {
          id: 'researcher',
          text: '철저한 분석과 검증',
          description: '분석과 검증',
          emoji: '🔍',
          scores: { teacher: 0, developer: 2, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 3, planner: 1 }
        }
      ]
    },
    {
      id: 2,
      text: '가장 집중이 잘 되는 업무 환경은?',
      subtitle: '선호하는 작업 환경',
      emoji: '🏢',
      options: [
        {
          id: 'developer',
          text: '조용하고 개인적인 공간',
          description: '집중이 필요한 환경',
          emoji: '🤫',
          scores: { teacher: 0, developer: 3, designer: 1, leader: 0, chef: 0, creator: 0, researcher: 2, planner: 1 }
        },
        {
          id: 'creator',
          text: '자유롭고 개방적인 공간',
          description: '자유로운 환경',
          emoji: '🎪',
          scores: { teacher: 1, developer: 0, designer: 2, leader: 0, chef: 0, creator: 3, researcher: 0, planner: 0 }
        },
        {
          id: 'chef',
          text: '손으로 직접 만들 수 있는 공간',
          description: '실습 가능한 환경',
          emoji: '🛠️',
          scores: { teacher: 0, developer: 0, designer: 1, leader: 0, chef: 3, creator: 1, researcher: 1, planner: 0 }
        },
        {
          id: 'leader',
          text: '사람들과 소통할 수 있는 공간',
          description: '소통 중심 환경',
          emoji: '💬',
          scores: { teacher: 2, developer: 0, designer: 0, leader: 3, chef: 0, creator: 1, researcher: 0, planner: 1 }
        }
      ]
    },
    {
      id: 3,
      text: '어려운 문제에 직면했을 때 어떻게 해결하나요?',
      subtitle: '문제 해결 방식',
      emoji: '🤔',
      options: [
        {
          id: 'researcher',
          text: '관련 자료를 철저히 조사하고 분석',
          description: '체계적 연구',
          emoji: '📚',
          scores: { teacher: 1, developer: 2, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 3, planner: 1 }
        },
        {
          id: 'developer',
          text: '논리적으로 단계별 접근',
          description: '논리적 해결',
          emoji: '🧩',
          scores: { teacher: 0, developer: 3, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 2, planner: 1 }
        },
        {
          id: 'designer',
          text: '창의적이고 직관적인 아이디어로',
          description: '창의적 해결',
          emoji: '🎨',
          scores: { teacher: 0, developer: 0, designer: 3, leader: 0, chef: 1, creator: 2, researcher: 0, planner: 0 }
        },
        {
          id: 'teacher',
          text: '다른 사람들과 의견을 나누며',
          description: '협력적 해결',
          emoji: '🤝',
          scores: { teacher: 3, developer: 0, designer: 0, leader: 2, chef: 0, creator: 1, researcher: 0, planner: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '성취감을 가장 크게 느끼는 순간은?',
      subtitle: '성취의 기준',
      emoji: '🏆',
      options: [
        {
          id: 'teacher',
          text: '다른 사람이 성장하는 모습을 볼 때',
          description: '타인의 성장',
          emoji: '🌱',
          scores: { teacher: 3, developer: 0, designer: 0, leader: 1, chef: 1, creator: 0, researcher: 0, planner: 0 }
        },
        {
          id: 'creator',
          text: '내가 만든 작품이 인정받을 때',
          description: '작품의 인정',
          emoji: '👏',
          scores: { teacher: 0, developer: 0, designer: 2, leader: 0, chef: 1, creator: 3, researcher: 0, planner: 0 }
        },
        {
          id: 'developer',
          text: '복잡한 문제를 완벽히 해결했을 때',
          description: '문제 해결',
          emoji: '✅',
          scores: { teacher: 0, developer: 3, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 2, planner: 1 }
        },
        {
          id: 'leader',
          text: '팀 목표를 성공적으로 달성했을 때',
          description: '목표 달성',
          emoji: '🎯',
          scores: { teacher: 1, developer: 0, designer: 0, leader: 3, chef: 0, creator: 0, researcher: 0, planner: 2 }
        }
      ]
    },
    {
      id: 5,
      text: '평소 스트레스를 푸는 방법은?',
      subtitle: '스트레스 해소법',
      emoji: '😌',
      options: [
        {
          id: 'chef',
          text: '요리하거나 뭔가 만들기',
          description: '손으로 만들기',
          emoji: '🍳',
          scores: { teacher: 0, developer: 0, designer: 1, leader: 0, chef: 3, creator: 1, researcher: 0, planner: 0 }
        },
        {
          id: 'creator',
          text: '음악 듣기나 공연 보기',
          description: '예술 감상',
          emoji: '🎵',
          scores: { teacher: 0, developer: 0, designer: 2, leader: 0, chef: 0, creator: 3, researcher: 0, planner: 0 }
        },
        {
          id: 'researcher',
          text: '혼자만의 시간 갖기',
          description: '개인 시간',
          emoji: '🧘',
          scores: { teacher: 0, developer: 2, designer: 1, leader: 0, chef: 0, creator: 0, researcher: 3, planner: 1 }
        },
        {
          id: 'planner',
          text: '정리정돈이나 계획 세우기',
          description: '정리와 계획',
          emoji: '📝',
          scores: { teacher: 0, developer: 1, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 1, planner: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '새로운 것을 배울 때 선호하는 방법은?',
      subtitle: '학습 방식',
      emoji: '📖',
      options: [
        {
          id: 'teacher',
          text: '누군가에게 설명하면서 배우기',
          description: '설명을 통한 학습',
          emoji: '👨‍🏫',
          scores: { teacher: 3, developer: 0, designer: 0, leader: 1, chef: 0, creator: 1, researcher: 0, planner: 0 }
        },
        {
          id: 'developer',
          text: '혼자서 차근차근 이해하기',
          description: '개별 학습',
          emoji: '📚',
          scores: { teacher: 0, developer: 3, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 2, planner: 1 }
        },
        {
          id: 'designer',
          text: '시각적 자료나 예시로 배우기',
          description: '시각적 학습',
          emoji: '🎨',
          scores: { teacher: 0, developer: 0, designer: 3, leader: 0, chef: 1, creator: 2, researcher: 0, planner: 0 }
        },
        {
          id: 'chef',
          text: '직접 해보면서 체험하기',
          description: '체험 학습',
          emoji: '⚡',
          scores: { teacher: 1, developer: 0, designer: 1, leader: 0, chef: 3, creator: 1, researcher: 0, planner: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '팀 프로젝트에서 주로 맡는 역할은?',
      subtitle: '팀 내 역할',
      emoji: '👥',
      options: [
        {
          id: 'leader',
          text: '전체적인 방향성과 의사결정 담당',
          description: '리더십',
          emoji: '👑',
          scores: { teacher: 1, developer: 0, designer: 0, leader: 3, chef: 0, creator: 0, researcher: 0, planner: 2 }
        },
        {
          id: 'planner',
          text: '계획 수립과 일정 관리',
          description: '기획 관리',
          emoji: '📅',
          scores: { teacher: 0, developer: 1, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 0, planner: 3 }
        },
        {
          id: 'developer',
          text: '기술적인 문제 해결',
          description: '기술 담당',
          emoji: '⚙️',
          scores: { teacher: 0, developer: 3, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 2, planner: 0 }
        },
        {
          id: 'creator',
          text: '아이디어 제안과 창의적 작업',
          description: '창의 담당',
          emoji: '💫',
          scores: { teacher: 0, developer: 0, designer: 2, leader: 0, chef: 0, creator: 3, researcher: 0, planner: 0 }
        }
      ]
    },
    {
      id: 8,
      text: '이상적인 업무 스타일은?',
      subtitle: '업무 선호도',
      emoji: '⏰',
      options: [
        {
          id: 'researcher',
          text: '깊이 있게 연구하고 분석하는 일',
          description: '연구 중심',
          emoji: '🔬',
          scores: { teacher: 0, developer: 2, designer: 0, leader: 0, chef: 0, creator: 0, researcher: 3, planner: 0 }
        },
        {
          id: 'chef',
          text: '정성과 세심함이 필요한 일',
          description: '정밀 작업',
          emoji: '🎯',
          scores: { teacher: 1, developer: 1, designer: 1, leader: 0, chef: 3, creator: 0, researcher: 1, planner: 0 }
        },
        {
          id: 'creator',
          text: '자유롭고 유연한 스케줄',
          description: '자유로운 일',
          emoji: '🕊️',
          scores: { teacher: 0, developer: 0, designer: 2, leader: 0, chef: 0, creator: 3, researcher: 0, planner: 0 }
        },
        {
          id: 'planner',
          text: '체계적이고 규칙적인 업무',
          description: '체계적 업무',
          emoji: '📊',
          scores: { teacher: 1, developer: 1, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 1, planner: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '중요한 결정을 내릴 때 가장 신뢰하는 것은?',
      subtitle: '의사결정 기준',
      emoji: '🎲',
      options: [
        {
          id: 'researcher',
          text: '충분한 데이터와 근거',
          description: '데이터 기반',
          emoji: '📊',
          scores: { teacher: 0, developer: 2, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 3, planner: 1 }
        },
        {
          id: 'leader',
          text: '경험과 직감',
          description: '경험 기반',
          emoji: '🧠',
          scores: { teacher: 1, developer: 0, designer: 0, leader: 3, chef: 1, creator: 1, researcher: 0, planner: 0 }
        },
        {
          id: 'designer',
          text: '창의적 영감과 직관',
          description: '직관 기반',
          emoji: '✨',
          scores: { teacher: 0, developer: 0, designer: 3, leader: 0, chef: 1, creator: 2, researcher: 0, planner: 0 }
        },
        {
          id: 'teacher',
          text: '다른 사람들의 의견',
          description: '소통 기반',
          emoji: '💬',
          scores: { teacher: 3, developer: 0, designer: 0, leader: 1, chef: 0, creator: 0, researcher: 0, planner: 1 }
        }
      ]
    },
    {
      id: 10,
      text: '10년 후 자신의 모습을 상상할 때 어떤 모습인가요?',
      subtitle: '미래 비전',
      emoji: '🔮',
      options: [
        {
          id: 'teacher',
          text: '많은 사람들에게 영향을 주는 멘토',
          description: '멘토의 모습',
          emoji: '🌟',
          scores: { teacher: 3, developer: 0, designer: 0, leader: 1, chef: 0, creator: 1, researcher: 0, planner: 0 }
        },
        {
          id: 'developer',
          text: '전문성을 인정받는 기술 전문가',
          description: '전문가의 모습',
          emoji: '🎖️',
          scores: { teacher: 0, developer: 3, designer: 0, leader: 0, chef: 1, creator: 0, researcher: 2, planner: 0 }
        },
        {
          id: 'creator',
          text: '자신만의 브랜드를 가진 아티스트',
          description: '아티스트의 모습',
          emoji: '🎭',
          scores: { teacher: 0, developer: 0, designer: 2, leader: 0, chef: 1, creator: 3, researcher: 0, planner: 0 }
        },
        {
          id: 'leader',
          text: '조직을 이끄는 리더',
          description: '리더의 모습',
          emoji: '👔',
          scores: { teacher: 0, developer: 0, designer: 0, leader: 3, chef: 0, creator: 0, researcher: 0, planner: 2 }
        }
      ]
    }
  ],
  results: {
    teacher: {
      id: 'teacher',
      title: '🧑‍🏫 교사형',
      emoji: '🧑‍🏫',
      description: '사람을 가르치고 성장시키는 일에 보람을 느끼는 타입',
      detailedDescription: '당신은 다른 사람의 성장과 발전을 도와주는 것에서 가장 큰 보람을 느끼는 교사형입니다. 뛰어난 소통 능력과 인내심을 바탕으로 지식과 경험을 전달하며, 학습자 개개인의 특성을 이해하고 맞춤형 교육을 제공하는 능력이 뛰어납니다.',
      strengths: [
        '뛰어난 소통 능력과 공감 능력',
        '인내심과 끈기 있는 성격',
        '개인차를 이해하는 포용력',
        '지식 전달과 설명 능력'
      ],
      improvements: [
        '개인 시간 관리에 더 신경쓰세요',
        '때로는 엄격함도 필요해요',
        '기술적 역량도 함께 기워보세요',
        '자기계발에도 시간을 투자하세요'
      ],
      compatibleTypes: [
        { id: 'planner', title: '기획자형', emoji: '💼', compatibility: 85 },
        { id: 'leader', title: '리더형', emoji: '👩‍⚖️', compatibility: 80 },
        { id: 'creator', title: '크리에이터형', emoji: '🎤', compatibility: 75 }
      ],
      traits: [
        { name: '소통력', emoji: '💬', percentage: 95 },
        { name: '인내심', emoji: '⏰', percentage: 92 },
        { name: '공감능력', emoji: '💕', percentage: 94 },
        { name: '설명력', emoji: '📚', percentage: 90 }
      ]
    },
    developer: {
      id: 'developer',
      title: '🧑‍💻 개발자형',
      emoji: '🧑‍💻',
      description: '문제 해결과 집중력, 조용한 환경을 선호하는 성향',
      detailedDescription: '당신은 논리적 사고와 체계적인 접근을 통해 복잡한 문제를 해결하는 것을 즐기는 개발자형입니다. 집중력이 뛰어나고 세밀한 작업을 선호하며, 기술적 도전과 지속적인 학습을 통해 전문성을 쌓아가는 것을 좋아합니다.',
      strengths: [
        '논리적이고 체계적인 사고력',
        '높은 집중력과 인내심',
        '문제 해결 능력과 분석력',
        '기술 학습에 대한 열정'
      ],
      improvements: [
        '소통 능력을 더 기워보세요',
        '팀워크 스킬도 중요해요',
        '스트레스 관리 방법을 찾아보세요',
        '사용자 관점에서도 생각해보세요'
      ],
      compatibleTypes: [
        { id: 'researcher', title: '연구자형', emoji: '🔬', compatibility: 88 },
        { id: 'planner', title: '기획자형', emoji: '💼', compatibility: 82 },
        { id: 'designer', title: '디자이너형', emoji: '🎨', compatibility: 75 }
      ],
      traits: [
        { name: '논리력', emoji: '🧩', percentage: 96 },
        { name: '집중력', emoji: '🎯', percentage: 94 },
        { name: '분석력', emoji: '🔍', percentage: 92 },
        { name: '학습력', emoji: '📖', percentage: 90 }
      ]
    },
    designer: {
      id: 'designer',
      title: '🎨 디자이너형',
      emoji: '🎨',
      description: '창의적이고 감각적이며 예술적인 분야에 강함',
      detailedDescription: '당신은 뛰어난 미적 감각과 창의력을 가진 디자이너형입니다. 시각적 표현과 감성적 소통에 탁월하며, 새로운 아이디어를 독창적인 방식으로 구현하는 능력이 뛰어납니다. 트렌드에 민감하고 예술적 영감을 현실에 적용하는 것을 즐깁니다.',
      strengths: [
        '뛰어난 창의력과 미적 감각',
        '트렌드 감지 능력',
        '시각적 커뮤니케이션 능력',
        '독창적인 아이디어 발상'
      ],
      improvements: [
        '논리적 사고도 함께 기워보세요',
        '체계적인 계획 수립 연습하세요',
        '클라이언트 소통 능력을 늘려보세요',
        '기술적 스킬도 꾸준히 업데이트하세요'
      ],
      compatibleTypes: [
        { id: 'creator', title: '크리에이터형', emoji: '🎤', compatibility: 90 },
        { id: 'chef', title: '요리사형', emoji: '🧑‍🍳', compatibility: 80 },
        { id: 'developer', title: '개발자형', emoji: '🧑‍💻', compatibility: 75 }
      ],
      traits: [
        { name: '창의력', emoji: '💡', percentage: 96 },
        { name: '미적감각', emoji: '🎨', percentage: 95 },
        { name: '감성지능', emoji: '💕', percentage: 88 },
        { name: '표현력', emoji: '✨', percentage: 92 }
      ]
    },
    leader: {
      id: 'leader',
      title: '👩‍⚖️ 리더형',
      emoji: '👩‍⚖️',
      description: '기획, 판단, 결정이 필요한 위치에서 능력 발휘',
      detailedDescription: '당신은 타고난 리더십과 결단력을 가진 리더형입니다. 복잡한 상황에서도 냉정한 판단을 내리고, 팀을 이끌어 목표를 달성하는 능력이 뛰어납니다. 책임감이 강하고 다양한 이해관계자들 사이에서 균형을 잡는 조율 능력이 탁월합니다.',
      strengths: [
        '뛰어난 리더십과 결단력',
        '상황 판단 능력과 통찰력',
        '팀 관리와 동기부여 능력',
        '책임감과 추진력'
      ],
      improvements: [
        '세부사항에도 관심을 가져보세요',
        '스트레스 관리가 중요해요',
        '다른 의견에 더 귀 기울여보세요',
        '개인 시간도 소중히 여기세요'
      ],
      compatibleTypes: [
        { id: 'planner', title: '기획자형', emoji: '💼', compatibility: 88 },
        { id: 'teacher', title: '교사형', emoji: '🧑‍🏫', compatibility: 80 },
        { id: 'researcher', title: '연구자형', emoji: '🔬', compatibility: 75 }
      ],
      traits: [
        { name: '리더십', emoji: '👑', percentage: 96 },
        { name: '결단력', emoji: '⚡', percentage: 94 },
        { name: '통찰력', emoji: '👁️', percentage: 90 },
        { name: '책임감', emoji: '🛡️', percentage: 95 }
      ]
    },
    chef: {
      id: 'chef',
      title: '🧑‍🍳 요리사형',
      emoji: '🧑‍🍳',
      description: '손재주가 좋고 섬세하며 정성과 집중력이 뛰어남',
      detailedDescription: '당신은 세심함과 정성을 바탕으로 완벽한 결과물을 만들어내는 요리사형입니다. 손재주가 뛰어나고 디테일에 민감하며, 품질과 완성도를 중시합니다. 전통과 혁신을 조화롭게 결합하고, 사람들에게 기쁨을 주는 일에서 보람을 느낍니다.',
      strengths: [
        '뛰어난 손재주와 섬세함',
        '품질과 완성도에 대한 고집',
        '창의적 실험 정신',
        '고객 만족에 대한 열정'
      ],
      improvements: [
        '시간 관리 능력을 기워보세요',
        '스트레스 관리가 중요해요',
        '체계적인 계획 수립도 연습하세요',
        '비즈니스 마인드도 필요해요'
      ],
      compatibleTypes: [
        { id: 'designer', title: '디자이너형', emoji: '🎨', compatibility: 80 },
        { id: 'creator', title: '크리에이터형', emoji: '🎤', compatibility: 78 },
        { id: 'teacher', title: '교사형', emoji: '🧑‍🏫', compatibility: 72 }
      ],
      traits: [
        { name: '섬세함', emoji: '🎯', percentage: 96 },
        { name: '손재주', emoji: '✋', percentage: 94 },
        { name: '창의력', emoji: '💡', percentage: 85 },
        { name: '정성', emoji: '💕', percentage: 95 }
      ]
    },
    creator: {
      id: 'creator',
      title: '🎤 크리에이터형',
      emoji: '🎤',
      description: '자신을 표현하고 주목받는 것을 즐기는 자유로운 성향',
      detailedDescription: '당신은 자신만의 독특한 콘텐츠를 만들고 사람들과 소통하는 것을 즐기는 크리에이터형입니다. 자유로운 영혼과 끊임없는 아이디어로 새로운 트렌드를 만들어가며, 자신의 개성과 메시지를 다양한 플랫폼을 통해 표현하는 능력이 뛰어납니다.',
      strengths: [
        '독창적인 콘텐츠 기획 능력',
        '트렌드 감지와 활용 능력',
        '자유로운 사고와 표현력',
        '소통과 네트워킹 능력'
      ],
      improvements: [
        '지속가능한 수익 모델을 고민해보세요',
        '체계적인 계획도 필요해요',
        '비판에 대한 내성을 기워보세요',
        '꾸준함과 일관성도 중요해요'
      ],
      compatibleTypes: [
        { id: 'designer', title: '디자이너형', emoji: '🎨', compatibility: 90 },
        { id: 'chef', title: '요리사형', emoji: '🧑‍🍳', compatibility: 78 },
        { id: 'teacher', title: '교사형', emoji: '🧑‍🏫', compatibility: 75 }
      ],
      traits: [
        { name: '창의력', emoji: '💡', percentage: 96 },
        { name: '표현력', emoji: '🎭', percentage: 95 },
        { name: '소통력', emoji: '💬', percentage: 88 },
        { name: '자유로움', emoji: '🕊️', percentage: 94 }
      ]
    },
    researcher: {
      id: 'researcher',
      title: '🔬 연구자형',
      emoji: '🔬',
      description: '깊이 파고들며 분석과 탐구를 즐기는 과학자 스타일',
      detailedDescription: '당신은 호기심과 탐구정신이 강한 연구자형입니다. 복잡한 문제를 체계적으로 분석하고 진실을 찾아가는 과정을 즐기며, 깊이 있는 전문성을 추구합니다. 객관적이고 논리적인 사고를 바탕으로 새로운 발견과 혁신을 이끌어내는 능력이 뛰어납니다.',
      strengths: [
        '깊이 있는 분석과 탐구 능력',
        '객관적이고 논리적인 사고',
        '끈기 있는 연구 태도',
        '새로운 발견에 대한 열정'
      ],
      improvements: [
        '소통 능력을 더 기워보세요',
        '실용적 적용 방안도 고려해보세요',
        '협업 스킬도 중요해요',
        '결과를 쉽게 설명하는 연습하세요'
      ],
      compatibleTypes: [
        { id: 'developer', title: '개발자형', emoji: '🧑‍💻', compatibility: 88 },
        { id: 'planner', title: '기획자형', emoji: '💼', compatibility: 80 },
        { id: 'leader', title: '리더형', emoji: '👩‍⚖️', compatibility: 75 }
      ],
      traits: [
        { name: '분석력', emoji: '🔍', percentage: 96 },
        { name: '탐구심', emoji: '🔬', percentage: 95 },
        { name: '논리력', emoji: '🧩', percentage: 94 },
        { name: '집중력', emoji: '🎯', percentage: 92 }
      ]
    },
    planner: {
      id: 'planner',
      title: '💼 기획자형',
      emoji: '💼',
      description: '계획 세우기와 정리, 전략적 사고에 강한 조직형',
      detailedDescription: '당신은 체계적인 계획과 전략적 사고로 프로젝트를 성공으로 이끄는 기획자형입니다. 복잡한 정보를 정리하고 효율적인 프로세스를 설계하는 능력이 뛰어나며, 장기적 비전과 단기적 실행력을 균형있게 갖춘 조직형 인재입니다.',
      strengths: [
        '체계적인 계획 수립 능력',
        '전략적 사고와 분석력',
        '효율적인 프로세스 설계',
        '조직력과 실행력'
      ],
      improvements: [
        '창의적 사고도 함께 기워보세요',
        '유연성과 적응력을 늘려보세요',
        '사람과의 소통도 중요해요',
        '때로는 즉흥성도 필요해요'
      ],
      compatibleTypes: [
        { id: 'leader', title: '리더형', emoji: '👩‍⚖️', compatibility: 88 },
        { id: 'teacher', title: '교사형', emoji: '🧑‍🏫', compatibility: 85 },
        { id: 'developer', title: '개발자형', emoji: '🧑‍💻', compatibility: 82 }
      ],
      traits: [
        { name: '기획력', emoji: '📋', percentage: 96 },
        { name: '조직력', emoji: '📊', percentage: 94 },
        { name: '전략성', emoji: '🎯', percentage: 92 },
        { name: '실행력', emoji: '⚡', percentage: 90 }
      ]
    }
  }
};