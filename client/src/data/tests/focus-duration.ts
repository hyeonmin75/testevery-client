import { TestData } from '../../types/test';

export const focusDurationTest: TestData = {
  id: 'focus_duration_test',
  title: '집중력 지속시간 테스트',
  description: '얼마나 오래 집중할 수 있는지 측정하는 테스트입니다. 화면의 변화를 놓치지 마세요!',
  emoji: '🎯',
  color: 'orange',
  duration: '약 3-5분',
  questionCount: 1,
  participants: 3421,
  questions: [
    {
      id: 1,
      text: '집중력 테스트 준비',
      subtitle: '화면에 나타나는 변화를 감지하면 즉시 클릭하세요. 최대한 오래 집중해보세요!',
      emoji: '🎯',
      options: [
        {
          id: 'start',
          text: '테스트 시작',
          description: '집중력 지속시간 측정 시작',
          emoji: '🚀',
          scores: { focusTime: 0 }
        }
      ]
    }
  ],
  results: {
    master: {
      id: 'master',
      title: '집중력 마스터',
      emoji: '🧠',
      description: '뛰어난 집중력으로 긴 시간 동안 주의를 유지할 수 있습니다!',
      detailedDescription: '180초 이상 집중을 유지한 당신은 탁월한 주의력과 정신적 지구력을 가지고 있습니다. 복잡한 업무나 학습에서도 높은 성과를 낼 수 있는 능력자입니다.',
      strengths: [
        '뛰어난 주의 집중력',
        '강한 정신적 지구력',
        '방해 요소에 대한 높은 저항력',
        '장시간 작업 수행 능력'
      ],
      improvements: [
        '적절한 휴식으로 집중력 회복',
        '다양한 집중 기법 활용',
        '스트레스 관리'
      ],
      compatibleTypes: [
        { id: 'deep_thinker', title: '깊이 사고하는 유형', emoji: '🤔', compatibility: 95 },
        { id: 'perfectionist', title: '완벽주의 유형', emoji: '✨', compatibility: 88 },
        { id: 'researcher', title: '연구자 유형', emoji: '🔬', compatibility: 85 }
      ],
      traits: [
        { name: '집중력', emoji: '🎯', percentage: 95 },
        { name: '지구력', emoji: '💪', percentage: 90 },
        { name: '인내심', emoji: '⏳', percentage: 88 },
        { name: '정확성', emoji: '🎪', percentage: 85 }
      ]
    },
    expert: {
      id: 'expert',
      title: '집중력 전문가',
      emoji: '🎪',
      description: '좋은 집중력을 가지고 있어 대부분의 상황에서 잘 집중할 수 있습니다.',
      detailedDescription: '120-179초 집중을 유지한 당신은 일반인보다 우수한 집중력을 가지고 있습니다. 업무나 학습에서 좋은 성과를 낼 수 있는 능력이 있습니다.',
      strengths: [
        '안정적인 집중력',
        '적절한 주의 지속 능력',
        '업무 효율성',
        '목표 달성 능력'
      ],
      improvements: [
        '집중력 훈련으로 더 향상 가능',
        '환경 최적화',
        '집중 시간 점진적 연장'
      ],
      compatibleTypes: [
        { id: 'balanced', title: '균형잡힌 유형', emoji: '⚖️', compatibility: 90 },
        { id: 'achiever', title: '성취자 유형', emoji: '🏆', compatibility: 85 },
        { id: 'organizer', title: '조직가 유형', emoji: '📋', compatibility: 80 }
      ],
      traits: [
        { name: '집중력', emoji: '🎯', percentage: 80 },
        { name: '지구력', emoji: '💪', percentage: 75 },
        { name: '인내심', emoji: '⏳', percentage: 70 },
        { name: '정확성', emoji: '🎪', percentage: 78 }
      ]
    },
    average: {
      id: 'average',
      title: '보통 집중력',
      emoji: '📚',
      description: '평균적인 집중력을 가지고 있습니다. 조금 더 연습하면 향상될 수 있어요!',
      detailedDescription: '60-119초 집중을 유지한 당신은 일반적인 수준의 집중력을 가지고 있습니다. 꾸준한 연습으로 더 나은 집중력을 기를 수 있습니다.',
      strengths: [
        '기본적인 집중 능력',
        '향상 가능성',
        '일상적 업무 수행 가능'
      ],
      improvements: [
        '집중력 훈련 필요',
        '방해 요소 제거',
        '짧은 집중 시간부터 시작',
        '명상이나 마음챙김 연습'
      ],
      compatibleTypes: [
        { id: 'learner', title: '학습자 유형', emoji: '📖', compatibility: 85 },
        { id: 'flexible', title: '유연한 유형', emoji: '🌊', compatibility: 80 },
        { id: 'social', title: '사교적 유형', emoji: '👥', compatibility: 75 }
      ],
      traits: [
        { name: '집중력', emoji: '🎯', percentage: 60 },
        { name: '지구력', emoji: '💪', percentage: 55 },
        { name: '인내심', emoji: '⏳', percentage: 50 },
        { name: '정확성', emoji: '🎪', percentage: 58 }
      ]
    },
    beginner: {
      id: 'beginner',
      title: '집중력 초보',
      emoji: '🌱',
      description: '집중력 향상이 필요합니다. 단계적으로 연습해나가면 분명 좋아질 거예요!',
      detailedDescription: '60초 미만 집중을 유지한 당신은 현재 집중력이 부족한 상태입니다. 하지만 적절한 훈련과 연습으로 충분히 향상시킬 수 있습니다.',
      strengths: [
        '향상 가능성',
        '다양한 관심사',
        '빠른 전환 능력'
      ],
      improvements: [
        '단계적 집중력 훈련 시작',
        '스마트폰 등 방해 요소 제거',
        '충분한 수면과 휴식',
        '규칙적인 운동',
        '명상이나 호흡법 연습'
      ],
      compatibleTypes: [
        { id: 'creative', title: '창의적 유형', emoji: '🎨', compatibility: 80 },
        { id: 'energetic', title: '활동적 유형', emoji: '⚡', compatibility: 75 },
        { id: 'spontaneous', title: '즉흥적 유형', emoji: '🎲', compatibility: 70 }
      ],
      traits: [
        { name: '집중력', emoji: '🎯', percentage: 35 },
        { name: '지구력', emoji: '💪', percentage: 30 },
        { name: '인내심', emoji: '⏳', percentage: 25 },
        { name: '정확성', emoji: '🎪', percentage: 32 }
      ]
    }
  }
};