import { TestData } from '../../types/test';

export const emotionalTankTest: TestData = {
  id: 'emotional_tank',
  title: '직장인 감정탱크 진단기',
  description: '오늘 하루 당신의 감정 에너지는 얼마나 소모되었나요? 10가지 직장 상황을 체크하고 감정탱크 잔량을 확인해보세요.',
  emoji: '🔋',
  color: 'from-orange-400 to-red-500',
  duration: '2분',
  questionCount: 10,
  participants: 15420,
  questions: [
    {
      id: 1,
      text: '오늘 하루 중 겪은 상황들을 체크해주세요',
      subtitle: '해당하는 모든 항목을 선택하세요',
      emoji: '💼',
      options: [
        {
          id: 'morning_rush',
          text: '아침 출근길 지하철/버스 지연',
          description: '예상보다 늦어져서 스트레스 받았다',
          emoji: '🚇',
          scores: { drain: 15 }
        },
        {
          id: 'urgent_meeting',
          text: '갑작스러운 회의 소집',
          description: '준비 시간 없이 급하게 회의에 참석',
          emoji: '⚡',
          scores: { drain: 25 }
        },
        {
          id: 'boss_pressure',
          text: '상사의 무리한 요구',
          description: '불가능한 일정이나 과도한 업무 요구',
          emoji: '😤',
          scores: { drain: 35 }
        },
        {
          id: 'colleague_conflict',
          text: '동료와의 갈등',
          description: '의견 충돌이나 불편한 상황 발생',
          emoji: '😰',
          scores: { drain: 30 }
        }
      ]
    },
    {
      id: 2,
      text: '업무 관련 스트레스 상황',
      subtitle: '경험한 항목을 모두 선택하세요',
      emoji: '💻',
      options: [
        {
          id: 'deadline_pressure',
          text: '마감 압박',
          description: '촉박한 일정으로 인한 압박감',
          emoji: '⏰',
          scores: { drain: 28 }
        },
        {
          id: 'system_error',
          text: '시스템 오류/기술적 문제',
          description: '컴퓨터나 프로그램 문제로 업무 지연',
          emoji: '🐛',
          scores: { drain: 20 }
        },
        {
          id: 'endless_emails',
          text: '끝없는 이메일/메신저',
          description: '업무 외 시간에도 지속적인 연락',
          emoji: '📧',
          scores: { drain: 18 }
        },
        {
          id: 'multitasking',
          text: '동시다발적 업무 처리',
          description: '여러 업무를 동시에 처리해야 하는 상황',
          emoji: '🤹',
          scores: { drain: 22 }
        }
      ]
    },
    {
      id: 3,
      text: '감정적 소모 상황',
      subtitle: '오늘 경험한 감정적 어려움들',
      emoji: '😔',
      options: [
        {
          id: 'criticism',
          text: '비판이나 지적 받음',
          description: '업무나 태도에 대한 부정적 피드백',
          emoji: '😓',
          scores: { drain: 32 }
        },
        {
          id: 'lonely_lunch',
          text: '혼자 점심 식사',
          description: '동료들과 어울리지 못하고 혼자 시간',
          emoji: '🍱',
          scores: { drain: 12 }
        },
        {
          id: 'overtime',
          text: '야근 또는 추가 업무',
          description: '정시 퇴근하지 못하고 업무 연장',
          emoji: '🌙',
          scores: { drain: 25 }
        },
        {
          id: 'commute_stress',
          text: '퇴근길 교통체증',
          description: '집에 가는 길이 예상보다 오래 걸림',
          emoji: '🚗',
          scores: { drain: 15 }
        }
      ]
    }
  ],
  results: {
    'full_tank': {
      id: 'full_tank',
      title: '감정탱크 만충전 🔋',
      emoji: '😊',
      description: '오늘은 비교적 평온한 하루를 보내셨네요!',
      detailedDescription: '당신의 감정 에너지가 거의 소모되지 않은 상태입니다. 이런 날에는 자신을 위한 시간을 갖거나 새로운 도전을 해보는 것도 좋겠어요.',
      strengths: [
        '스트레스 관리를 잘하고 있어요',
        '업무와 개인 시간의 균형이 좋습니다',
        '긍정적인 마인드를 유지하고 있어요'
      ],
      improvements: [
        '현재 상태를 유지하세요',
        '여유 있을 때 자기계발을 해보세요',
        '주변 동료들에게 관심을 가져보세요'
      ],
      compatibleTypes: [],
      traits: [
        { name: '스트레스 저항력', emoji: '🛡️', percentage: 85 },
        { name: '감정 안정성', emoji: '😌', percentage: 90 },
        { name: '업무 만족도', emoji: '💼', percentage: 80 }
      ],
      percentage: 85,
      rarity: '상위 25%'
    },
    'half_tank': {
      id: 'half_tank',
      title: '감정탱크 절반 🔋',
      emoji: '😐',
      description: '평균적인 직장인의 하루를 보내셨네요.',
      detailedDescription: '적당한 스트레스와 함께 하루를 마무리했습니다. 조금 더 자신을 돌봐주면 좋을 것 같아요.',
      strengths: [
        '적절한 스트레스 수준을 유지해요',
        '업무 적응력이 좋습니다',
        '현실적인 기대치를 가지고 있어요'
      ],
      improvements: [
        '스트레스 해소 방법을 찾아보세요',
        '규칙적인 휴식 시간을 가져보세요',
        '취미 활동을 늘려보세요'
      ],
      compatibleTypes: [],
      traits: [
        { name: '스트레스 저항력', emoji: '🛡️', percentage: 60 },
        { name: '감정 안정성', emoji: '😌', percentage: 65 },
        { name: '업무 만족도', emoji: '💼', percentage: 55 }
      ],
      percentage: 50,
      rarity: '상위 50%'
    },
    'low_tank': {
      id: 'low_tank',
      title: '감정탱크 부족 🪫',
      emoji: '😰',
      description: '오늘 하루 꽤 힘든 시간을 보내셨네요.',
      detailedDescription: '감정적으로 많이 소모된 상태입니다. 충분한 휴식과 자기 돌봄이 필요한 시점이에요.',
      strengths: [
        '어려운 상황을 버텨내고 있어요',
        '현실을 직시하는 용기가 있습니다',
        '개선의 여지를 인식하고 있어요'
      ],
      improvements: [
        '충분한 수면을 취하세요',
        '스트레스 해소 활동을 늘려보세요',
        '신뢰할 수 있는 사람과 대화해보세요'
      ],
      compatibleTypes: [],
      traits: [
        { name: '스트레스 저항력', emoji: '🛡️', percentage: 35 },
        { name: '감정 안정성', emoji: '😌', percentage: 40 },
        { name: '업무 만족도', emoji: '💼', percentage: 30 }
      ],
      percentage: 25,
      rarity: '상위 75%'
    },
    'empty_tank': {
      id: 'empty_tank',
      title: '감정탱크 고갈 💀',
      emoji: '😵',
      description: '오늘은 정말 고생 많으셨어요. 당신이 느끼는 감정은 충분히 이해할 만합니다.',
      detailedDescription: '감정 에너지가 거의 바닥난 상태입니다. 즉시 휴식과 회복이 필요해요. 혼자 견디지 마시고 도움을 요청하는 것도 중요합니다.',
      strengths: [
        '극한 상황에서도 견뎌내고 있어요',
        '자신의 상태를 정확히 파악하고 있습니다',
        '변화의 필요성을 느끼고 있어요'
      ],
      improvements: [
        '즉시 휴식을 취하세요',
        '전문가의 도움을 고려해보세요',
        '업무 환경 개선을 고민해보세요'
      ],
      compatibleTypes: [],
      traits: [
        { name: '스트레스 저항력', emoji: '🛡️', percentage: 15 },
        { name: '감정 안정성', emoji: '😌', percentage: 20 },
        { name: '업무 만족도', emoji: '💼', percentage: 10 }
      ],
      percentage: 5,
      rarity: '상위 90%'
    }
  }
};