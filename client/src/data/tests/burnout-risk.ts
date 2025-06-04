import { TestData } from '../../types/test';

export const burnoutRiskTest: TestData = {
  id: 'burnout_risk_test',
  title: '번아웃 위험도 테스트',
  description: '현재 나의 직무 스트레스와 탈진 위험도를 빠르게 체크해보세요!',
  emoji: '🔥',
  color: 'purple',
  duration: '약 2분',
  questionCount: 12,
  participants: 3247,
  questions: [
    {
      id: 1,
      text: '업무로 인한 피로감은 어느 정도인가요?',
      subtitle: '지난 2주간의 평균적인 상태를 기준으로 답해주세요',
      emoji: '😴',
      options: [
        {
          id: 'a',
          text: '거의 피로하지 않음',
          description: '업무 후에도 여유가 있고 활력이 넘침',
          emoji: '😊',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '약간 피로함',
          description: '가끔 피곤하지만 휴식으로 회복됨',
          emoji: '😐',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '상당히 피로함',
          description: '자주 지치고 회복이 어려움',
          emoji: '😩',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '극도로 피로함',
          description: '항상 지쳐있고 휴식해도 회복되지 않음',
          emoji: '😵',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 2,
      text: '업무에 대한 열정은 어떤가요?',
      subtitle: '처음 시작했을 때와 비교해서 답해주세요',
      emoji: '🔥',
      options: [
        {
          id: 'a',
          text: '여전히 열정적',
          description: '업무에 대한 의미를 느끼고 즐거움',
          emoji: '🌟',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '조금 줄어듦',
          description: '예전만큼은 아니지만 여전히 관심 있음',
          emoji: '🙂',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '많이 줄어듦',
          description: '의무감으로만 일하는 느낌',
          emoji: '😑',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '거의 없음',
          description: '업무에 대한 의미를 찾기 어려움',
          emoji: '😔',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 3,
      text: '업무량은 어느 정도인가요?',
      subtitle: '현재 담당하고 있는 업무의 양을 평가해주세요',
      emoji: '📊',
      options: [
        {
          id: 'a',
          text: '적당함',
          description: '능력 범위 내에서 처리 가능한 양',
          emoji: '✅',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '조금 많음',
          description: '바쁘지만 관리 가능한 수준',
          emoji: '📝',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '상당히 많음',
          description: '자주 야근하고 휴일에도 일을 생각함',
          emoji: '🌙',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '감당하기 어려움',
          description: '업무에 압도당하는 느낌',
          emoji: '😰',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '수면의 질은 어떤가요?',
      subtitle: '최근 한 달간의 수면 상태를 평가해주세요',
      emoji: '🛌',
      options: [
        {
          id: 'a',
          text: '매우 좋음',
          description: '깊게 잠들고 상쾌하게 기상',
          emoji: '😴',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '보통',
          description: '가끔 뒤척이지만 전반적으로 양호',
          emoji: '😌',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '좋지 않음',
          description: '자주 깨고 피로가 풀리지 않음',
          emoji: '😪',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '매우 나쁨',
          description: '불면증이나 악몽으로 고생',
          emoji: '😖',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '직장 동료들과의 관계는 어떤가요?',
      subtitle: '업무상 인간관계의 스트레스 정도를 알려주세요',
      emoji: '🤝',
      options: [
        {
          id: 'a',
          text: '매우 원만함',
          description: '서로 도움을 주고받는 좋은 관계',
          emoji: '😊',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '대체로 좋음',
          description: '가끔 갈등이 있지만 해결 가능',
          emoji: '🙂',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '갈등이 있음',
          description: '자주 의견 충돌이나 소통 문제 발생',
          emoji: '😤',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '매우 어려움',
          description: '인간관계로 인한 스트레스가 심함',
          emoji: '😠',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 6,
      text: '업무 성과에 대한 인정은 받고 있나요?',
      subtitle: '노력에 대한 인정과 보상을 평가해주세요',
      emoji: '🏆',
      options: [
        {
          id: 'a',
          text: '충분히 인정받음',
          description: '노력한 만큼 평가받고 보상됨',
          emoji: '🎉',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '어느 정도 인정받음',
          description: '완전하지는 않지만 인정받는 편',
          emoji: '👍',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '별로 인정받지 못함',
          description: '노력에 비해 인정이 부족함',
          emoji: '😕',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '전혀 인정받지 못함',
          description: '아무리 해도 인정받지 못하는 느낌',
          emoji: '😞',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '휴식 시간은 충분한가요?',
      subtitle: '업무 외 시간의 충분함을 평가해주세요',
      emoji: '🌴',
      options: [
        {
          id: 'a',
          text: '충분함',
          description: '취미나 휴식을 위한 시간이 넉넉함',
          emoji: '😌',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '어느 정도 있음',
          description: '짧지만 휴식할 시간은 있음',
          emoji: '🙂',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '부족함',
          description: '휴식 시간이 매우 제한적임',
          emoji: '😓',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '거의 없음',
          description: '일 외에는 아무것도 할 시간이 없음',
          emoji: '😵‍💫',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 8,
      text: '감정적 소진 정도는 어떤가요?',
      subtitle: '정서적으로 지친 상태를 평가해주세요',
      emoji: '💭',
      options: [
        {
          id: 'a',
          text: '감정적으로 안정됨',
          description: '업무로 인한 감정적 부담이 적음',
          emoji: '😊',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '가끔 지침',
          description: '때때로 감정적으로 힘들지만 회복됨',
          emoji: '😐',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '자주 지침',
          description: '감정적으로 메마른 느낌',
          emoji: '😔',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '완전히 소진됨',
          description: '더 이상 감정적 여유가 없음',
          emoji: '😰',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 9,
      text: '업무에 대한 통제감은 어떤가요?',
      subtitle: '업무 방식이나 일정에 대한 자율성을 평가해주세요',
      emoji: '🎛️',
      options: [
        {
          id: 'a',
          text: '충분한 통제권',
          description: '업무 방식과 일정을 스스로 조절 가능',
          emoji: '👨‍💼',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '어느 정도 통제권',
          description: '제한적이지만 어느 정도 조절 가능',
          emoji: '🤔',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '제한적 통제권',
          description: '대부분 정해진 방식대로 해야 함',
          emoji: '😕',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '통제권 없음',
          description: '모든 것이 정해져 있고 자율성이 없음',
          emoji: '😤',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 10,
      text: '신체적 증상은 있나요?',
      subtitle: '스트레스로 인한 신체 증상을 체크해주세요',
      emoji: '🏥',
      options: [
        {
          id: 'a',
          text: '없음',
          description: '특별한 신체적 불편함이 없음',
          emoji: '💪',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '가끔 있음',
          description: '때때로 두통이나 어깨 결림',
          emoji: '🤕',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '자주 있음',
          description: '두통, 소화불량, 근육 긴장 등',
          emoji: '😷',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '심각함',
          description: '만성적인 신체 증상으로 고생',
          emoji: '🤒',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 11,
      text: '업무 외 활동에 대한 관심은 어떤가요?',
      subtitle: '취미나 사교활동에 대한 흥미를 평가해주세요',
      emoji: '🎨',
      options: [
        {
          id: 'a',
          text: '매우 활발함',
          description: '다양한 활동을 즐기고 에너지가 넘침',
          emoji: '🎊',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '어느 정도 활동',
          description: '몇 가지 활동은 꾸준히 유지',
          emoji: '🙂',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '관심 감소',
          description: '예전에 좋아하던 것들에 흥미 잃음',
          emoji: '😑',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '전혀 관심 없음',
          description: '아무것도 하고 싶지 않음',
          emoji: '😔',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    },
    {
      id: 12,
      text: '전반적인 직업 만족도는 어떤가요?',
      subtitle: '현재 직장과 업무에 대한 만족도를 평가해주세요',
      emoji: '📊',
      options: [
        {
          id: 'a',
          text: '매우 만족',
          description: '현재 직장과 업무가 만족스러움',
          emoji: '😍',
          scores: { burnout_critical: 0, burnout_high: 0, burnout_moderate: 1, burnout_low: 3 }
        },
        {
          id: 'b',
          text: '보통',
          description: '불만은 있지만 전체적으로 괜찮음',
          emoji: '😐',
          scores: { burnout_critical: 1, burnout_high: 1, burnout_moderate: 3, burnout_low: 1 }
        },
        {
          id: 'c',
          text: '불만족',
          description: '많은 부분에서 개선이 필요함',
          emoji: '😒',
          scores: { burnout_critical: 2, burnout_high: 3, burnout_moderate: 1, burnout_low: 0 }
        },
        {
          id: 'd',
          text: '매우 불만족',
          description: '이직을 고려할 정도로 불만족',
          emoji: '😠',
          scores: { burnout_critical: 3, burnout_high: 2, burnout_moderate: 0, burnout_low: 0 }
        }
      ]
    }
  ],
  results: {
    burnout_critical: {
      id: 'burnout_critical',
      title: '🚨 심각한 번아웃 위험군',
      emoji: '🚨',
      description: '휴식이 시급한 상태입니다!',
      detailedDescription: '현재 심각한 직무 탈진과 스트레스 상태입니다. 적극적인 휴식과 업무 환경 개선이 필요합니다. 전문가 상담을 권장합니다.',
      strengths: [
        '위험을 빠르게 인지 가능',
        '즉시 개선 방안 마련 가능',
        '주변 도움 요청 유도',
        '건강 악화 예방'
      ],
      improvements: [
        '지속적인 상태 관리 필요',
        '스트레스 요인 명확화 필요',
        '업무량 조정 필요',
        '자기 관리법 습득 필요'
      ],
      compatibleTypes: [
        { id: 'burnout_high', title: '높은 번아웃 주의군', emoji: '⚠️', compatibility: 85 },
        { id: 'burnout_moderate', title: '보통 수준의 번아웃', emoji: '😐', compatibility: 60 }
      ],
      traits: [
        { name: '번아웃 위험', emoji: '🔥', percentage: 95 },
        { name: '스트레스 수준', emoji: '😰', percentage: 92 },
        { name: '회복 필요성', emoji: '🚨', percentage: 98 },
        { name: '관리 시급성', emoji: '⏰', percentage: 90 }
      ]
    },
    burnout_high: {
      id: 'burnout_high',
      title: '⚠️ 높은 번아웃 주의군',
      emoji: '⚠️',
      description: '상당히 지친 상태입니다.',
      detailedDescription: '스트레스가 상당히 누적되어 있습니다. 업무와 휴식 간의 균형을 재정비하고, 자신을 위한 휴식을 늘릴 필요가 있습니다.',
      strengths: [
        '조기 스트레스 관리 가능',
        '자기 돌봄 인식 증진',
        '주변 조언 활용 가능',
        '업무 생산성 유지'
      ],
      improvements: [
        '스트레스 원인 명확화 필요',
        '주기적 휴식 습관 필요',
        '취미나 운동 추가 권장',
        '수면 질 관리 필요'
      ],
      compatibleTypes: [
        { id: 'burnout_moderate', title: '보통 수준의 번아웃', emoji: '😐', compatibility: 90 },
        { id: 'burnout_critical', title: '심각한 번아웃 위험군', emoji: '🚨', compatibility: 85 }
      ],
      traits: [
        { name: '스트레스 관리 필요성', emoji: '⏰', percentage: 80 },
        { name: '회복 가능성', emoji: '🌱', percentage: 75 },
        { name: '주의 필요도', emoji: '⚠️', percentage: 85 },
        { name: '자기관리 역량', emoji: '💪', percentage: 70 }
      ]
    },
    burnout_moderate: {
      id: 'burnout_moderate',
      title: '😐 보통 수준의 번아웃',
      emoji: '😐',
      description: '적절한 관리로 회복 가능합니다.',
      detailedDescription: '현재의 스트레스 상태는 평균적이며, 일상 속 소소한 휴식과 관리만으로도 충분히 회복 가능합니다. 일과 생활의 균형을 유지하세요.',
      strengths: [
        '일상 관리로 회복 가능',
        '조기 대응 용이',
        '큰 문제 없이 관리 가능',
        '자기관리 능력 향상'
      ],
      improvements: [
        '정기적 스트레스 체크 필요',
        '취미생활 강화 필요',
        '소소한 휴식 빈도 증가',
        '운동과 명상 추가 권장'
      ],
      compatibleTypes: [
        { id: 'burnout_low', title: '건강한 스트레스 관리군', emoji: '😄', compatibility: 85 },
        { id: 'burnout_high', title: '높은 번아웃 주의군', emoji: '⚠️', compatibility: 90 }
      ],
      traits: [
        { name: '회복 가능성', emoji: '🌱', percentage: 70 },
        { name: '관리 용이성', emoji: '✅', percentage: 75 },
        { name: '안정성', emoji: '⚖️', percentage: 65 },
        { name: '개선 잠재력', emoji: '📈', percentage: 80 }
      ]
    },
    burnout_low: {
      id: 'burnout_low',
      title: '😄 건강한 스트레스 관리군',
      emoji: '😄',
      description: '안정적인 스트레스 관리가 이루어지고 있습니다.',
      detailedDescription: '현재 상태는 매우 양호합니다. 지금의 습관과 생활 방식을 유지하며 꾸준히 관리하면, 건강하고 행복한 직장생활을 지속할 수 있습니다.',
      strengths: [
        '효율적인 스트레스 관리',
        '지속 가능한 생활 습관 유지',
        '긍정적 정신 상태 유지',
        '높은 업무 효율성'
      ],
      improvements: [
        '지속적인 자기관리 유지',
        '가끔 변화 시도 권장',
        '사회적 관계 유지 필요',
        '자기계발 강화'
      ],
      compatibleTypes: [
        { id: 'burnout_moderate', title: '보통 수준의 번아웃', emoji: '😐', compatibility: 85 },
        { id: 'burnout_high', title: '높은 번아웃 주의군', emoji: '⚠️', compatibility: 70 }
      ],
      traits: [
        { name: '스트레스 관리 능력', emoji: '🏅', percentage: 95 },
        { name: '정신적 안정성', emoji: '😊', percentage: 90 },
        { name: '업무 만족도', emoji: '💼', percentage: 88 },
        { name: '생활 균형', emoji: '⚖️', percentage: 92 }
      ]
    }
  }
};