import { TestData } from '../../types/test';

export const tappingSpeedTest: TestData = {
  id: 'tapping_speed',
  title: '탭핑 스피드 테스트',
  description: '1분 안에 몇 번 탭하나요?',
  emoji: '👆',
  color: 'blue',
  duration: '1-2분',
  questionCount: 2,
  participants: 1892,
  questions: [
    {
      id: 1,
      text: '평소 게임이나 앱을 사용할 때 어떤 스타일인가요?',
      subtitle: '가장 어울리는 스타일을 선택해주세요',
      emoji: '📱',
      options: [
        {
          id: 'a',
          text: '신중하고 정확하게',
          description: '실수하지 않도록 천천히 정확하게 조작',
          emoji: '🎯',
          scores: { beginner: 3, intermediate: 2, advanced: 1, expert: 1, master: 0 }
        },
        {
          id: 'b',
          text: '꾸준하고 안정적으로',
          description: '일정한 속도로 꾸준히 지속',
          emoji: '⚖️',
          scores: { beginner: 2, intermediate: 3, advanced: 2, expert: 1, master: 1 }
        },
        {
          id: 'c',
          text: '빠르고 민첩하게',
          description: '빠른 반응과 순발력으로 조작',
          emoji: '⚡',
          scores: { beginner: 1, intermediate: 2, advanced: 3, expert: 2, master: 1 }
        },
        {
          id: 'd',
          text: '최고 속도로 완벽하게',
          description: '최대한 빠르면서도 정확하게 조작',
          emoji: '🚀',
          scores: { beginner: 0, intermediate: 1, advanced: 2, expert: 3, master: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '집중력이 필요한 작업을 할 때 당신의 모습은?',
      subtitle: '가장 어울리는 방식을 선택해주세요',
      emoji: '🧠',
      options: [
        {
          id: 'a',
          text: '충분한 시간을 두고 차근차근',
          description: '서두르지 않고 자신만의 페이스 유지',
          emoji: '🐌',
          scores: { beginner: 3, intermediate: 2, advanced: 1, expert: 0, master: 0 }
        },
        {
          id: 'b',
          text: '일정한 리듬으로 꾸준히',
          description: '안정적인 속도로 끝까지 지속',
          emoji: '🥁',
          scores: { beginner: 1, intermediate: 3, advanced: 2, expert: 1, master: 1 }
        },
        {
          id: 'c',
          text: '빠른 속도로 집중해서',
          description: '단시간에 집중력을 발휘해 빠르게 처리',
          emoji: '💨',
          scores: { beginner: 0, intermediate: 1, advanced: 3, expert: 2, master: 1 }
        },
        {
          id: 'd',
          text: '최고 집중력으로 완벽하게',
          description: '극도의 집중력으로 최고 성과 달성',
          emoji: '🔥',
          scores: { beginner: 0, intermediate: 0, advanced: 1, expert: 3, master: 3 }
        }
      ]
    }
  ],
  results: {
    beginner: {
      id: 'beginner',
      title: '초보 탭핑족',
      emoji: '🐌',
      description: '차근차근 꾸준히! 속도보다는 정확성을 중시하는 신중한 타입이에요.',
      detailedDescription: '당신은 급하게 서두르기보다는 차근차근 꾸준히 하는 것을 선호하는 성격이에요. 속도보다는 정확성과 안정성을 중요하게 여기며, 무리하지 않고 자신의 페이스를 유지하는 현명함을 가지고 있습니다. 꾸준함과 인내심이 당신의 가장 큰 장점이에요.',
      strengths: [
        '꾸준하고 안정적인 성격',
        '정확성을 중시하는 신중함',
        '자신만의 페이스를 유지하는 능력',
        '인내심과 끈기'
      ],
      improvements: [
        '때로는 빠른 결정도 필요해요',
        '새로운 도전에 적극적으로 임하기',
        '속도감 있는 활동도 시도해보기',
        '순발력 기르는 연습하기'
      ],
      compatibleTypes: [
        { id: 'intermediate', title: '안정적인 탭핑족', emoji: '🐢', compatibility: 85 },
        { id: 'advanced', title: '빠른 탭핑족', emoji: '🐰', compatibility: 70 },
        { id: 'expert', title: '전문 탭핑족', emoji: '🦅', compatibility: 60 }
      ],
      traits: [
        { name: '안정성', emoji: '🛡️', percentage: 90 },
        { name: '신중함', emoji: '🤔', percentage: 85 },
        { name: '꾸준함', emoji: '📈', percentage: 88 },
        { name: '정확성', emoji: '🎯', percentage: 80 }
      ]
    },
    intermediate: {
      id: 'intermediate',
      title: '안정적인 탭핑족',
      emoji: '🐢',
      description: '균형잡힌 속도와 지구력! 꾸준함과 안정성을 겸비한 밸런스형이에요.',
      detailedDescription: '당신은 속도와 지구력의 균형을 잘 맞추는 사람이에요. 너무 빠르지도 느리지도 않은 적절한 페이스를 유지하며, 끝까지 포기하지 않는 끈기를 가지고 있습니다. 안정적이면서도 꾸준한 성과를 내는 것이 당신의 특징이며, 신뢰할 수 있는 성격을 지니고 있어요.',
      strengths: [
        '균형잡힌 속도감',
        '높은 지구력과 집중력',
        '안정적인 성과 유지',
        '끝까지 포기하지 않는 끈기'
      ],
      improvements: [
        '때로는 더 빠른 속도에 도전해보기',
        '순간적인 폭발력 기르기',
        '리스크를 감수한 도전도 필요',
        '창의적인 접근 방식 시도하기'
      ],
      compatibleTypes: [
        { id: 'advanced', title: '빠른 탭핑족', emoji: '🐰', compatibility: 85 },
        { id: 'beginner', title: '초보 탭핑족', emoji: '🐌', compatibility: 85 },
        { id: 'expert', title: '전문 탭핑족', emoji: '🦅', compatibility: 80 }
      ],
      traits: [
        { name: '균형감', emoji: '⚖️', percentage: 88 },
        { name: '지구력', emoji: '💪', percentage: 85 },
        { name: '안정성', emoji: '🛡️', percentage: 80 },
        { name: '집중력', emoji: '🎯', percentage: 82 }
      ]
    },
    advanced: {
      id: 'advanced',
      title: '빠른 탭핑족',
      emoji: '🐰',
      description: '빠른 속도와 민첩성! 순발력이 뛰어나고 에너지 넘치는 액티브형이에요.',
      detailedDescription: '당신은 빠른 반응속도와 높은 민첩성을 가진 사람이에요. 순간적인 판단력이 뛰어나고, 활동적이며 에너지가 넘치는 성격입니다. 빠르게 변화하는 상황에 잘 적응하며, 역동적인 활동을 좋아하는 특징이 있어요. 순발력과 기민함이 당신의 가장 큰 장점입니다.',
      strengths: [
        '뛰어난 순발력과 반응속도',
        '높은 민첩성과 기동력',
        '빠른 상황 판단 능력',
        '활동적이고 에너지 넘치는 성격'
      ],
      improvements: [
        '지구력도 함께 기르기',
        '때로는 신중한 판단도 필요',
        '꾸준함과 인내심 기르기',
        '장기적인 계획 세우는 능력 향상'
      ],
      compatibleTypes: [
        { id: 'expert', title: '전문 탭핑족', emoji: '🦅', compatibility: 85 },
        { id: 'intermediate', title: '안정적인 탭핑족', emoji: '🐢', compatibility: 85 },
        { id: 'master', title: '마스터 탭핑족', emoji: '⚡', compatibility: 80 }
      ],
      traits: [
        { name: '순발력', emoji: '⚡', percentage: 90 },
        { name: '민첩성', emoji: '🏃‍♂️', percentage: 88 },
        { name: '반응속도', emoji: '💨', percentage: 85 },
        { name: '활동성', emoji: '🔥', percentage: 87 }
      ]
    },
    expert: {
      id: 'expert',
      title: '전문 탭핑족',
      emoji: '🦅',
      description: '뛰어난 집중력과 기술! 높은 수준의 스킬과 정신력을 겸비한 프로페셔널이에요.',
      detailedDescription: '당신은 높은 수준의 집중력과 기술을 가진 전문가 타입이에요. 꾸준한 연습과 노력으로 실력을 쌓아왔으며, 어떤 상황에서도 흔들리지 않는 강한 정신력을 가지고 있습니다. 목표 지향적이고 완벽주의적 성향이 있으며, 자신이 하는 일에 대한 높은 자부심을 지니고 있어요.',
      strengths: [
        '뛰어난 집중력과 정신력',
        '높은 수준의 기술과 스킬',
        '목표 지향적인 성격',
        '꾸준한 자기계발 의지'
      ],
      improvements: [
        '완벽주의를 조금 내려놓기',
        '다른 사람들과의 협력도 중요',
        '휴식과 여유도 필요',
        '실패를 두려워하지 않기'
      ],
      compatibleTypes: [
        { id: 'master', title: '마스터 탭핑족', emoji: '⚡', compatibility: 90 },
        { id: 'advanced', title: '빠른 탭핑족', emoji: '🐰', compatibility: 85 },
        { id: 'intermediate', title: '안정적인 탭핑족', emoji: '🐢', compatibility: 75 }
      ],
      traits: [
        { name: '집중력', emoji: '🎯', percentage: 92 },
        { name: '기술력', emoji: '🛠️', percentage: 90 },
        { name: '정신력', emoji: '🧠', percentage: 88 },
        { name: '전문성', emoji: '👑', percentage: 85 }
      ]
    },
    master: {
      id: 'master',
      title: '마스터 탭핑족',
      emoji: '⚡',
      description: '최고 수준의 스피드와 지구력! 타고난 재능과 끊임없는 노력이 만든 진정한 마스터예요.',
      detailedDescription: '당신은 탭핑의 진정한 마스터예요! 최고 수준의 속도와 지구력을 동시에 갖추고 있으며, 타고난 재능과 끊임없는 노력이 조화를 이룬 결과입니다. 어떤 도전도 두려워하지 않는 용기와 최고를 향한 열정을 가지고 있으며, 다른 사람들에게 영감을 주는 존재예요.',
      strengths: [
        '최고 수준의 속도와 지구력',
        '타고난 재능과 노력의 조화',
        '도전 정신과 열정',
        '다른 사람들에게 영감을 주는 리더십'
      ],
      improvements: [
        '겸손함을 잃지 않기',
        '후배들을 이끌어주는 멘토 역할',
        '지속적인 자기관리',
        '번아웃 예방에 신경쓰기'
      ],
      compatibleTypes: [
        { id: 'expert', title: '전문 탭핑족', emoji: '🦅', compatibility: 90 },
        { id: 'advanced', title: '빠른 탭핑족', emoji: '🐰', compatibility: 80 },
        { id: 'intermediate', title: '안정적인 탭핑족', emoji: '🐢', compatibility: 70 }
      ],
      traits: [
        { name: '최고속도', emoji: '🚀', percentage: 98 },
        { name: '지구력', emoji: '💎', percentage: 95 },
        { name: '재능', emoji: '⭐', percentage: 95 },
        { name: '열정', emoji: '🔥', percentage: 92 }
      ]
    }
  }
};