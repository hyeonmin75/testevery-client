import { TestData } from '../../types/test';

export const travelTest: TestData = {
  id: 'travel',
  title: '여행 스타일 테스트',
  description: '당신만의 여행 스타일을 찾아보세요',
  emoji: '🗺️',
  color: 'blue',
  duration: '3-4분',
  questionCount: 8,
  participants: 1689,
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
    },
    {
      id: 2,
      text: '여행지에서 가장 하고 싶은 활동은?',
      subtitle: '선호하는 여행 활동을 선택해주세요',
      emoji: '🎯',
      options: [
        {
          id: 'a',
          text: '미리 예약한 관광지와 맛집 투어',
          description: '유명하고 검증된 장소들을 체계적으로 둘러봐요',
          emoji: '🗺️',
          scores: { planner: 3, relaxed: 1, adventurer: 0, cultural: 2 }
        },
        {
          id: 'b',
          text: '카페나 공원에서 여유롭게 쉬기',
          description: '바쁜 일상에서 벗어나 진정한 휴식을 취해요',
          emoji: '☕',
          scores: { planner: 0, relaxed: 3, adventurer: 0, cultural: 1 }
        },
        {
          id: 'c',
          text: '스카이다이빙, 번지점프 같은 익스트림 스포츠',
          description: '스릴 넘치는 새로운 경험을 추구해요',
          emoji: '🪂',
          scores: { planner: 1, relaxed: 0, adventurer: 3, cultural: 0 }
        },
        {
          id: 'd',
          text: '박물관, 미술관, 유적지 탐방',
          description: '그 지역의 역사와 문화를 깊이 있게 체험해요',
          emoji: '🏛️',
          scores: { planner: 2, relaxed: 1, adventurer: 0, cultural: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '여행 중 예상치 못한 상황이 발생했을 때?',
      subtitle: '돌발 상황에서의 대처 방식을 선택해주세요',
      emoji: '⚠️',
      options: [
        {
          id: 'a',
          text: '미리 준비한 플랜B로 차분하게 대처한다',
          description: '철저한 준비로 모든 상황에 대비해요',
          emoji: '📋',
          scores: { planner: 3, relaxed: 1, adventurer: 1, cultural: 1 }
        },
        {
          id: 'b',
          text: '스트레스받지 않고 그냥 받아들인다',
          description: '여유롭게 상황을 받아들이고 적응해요',
          emoji: '😌',
          scores: { planner: 0, relaxed: 3, adventurer: 1, cultural: 0 }
        },
        {
          id: 'c',
          text: '오히려 새로운 기회로 생각하고 즐긴다',
          description: '예상치 못한 모험을 기꺼이 받아들여요',
          emoji: '🎪',
          scores: { planner: 0, relaxed: 1, adventurer: 3, cultural: 1 }
        },
        {
          id: 'd',
          text: '현지인에게 조언을 구하고 배워본다',
          description: '지역 문화와 사람들로부터 해답을 찾아요',
          emoji: '🗣️',
          scores: { planner: 1, relaxed: 1, adventurer: 1, cultural: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '여행 숙소를 선택하는 기준은?',
      subtitle: '머무를 곳을 정하는 우선순위를 선택해주세요',
      emoji: '🏨',
      options: [
        {
          id: 'a',
          text: '좋은 리뷰와 완벽한 시설을 갖춘 곳',
          description: '안전하고 편안한 숙박을 최우선으로 해요',
          emoji: '⭐',
          scores: { planner: 3, relaxed: 2, adventurer: 0, cultural: 1 }
        },
        {
          id: 'b',
          text: '조용하고 편안한 분위기의 곳',
          description: '푹 쉴 수 있는 평온한 환경을 중시해요',
          emoji: '🌙',
          scores: { planner: 1, relaxed: 3, adventurer: 0, cultural: 1 }
        },
        {
          id: 'c',
          text: '독특하고 색다른 경험을 할 수 있는 곳',
          description: '특별하고 기억에 남을 숙박 경험을 원해요',
          emoji: '🏕️',
          scores: { planner: 0, relaxed: 0, adventurer: 3, cultural: 2 }
        },
        {
          id: 'd',
          text: '현지 문화를 체험할 수 있는 전통적인 곳',
          description: '그 지역만의 독특한 문화를 경험하고 싶어해요',
          emoji: '🏠',
          scores: { planner: 1, relaxed: 1, adventurer: 1, cultural: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '여행에서 가장 중요하게 생각하는 것은?',
      subtitle: '여행의 핵심 가치를 선택해주세요',
      emoji: '💎',
      options: [
        {
          id: 'a',
          text: '안전하고 효율적인 일정 진행',
          description: '문제없이 계획한 대로 모든 것을 경험하고 싶어해요',
          emoji: '✅',
          scores: { planner: 3, relaxed: 1, adventurer: 0, cultural: 1 }
        },
        {
          id: 'b',
          text: '마음의 평화와 진정한 휴식',
          description: '스트레스 해소와 재충전이 가장 중요해요',
          emoji: '🧘‍♀️',
          scores: { planner: 0, relaxed: 3, adventurer: 0, cultural: 1 }
        },
        {
          id: 'c',
          text: '새로운 도전과 짜릿한 경험',
          description: '평소에 못해본 특별한 활동과 모험을 추구해요',
          emoji: '⚡',
          scores: { planner: 0, relaxed: 0, adventurer: 3, cultural: 1 }
        },
        {
          id: 'd',
          text: '새로운 지식과 문화적 깨달음',
          description: '여행을 통해 배우고 성장하는 것을 중시해요',
          emoji: '📚',
          scores: { planner: 1, relaxed: 1, adventurer: 1, cultural: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '여행 중 음식을 선택하는 방식은?',
      subtitle: '현지 음식에 대한 접근법을 선택해주세요',
      emoji: '🍽️',
      options: [
        {
          id: 'a',
          text: '미리 조사한 유명 맛집만 골라간다',
          description: '검증된 맛집에서 확실한 맛을 경험하고 싶어해요',
          emoji: '📱',
          scores: { planner: 3, relaxed: 1, adventurer: 0, cultural: 1 }
        },
        {
          id: 'b',
          text: '편안하고 부담없는 음식을 찾는다',
          description: '익숙하고 소화하기 편한 음식을 선호해요',
          emoji: '🥗',
          scores: { planner: 1, relaxed: 3, adventurer: 0, cultural: 0 }
        },
        {
          id: 'c',
          text: '가장 특이하고 도전적인 음식을 시도한다',
          description: '평소에 먹어보지 못한 새로운 맛에 도전해요',
          emoji: '🌶️',
          scores: { planner: 0, relaxed: 0, adventurer: 3, cultural: 2 }
        },
        {
          id: 'd',
          text: '현지인들이 실제로 먹는 전통 음식을 찾는다',
          description: '그 지역의 진정한 음식 문화를 체험하고 싶어해요',
          emoji: '🥢',
          scores: { planner: 1, relaxed: 1, adventurer: 1, cultural: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '여행 동반자와 의견이 다를 때는?',
      subtitle: '여행 중 갈등 상황에서의 대처법을 선택해주세요',
      emoji: '🤝',
      options: [
        {
          id: 'a',
          text: '미리 정한 계획을 따르자고 설득한다',
          description: '체계적인 계획의 중요성을 강조해요',
          emoji: '📅',
          scores: { planner: 3, relaxed: 0, adventurer: 1, cultural: 1 }
        },
        {
          id: 'b',
          text: '서로 양보하고 편안한 방향으로 결정한다',
          description: '갈등보다는 화합을 우선시해요',
          emoji: '☮️',
          scores: { planner: 1, relaxed: 3, adventurer: 0, cultural: 1 }
        },
        {
          id: 'c',
          text: '둘 다 해보거나 더 재밌는 것을 선택한다',
          description: '모든 가능성을 탐색하고 모험을 즐겨요',
          emoji: '🎯',
          scores: { planner: 0, relaxed: 1, adventurer: 3, cultural: 1 }
        },
        {
          id: 'd',
          text: '현지 정보를 더 알아보고 현명하게 판단한다',
          description: '충분한 정보를 바탕으로 최선의 선택을 해요',
          emoji: '🔍',
          scores: { planner: 2, relaxed: 1, adventurer: 0, cultural: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '여행 후 가장 기억에 남고 싶은 것은?',
      subtitle: '여행의 의미와 가치를 선택해주세요',
      emoji: '💭',
      options: [
        {
          id: 'a',
          text: '계획한 모든 것을 성공적으로 경험한 만족감',
          description: '완벽하게 실행된 여행에서 성취감을 얻어요',
          emoji: '🏆',
          scores: { planner: 3, relaxed: 1, adventurer: 1, cultural: 1 }
        },
        {
          id: 'b',
          text: '일상의 스트레스에서 완전히 벗어난 평온함',
          description: '마음의 평화와 재충전된 에너지를 얻어요',
          emoji: '🌅',
          scores: { planner: 0, relaxed: 3, adventurer: 0, cultural: 1 }
        },
        {
          id: 'c',
          text: '평생 잊지 못할 짜릿하고 특별한 경험',
          description: '아드레날린 넘치는 모험의 추억을 간직해요',
          emoji: '🎪',
          scores: { planner: 0, relaxed: 0, adventurer: 3, cultural: 1 }
        },
        {
          id: 'd',
          text: '새로운 문화와 사람들을 통해 얻은 깨달음',
          description: '여행을 통해 넓어진 시야와 지혜를 소중히 해요',
          emoji: '🌍',
          scores: { planner: 1, relaxed: 1, adventurer: 1, cultural: 3 }
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
      detailedDescription: '철저한 계획과 준비를 통해 안전하고 알찬 여행을 만들어가는 체계적인 여행자입니다. 모든 것을 미리 조사하고 준비해서 완벽한 여행 경험을 추구해요.',
      strengths: [
        '완벽한 계획으로 효율적인 여행을 만들어요',
        '안전하고 검증된 여행 경험을 제공해요',
        '시간과 예산을 효과적으로 관리해요',
        '다양한 정보 수집과 분석 능력이 뛰어나요'
      ],
      improvements: [
        '때로는 즉흥적인 재미도 즐겨보세요',
        '예상치 못한 상황도 새로운 기회로 받아들여보세요',
        '완벽함보다는 경험 자체에 집중해보세요',
        '현지인들과의 자연스러운 만남도 소중히 여겨보세요'
      ],
      compatibleTypes: [
        { id: 'cultural', title: '문화탐방형', emoji: '🏛️', compatibility: 90 },
        { id: 'relaxed', title: '힐링형', emoji: '🧘', compatibility: 75 },
        { id: 'adventurer', title: '모험형', emoji: '🎪', compatibility: 65 }
      ],
      traits: [
        { name: '계획성', emoji: '📋', percentage: 95 },
        { name: '체계성', emoji: '🎯', percentage: 90 },
        { name: '안전성', emoji: '🛡️', percentage: 88 },
        { name: '효율성', emoji: '⚡', percentage: 85 }
      ]
    },
    relaxed: {
      id: 'relaxed',
      title: '힐링형 여행자',
      emoji: '🧘',
      description: '여유롭고 편안한 여행을 즐기는 당신!',
      detailedDescription: '바쁜 일상에서 벗어나 진정한 휴식과 힐링을 추구하는 여유로운 여행자입니다. 스트레스 해소와 마음의 평화를 가장 중요하게 생각해요.',
      strengths: [
        '진정한 휴식을 통해 완전한 재충전을 해요',
        '스트레스 해소와 마음의 평화를 얻어요',
        '여유로운 일정으로 깊이 있는 경험을 해요',
        '자연스럽고 편안한 여행 분위기를 만들어요'
      ],
      improvements: [
        '새로운 경험과 도전도 시도해보세요',
        '활동적인 재미도 간간이 추가해보세요',
        '현지 문화 체험도 여유롭게 즐겨보세요',
        '계획적인 준비도 어느 정도는 필요해요'
      ],
      compatibleTypes: [
        { id: 'planner', title: '계획형', emoji: '📋', compatibility: 85 },
        { id: 'cultural', title: '문화탐방형', emoji: '🏛️', compatibility: 78 },
        { id: 'adventurer', title: '모험형', emoji: '🎪', compatibility: 60 }
      ],
      traits: [
        { name: '여유로움', emoji: '🧘', percentage: 95 },
        { name: '평온함', emoji: '☮️', percentage: 88 },
        { name: '힐링', emoji: '🌿', percentage: 90 },
        { name: '마음챙김', emoji: '💚', percentage: 85 }
      ]
    },
    adventurer: {
      id: 'adventurer',
      title: '모험형 여행자',
      emoji: '🎪',
      description: '스릴과 모험을 추구하는 당신!',
      detailedDescription: '새로운 도전과 짜릿한 경험을 통해 삶의 활력을 얻는 모험적인 여행자입니다. 평범함을 거부하고 특별하고 독특한 경험을 추구해요.',
      strengths: [
        '새로운 도전을 통해 성장하는 경험을 해요',
        '독특하고 특별한 추억을 만들어요',
        '활동적이고 역동적인 여행을 즐겨요',
        '용기와 모험심으로 한계를 극복해요'
      ],
      improvements: [
        '안전에 대한 고려도 충분히 해보세요',
        '때로는 휴식과 여유도 필요해요',
        '계획적인 준비가 더 나은 모험을 만들어요',
        '문화적 깊이도 함께 추구해보세요'
      ],
      compatibleTypes: [
        { id: 'cultural', title: '문화탐방형', emoji: '🏛️', compatibility: 82 },
        { id: 'planner', title: '계획형', emoji: '📋', compatibility: 70 },
        { id: 'relaxed', title: '힐링형', emoji: '🧘', compatibility: 60 }
      ],
      traits: [
        { name: '모험심', emoji: '🎪', percentage: 95 },
        { name: '도전정신', emoji: '⛰️', percentage: 90 },
        { name: '용기', emoji: '🦁', percentage: 88 },
        { name: '활동성', emoji: '⚡', percentage: 85 }
      ]
    },
    cultural: {
      id: 'cultural',
      title: '문화탐방형 여행자',
      emoji: '🏛️',
      description: '역사와 문화를 탐구하는 당신!',
      detailedDescription: '각 지역의 독특한 문화와 역사를 깊이 있게 경험하고 배우는 것을 추구하는 지적인 여행자입니다. 여행을 통해 지식과 시야를 넓히는 것을 중요하게 생각해요.',
      strengths: [
        '깊이 있는 문화 경험과 학습을 해요',
        '역사와 전통에 대한 이해를 넓혀요',
        '의미 있고 교육적인 여행을 만들어요',
        '현지인들과의 진정한 교류를 추구해요'
      ],
      improvements: [
        '때로는 단순한 재미와 휴식도 즐겨보세요',
        '계획에 얽매이지 말고 자유로운 탐험도 해보세요',
        '모험적인 활동도 문화 체험의 일부로 여겨보세요',
        '현지인들과 더 자연스럽게 어울려보세요'
      ],
      compatibleTypes: [
        { id: 'planner', title: '계획형', emoji: '📋', compatibility: 88 },
        { id: 'adventurer', title: '모험형', emoji: '🎪', compatibility: 80 },
        { id: 'relaxed', title: '힐링형', emoji: '🧘', compatibility: 75 }
      ],
      traits: [
        { name: '호기심', emoji: '🔍', percentage: 95 },
        { name: '학습욕구', emoji: '📚', percentage: 90 },
        { name: '문화감수성', emoji: '🎭', percentage: 88 },
        { name: '깊이', emoji: '🌊', percentage: 85 }
      ]
    }
  }
};