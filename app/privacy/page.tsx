import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | 모두의 테스트',
  description: '모두의 테스트의 개인정보 처리방침을 확인하세요. 사용자의 개인정보 보호를 위한 정책과 방침을 안내합니다.',
  keywords: ['개인정보처리방침', '프라이버시정책', '개인정보보호'],
  robots: {
    index: true,
    follow: false,
  },
  alternates: {
    canonical: 'https://www.testevery.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">개인정보 처리방침</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            개인정보 처리방침
          </h1>
          <p className="text-gray-600">
            최종 수정일: 2024년 12월 7일
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl p-8 shadow-lg prose prose-lg max-w-none">
          <h2>1. 개인정보의 처리목적</h2>
          <p>
            모두의 테스트는 다음의 목적을 위하여 개인정보를 처리합니다. 
            처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 
            이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
          </p>
          <ul>
            <li>심리테스트 서비스 제공</li>
            <li>테스트 결과 저장 및 분석</li>
            <li>서비스 개선 및 통계 분석</li>
            <li>고객 문의 응답</li>
          </ul>

          <h2>2. 개인정보의 처리 및 보유기간</h2>
          <p>
            모두의 테스트는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 
            개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
          </p>
          <ul>
            <li><strong>테스트 결과 데이터</strong>: 서비스 이용 종료 시까지</li>
            <li><strong>문의 관련 정보</strong>: 문의 완료 후 1년</li>
            <li><strong>쿠키 및 로그 데이터</strong>: 1년</li>
          </ul>

          <h2>3. 처리하는 개인정보의 항목</h2>
          <p>모두의 테스트는 다음의 개인정보 항목을 처리하고 있습니다:</p>
          <ul>
            <li><strong>필수항목</strong>: 없음 (익명으로 서비스 이용 가능)</li>
            <li><strong>선택항목</strong>: 이메일 주소 (문의 시), 이름 (문의 시)</li>
            <li><strong>자동 수집 항목</strong>: IP주소, 쿠키, 접속 기록, 서비스 이용 기록</li>
          </ul>

          <h2>4. 개인정보의 제3자 제공</h2>
          <p>
            모두의 테스트는 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 
            제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
          </p>
          <p>현재 제3자 제공 현황: <strong>없음</strong></p>

          <h2>5. 개인정보처리의 위탁</h2>
          <p>모두의 테스트는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:</p>
          <ul>
            <li><strong>웹 호스팅 서비스</strong>: Vercel Inc. (미국)</li>
            <li><strong>웹 분석 서비스</strong>: Google Analytics (Google Inc.)</li>
          </ul>

          <h2>6. 정보주체의 권리·의무 및 행사방법</h2>
          <p>정보주체는 모두의 테스트에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
          <ul>
            <li>개인정보 처리현황 통지요구</li>
            <li>오류 등이 있을 경우 정정·삭제 요구</li>
            <li>처리정지 요구</li>
          </ul>

          <h2>7. 개인정보의 안전성 확보조치</h2>
          <p>모두의 테스트는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
          <ul>
            <li>개인정보에 대한 접근 제한</li>
            <li>개인정보를 취급하는 직원의 최소화 및 교육</li>
            <li>개인정보 처리시스템 등의 접근권한 관리</li>
            <li>접속기록의 보관 및 위변조 방지</li>
            <li>개인정보의 암호화</li>
            <li>보안프로그램 설치 및 갱신</li>
          </ul>

          <h2>8. 쿠키(Cookie)의 운용</h2>
          <p>
            모두의 테스트는 서비스 개선과 이용자에게 최적화된 정보 제공을 위해 쿠키를 사용합니다. 
            쿠키는 웹사이트 운영에 이용되는 서버가 이용자의 브라우저에 보내는 작은 텍스트 파일로서 이용자의 컴퓨터 하드디스크에 저장됩니다.
          </p>

          <h2>9. 개인정보처리방침의 변경</h2>
          <p>
            이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 
            삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
          </p>

          <h2>10. 개인정보 보호책임자</h2>
          <p>
            모두의 테스트는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 
            개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
          </p>
          <ul>
            <li><strong>연락처</strong>: 웹사이트 문의 페이지를 통해 연락</li>
            <li><strong>처리시간</strong>: 평일 09:00 ~ 18:00 (주말 및 공휴일 제외)</li>
          </ul>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">문의하기</h3>
            <p className="text-blue-800">
              개인정보 처리방침에 대한 문의사항이 있으시면 
              <Link href="/contact" className="underline hover:text-blue-600">
                문의 페이지
              </Link>를 통해 연락해주세요.
            </p>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "개인정보 처리방침",
            "description": "모두의 테스트의 개인정보 처리방침",
            "url": "https://www.testevery.com/privacy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com"
            },
            "dateModified": "2024-12-07"
          })
        }}
      />
    </main>
  )
}