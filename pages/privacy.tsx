import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>개인정보처리방침 | 심리학 교육센터</title>
        <meta
          name="description"
          content="심리학 교육센터의 개인정보처리방침입니다. 개인정보 수집, 이용, 보관 및 파기에 관한 상세한 안내를 제공합니다."
        />
        <meta property="og:title" content="개인정보처리방침 | 심리학 교육센터" />
        <link rel="canonical" href="https://testevery.com/privacy" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">개인정보처리방침</h1>
          <p className="text-gray-600">
            심리학 교육센터(이하 "회사")는 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 
            개인정보보호법 등 관련 법률에 따라 이용자의 개인정보를 보호하고 이와 관련한 
            고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 
            수립·공개합니다.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            최종 업데이트: 2024년 12월 25일
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 개인정보의 처리 목적</h2>
            <p className="text-gray-700 mb-4">
              회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 
              다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 
              개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">가. 웹사이트 회원가입 및 관리</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증</li>
                <li>회원자격 유지·관리, 서비스 부정이용 방지</li>
                <li>각종 고지·통지, 고충처리 등을 목적으로 개인정보를 처리합니다.</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">나. 심리 테스트 서비스 제공</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>심리 테스트 결과 제공 및 개인 맞춤형 분석</li>
                <li>테스트 이력 관리 및 결과 비교 분석</li>
                <li>서비스 개선을 위한 통계 작성 등을 목적으로 개인정보를 처리합니다.</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">다. 고객 지원 및 문의 응답</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>고객 문의 및 불만 처리, 공지사항 전달</li>
                <li>서비스 이용 관련 안내 및 상담</li>
                <li>서비스 개선을 위한 의견 수렴 등을 목적으로 개인정보를 처리합니다.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 개인정보의 처리 및 보유기간</h2>
            <p className="text-gray-700 mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 
              동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      처리 목적
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      보유기간
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      회원가입 및 관리
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      회원 탈퇴 시까지
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      심리 테스트 결과
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      3년 (개인정보보호법 시행령 제16조)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      고객 문의 및 상담
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      3년 (전자상거래법 제6조)
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      접속 로그 기록
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                      3개월 (통신비밀보호법 제15조의2)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 개인정보의 처리 현황</h2>
            <p className="text-gray-700 mb-4">
              회사는 다음의 개인정보 항목을 처리하고 있습니다.
            </p>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">필수항목</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>이메일 주소 (로그인 ID)</li>
                <li>비밀번호 (암호화 저장)</li>
                <li>이름 또는 닉네임</li>
                <li>테스트 응답 데이터</li>
                <li>서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">선택항목</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>생년월일, 성별 (통계 작성 목적)</li>
                <li>전화번호 (고객 지원 목적)</li>
                <li>관심 분야, 직업 정보 (맞춤형 서비스 제공)</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-700 mb-4">
              회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 
              처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 
              해당하는 경우에만 개인정보를 제3자에게 제공합니다.
            </p>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <p className="text-red-800 font-semibold">
                현재 회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
              </p>
              <p className="text-red-700 mt-2">
                향후 제3자 제공이 필요한 경우, 사전에 별도의 동의를 받겠습니다.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 개인정보처리 위탁</h2>
            <p className="text-gray-700 mb-4">
              회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">위탁업체 현황</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">클라우드 서비스 제공</h4>
                  <p className="text-gray-700">수탁업체: AWS (Amazon Web Services)</p>
                  <p className="text-gray-700">위탁업무: 서버 호스팅 및 데이터 저장</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">이메일 발송 서비스</h4>
                  <p className="text-gray-700">수탁업체: SendGrid</p>
                  <p className="text-gray-700">위탁업무: 이메일 알림 및 뉴스레터 발송</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-700 mb-4">
              정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">이용자의 권리</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-1">
                  <li>개인정보 처리현황 통지 요구</li>
                  <li>개인정보 열람 요구</li>
                  <li>개인정보 정정·삭제 요구</li>
                  <li>개인정보 처리정지 요구</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">권리 행사 방법</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>서면, 전화, 이메일을 통한 연락</li>
                  <li>개인정보보호 담당부서로 신청</li>
                  <li>법정대리인을 통한 신청 가능</li>
                  <li>신청 후 지체없이 조치</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 개인정보의 안전성 확보조치</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 
              물리적 조치를 하고 있습니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">기술적 조치</h3>
                <ul className="list-disc list-inside text-purple-800 space-y-1 text-sm">
                  <li>개인정보 암호화</li>
                  <li>해킹 등 대비 기술적 대책</li>
                  <li>개인정보처리시스템 접근 제한</li>
                  <li>접근통제시스템 설치</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">관리적 조치</h3>
                <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                  <li>개인정보 취급 직원 최소화</li>
                  <li>정기적인 직원 교육</li>
                  <li>개인정보 관리책임자 지정</li>
                  <li>내부관리계획 수립·시행</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-900 mb-3">물리적 조치</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1 text-sm">
                  <li>전산실, 자료보관실 출입통제</li>
                  <li>개인정보가 포함된 서류 보관</li>
                  <li>보관시설의 잠금장치 설치</li>
                  <li>CCTV 설치 등 물리적 감시</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 개인정보보호책임자</h2>
            <p className="text-gray-700 mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 
              정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">개인정보보호책임자</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>성명:</strong> 김철수</li>
                    <li><strong>직책:</strong> 정보보호팀장</li>
                    <li><strong>연락처:</strong> 02-1234-5678</li>
                    <li><strong>이메일:</strong> privacy@testevery.com</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">개인정보보호담당자</h3>
                  <ul className="text-gray-700 space-y-1">
                    <li><strong>성명:</strong> 박영희</li>
                    <li><strong>직책:</strong> 개인정보보호 담당자</li>
                    <li><strong>연락처:</strong> 02-1234-5679</li>
                    <li><strong>이메일:</strong> dpo@testevery.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 개인정보 처리방침 변경</h2>
            <p className="text-gray-700 mb-4">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 
              추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 
              고지할 것입니다.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">개정 이력</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• 2024년 12월 25일: 개인정보처리방침 제정</li>
                <li>• 2024년 01월 01일: 쿠키 정책 추가 예정</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-4">개인정보 침해신고센터</h2>
            <p className="text-gray-700 mb-4">
              개인정보 침해신고, 상담처리는 아래의 기관에 문의하시기 바랍니다.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900">개인정보침해신고센터</h3>
                <p className="text-gray-700">(privacy.go.kr)</p>
                <p className="text-gray-700">전화: 국번없이 182</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">개인정보 분쟁조정위원회</h3>
                <p className="text-gray-700">(www.kopico.go.kr)</p>
                <p className="text-gray-700">전화: 국번없이 1833-6972</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900">대검찰청 사이버범죄수사단</h3>
                <p className="text-gray-700">(www.spo.go.kr)</p>
                <p className="text-gray-700">전화: 02-3480-3573</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}