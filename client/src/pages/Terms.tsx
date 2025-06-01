import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Terms() {
  const [, setLocation] = useLocation();

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
              이용약관
            </h1>
            <p className="text-gray-600">
              모두의 테스트 서비스 이용에 관한 약관입니다.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. 서비스 목적 및 성격</h2>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-semibold">
                  ⚠️ 중요: 본 서비스의 모든 심리테스트는 오락 목적으로만 제공됩니다.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>과학적 또는 의학적 근거가 없는 재미있는 테스트입니다</li>
                <li>전문적인 심리 진단이나 상담을 대체할 수 없습니다</li>
                <li>결과는 참고용으로만 활용해 주세요</li>
                <li>심리적 문제가 있으시면 전문가와 상담하시기 바랍니다</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. 서비스 이용</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                본 서비스를 이용함으로써 다음 사항에 동의하는 것으로 간주됩니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>만 13세 이상 사용자만 이용 가능합니다</li>
                <li>테스트 결과의 오락적 성격을 이해하고 동의합니다</li>
                <li>서비스를 건전한 목적으로만 사용합니다</li>
                <li>다른 사용자에게 피해를 주지 않습니다</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. 금지 행위</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                다음과 같은 행위는 금지됩니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>서비스의 정상적인 운영을 방해하는 행위</li>
                <li>다른 사용자의 개인정보를 무단으로 수집하는 행위</li>
                <li>테스트 결과를 상업적으로 악용하는 행위</li>
                <li>허위 정보를 유포하는 행위</li>
                <li>저작권을 침해하는 행위</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. 면책조항</h2>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800 font-semibold">
                  본 서비스는 어떠한 법적 책임도 지지 않습니다.
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>테스트 결과의 정확성이나 신뢰성을 보장하지 않습니다</li>
                <li>테스트 결과로 인한 직간접적 손해에 대해 책임지지 않습니다</li>
                <li>서비스 중단, 오류, 데이터 손실에 대해 책임지지 않습니다</li>
                <li>제3자와의 분쟁에 개입하지 않습니다</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. 지적재산권</h2>
              <p className="text-gray-600 leading-relaxed">
                본 웹사이트의 모든 콘텐츠(텍스트, 이미지, 디자인 등)는 저작권법의 
                보호를 받습니다. 무단 복제, 배포, 수정을 금지합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. 서비스 변경 및 중단</h2>
              <p className="text-gray-600 leading-relaxed">
                운영자는 필요에 따라 서비스를 변경하거나 중단할 수 있으며, 
                이에 대해 사전 통지하도록 노력하겠습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. 분쟁 해결</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관과 관련된 분쟁은 대한민국 법률에 따라 해결되며, 
                관할 법원은 서울중앙지방법원으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">8. 약관 변경</h2>
              <p className="text-gray-600 leading-relaxed">
                본 약관은 2024년 6월 1일부터 적용됩니다. 
                약관이 변경되는 경우 웹사이트를 통해 공지하겠습니다.
              </p>
            </section>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-8">
              <p className="text-blue-800">
                <strong>문의사항:</strong> 이용약관과 관련하여 궁금한 사항이 있으시면 
                웹사이트 문의 기능을 이용해 주시기 바랍니다.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}