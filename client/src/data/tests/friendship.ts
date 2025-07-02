import { TestData } from '../../types/test';

export const friendshipTest: TestData = {
  id: 'friendship',
  title: '우정 유형 테스트',
  description: '나의 우정 유형은?',
  emoji: '👫',
  color: 'purple',
  duration: '3-4분',
  questionCount: 8,
  participants: 2341,
  questions: [
    {
      id: 1,
      text: '친구가 힘들어할 때 당신의 첫 반응은?',
      subtitle: '가장 자연스럽게 나오는 행동을 선택해주세요',
      emoji: '😢',
      options: [
        {
          id: 'a',
          text: '바로 달려가기',
          description: '무슨 일인지 묻고 옆에 있어준다',
          emoji: '🏃‍♀️',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'b',
          text: '웃음으로 분위기 전환',
          description: '재미있는 이야기나 농담으로 기분을 풀어준다',
          emoji: '😄',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 0, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'c',
          text: '조용히 들어주기',
          description: '말하고 싶을 때까지 기다리며 경청한다',
          emoji: '👂',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 1, harmonizer: 1, recorder: 2 }
        },
        {
          id: 'd',
          text: '해결책 찾아주기',
          description: '문제 상황을 파악하고 실질적인 도움을 준다',
          emoji: '💡',
          scores: { protector: 2, entertainer: 0, listener: 1, advisor: 3, harmonizer: 1, recorder: 1 }
        }
      ]
    },
    {
      id: 2,
      text: '친구들과의 모임에서 주로 하는 역할은?',
      subtitle: '평소 모임에서의 모습을 선택해주세요',
      emoji: '🎉',
      options: [
        {
          id: 'a',
          text: '모두를 챙기는 역할',
          description: '빠진 사람 없는지 확인하고 다들 잘 지내는지 살핌',
          emoji: '🤗',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'b',
          text: '분위기 메이커',
          description: '재미있는 게임이나 이야기로 모임을 활기차게 만듦',
          emoji: '🎭',
          scores: { protector: 1, entertainer: 3, listener: 0, advisor: 1, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'c',
          text: '조용한 참여자',
          description: '말보다는 듣기를 좋아하며 필요할 때만 말함',
          emoji: '🤐',
          scores: { protector: 1, entertainer: 0, listener: 3, advisor: 2, harmonizer: 1, recorder: 2 }
        },
        {
          id: 'd',
          text: '사진 찍는 역할',
          description: '모임 순간들을 기록하고 나중에 사진을 공유함',
          emoji: '📷',
          scores: { protector: 1, entertainer: 1, listener: 1, advisor: 0, harmonizer: 1, recorder: 3 }
        }
      ]
    },
    {
      id: 3,
      text: '친구의 생일에 가장 중요하게 생각하는 것은?',
      subtitle: '생일 축하에서 가장 신경 쓰는 부분을 선택해주세요',
      emoji: '🎂',
      options: [
        {
          id: 'a',
          text: '함께 있어주는 것',
          description: '선물보다는 함께 시간을 보내는 것이 중요',
          emoji: '🤝',
          scores: { protector: 3, entertainer: 2, listener: 2, advisor: 1, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'b',
          text: '즐거운 파티 분위기',
          description: '신나고 재미있는 생일파티를 기획함',
          emoji: '🎊',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 2, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'c',
          text: '마음을 담은 편지',
          description: '진심이 담긴 편지나 메시지를 준비함',
          emoji: '💌',
          scores: { protector: 2, entertainer: 1, listener: 3, advisor: 1, harmonizer: 1, recorder: 3 }
        },
        {
          id: 'd',
          text: '실용적인 선물',
          description: '친구가 정말 필요로 하는 유용한 선물을 준비',
          emoji: '🎁',
          scores: { protector: 2, entertainer: 1, listener: 1, advisor: 3, harmonizer: 1, recorder: 2 }
        }
      ]
    },
    {
      id: 4,
      text: '친구가 실수했을 때 당신의 반응은?',
      subtitle: '친구의 실수에 대한 대응 방식을 선택해주세요',
      emoji: '😅',
      options: [
        {
          id: 'a',
          text: '괜찮다고 위로하기',
          description: '실수는 누구나 하는 것이라며 위로해준다',
          emoji: '🫂',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'b',
          text: '웃음으로 넘기기',
          description: '유머로 상황을 가볍게 만들어 부담을 덜어준다',
          emoji: '😂',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 0, harmonizer: 3, recorder: 1 }
        },
        {
          id: 'c',
          text: '충분히 들어주기',
          description: '친구가 하고 싶은 말을 끝까지 들어준다',
          emoji: '👂',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 1, harmonizer: 1, recorder: 2 }
        },
        {
          id: 'd',
          text: '다음엔 어떻게 할지 함께 생각',
          description: '같은 실수를 반복하지 않도록 대안을 찾아준다',
          emoji: '🤔',
          scores: { protector: 1, entertainer: 0, listener: 1, advisor: 3, harmonizer: 2, recorder: 1 }
        }
      ]
    },
    {
      id: 5,
      text: '친구들과의 추억을 간직하는 방법은?',
      subtitle: '소중한 순간들을 기억하는 방식을 선택해주세요',
      emoji: '💭',
      options: [
        {
          id: 'a',
          text: '마음에 깊이 새기기',
          description: '특별한 순간들을 마음속에 소중히 간직함',
          emoji: '💖',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'b',
          text: '재미있는 이야기로 만들기',
          description: '나중에 웃으며 얘기할 수 있는 에피소드로 기억',
          emoji: '📚',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'c',
          text: '조용히 되새기기',
          description: '혼자만의 시간에 그 순간들을 천천히 떠올림',
          emoji: '🌙',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 1, harmonizer: 1, recorder: 2 }
        },
        {
          id: 'd',
          text: '사진이나 기념품으로 남기기',
          description: '사진, 티켓, 선물 등 물리적인 형태로 보관',
          emoji: '📸',
          scores: { protector: 2, entertainer: 1, listener: 2, advisor: 1, harmonizer: 1, recorder: 3 }
        }
      ]
    },
    {
      id: 6,
      text: '친구들 사이에 갈등이 생겼을 때 당신의 행동은?',
      subtitle: '갈등 상황에서의 대처 방식을 선택해주세요',
      emoji: '⚡',
      options: [
        {
          id: 'a',
          text: '양쪽 다 감싸기',
          description: '둘 다 이해하려 노력하며 상처받지 않도록 돌봄',
          emoji: '🤗',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'b',
          text: '분위기 전환하기',
          description: '다른 재미있는 주제로 관심을 돌려 갈등을 피함',
          emoji: '🎈',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 0, harmonizer: 3, recorder: 1 }
        },
        {
          id: 'c',
          text: '각자의 입장 들어주기',
          description: '양쪽의 이야기를 차근차근 들어보며 이해하려 함',
          emoji: '⚖️',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 2, harmonizer: 2, recorder: 1 }
        },
        {
          id: 'd',
          text: '해결 방안 제시하기',
          description: '문제의 원인을 파악하고 구체적인 해결책을 제안',
          emoji: '🔧',
          scores: { protector: 1, entertainer: 0, listener: 1, advisor: 3, harmonizer: 3, recorder: 1 }
        }
      ]
    },
    {
      id: 7,
      text: '친구와 함께 시간을 보낼 때 가장 좋아하는 활동은?',
      subtitle: '가장 편안하고 즐거운 활동을 선택해주세요',
      emoji: '⭐',
      options: [
        {
          id: 'a',
          text: '깊은 대화 나누기',
          description: '진솔한 이야기를 나누며 서로를 더 알아가기',
          emoji: '💬',
          scores: { protector: 3, entertainer: 1, listener: 3, advisor: 2, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'b',
          text: '신나는 활동하기',
          description: '게임, 노래방, 놀이공원 등 에너지 넘치는 활동',
          emoji: '🎮',
          scores: { protector: 1, entertainer: 3, listener: 0, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'c',
          text: '조용한 시간 함께하기',
          description: '카페에서 차 마시며 여유롭게 시간 보내기',
          emoji: '☕',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'd',
          text: '새로운 장소 탐험하기',
          description: '함께 새로운 곳을 가보며 추억 만들기',
          emoji: '🗺️',
          scores: { protector: 2, entertainer: 2, listener: 1, advisor: 2, harmonizer: 2, recorder: 3 }
        }
      ]
    },
    {
      id: 8,
      text: '친구에게 가장 중요하게 전해주고 싶은 마음은?',
      subtitle: '우정에서 가장 소중하게 여기는 가치를 선택해주세요',
      emoji: '💝',
      options: [
        {
          id: 'a',
          text: '언제나 네 편이야',
          description: '어떤 상황에서도 믿고 의지할 수 있는 든든함',
          emoji: '🛡️',
          scores: { protector: 3, entertainer: 1, listener: 2, advisor: 2, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'b',
          text: '너와 함께라면 항상 즐거워',
          description: '함께 있으면 웃음이 끊이지 않는 즐거운 관계',
          emoji: '😊',
          scores: { protector: 1, entertainer: 3, listener: 1, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'c',
          text: '네 마음을 이해해',
          description: '말하지 않아도 서로의 마음을 알아주는 깊은 이해',
          emoji: '💙',
          scores: { protector: 2, entertainer: 0, listener: 3, advisor: 1, harmonizer: 2, recorder: 2 }
        },
        {
          id: 'd',
          text: '우리의 추억을 소중히 여겨',
          description: '함께한 모든 순간들이 특별하고 의미있음',
          emoji: '🌟',
          scores: { protector: 2, entertainer: 1, listener: 2, advisor: 1, harmonizer: 2, recorder: 3 }
        }
      ]
    }
  ],
  results: {
    protector: {
      id: 'protector',
      title: '든든한 보호자형',
      emoji: '🤝',
      description: '언제나 옆에 있어주는 든든한 친구! 믿음직하고 따뜻한 당신의 우정은 많은 사람들에게 큰 힘이 됩니다.',
      detailedDescription: '당신은 친구들에게 든든한 버팀목이 되어주는 따뜻한 사람이에요. 누군가 힘들어할 때 가장 먼저 달려가고, 언제나 믿고 의지할 수 있는 존재가 되어줍니다. 친구들의 안전과 행복을 진심으로 걱정하며, 어떤 상황에서도 곁을 지켜주는 충성스러운 마음을 가지고 있어요. 때로는 자신보다 친구들을 더 챙기기도 하는 이타적인 성격입니다.',
      strengths: [
        '높은 충성심과 신뢰성',
        '어려운 상황에서도 흔들리지 않는 의지',
        '다른 사람을 배려하는 따뜻한 마음',
        '책임감 있고 든든한 성격'
      ],
      improvements: [
        '자신의 감정도 소중히 여기기',
        '때로는 친구들이 혼자 해결할 수 있도록 믿어주기',
        '과도한 걱정으로 스트레스받지 않기',
        '자신만의 시간도 충분히 갖기'
      ],
      compatibleTypes: [
        { id: 'listener', title: '따뜻한 경청자형', emoji: '👂', compatibility: 90 },
        { id: 'harmonizer', title: '조화로운 중재자형', emoji: '🧩', compatibility: 85 },
        { id: 'recorder', title: '소중한 기록자형', emoji: '📸', compatibility: 80 }
      ],
      traits: [
        { name: '충성심', emoji: '💙', percentage: 95 },
        { name: '보호본능', emoji: '🛡️', percentage: 90 },
        { name: '신뢰성', emoji: '🤝', percentage: 92 },
        { name: '배려심', emoji: '🤗', percentage: 88 }
      ]
    },
    entertainer: {
      id: 'entertainer',
      title: '유쾌한 장난꾸러기형',
      emoji: '😂',
      description: '웃음과 에너지를 나누는 유쾌한 동반자! 당신이 있으면 어떤 자리든 즐거워지고 활기가 넘칩니다.',
      detailedDescription: '당신은 타고난 엔터테이너예요. 어떤 상황에서든 유머와 재치로 분위기를 밝게 만드는 능력이 있습니다. 친구들이 힘들어할 때도 웃음으로 위로해주고, 지루한 상황을 재미있게 바꿔놓는 마법 같은 힘을 가지고 있어요. 긍정적인 에너지로 주변 사람들에게 활력을 주며, 함께 있으면 자연스럽게 웃음이 나오는 특별한 매력을 지니고 있습니다.',
      strengths: [
        '뛰어난 유머 감각과 재치',
        '긍정적이고 밝은 에너지',
        '분위기를 주도하는 리더십',
        '창의적이고 자유로운 사고'
      ],
      improvements: [
        '진지한 상황에서도 적절한 반응 보이기',
        '때로는 조용히 들어주는 것도 필요',
        '깊이 있는 대화도 나누어보기',
        '다른 사람의 감정 상태 파악하기'
      ],
      compatibleTypes: [
        { id: 'harmonizer', title: '조화로운 중재자형', emoji: '🧩', compatibility: 85 },
        { id: 'protector', title: '든든한 보호자형', emoji: '🤝', compatibility: 80 },
        { id: 'recorder', title: '소중한 기록자형', emoji: '📸', compatibility: 75 }
      ],
      traits: [
        { name: '유머감각', emoji: '😄', percentage: 95 },
        { name: '에너지', emoji: '⚡', percentage: 90 },
        { name: '창의성', emoji: '🎨', percentage: 85 },
        { name: '사교성', emoji: '👥', percentage: 88 }
      ]
    },
    listener: {
      id: 'listener',
      title: '따뜻한 경청자형',
      emoji: '👂',
      description: '말보다는 잘 들어주며 위로해주는 친구! 당신의 따뜻한 마음과 깊은 공감능력은 많은 사람들에게 큰 위안이 됩니다.',
      detailedDescription: '당신은 타고난 경청자예요. 친구들의 이야기를 진심으로 들어주고, 그들의 마음을 깊이 이해하려고 노력합니다. 말보다는 행동으로 사랑을 표현하며, 섬세한 감정까지 놓치지 않고 헤아려주는 따뜻한 마음을 가지고 있어요. 조용하지만 깊이 있는 관계를 만들어가며, 친구들에게는 마음을 털어놓을 수 있는 안전한 안식처 같은 존재입니다.',
      strengths: [
        '뛰어난 공감능력과 이해심',
        '깊이 있는 경청 능력',
        '섬세하고 따뜻한 마음',
        '신뢰할 수 있는 조용한 리더십'
      ],
      improvements: [
        '자신의 의견도 적극적으로 표현하기',
        '때로는 먼저 다가가는 용기 갖기',
        '자신의 감정도 솔직하게 나누기',
        '다양한 표현 방식 시도해보기'
      ],
      compatibleTypes: [
        { id: 'protector', title: '든든한 보호자형', emoji: '🤝', compatibility: 90 },
        { id: 'recorder', title: '소중한 기록자형', emoji: '📸', compatibility: 85 },
        { id: 'advisor', title: '현명한 조언자형', emoji: '🧭', compatibility: 80 }
      ],
      traits: [
        { name: '공감능력', emoji: '💝', percentage: 95 },
        { name: '경청력', emoji: '👂', percentage: 92 },
        { name: '이해심', emoji: '🤗', percentage: 90 },
        { name: '신뢰성', emoji: '🔒', percentage: 88 }
      ]
    },
    advisor: {
      id: 'advisor',
      title: '현명한 조언자형',
      emoji: '🧭',
      description: '실질적인 해결책과 방향을 제시해주는 현실적 친구! 당신의 지혜와 통찰력은 친구들에게 든든한 나침반이 됩니다.',
      detailedDescription: '당신은 현명하고 실용적인 조언을 해주는 친구예요. 문제 상황을 객관적으로 분석하고, 친구들이 올바른 방향으로 나아갈 수 있도록 구체적인 해결책을 제시해줍니다. 감정적인 위로도 중요하지만, 실질적인 도움을 주는 것을 더 가치 있게 여기며, 친구들의 성장과 발전을 진심으로 바라는 마음을 가지고 있어요. 냉정하면서도 따뜻한 현실적 지혜를 지닌 사람입니다.',
      strengths: [
        '뛰어난 문제해결 능력',
        '객관적이고 현실적인 시각',
        '논리적이고 체계적인 사고',
        '친구들의 성장을 돕는 멘토십'
      ],
      improvements: [
        '감정적 위로도 함께 제공하기',
        '때로는 답보다 공감이 필요한 상황 인식하기',
        '조언을 강요하지 않고 기다려주기',
        '완벽한 해결책이 항상 필요한 것은 아님을 이해하기'
      ],
      compatibleTypes: [
        { id: 'harmonizer', title: '조화로운 중재자형', emoji: '🧩', compatibility: 85 },
        { id: 'listener', title: '따뜻한 경청자형', emoji: '👂', compatibility: 80 },
        { id: 'protector', title: '든든한 보호자형', emoji: '🤝', compatibility: 75 }
      ],
      traits: [
        { name: '지혜', emoji: '🧠', percentage: 92 },
        { name: '문제해결력', emoji: '🔧', percentage: 90 },
        { name: '객관성', emoji: '⚖️', percentage: 88 },
        { name: '신뢰성', emoji: '🎯', percentage: 85 }
      ]
    },
    harmonizer: {
      id: 'harmonizer',
      title: '조화로운 중재자형',
      emoji: '🧩',
      description: '분위기를 잘 맞추고 중재 역할을 잘하는 조율형 친구! 당신은 모든 사람이 편안해할 수 있는 화합의 분위기를 만들어냅니다.',
      detailedDescription: '당신은 타고난 중재자이자 조화를 만들어내는 사람이에요. 서로 다른 성격의 친구들 사이에서 균형을 맞춰주고, 모두가 편안해할 수 있는 분위기를 조성하는 능력이 있습니다. 갈등 상황에서는 양쪽의 입장을 이해하며 평화로운 해결책을 찾아주고, 그룹 내에서 소외되는 사람이 없도록 세심하게 배려해주는 따뜻한 마음을 가지고 있어요.',
      strengths: [
        '뛰어난 중재 및 조율 능력',
        '균형잡힌 시각과 공정성',
        '높은 사회적 감수성',
        '포용력 있고 평화로운 성격'
      ],
      improvements: [
        '자신의 의견도 당당하게 표현하기',
        '모든 사람을 만족시키려 하지 않기',
        '때로는 명확한 입장 표명하기',
        '자신의 감정도 솔직하게 드러내기'
      ],
      compatibleTypes: [
        { id: 'entertainer', title: '유쾌한 장난꾸러기형', emoji: '😂', compatibility: 85 },
        { id: 'advisor', title: '현명한 조언자형', emoji: '🧭', compatibility: 85 },
        { id: 'protector', title: '든든한 보호자형', emoji: '🤝', compatibility: 80 }
      ],
      traits: [
        { name: '조화능력', emoji: '☯️', percentage: 95 },
        { name: '중재력', emoji: '⚖️', percentage: 90 },
        { name: '배려심', emoji: '🤗', percentage: 88 },
        { name: '포용력', emoji: '🌈', percentage: 92 }
      ]
    },
    recorder: {
      id: 'recorder',
      title: '소중한 기록자형',
      emoji: '📸',
      description: '함께한 순간을 소중히 간직하고 사진, 선물, 편지 등을 잘 챙기는 친구! 당신은 추억을 만들고 보존하는 특별한 재능이 있습니다.',
      detailedDescription: '당신은 소중한 순간들을 기록하고 보존하는 감성적인 사람이에요. 친구들과 함께한 모든 순간을 의미 있게 여기며, 사진, 편지, 선물 등을 통해 그 추억들을 아름답게 간직합니다. 세심하고 정성스러운 마음으로 친구들의 특별한 날을 기억해주고, 작은 것 하나하나에도 의미를 부여하는 따뜻한 감성을 가지고 있어요. 시간이 흘러도 변하지 않는 우정의 가치를 믿는 낭만적인 사람입니다.',
      strengths: [
        '세심하고 정성스러운 마음',
        '추억을 소중히 여기는 감성',
        '창의적인 표현 능력',
        '지속적이고 꾸준한 관심'
      ],
      improvements: [
        '현재 순간도 충분히 즐기기',
        '완벽한 기록에 너무 집착하지 않기',
        '자연스러운 관계도 소중히 여기기',
        '다양한 형태의 사랑 표현 시도하기'
      ],
      compatibleTypes: [
        { id: 'listener', title: '따뜻한 경청자형', emoji: '👂', compatibility: 85 },
        { id: 'protector', title: '든든한 보호자형', emoji: '🤝', compatibility: 80 },
        { id: 'entertainer', title: '유쾌한 장난꾸러기형', emoji: '😂', compatibility: 75 }
      ],
      traits: [
        { name: '감성', emoji: '💝', percentage: 95 },
        { name: '기록력', emoji: '📝', percentage: 92 },
        { name: '창의성', emoji: '🎨', percentage: 88 },
        { name: '정성', emoji: '💖', percentage: 90 }
      ]
    }
  }
};