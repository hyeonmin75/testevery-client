import { motion } from "framer-motion";
import { useLocation } from "wouter";

export default function Privacy() {
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
              개인정보처리방침
            </h1>
            <p className="text-gray-600">
              모두의 테스트는 사용자의 개인정보 보호를 위해 최선을 다하고 있습니다.
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">1. 개인정보 수집 및 이용 목적</h2>
              <p className="text-gray-600 leading-relaxed">
                본 웹사이트는 다음과 같은 목적으로 개인정보를 처리합니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                <li>심리테스트 서비스 제공</li>
                <li>테스트 결과 저장 및 표시</li>
                <li>서비스 개선을 위한 통계 분석</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">2. 수집하는 개인정보 항목</h2>
              <p className="text-gray-600 leading-relaxed">
                본 웹사이트는 다음과 같은 정보를 수집합니다:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-3 space-y-1">
                <li>테스트 응답 내용 (브라우저 로컬스토리지에만 저장)</li>
                <li>테스트 결과 데이터 (브라우저 로컬스토리지에만 저장)</li>
                <li>웹사이트 이용 통계 (Google Analytics 등)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">3. 개인정보의 보유 및 이용기간</h2>
              <p className="text-gray-600 leading-relaxed">
                모든 테스트 결과는 사용자의 브라우저 로컬스토리지에만 저장되며, 
                서버에는 개인정보를 저장하지 않습니다. 사용자가 브라우저 데이터를 
                삭제하면 모든 정보가 완전히 제거됩니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">4. 개인정보의 제3자 제공</h2>
              <p className="text-gray-600 leading-relaxed">
                본 웹사이트는 사용자의 개인정보를 제3자에게 제공하지 않습니다. 
                단, 법령에 의해 요구되는 경우는 예외로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">5. 쿠키 사용</h2>
              <p className="text-gray-600 leading-relaxed">
                본 웹사이트는 서비스 개선을 위해 쿠키를 사용할 수 있습니다. 
                브라우저 설정을 통해 쿠키 사용을 거부할 수 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">6. 개인정보보호책임자</h2>
              <p className="text-gray-600 leading-relaxed">
                개인정보 처리에 관한 문의사항이 있으시면 아래 연락처로 연락해 주시기 바랍니다.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-3">
                <p className="text-gray-600">
                  <strong>연락처:</strong> 웹사이트 문의하기 기능 이용
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-800 mb-4">7. 개인정보처리방침 변경</h2>
              <p className="text-gray-600 leading-relaxed">
                본 개인정보처리방침은 2024년 6월 1일부터 적용됩니다. 
                개인정보처리방침이 변경되는 경우 웹사이트를 통해 공지하겠습니다.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}