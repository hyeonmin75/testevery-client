import { motion } from "framer-motion";
import { useLocation } from "wouter";
import { ContactButton } from "../components/ContactButton";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "테스트 결과는 과학적으로 정확한가요?",
    answer: "아니요. 모든 테스트는 오락 목적으로만 제작되었으며, 과학적 또는 의학적 근거를 바탕으로 하지 않습니다. 재미있는 시간을 보내고 친구들과 대화를 나누는 용도로 활용해 주세요."
  },
  {
    id: 2,
    question: "개인정보가 수집되나요?",
    answer: "아니요. 모든 테스트 결과는 사용자의 브라우저 로컬스토리지에만 저장되며, 서버에는 어떤 개인정보도 전송되지 않습니다. 브라우저 데이터를 삭제하면 모든 정보가 완전히 제거됩니다."
  },
  {
    id: 3,
    question: "테스트 결과를 친구와 공유할 수 있나요?",
    answer: "네! 각 테스트 결과 페이지에서 이미지를 다운로드하거나 링크를 복사하여 친구들과 쉽게 공유할 수 있습니다. 카카오톡, 인스타그램 등 다양한 플랫폼에서 공유가 가능합니다."
  },
  {
    id: 4,
    question: "새로운 테스트는 언제 추가되나요?",
    answer: "새로운 테스트는 정기적으로 추가됩니다. 사용자들의 요청사항과 트렌드를 반영하여 다양하고 흥미로운 테스트들을 계속 개발하고 있습니다."
  },
  {
    id: 5,
    question: "테스트는 몇 번까지 할 수 있나요?",
    answer: "제한 없이 몇 번이든 테스트를 진행할 수 있습니다. 시간이 지나면서 답변이 달라질 수 있으니, 주기적으로 다시 해보시는 것도 재미있을 것입니다."
  },
  {
    id: 6,
    question: "모바일에서도 잘 작동하나요?",
    answer: "네! 모든 기기에서 최적화되어 작동합니다. 스마트폰, 태블릿, 컴퓨터 어디서든 편리하게 이용하실 수 있습니다."
  },
  {
    id: 7,
    question: "테스트 결과가 마음에 들지 않아요.",
    answer: "테스트 결과는 재미를 위한 것이므로 너무 진지하게 받아들이지 마세요. 마음에 들지 않는다면 다시 테스트를 해보시거나, 다른 재미있는 테스트를 시도해보세요!"
  },
  {
    id: 8,
    question: "MBTI 테스트는 공식 테스트와 같나요?",
    answer: "아니요. 저희 MBTI 테스트는 재미있는 형태로 각색된 버전입니다. 정확한 MBTI 진단을 원하신다면 공식 검사를 받으시는 것을 권장합니다."
  },
  {
    id: 9,
    question: "결과를 저장할 수 있나요?",
    answer: "네! 테스트 결과는 자동으로 브라우저에 저장되어 언제든지 다시 확인할 수 있습니다. 또한 결과 이미지를 다운로드하여 보관하실 수도 있습니다."
  },
  {
    id: 10,
    question: "사이트 이용 중 문제가 발생했어요.",
    answer: "불편을 드려 죄송합니다. 페이지 하단의 문의하기 버튼을 통해 상세한 상황을 알려주시면 빠르게 해결해드리겠습니다."
  }
];

export default function FAQ() {
  const [, setLocation] = useLocation();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-korean">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <button
              onClick={() => setLocation('/')}
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors mb-6"
            >
              ← 홈으로 돌아가기
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              자주 묻는 질문
            </h1>
            <p className="text-gray-600">
              모두의 테스트에 대해 궁금한 점들을 확인해보세요
            </p>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">빠른 링크</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <button
                onClick={() => setLocation('/about')}
                className="flex items-center gap-2 p-3 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
              >
                <span className="text-purple-500">ℹ️</span>
                <span className="text-purple-700 font-medium">서비스 소개</span>
              </button>
              <button
                onClick={() => setLocation('/guide')}
                className="flex items-center gap-2 p-3 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
              >
                <span className="text-blue-500">📚</span>
                <span className="text-blue-700 font-medium">결과 해석 가이드</span>
              </button>
              <button
                onClick={() => setLocation('/privacy')}
                className="flex items-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
              >
                <span className="text-green-500">🔒</span>
                <span className="text-green-700 font-medium">개인정보처리방침</span>
              </button>
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4 mb-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-purple-500 text-xl flex-shrink-0"
                  >
                    ▼
                  </motion.span>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openItems.includes(faq.id) ? "auto" : 0,
                    opacity: openItems.includes(faq.id) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6 pt-0">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              원하는 답변을 찾지 못하셨나요?
            </h2>
            <p className="mb-6 text-purple-100">
              언제든지 문의해 주세요! 빠르게 답변드리겠습니다.
            </p>
            <ContactButton className="bg-white text-purple-600 hover:bg-gray-100" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}