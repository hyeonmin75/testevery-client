import { TestData } from '../../types/test';

export const gameCharacterTest: TestData = {
  id: 'game-character',
  title: '내가 게임 속 캐릭터라면?',
  description: '당신의 성향으로 알아보는 게임 캐릭터 유형',
  emoji: '🎮',
  color: 'blue',
  duration: '3-4분',
  questionCount: 10,
  participants: 850000,
  questions: [
    {
      id: 1,
      text: '팀 게임에서 당신의 역할은?',
      subtitle: '협력 플레이에서 자연스럽게 맡게 되는 포지션',
      emoji: '👥',
      options: [
        {
          id: 'a',
          text: '앞장서서 적을 막아내기',
          description: '위험을 감수하고 팀을 보호',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 0, supporter: 1 }
        },
        {
          id: 'b',
          text: '빠르게 적을 처치하기',
          description: '기회를 놓치지 않고 공격',
          emoji: '🗡️',
          scores: { tank: 0, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '전략을 세우고 지시하기',
          description: '상황을 분석하고 계획 수립',
          emoji: '🧙‍♂️',
          scores: { tank: 1, dealer: 1, mage: 3, supporter: 0 }
        },
        {
          id: 'd',
          text: '팀원들을 도와주기',
          description: '동료를 치료하고 버프 제공',
          emoji: '❤️',
          scores: { tank: 0, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 2,
      text: '위험한 상황에 직면했을 때',
      subtitle: '예상치 못한 위기가 닥쳤을 때의 반응',
      emoji: '⚡',
      options: [
        {
          id: 'a',
          text: '일단 몸으로 막아낸다',
          description: '나서서 상황을 정면으로 해결',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 1, mage: 0, supporter: 0 }
        },
        {
          id: 'b',
          text: '빠르게 약점을 공략한다',
          description: '순간적인 판단으로 역전',
          emoji: '🗡️',
          scores: { tank: 0, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '침착하게 대안을 찾는다',
          description: '차분히 분석하여 해결책 모색',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 0, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '팀원들과 협력한다',
          description: '함께 힘을 모아 극복',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '새로운 게임을 시작할 때',
      subtitle: '처음 접하는 게임에서의 접근 방식',
      emoji: '🎯',
      options: [
        {
          id: 'a',
          text: '일단 시작하고 부딪혀본다',
          description: '경험을 통해 자연스럽게 학습',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 2, mage: 0, supporter: 1 }
        },
        {
          id: 'b',
          text: '효율적인 플레이 방법을 찾는다',
          description: '최적화된 전략으로 빠른 성장',
          emoji: '🗡️',
          scores: { tank: 1, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '공략을 찾아보고 연구한다',
          description: '충분한 정보 수집 후 시작',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 1, mage: 3, supporter: 0 }
        },
        {
          id: 'd',
          text: '친구들과 함께 배워간다',
          description: '소통하며 즐겁게 게임 학습',
          emoji: '❤️',
          scores: { tank: 0, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 4,
      text: '아이템을 선택할 때 기준은?',
      subtitle: '장비나 스킬을 고를 때 우선순위',
      emoji: '⚔️',
      options: [
        {
          id: 'a',
          text: '방어력과 생존력',
          description: '오래 버틸 수 있는 안정성',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 1, supporter: 1 }
        },
        {
          id: 'b',
          text: '공격력과 속도',
          description: '빠르고 강한 화력',
          emoji: '🗡️',
          scores: { tank: 0, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '특수 효과와 전략성',
          description: '독특하고 유용한 능력',
          emoji: '🧙‍♂️',
          scores: { tank: 1, dealer: 1, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '팀에게 도움이 되는 효과',
          description: '동료를 지원하는 기능',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 0, supporter: 3 }
        }
      ]
    },
    {
      id: 5,
      text: '게임에서 가장 중요하게 생각하는 것은?',
      subtitle: '플레이할 때 가장 우선시하는 가치',
      emoji: '💎',
      options: [
        {
          id: 'a',
          text: '팀의 안정성과 신뢰',
          description: '믿을 수 있는 든든한 존재',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 1, supporter: 2 }
        },
        {
          id: 'b',
          text: '승리와 성과',
          description: '목표 달성과 뛰어난 결과',
          emoji: '🗡️',
          scores: { tank: 1, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '전략적 깊이와 완성도',
          description: '치밀한 계획과 완벽한 실행',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 1, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '팀워크와 화합',
          description: '함께하는 즐거움과 협력',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '어려운 보스와 마주쳤을 때',
      subtitle: '강력한 적을 상대하는 전략',
      emoji: '👹',
      options: [
        {
          id: 'a',
          text: '정면으로 맞서서 버틴다',
          description: '굳건히 서서 팀을 지키기',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 1, mage: 0, supporter: 1 }
        },
        {
          id: 'b',
          text: '약점을 노려 집중 공격',
          description: '기회를 포착해 강력한 일격',
          emoji: '🗡️',
          scores: { tank: 0, dealer: 3, mage: 2, supporter: 0 }
        },
        {
          id: 'c',
          text: '패턴을 분석하고 대응',
          description: '행동을 예측하여 대비',
          emoji: '🧙‍♂️',
          scores: { tank: 1, dealer: 1, mage: 3, supporter: 0 }
        },
        {
          id: 'd',
          text: '팀원들의 컨디션을 관리',
          description: '지속적인 지원으로 승부',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 7,
      text: '게임을 하면서 가장 스트레스받는 상황은?',
      subtitle: '플레이 중 가장 부담스러운 순간',
      emoji: '😤',
      options: [
        {
          id: 'a',
          text: '팀원이 위험에 처했을 때',
          description: '동료를 지키지 못할 때의 부담',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 1, supporter: 2 }
        },
        {
          id: 'b',
          text: '기회를 놓쳤을 때',
          description: '결정적 순간을 놓친 아쉬움',
          emoji: '🗡️',
          scores: { tank: 1, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '계획이 틀어졌을 때',
          description: '예상과 다른 상황 발생',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 1, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '팀워크가 안 맞을 때',
          description: '소통 부족으로 인한 갈등',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '레벨업할 때 어떤 능력치를 올릴까?',
      subtitle: '캐릭터 성장 방향 설정',
      emoji: '📈',
      options: [
        {
          id: 'a',
          text: '체력과 방어력',
          description: '생존력과 지구력 향상',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 0, supporter: 1 }
        },
        {
          id: 'b',
          text: '공격력과 치명타',
          description: '강력한 파괴력 확보',
          emoji: '🗡️',
          scores: { tank: 0, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '마나와 스킬 쿨타임',
          description: '전략적 활용도 증가',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 1, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '회복력과 버프 효과',
          description: '지원 능력과 지속력',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 9,
      text: '새로운 던전을 탐험할 때',
      subtitle: '미지의 영역을 탐색하는 방식',
      emoji: '🗺️',
      options: [
        {
          id: 'a',
          text: '앞장서서 길을 열어간다',
          description: '솔선수범하여 위험 감수',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 2, mage: 0, supporter: 1 }
        },
        {
          id: 'b',
          text: '효율적인 루트를 찾는다',
          description: '최단거리로 목표 달성',
          emoji: '🗡️',
          scores: { tank: 1, dealer: 3, mage: 2, supporter: 0 }
        },
        {
          id: 'c',
          text: '지도를 그리며 천천히',
          description: '체계적이고 완전한 탐색',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 0, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '팀과 함께 안전하게',
          description: '협력하여 신중하게 진행',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    },
    {
      id: 10,
      text: '게임이 끝난 후 가장 뿌듯한 순간은?',
      subtitle: '플레이를 마치고 가장 보람을 느끼는 때',
      emoji: '🏆',
      options: [
        {
          id: 'a',
          text: '팀원들을 모두 지켜냈을 때',
          description: '든든한 방패 역할을 완수',
          emoji: '🛡️',
          scores: { tank: 3, dealer: 0, mage: 1, supporter: 2 }
        },
        {
          id: 'b',
          text: '최고의 성과를 달성했을 때',
          description: '뛰어난 실력으로 승리 기여',
          emoji: '🗡️',
          scores: { tank: 1, dealer: 3, mage: 1, supporter: 0 }
        },
        {
          id: 'c',
          text: '완벽한 전략이 통했을 때',
          description: '치밀한 계획의 성공적 실행',
          emoji: '🧙‍♂️',
          scores: { tank: 0, dealer: 1, mage: 3, supporter: 1 }
        },
        {
          id: 'd',
          text: '모두가 함께 즐거웠을 때',
          description: '팀워크로 만든 좋은 추억',
          emoji: '❤️',
          scores: { tank: 1, dealer: 0, mage: 1, supporter: 3 }
        }
      ]
    }
  ],
  results: {
    tank: {
      id: 'tank',
      title: '🛡️ 탱커형',
      emoji: '🛡️',
      description: '책임감 있고 묵묵히 버텨주는 수호자',
      detailedDescription: '당신은 팀의 든든한 방패입니다. 위험을 두려워하지 않고 앞장서서 동료들을 보호하는 것이 자연스럽습니다. 강한 책임감과 리더십으로 어려운 상황에서도 팀을 이끌어나가는 신뢰할 수 있는 존재입니다.',
      strengths: [
        '강한 책임감과 리더십을 가지고 있어요',
        '어려운 상황에서도 침착함을 유지해요',
        '팀원들에게 안정감을 제공해요',
        '위기 상황에서 솔선수범해요'
      ],
      improvements: [
        '때로는 다른 사람에게 맡기는 것도 필요해요',
        '자신의 한계를 인정하는 것도 중요해요',
        '완벽함보다 효율성을 고려해보세요',
        '휴식과 재충전의 시간을 가져보세요'
      ],
      compatibleTypes: [
        { id: 'supporter', title: '서포터형', emoji: '❤️', compatibility: 95 },
        { id: 'dealer', title: '딜러형', emoji: '🗡️', compatibility: 85 },
        { id: 'mage', title: '마법사형', emoji: '🧙‍♂️', compatibility: 75 }
      ],
      traits: [
        { name: '책임감', emoji: '🛡️', percentage: 95 },
        { name: '리더십', emoji: '👑', percentage: 88 },
        { name: '신뢰성', emoji: '🤝', percentage: 92 },
        { name: '인내력', emoji: '💪', percentage: 90 }
      ]
    },
    dealer: {
      id: 'dealer',
      title: '🗡️ 딜러형',
      emoji: '🗡️',
      description: '민첩하고 전략적인 공격수',
      detailedDescription: '당신은 팀의 핵심 화력입니다. 빠른 판단력과 뛰어난 실행력으로 기회를 놓치지 않고 목표를 달성합니다. 효율성을 추구하며 최적의 결과를 만들어내는 성과 지향적인 성격을 가지고 있습니다.',
      strengths: [
        '빠른 판단력과 실행력을 가져요',
        '목표 지향적이고 성과를 중시해요',
        '효율적인 방법을 잘 찾아내요',
        '결정적인 순간에 강한 집중력을 보여요'
      ],
      improvements: [
        '때로는 신중함도 필요해요',
        '팀워크를 더 고려해보세요',
        '과정도 결과만큼 중요해요',
        '실패를 두려워하지 마세요'
      ],
      compatibleTypes: [
        { id: 'tank', title: '탱커형', emoji: '🛡️', compatibility: 85 },
        { id: 'mage', title: '마법사형', emoji: '🧙‍♂️', compatibility: 80 },
        { id: 'supporter', title: '서포터형', emoji: '❤️', compatibility: 75 }
      ],
      traits: [
        { name: '실행력', emoji: '⚡', percentage: 94 },
        { name: '목표지향', emoji: '🎯', percentage: 91 },
        { name: '효율성', emoji: '📈', percentage: 88 },
        { name: '집중력', emoji: '🔥', percentage: 89 }
      ]
    },
    mage: {
      id: 'mage',
      title: '🧙‍♂️ 마법사형',
      emoji: '🧙‍♂️',
      description: '지적이고 신중한 문제 해결자',
      detailedDescription: '당신은 팀의 전략가입니다. 깊이 있는 사고와 체계적인 접근으로 복잡한 문제를 해결합니다. 항상 더 나은 방법을 찾으려 노력하며, 지식과 경험을 바탕으로 현명한 조언을 제공하는 지혜로운 존재입니다.',
      strengths: [
        '논리적이고 체계적인 사고를 해요',
        '복잡한 문제도 차근차근 풀어내요',
        '새로운 아이디어를 잘 제시해요',
        '상황을 객관적으로 분석해요'
      ],
      improvements: [
        '때로는 직감도 믿어보세요',
        '완벽보다는 실행이 우선일 때도 있어요',
        '감정적인 소통도 중요해요',
        '단순함의 가치도 인정해보세요'
      ],
      compatibleTypes: [
        { id: 'supporter', title: '서포터형', emoji: '❤️', compatibility: 88 },
        { id: 'dealer', title: '딜러형', emoji: '🗡️', compatibility: 80 },
        { id: 'tank', title: '탱커형', emoji: '🛡️', compatibility: 75 }
      ],
      traits: [
        { name: '논리성', emoji: '🧠', percentage: 93 },
        { name: '창의성', emoji: '💡', percentage: 87 },
        { name: '분석력', emoji: '🔍', percentage: 91 },
        { name: '전략성', emoji: '📋', percentage: 89 }
      ]
    },
    supporter: {
      id: 'supporter',
      title: '❤️ 서포터형',
      emoji: '❤️',
      description: '따뜻한 성격으로 팀워크를 이끄는 조력자',
      detailedDescription: '당신은 팀의 마음입니다. 뛰어난 소통 능력과 배려심으로 팀원들 간의 화합을 이끌어냅니다. 다른 사람을 돕는 것에서 기쁨을 찾으며, 모두가 함께 성장할 수 있도록 지원하는 따뜻한 성격의 소유자입니다.',
      strengths: [
        '뛰어난 소통 능력과 공감력을 가져요',
        '팀원들의 장점을 잘 발견해줘요',
        '갈등 상황을 잘 중재해요',
        '모두를 배려하는 따뜻한 마음을 가져요'
      ],
      improvements: [
        '자신의 의견도 당당히 표현해보세요',
        '때로는 단호함도 필요해요',
        '자신을 위한 시간도 가져보세요',
        '완벽하게 모든 사람을 만족시킬 필요는 없어요'
      ],
      compatibleTypes: [
        { id: 'tank', title: '탱커형', emoji: '🛡️', compatibility: 95 },
        { id: 'mage', title: '마법사형', emoji: '🧙‍♂️', compatibility: 88 },
        { id: 'dealer', title: '딜러형', emoji: '🗡️', compatibility: 75 }
      ],
      traits: [
        { name: '소통력', emoji: '💬', percentage: 95 },
        { name: '공감력', emoji: '🤗', percentage: 92 },
        { name: '협력성', emoji: '🤝', percentage: 89 },
        { name: '배려심', emoji: '💝', percentage: 94 }
      ]
    }
  }
};