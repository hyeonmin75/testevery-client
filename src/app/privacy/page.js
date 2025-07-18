export const metadata = {
  title: '개인정보처리방침 | TestEvery',
  description: 'TestEvery의 개인정보처리방침입니다. 사용자의 개인정보 보호를 위한 정책과 처리 방침을 안내합니다.',
  keywords: ['개인정보', '처리방침', '개인정보보호', '정책', '이용약관'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '개인정보처리방침 | TestEvery',
    description: 'TestEvery의 개인정보처리방침입니다.',
    url: 'https://www.testevery.com/privacy/',
    type: 'website',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            개인정보처리방침
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>시행일자:</strong> 2025년 1월 18일
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              1. 개인정보 수집 및 이용 목적
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 다음의 목적을 위하여 개인정보를 처리합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>심리테스트 서비스 제공</li>
              <li>사용자 문의 및 고객지원</li>
              <li>서비스 개선 및 새로운 서비스 개발</li>
              <li>부정 이용 방지 및 서비스 안정성 확보</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              2. 수집하는 개인정보 항목
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 최소한의 개인정보만을 수집합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>필수정보:</strong> 없음 (회원가입 불필요)</li>
              <li><strong>선택정보:</strong> 문의 시 이름, 이메일 주소</li>
              <li><strong>자동수집:</strong> IP주소, 접속 로그, 쿠키, 서비스 이용 기록</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              3. 개인정보 처리 및 보유 기간
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 개인정보를 다음과 같이 처리합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>테스트 결과:</strong> 브라우저 로컬 저장소에만 저장 (서버 저장 없음)</li>
              <li><strong>문의 내용:</strong> 문의 목적 달성 후 3년간 보관</li>
              <li><strong>로그 데이터:</strong> 6개월간 보관 후 자동 삭제</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              4. 개인정보 제3자 제공
            </h2>
            <p className="text-gray-700 mb-6">
              TestEvery는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 
              다만, 다음의 경우에는 예외로 합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>사용자의 사전 동의가 있는 경우</li>
              <li>법령의 규정에 의거하거나 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              5. 개인정보 처리 위탁
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>Vercel:</strong> 웹사이트 호스팅 및 배포</li>
              <li><strong>Google Analytics:</strong> 웹사이트 분석 및 통계</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              6. 정보주체의 권리·의무 및 행사방법
            </h2>
            <p className="text-gray-700 mb-4">
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>개인정보 처리현황 통지 요구</li>
              <li>개인정보 처리정지 요구</li>
              <li>개인정보 손해배상 요구</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              7. 개인정보 자동 수집 장치의 설치·운영 및 거부에 관한 사항
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 다음과 같은 목적으로 쿠키를 사용합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>사용자 경험 개선</li>
              <li>테스트 결과 임시 저장</li>
              <li>웹사이트 분석 및 성능 개선</li>
            </ul>
            <p className="text-gray-700 mb-6">
              이용자는 웹브라우저에서 쿠키 설정을 변경하여 쿠키 저장을 거부할 수 있습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              8. 개인정보 보호책임자
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
              개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 
              아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700"><strong>개인정보 보호책임자</strong></p>
              <p className="text-gray-700">이메일: privacy@testevery.com</p>
              <p className="text-gray-700">연락처: 문의 양식을 통해 연락 가능</p>
            </div>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              9. 개인정보 처리방침 변경
            </h2>
            <p className="text-gray-700 mb-6">
              본 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 
              변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 
              공지사항을 통하여 고지할 것입니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              10. 개인정보의 안전성 확보 조치
            </h2>
            <p className="text-gray-700 mb-4">
              TestEvery는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>정기적인 자체 감사 실시</li>
              <li>개인정보 취급 직원의 최소화 및 교육</li>
              <li>개인정보에 대한 접근 제한</li>
              <li>접속기록의 보관 및 위변조 방지</li>
              <li>개인정보의 암호화</li>
              <li>해킹 등에 대비한 기술적 대책</li>
            </ul>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-800 text-center">
                개인정보 처리방침에 대한 문의사항이 있으시면 
                <a href="/contact/" className="underline font-medium ml-1">문의하기</a>를 통해 연락해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}