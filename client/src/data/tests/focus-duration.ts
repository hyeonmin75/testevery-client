import { TestData } from '../../types/test';

export const focusDurationTest: TestData = {
  id: 'focus_duration_test',
  title: '집중력 지속시간 측정 테스트',
  description: '변화하는 패턴 속에서 특정 대상을 추적하여 집중력을 측정합니다',
  emoji: '🎯',
  color: 'blue',
  duration: '2-3분',
  questionCount: 20,
  participants: 3847,
  questions: [
    {
      id: 1,
      text: '집중력 측정 테스트 준비',
      subtitle: '3x3 격자의 9개 원 중 빨간색으로 깜박이는 원을 빠르게 클릭하세요. 총 20라운드입니다.',
      emoji: '🎯',
      options: [
        {
          id: 'start',
          text: '테스트 시작',
          description: '20라운드 집중력 측정 시작',
          emoji: '🚀',
          scores: { score: 0 }
        }
      ]
    }
  ],
  results: {
    super_focus: {
      id: 'super_focus',
      title: '초집중형',
      emoji: '🧠',
      description: '뛰어난 주의력과 멀티태스킹 능력을 보유한 집중력의 달인입니다!',
      detailedDescription: '18-20점을 달성한 당신은 탁월한 집중력과 지속적인 주의력을 가지고 있습니다. 심리학적으로 보면 전두엽의 실행 기능이 매우 발달되어 있으며, 선택적 주의력과 지속적 주의력 모두 우수합니다. 복잡한 정보 처리 상황에서도 핵심을 놓치지 않는 능력이 뛰어나며, 멀티태스킹 환경에서도 높은 성과를 낼 수 있습니다. 이러한 집중력은 학업, 업무, 창작 활동 등 모든 영역에서 강력한 경쟁력이 됩니다.',
      strengths: [
        '뛰어난 선택적 주의력 - 중요한 정보만 선별하여 처리',
        '강력한 지속적 주의력 - 장시간 집중 유지 가능',
        '우수한 억제 조절력 - 방해 요소 차단 능력',
        '효율적인 인지적 유연성 - 상황에 따른 주의 전환'
      ],
      improvements: [
        '과도한 집중으로 인한 번아웃 예방 - 적절한 휴식 필수',
        '완벽주의 성향 조절 - 80% 완성도에서 만족하기',
        '다양성 추구 - 한 가지에만 몰두하지 말고 폭넓은 경험'
      ],
      compatibleTypes: [
        { id: 'analyst', title: '분석가형', emoji: '🔍', compatibility: 95 },
        { id: 'strategist', title: '전략가형', emoji: '♟️', compatibility: 92 },
        { id: 'researcher', title: '연구자형', emoji: '🔬', compatibility: 89 }
      ],
      traits: [
        { name: '선택적 주의력', emoji: '🎯', percentage: 95 },
        { name: '지속적 주의력', emoji: '⏱️', percentage: 93 },
        { name: '억제 조절력', emoji: '🛡️', percentage: 90 },
        { name: '인지적 유연성', emoji: '🧩', percentage: 88 }
      ]
    },
    stable: {
      id: 'stable',
      title: '안정형',
      emoji: '⚖️',
      description: '일반적 집중력과 꾸준한 성향을 가진 균형잡힌 타입입니다.',
      detailedDescription: '14-17점을 기록한 당신은 안정적이고 균형잡힌 집중력을 보유하고 있습니다. 심리학적으로 주의력의 기본 기능들이 잘 발달되어 있으며, 일상생활과 업무에서 필요한 수준의 집중력을 충분히 발휘할 수 있습니다. 극단적인 상황보다는 안정적인 환경에서 최고의 성과를 내며, 꾸준함과 지속성이 가장 큰 강점입니다. 대부분의 사람들이 이 범주에 속하며, 적절한 훈련을 통해 더 높은 수준으로 발전시킬 수 있는 잠재력을 가지고 있습니다.',
      strengths: [
        '안정적인 주의력 유지 - 일정한 수준의 집중력 지속',
        '적응적 집중력 - 상황에 맞는 적절한 집중도 조절',
        '꾸준한 성과 - 지속적이고 일관된 결과물 산출',
        '균형잡힌 주의 분배 - 여러 과제 간 적절한 주의 배분'
      ],
      improvements: [
        '집중력 향상 훈련 - 점진적 난이도 증가로 능력 확장',
        '환경 최적화 - 집중에 도움되는 공간과 도구 활용',
        '동기 부여 시스템 - 목표 설정과 보상을 통한 집중력 강화'
      ],
      compatibleTypes: [
        { id: 'organizer', title: '조직가형', emoji: '📋', compatibility: 88 },
        { id: 'supporter', title: '지원자형', emoji: '🤝', compatibility: 85 },
        { id: 'mediator', title: '중재자형', emoji: '🕊️', compatibility: 82 }
      ],
      traits: [
        { name: '선택적 주의력', emoji: '🎯', percentage: 80 },
        { name: '지속적 주의력', emoji: '⏱️', percentage: 78 },
        { name: '억제 조절력', emoji: '🛡️', percentage: 75 },
        { name: '인지적 유연성', emoji: '🧩', percentage: 77 }
      ]
    },
    variable: {
      id: 'variable',
      title: '변동형',
      emoji: '📊',
      description: '상황에 따른 집중력 변화가 있는 적응형 타입입니다.',
      detailedDescription: '10-13점을 기록한 당신은 상황과 환경에 따라 집중력이 변화하는 특성을 보입니다. 심리학적으로 주의력이 외부 요인에 민감하게 반응하는 경향이 있으며, 이는 높은 환경 적응성을 의미합니다. 관심 있는 분야나 동기가 높은 상황에서는 뛰어난 집중력을 보이지만, 그렇지 않은 경우 주의가 분산되기 쉽습니다. 이러한 특성은 창의적 사고와 다양한 관점을 제공하는 장점이 있으며, 적절한 환경 조성을 통해 집중력을 크게 향상시킬 수 있습니다.',
      strengths: [
        '높은 환경 적응성 - 다양한 상황에 맞춰 집중력 조절',
        '관심 분야 몰입도 - 흥미로운 일에 대한 깊은 집중',
        '창의적 사고력 - 분산된 주의를 통한 새로운 아이디어 발견',
        '유연한 사고 전환 - 빠른 주제 변경과 다각도 접근'
      ],
      improvements: [
        '환경 관리 - 집중에 방해되는 요소 제거와 최적 환경 조성',
        '동기 부여 강화 - 개인적 관심과 목표를 업무에 연결',
        '집중력 패턴 파악 - 자신의 집중 리듬과 최적 시간대 인식',
        '단계적 훈련 - 짧은 집중 시간부터 점진적 확장'
      ],
      compatibleTypes: [
        { id: 'creative', title: '창작자형', emoji: '🎨', compatibility: 85 },
        { id: 'explorer', title: '탐험가형', emoji: '🧭', compatibility: 82 },
        { id: 'adaptable', title: '적응형', emoji: '🌊', compatibility: 80 }
      ],
      traits: [
        { name: '선택적 주의력', emoji: '🎯', percentage: 65 },
        { name: '지속적 주의력', emoji: '⏱️', percentage: 60 },
        { name: '억제 조절력', emoji: '🛡️', percentage: 58 },
        { name: '인지적 유연성', emoji: '🧩', percentage: 75 }
      ]
    },
    distributed: {
      id: 'distributed',
      title: '분산형',
      emoji: '🌟',
      description: '창의적 사고와 폭넓은 관심사를 가진 다면적 사고자입니다.',
      detailedDescription: '6-9점을 기록한 당신은 분산적 주의력 특성을 가지고 있으며, 이는 창의성과 밀접한 관련이 있습니다. 심리학 연구에 따르면 주의력이 분산되는 사람들은 종종 더 창의적이고 혁신적인 아이디어를 생성하는 능력이 뛰어납니다. 한 가지에 오래 집중하기보다는 여러 아이디어와 개념을 동시에 처리하는 것을 선호하며, 이는 발산적 사고와 연관성 발견에 유리합니다. 전통적인 집중력 개념과는 다르지만, 현대 사회의 복잡하고 다변화된 환경에서는 매우 가치있는 능력입니다.',
      strengths: [
        '창의적 연상 능력 - 서로 다른 개념 간 새로운 연결 발견',
        '다면적 사고력 - 여러 관점에서 문제를 동시에 접근',
        '폭넓은 관심사 - 다양한 분야에 대한 개방적 태도',
        '혁신적 아이디어 - 기존 틀을 벗어난 창조적 사고'
      ],
      improvements: [
        '구조화된 작업 방식 - 체크리스트와 단계별 접근법 활용',
        '짧은 집중 시간 활용 - 25분 이하의 짧은 작업 단위 설정',
        '흥미 요소 추가 - 지루한 작업에 재미있는 요소 접목',
        '외부 지원 시스템 - 일정 관리와 리마인더 도구 적극 활용'
      ],
      compatibleTypes: [
        { id: 'innovator', title: '혁신가형', emoji: '💡', compatibility: 88 },
        { id: 'artist', title: '예술가형', emoji: '🎭', compatibility: 85 },
        { id: 'entrepreneur', title: '기업가형', emoji: '🚀', compatibility: 82 }
      ],
      traits: [
        { name: '창의적 연상', emoji: '💭', percentage: 85 },
        { name: '다면적 사고', emoji: '🔄', percentage: 80 },
        { name: '개방성', emoji: '🌈', percentage: 78 },
        { name: '혁신성', emoji: '⚡', percentage: 75 }
      ]
    },
    free: {
      id: 'free',
      title: '자유형',
      emoji: '🦋',
      description: '틀에 얽매이지 않는 자유로운 사고의 소유자입니다.',
      detailedDescription: '0-5점을 기록한 당신은 매우 자유로운 사고 패턴을 가지고 있으며, 전통적인 집중력 기준과는 다른 독특한 인지 스타일을 보입니다. 심리학적으로 이는 높은 수준의 인지적 유연성과 창의적 잠재력을 의미할 수 있습니다. 직관적이고 전체적인 사고를 선호하며, 세부사항보다는 큰 그림을 보는 능력이 뛰어납니다. 이러한 특성은 예술, 철학, 혁신적 사고가 요구되는 분야에서 독특한 가치를 발휘할 수 있습니다. 다만 현대 사회의 구조화된 환경에서는 적응을 위한 전략이 필요합니다.',
      strengths: [
        '자유로운 상상력 - 제약 없는 창의적 사고 능력',
        '직관적 통찰력 - 논리적 분석 없이도 핵심 파악',
        '전체적 시각 - 세부사항보다 큰 틀에서 이해',
        '독창적 관점 - 남들과 다른 독특한 시각 제공'
      ],
      improvements: [
        '기본 구조 만들기 - 최소한의 일정과 루틴 설정',
        '관심사 집중 활용 - 흥미있는 주제로 집중력 훈련',
        '외부 도움 적극 수용 - 타인의 조직화 도움 받기',
        '단계별 목표 설정 - 작고 달성 가능한 목표부터 시작',
        '체화된 학습법 - 몸으로 기억하는 활동적 학습'
      ],
      compatibleTypes: [
        { id: 'philosopher', title: '철학자형', emoji: '🤔', compatibility: 85 },
        { id: 'free_spirit', title: '자유영혼형', emoji: '🌸', compatibility: 88 },
        { id: 'visionary', title: '비전가형', emoji: '🔮', compatibility: 80 }
      ],
      traits: [
        { name: '상상력', emoji: '🌙', percentage: 90 },
        { name: '직관력', emoji: '🔮', percentage: 85 },
        { name: '자유성', emoji: '🕊️', percentage: 95 },
        { name: '독창성', emoji: '🎨', percentage: 88 }
      ]
    }
  }
};