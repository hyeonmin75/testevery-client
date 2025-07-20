import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>개인정보처리방침 | 모두의 테스트</title>
        <meta
          name="description"
          content="모두의 테스트의 개인정보처리방침입니다. 이용자의 개인정보 보호를 위한 수집, 이용, 보관, 삭제 등에 관한 정책을 안내합니다."
        />
        <meta property="og:title" content="개인정보처리방침 | 모두의 테스트" />
        <meta property="og:description" content="개인정보 보호를 위한 수집, 이용, 보관 정책을 안내합니다." />
        <meta property="og:url" content="https://testevery.com/privacy" />
        <link rel="canonical" href="https://testevery.com/privacy" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-purple-600">
                🧠 모두의 테스트
              </Link>
              <div className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                  홈
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-purple-600 transition-colors">
                  소개
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
                  문의
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-8">개인정보처리방침</h1>
              
              <div className="prose max-w-none">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                  <h2 className="text-lg font-semibold text-blue-800 mb-2">시행일자: 2024년 1월 1일</h2>
                  <p className="text-blue-700 text-sm">
                    모두의 테스트(이하 '회사')는 이용자의 개인정보를 중요시하며, 
                    「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」을 준수하고 있습니다.
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">1. 개인정보의 처리 목적</h2>
                  <p className="text-gray-600 mb-4">
                    회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 
                    다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 
                    「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <ul className="list-disc ml-6 text-gray-600 space-y-2">
                    <li>심리 테스트 서비스 제공 및 결과 분석</li>
                    <li>회원 가입 및 관리, 서비스 이용에 따른 본인확인</li>
                    <li>교육 프로그램 제공 및 학습 진도 관리</li>
                    <li>서비스 개선 및 새로운 서비스 개발을 위한 통계 분석</li>
                    <li>고객 상담 및 문의 응답</li>
                    <li>마케팅 및 광고에 활용 (동의한 경우에 한함)</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">2. 개인정보의 처리 및 보유기간</h2>
                  <p className="text-gray-600 mb-4">
                    회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 
                    수집시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">구체적인 보유기간</h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-1">
                      <li>회원정보: 회원탈퇴 시까지 (단, 관계법령에 따라 별도 보관 필요시 해당 기간)</li>
                      <li>테스트 결과: 3년 (통계 분석 및 서비스 개선 목적)</li>
                      <li>상담 내용: 3년 (분쟁 해결 및 서비스 개선 목적)</li>
                      <li>접속 로그: 3개월 (정보통신망법에 따른 의무 보관)</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">3. 처리하는 개인정보의 항목</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <h3 className="font-semibold text-purple-800 mb-2">필수 정보</h3>
                      <ul className="list-disc ml-6 text-purple-700 space-y-1 text-sm">
                        <li>이메일 주소</li>
                        <li>비밀번호 (암호화 저장)</li>
                        <li>닉네임</li>
                        <li>생년월일</li>
                        <li>성별</li>
                        <li>테스트 응답 내용</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">선택 정보</h3>
                      <ul className="list-disc ml-6 text-blue-700 space-y-1 text-sm">
                        <li>전화번호</li>
                        <li>직업</li>
                        <li>관심 분야</li>
                        <li>마케팅 정보 수신 동의</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 bg-green-50 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">자동 수집 정보</h3>
                    <ul className="list-disc ml-6 text-green-700 space-y-1 text-sm">
                      <li>IP 주소, 쿠키, 방문 일시</li>
                      <li>서비스 이용 기록, 접속 로그</li>
                      <li>기기 정보 (OS, 브라우저 종류 등)</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">4. 개인정보의 제3자 제공</h2>
                  <p className="text-gray-600 mb-4">
                    회사는 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 
                    정보주체의 동의, 법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에 해당하는 
                    경우에만 개인정보를 제3자에게 제공합니다.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-semibold">
                      현재 회사는 이용자의 개인정보를 제3자에게 제공하지 않습니다.
                    </p>
                    <p className="text-yellow-700 text-sm mt-2">
                      향후 제3자 제공이 필요한 경우, 사전에 동의를 받고 관련 내용을 공지하겠습니다.
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">5. 개인정보처리의 위탁</h2>
                  <p className="text-gray-600 mb-4">
                    회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-2 border-b text-left text-gray-800">수탁업체</th>
                          <th className="px-4 py-2 border-b text-left text-gray-800">위탁업무</th>
                          <th className="px-4 py-2 border-b text-left text-gray-800">보유기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 border-b text-gray-600">AWS(Amazon Web Services)</td>
                          <td className="px-4 py-2 border-b text-gray-600">클라우드 서버 및 데이터 저장</td>
                          <td className="px-4 py-2 border-b text-gray-600">위탁계약 종료시까지</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 border-b text-gray-600">SendGrid</td>
                          <td className="px-4 py-2 border-b text-gray-600">이메일 발송 서비스</td>
                          <td className="px-4 py-2 border-b text-gray-600">발송 완료 후 즉시 삭제</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
                  <p className="text-gray-600 mb-4">
                    정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">권리 종류</h3>
                      <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm">
                        <li>개인정보 처리현황 통지 요구</li>
                        <li>개인정보 열람 요구</li>
                        <li>개인정보 정정·삭제 요구</li>
                        <li>개인정보 처리정지 요구</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-gray-800 mb-2">행사 방법</h3>
                      <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm">
                        <li>이메일: privacy@testevery.com</li>
                        <li>전화: 02-1234-5678</li>
                        <li>온라인: 마이페이지 개인정보 관리</li>
                        <li>우편: 서울시 강남구 테헤란로 123</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">7. 개인정보의 안전성 확보조치</h2>
                  <p className="text-gray-600 mb-4">
                    회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">기술적 조치</h3>
                      <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm">
                        <li>개인정보처리시스템 등의 접근권한 관리</li>
                        <li>접근통제시스템 설치 및 운영</li>
                        <li>개인정보의 암호화</li>
                        <li>보안프로그램 설치 및 갱신</li>
                        <li>개인정보처리시스템 접속기록 보관 및 위변조 방지</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">관리적 조치</h3>
                      <ul className="list-disc ml-6 text-gray-600 space-y-1 text-sm">
                        <li>개인정보 취급직원의 최소화 및 교육</li>
                        <li>개인정보 보호책임자 등의 지정</li>
                        <li>내부관리계획의 수립 및 시행</li>
                        <li>정기적인 자체 감사 실시</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">8. 개인정보 보호책임자</h2>
                  <div className="bg-purple-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-purple-800 mb-2">개인정보 보호책임자</h3>
                        <ul className="text-purple-700 space-y-1 text-sm">
                          <li>성명: 김보호</li>
                          <li>직책: 개인정보보호팀장</li>
                          <li>연락처: 02-1234-5679</li>
                          <li>이메일: privacy@testevery.com</li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-purple-800 mb-2">개인정보 보호담당자</h3>
                        <ul className="text-purple-700 space-y-1 text-sm">
                          <li>성명: 이담당</li>
                          <li>직책: 개인정보보호팀 대리</li>
                          <li>연락처: 02-1234-5680</li>
                          <li>이메일: privacy-support@testevery.com</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">9. 개인정보 처리방침의 변경</h2>
                  <p className="text-gray-600 mb-4">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 
                    추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">개인정보처리방침 버전 이력</h3>
                    <ul className="text-gray-600 space-y-1 text-sm">
                      <li>• 2024.01.01: 개인정보처리방침 최초 제정</li>
                      <li>• 향후 변경사항은 이 곳에 업데이트됩니다.</li>
                    </ul>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">10. 개인정보의 열람청구</h2>
                  <p className="text-gray-600 mb-4">
                    정보주체는 「개인정보 보호법」 제35조에 따른 개인정보의 열람 청구를 
                    아래의 부서에 할 수 있습니다. 회사는 정보주체의 개인정보 열람청구가 
                    신속하게 처리되도록 노력하겠습니다.
                  </p>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">개인정보 열람청구 접수 및 처리부서</h3>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>부서명: 개인정보보호팀</li>
                      <li>담당자: 이담당</li>
                      <li>연락처: 02-1234-5680</li>
                      <li>이메일: privacy-support@testevery.com</li>
                    </ul>
                  </div>
                </section>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="font-semibold text-red-800 mb-2">권익침해 구제방법</h3>
                  <p className="text-red-700 text-sm mb-3">
                    정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 
                    개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                  </p>
                  <ul className="text-red-700 space-y-1 text-sm">
                    <li>• 개인정보분쟁조정위원회: privacy.go.kr / 1833-6972</li>
                    <li>• 개인정보침해신고센터: privacy.korea.kr / 국번없이 182</li>
                    <li>• 대검찰청: spo.go.kr / 국번없이 1301</li>
                    <li>• 경찰청: cyberbureau.police.go.kr / 국번없이 182</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">모두의 테스트</h4>
                <p className="text-gray-300 text-sm">
                  과학적 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼입니다.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">서비스</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/tests" className="hover:text-white transition-colors">심리 테스트</Link></li>
                  <li><Link href="/education" className="hover:text-white transition-colors">교육 과정</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">연구 자료</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">정보</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><Link href="/about" className="hover:text-white transition-colors">소개</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition-colors">문의</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold mb-4">연락처</h4>
                <div className="text-gray-300 text-sm">
                  <p>이메일: info@testevery.com</p>
                  <p>전화: 02-1234-5678</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
              <p>&copy; 2024 모두의 테스트. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}