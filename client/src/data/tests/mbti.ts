import { TestData } from '../../types/test';

export const mbtiTest: TestData = {
  id: 'mbti',
  title: 'MBTI 성격유형 테스트',
  description: '당신의 성격 유형을 정확하게 분석해보세요',
  emoji: '🧠',
  color: 'from-indigo-500 to-purple-600',
  duration: '12-15분',
  questionCount: 20,
  participants: 189743,
  questions: [
    {
      id: 1,
      text: '회의나 토론에서 발언하는 빈도는?',
      subtitle: '1: 거의 안함 - 5: 매우 자주',
      emoji: '🗣️',
      options: [
        {
          id: '1',
          text: '1 - 거의 발언하지 않는다',
          description: '조용히 듣는 편',
          emoji: '🤐',
          scores: { E: 0, I: 4, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 필요할 때만 발언한다',
          description: '신중하게 선택적으로',
          emoji: '🤔',
          scores: { E: 1, I: 3, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 보통 수준으로 참여한다',
          description: '적당히 참여',
          emoji: '😐',
          scores: { E: 2, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 자주 의견을 제시한다',
          description: '활발하게 참여',
          emoji: '💬',
          scores: { E: 3, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 토론을 주도하며 적극 발언한다',
          description: '매우 활발하고 주도적',
          emoji: '📢',
          scores: { E: 4, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 2,
      text: '전화 통화 후 기분은 어떤가요?',
      subtitle: '1: 매우 피곤함 - 5: 매우 활기참',
      emoji: '📞',
      options: [
        {
          id: '1',
          text: '1 - 매우 피곤하고 에너지가 소모된다',
          description: '통화 자체가 부담스러움',
          emoji: '😴',
          scores: { E: 0, I: 4, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 조금 피곤하다',
          description: '짧은 통화는 괜찮음',
          emoji: '😅',
          scores: { E: 1, I: 3, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 별다른 느낌이 없다',
          description: '평범한 일상',
          emoji: '😑',
          scores: { E: 2, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 기분이 좋아진다',
          description: '사람과의 연결감을 즐김',
          emoji: '😊',
          scores: { E: 3, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 매우 활기차고 에너지가 충전된다',
          description: '통화할수록 신남',
          emoji: '🤗',
          scores: { E: 4, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 3,
      text: '설명서를 읽는 스타일은?',
      subtitle: '1: 전체 숙지 후 시작 - 5: 바로 만져보며 학습',
      emoji: '📖',
      options: [
        {
          id: '1',
          text: '1 - 설명서를 처음부터 끝까지 읽고 시작',
          description: '체계적이고 순차적 학습',
          emoji: '📚',
          scores: { E: 0, I: 0, S: 4, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 주요 부분만 읽고 시작',
          description: '핵심 위주로 파악',
          emoji: '📄',
          scores: { E: 0, I: 0, S: 3, N: 1, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 필요한 부분을 찾아가며 읽는다',
          description: '상황에 따라 적응적',
          emoji: '🔍',
          scores: { E: 0, I: 0, S: 2, N: 2, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 대충 훑어보고 바로 시작',
          description: '직관적 이해 선호',
          emoji: '⚡',
          scores: { E: 0, I: 0, S: 1, N: 3, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 설명서 안 보고 바로 만져본다',
          description: '실험적이고 직관적',
          emoji: '🔧',
          scores: { E: 0, I: 0, S: 0, N: 4, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 4,
      text: '미래에 대해 생각하는 빈도는?',
      subtitle: '1: 거의 안함 - 5: 매우 자주',
      emoji: '🔮',
      options: [
        {
          id: '1',
          text: '1 - 현재에만 집중하며 미래는 거의 생각 안함',
          description: '지금 이 순간이 중요',
          emoji: '⏰',
          scores: { E: 0, I: 0, S: 4, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 가끔 필요할 때만 생각한다',
          description: '실용적 계획만',
          emoji: '📅',
          scores: { E: 0, I: 0, S: 3, N: 1, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 현재와 미래를 적당히 고려한다',
          description: '균형잡힌 시각',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 2, N: 2, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 자주 미래 계획을 세운다',
          description: '앞일을 미리 준비',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 1, N: 3, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 항상 먼 미래의 가능성을 상상한다',
          description: '비전과 상상력 중시',
          emoji: '🌟',
          scores: { E: 0, I: 0, S: 0, N: 4, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 5,
      text: '비판을 받을 때 어떻게 반응하나요?',
      subtitle: '1: 매우 감정적 반응 - 5: 매우 논리적 분석',
      emoji: '💭',
      options: [
        {
          id: '1',
          text: '1 - 상처받고 감정이 먼저 앞선다',
          description: '개인적으로 받아들임',
          emoji: '😢',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 4, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 감정적이지만 이해하려 노력한다',
          description: '마음의 상처와 이해가 공존',
          emoji: '😔',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 3, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 감정과 논리를 반반 고려한다',
          description: '균형잡힌 반응',
          emoji: '🤨',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 2, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 객관적으로 분석하려 한다',
          description: '논리적 검토 우선',
          emoji: '🧐',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 3, F: 1, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 완전히 논리적으로만 분석한다',
          description: '감정 배제하고 사실만 파악',
          emoji: '🔬',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 4, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 6,
      text: '친구의 고민 상담 시 어떤 조언을 하나요?',
      subtitle: '1: 감정 공감 위주 - 5: 해결책 제시 위주',
      emoji: '🤝',
      options: [
        {
          id: '1',
          text: '1 - "정말 힘들겠다" 감정에 깊이 공감',
          description: '마음을 이해하고 위로',
          emoji: '🤗',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 4, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 공감하면서 약간의 조언도 한다',
          description: '따뜻한 위로와 가벼운 조언',
          emoji: '😊',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 3, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 공감과 조언을 반반 한다',
          description: '감정과 해결책 모두 고려',
          emoji: '💭',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 2, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 공감 후 구체적 해결책을 제시',
          description: '실질적 도움 제공',
          emoji: '💡',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 3, F: 1, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - "이렇게 하면 된다" 해결책만 제시',
          description: '효율적이고 논리적 조언',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 4, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 7,
      text: '계획 없이 떠나는 여행에 대한 생각은?',
      subtitle: '1: 절대 불가능 - 5: 매우 흥미로움',
      emoji: '✈️',
      options: [
        {
          id: '1',
          text: '1 - 절대 불가능하다. 계획이 필수',
          description: '체계적 준비 없으면 불안',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        },
        {
          id: '2',
          text: '2 - 최소한의 계획은 있어야 한다',
          description: '기본 계획은 필요',
          emoji: '📝',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '3',
          text: '3 - 상황에 따라 다르다',
          description: '때로는 계획, 때로는 즉흥',
          emoji: '🤔',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 나쁘지 않다. 재미있을 것 같다',
          description: '예상 밖의 경험을 즐김',
          emoji: '😄',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '5',
          text: '5 - 정말 흥미롭다! 모험을 즐긴다',
          description: '자유롭고 즉흥적인 것을 선호',
          emoji: '🌊',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
        }
      ]
    },
    {
      id: 8,
      text: '일정이 갑자기 바뀔 때 느끼는 스트레스 정도는?',
      subtitle: '1: 매우 높음 - 5: 전혀 없음',
      emoji: '⏰',
      options: [
        {
          id: '1',
          text: '1 - 매우 스트레스받고 불안하다',
          description: '예정된 계획이 깨지면 힘듦',
          emoji: '😰',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        },
        {
          id: '2',
          text: '2 - 스트레스받지만 적응한다',
          description: '초기 불편함 후 조정',
          emoji: '😅',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '3',
          text: '3 - 약간 불편하지만 괜찮다',
          description: '적당한 적응력',
          emoji: '😐',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 별로 신경 안 쓴다',
          description: '유연하게 대처',
          emoji: '🙂',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '5',
          text: '5 - 전혀 스트레스받지 않는다',
          description: '변화를 자연스럽게 받아들임',
          emoji: '😎',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
        }
      ]
    },
    {
      id: 9,
      text: '새로운 앱이나 기기를 배울 때 어떻게 하나요?',
      subtitle: '1: 튜토리얼 완주 - 5: 바로 탐험',
      emoji: '📱',
      options: [
        {
          id: '1',
          text: '1 - 튜토리얼을 모두 완료한 후 사용',
          description: '단계적이고 체계적 학습',
          emoji: '🎓',
          scores: { E: 0, I: 0, S: 4, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 기본 기능만 배우고 시작',
          description: '필수적인 것만 우선 파악',
          emoji: '📖',
          scores: { E: 0, I: 0, S: 3, N: 1, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 사용하면서 필요한 것만 배운다',
          description: '실용적이고 상황적 학습',
          emoji: '⚡',
          scores: { E: 0, I: 0, S: 2, N: 2, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 대충 만져보면서 감각적으로 익힌다',
          description: '직관적이고 탐험적',
          emoji: '🔍',
          scores: { E: 0, I: 0, S: 1, N: 3, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 아무것도 안 보고 바로 탐험한다',
          description: '모든 가능성을 직접 발견',
          emoji: '🚀',
          scores: { E: 0, I: 0, S: 0, N: 4, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 10,
      text: '팀 프로젝트에서 선호하는 작업 스타일은?',
      subtitle: '1: 혼자 집중 작업 - 5: 계속 함께 협업',
      emoji: '👥',
      options: [
        {
          id: '1',
          text: '1 - 각자 맡은 부분을 혼자 완성',
          description: '독립적이고 집중된 작업',
          emoji: '🧘',
          scores: { E: 0, I: 4, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 주로 혼자 하되 가끔 의견 교환',
          description: '최소한의 소통으로 효율성',
          emoji: '💭',
          scores: { E: 1, I: 3, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 독립 작업과 협업을 적절히 섞는다',
          description: '상황에 맞는 유연한 방식',
          emoji: '⚖️',
          scores: { E: 2, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 자주 모여서 함께 작업한다',
          description: '활발한 의견 교환 선호',
          emoji: '💬',
          scores: { E: 3, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 항상 함께 있으며 실시간 협업',
          description: '지속적 상호작용과 에너지 교환',
          emoji: '🤝',
          scores: { E: 4, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 11,
      text: '데이터나 통계를 볼 때 어디에 주목하나요?',
      subtitle: '1: 구체적 수치 - 5: 전체적 패턴',
      emoji: '📊',
      options: [
        {
          id: '1',
          text: '1 - 정확한 수치와 세부 데이터',
          description: '구체적이고 명확한 사실',
          emoji: '🔢',
          scores: { E: 0, I: 0, S: 4, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 주요 수치와 핵심 포인트',
          description: '중요한 데이터 위주',
          emoji: '📈',
          scores: { E: 0, I: 0, S: 3, N: 1, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 수치와 트렌드를 함께 본다',
          description: '디테일과 큰 그림 모두',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 2, N: 2, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 전체적인 흐름과 경향',
          description: '트렌드와 방향성 파악',
          emoji: '📉',
          scores: { E: 0, I: 0, S: 1, N: 3, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 숨겨진 의미와 미래 가능성',
          description: '데이터 너머의 통찰',
          emoji: '🔮',
          scores: { E: 0, I: 0, S: 0, N: 4, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 12,
      text: '갈등 상황에서 우선적으로 고려하는 것은?',
      subtitle: '1: 사실과 논리 - 5: 감정과 관계',
      emoji: '⚔️',
      options: [
        {
          id: '1',
          text: '1 - 누가 사실적으로 옳은지 분석',
          description: '객관적 판단이 최우선',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 4, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 논리적 해결책을 찾되 감정도 고려',
          description: '합리성 위주지만 배려',
          emoji: '🧠',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 3, F: 1, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 사실과 감정을 모두 중요하게 본다',
          description: '균형잡힌 접근',
          emoji: '💭',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 2, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 사람들의 감정 상태를 우선 고려',
          description: '관계와 화합 중시',
          emoji: '🤗',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 3, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 모든 사람이 상처받지 않는 것이 중요',
          description: '감정과 관계가 최우선',
          emoji: '❤️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 4, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 13,
      text: '마감 기한이 있는 과제는 언제 주로 하나요?',
      subtitle: '1: 즉시 시작 - 5: 마감 직전',
      emoji: '⏰',
      options: [
        {
          id: '1',
          text: '1 - 받자마자 즉시 시작해서 미리 완성',
          description: '계획적이고 안전한 방식',
          emoji: '🏃‍♀️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        },
        {
          id: '2',
          text: '2 - 며칠 내로 시작해서 여유있게 완성',
          description: '체계적 계획 실행',
          emoji: '📅',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '3',
          text: '3 - 중간 정도 시점에 시작한다',
          description: '적당한 계획성',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 마감 며칠 전에 집중적으로 한다',
          description: '압박감 속에서 효율성',
          emoji: '💨',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '5',
          text: '5 - 마감 직전에 몰아서 한다',
          description: '극한의 압박감에서 몰입',
          emoji: '🔥',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
        }
      ]
    },
    {
      id: 14,
      text: '휴일 계획을 세우는 스타일은?',
      subtitle: '1: 상세한 일정표 - 5: 그때그때 결정',
      emoji: '🌞',
      options: [
        {
          id: '1',
          text: '1 - 시간별 상세 일정을 미리 짜둔다',
          description: '완벽한 계획으로 효율성 추구',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        },
        {
          id: '2',
          text: '2 - 주요 활동들을 대략 계획한다',
          description: '기본 틀은 있되 여유있게',
          emoji: '📝',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '3',
          text: '3 - 몇 가지 옵션을 생각해둔다',
          description: '선택의 여지를 남겨둠',
          emoji: '🤔',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 대충 방향만 정하고 즉흥적으로',
          description: '자연스러운 흐름 선호',
          emoji: '🌊',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '5',
          text: '5 - 아무 계획 없이 그때그때 결정',
          description: '완전한 자유와 즉흥성',
          emoji: '🎲',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
        }
      ]
    },
    {
      id: 15,
      text: '창의적 아이디어는 언제 가장 잘 떠오르나요?',
      subtitle: '1: 조용히 혼자 있을 때 - 5: 사람들과 대화할 때',
      emoji: '💡',
      options: [
        {
          id: '1',
          text: '1 - 조용한 곳에서 혼자 깊이 생각할 때',
          description: '고독한 집중이 창의력의 원천',
          emoji: '🧘‍♀️',
          scores: { E: 0, I: 4, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 혼자 있되 약간의 자극이 있을 때',
          description: '적당한 외부 자극과 고독의 조합',
          emoji: '☕',
          scores: { E: 1, I: 3, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 혼자 있거나 함께 있거나 상관없다',
          description: '환경보다는 내적 동기',
          emoji: '🎯',
          scores: { E: 2, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 몇 명의 사람들과 아이디어를 나눌 때',
          description: '소규모 그룹에서의 영감',
          emoji: '💭',
          scores: { E: 3, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 많은 사람들과 활발히 토론할 때',
          description: '역동적 상호작용이 창의력 폭발',
          emoji: '🌟',
          scores: { E: 4, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 16,
      text: '과거 경험을 현재 결정에 얼마나 반영하나요?',
      subtitle: '1: 매우 중요하게 고려 - 5: 거의 고려 안함',
      emoji: '🔄',
      options: [
        {
          id: '1',
          text: '1 - 과거 경험이 결정의 핵심 기준',
          description: '검증된 경험을 가장 신뢰',
          emoji: '📚',
          scores: { E: 0, I: 0, S: 4, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 과거 경험을 중요하게 참고한다',
          description: '경험을 바탕으로 한 신중한 판단',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 3, N: 1, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 과거와 새로운 가능성을 모두 고려',
          description: '경험과 혁신의 균형',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 2, N: 2, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 새로운 가능성에 더 집중한다',
          description: '혁신적 접근을 선호',
          emoji: '🚀',
          scores: { E: 0, I: 0, S: 1, N: 3, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 과거는 거의 고려하지 않고 새롭게 접근',
          description: '완전히 새로운 시각으로 도전',
          emoji: '🌟',
          scores: { E: 0, I: 0, S: 0, N: 4, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 17,
      text: '의사결정에서 다른 사람의 의견을 어느 정도 고려하나요?',
      subtitle: '1: 매우 중요하게 - 5: 거의 고려 안함',
      emoji: '🤝',
      options: [
        {
          id: '1',
          text: '1 - 다른 사람들의 의견이 결정에 매우 중요',
          description: '타인의 생각과 감정을 최우선 고려',
          emoji: '👥',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 4, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 다양한 의견을 듣고 종합해서 결정',
          description: '협력적이고 포용적 의사결정',
          emoji: '🤗',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 1, F: 3, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 의견은 들되 최종 결정은 스스로',
          description: '참고는 하되 독립적 판단',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 2, F: 2, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 스스로 판단하되 필요시만 의견 수렴',
          description: '개인적 판단 우선, 선택적 상담',
          emoji: '🧠',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 3, F: 1, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 완전히 혼자서 결정한다',
          description: '독립적이고 자율적 의사결정',
          emoji: '🎪',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 4, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 18,
      text: '선택의 기로에서 최종 결정을 내리는 속도는?',
      subtitle: '1: 매우 빠름 - 5: 매우 오래 고민',
      emoji: '⚡',
      options: [
        {
          id: '1',
          text: '1 - 즉석에서 빠르게 결정한다',
          description: '직관을 믿고 신속한 판단',
          emoji: '⚡',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
        },
        {
          id: '2',
          text: '2 - 짧게 생각하고 결정한다',
          description: '빠른 분석 후 결정',
          emoji: '💨',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '3',
          text: '3 - 적당히 고민한 후 결정한다',
          description: '균형잡힌 숙고 시간',
          emoji: '⚖️',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 충분히 고민한 후 신중하게 결정',
          description: '체계적 분석과 계획적 결정',
          emoji: '🤔',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '5',
          text: '5 - 아주 오랫동안 신중하게 고민',
          description: '모든 가능성을 완전히 검토',
          emoji: '🔍',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        }
      ]
    },
    {
      id: 19,
      text: '스트레스를 받을 때 도움이 되는 활동은?',
      subtitle: '1: 혼자만의 시간 - 5: 사람들과 함께',
      emoji: '😤',
      options: [
        {
          id: '1',
          text: '1 - 조용한 곳에서 혼자만의 시간',
          description: '고독 속에서 에너지 회복',
          emoji: '🧘',
          scores: { E: 0, I: 4, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '2',
          text: '2 - 가까운 사람 한두 명과 조용히',
          description: '신뢰하는 소수와의 소통',
          emoji: '☕',
          scores: { E: 1, I: 3, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '3',
          text: '3 - 상황에 따라 혼자 또는 함께',
          description: '기분과 상황에 맞춰 선택',
          emoji: '🤷',
          scores: { E: 2, I: 2, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '4',
          text: '4 - 친구들과 함께 활동하며 해소',
          description: '사회적 상호작용으로 치유',
          emoji: '👥',
          scores: { E: 3, I: 1, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        },
        {
          id: '5',
          text: '5 - 많은 사람들과 활발한 활동',
          description: '역동적 에너지로 스트레스 해소',
          emoji: '🎉',
          scores: { E: 4, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }
        }
      ]
    },
    {
      id: 20,
      text: '새로운 도전을 대하는 자세는?',
      subtitle: '1: 신중한 계획 후 - 5: 바로 도전',
      emoji: '🏔️',
      options: [
        {
          id: '1',
          text: '1 - 완벽한 계획과 준비 후 시작',
          description: '위험을 최소화하는 체계적 접근',
          emoji: '📋',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 4, P: 0 }
        },
        {
          id: '2',
          text: '2 - 기본 계획을 세우고 조심스럽게 시작',
          description: '안전성을 고려한 점진적 접근',
          emoji: '🚶',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 3, P: 1 }
        },
        {
          id: '3',
          text: '3 - 대략적 계획으로 차근차근 진행',
          description: '적당한 준비와 실행의 조화',
          emoji: '🎯',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 2, P: 2 }
        },
        {
          id: '4',
          text: '4 - 일단 시작하고 상황에 맞춰 조정',
          description: '실행 중심의 유연한 접근',
          emoji: '🏃',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 1, P: 3 }
        },
        {
          id: '5',
          text: '5 - 계획 없이 바로 뛰어든다',
          description: '직감과 모험심으로 즉시 도전',
          emoji: '🚀',
          scores: { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 4 }
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
      ],
      personalityStory: '당신은 자연스럽게 사람들을 이끌어가는 카리스마를 가지고 있습니다. 큰 그림을 그리고 그 비전을 현실로 만들어내는 능력이 뛰어나며, 어떤 상황에서도 최적의 해결책을 찾아냅니다. 때로는 너무 완벽을 추구하다 보니 주변 사람들의 감정을 놓칠 수 있지만, 그것은 모든 것을 성공으로 이끌고자 하는 강한 의지에서 나오는 것입니다.',
      bestMatch: 'INFP 유형과 최고의 팀워크를 보여줘요!',
      loveStyle: '계획적이고 진취적인 연애를 추구하며, 서로의 목표를 응원하는 관계를 선호해요',
      celebrities: ['스티브 잡스', '빌 게이츠', '나폴레옹'],
      careers: ['CEO', '경영컨설턴트', '변호사', '정치인', '군인'],
      animalMetaphor: '당신은 무리를 이끄는 늑대 같은 존재예요!',
      percentage: 3,
      rarity: '상위 3% 희귀 유형'
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