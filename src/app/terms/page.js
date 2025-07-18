export const metadata = {
  title: '이용약관 | TestEvery',
  description: 'TestEvery 서비스 이용약관입니다. 서비스 이용 시 준수해야 할 규정과 이용자의 권리와 의무를 안내합니다.',
  keywords: ['이용약관', '서비스약관', '이용조건', '규정', '약관'],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: '이용약관 | TestEvery',
    description: 'TestEvery 서비스 이용약관입니다.',
    url: 'https://www.testevery.com/terms/',
    type: 'website',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            이용약관
          </h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>시행일자:</strong> 2025년 1월 18일
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제1조 (목적)
            </h2>
            <p className="text-gray-700 mb-6">
              본 약관은 TestEvery(이하 "서비스")가 제공하는 심리테스트 서비스의 이용조건 및 절차에 관한 사항과 
              기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제2조 (정의)
            </h2>
            <p className="text-gray-700 mb-4">
              본 약관에서 사용하는 용어의 정의는 다음과 같습니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li><strong>"서비스"</strong>란 TestEvery가 제공하는 심리테스트 및 관련 서비스를 의미합니다.</li>
              <li><strong>"이용자"</strong>란 본 약관에 따라 서비스를 이용하는 모든 사람을 의미합니다.</li>
              <li><strong>"테스트"</strong>란 서비스를 통해 제공되는 각종 심리테스트를 의미합니다.</li>
              <li><strong>"결과"</strong>란 테스트 완료 후 제공되는 분석 결과를 의미합니다.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제3조 (약관의 효력 및 변경)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 본 약관은 서비스 이용 시점부터 효력이 발생합니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 회사는 합리적인 사유가 발생할 경우 본 약관을 변경할 수 있으며, 
              변경된 약관은 웹사이트에 공지함으로써 효력이 발생합니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 이용자는 변경된 약관에 대해 동의하지 않을 경우 서비스 이용을 중단할 수 있습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제4조 (서비스의 제공)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 서비스는 다음과 같은 내용을 제공합니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>각종 심리테스트 (MBTI, 빅5, 에니어그램 등)</li>
              <li>테스트 결과 분석 및 해석</li>
              <li>심리학 관련 정보 및 블로그</li>
              <li>기타 심리테스트 관련 서비스</li>
            </ul>
            <p className="text-gray-700 mb-6">
              2. 서비스는 연중무휴, 1일 24시간 제공을 원칙으로 하나, 
              시스템 점검 등의 사유로 서비스가 일시 중단될 수 있습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제5조 (서비스 이용)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 서비스 이용은 무료이며, 별도의 회원가입 절차가 없습니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 이용자는 서비스를 이용함에 있어 다음 각 호의 행위를 하여서는 안 됩니다:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>타인의 정보를 도용하거나 허위 정보를 입력하는 행위</li>
              <li>서비스의 안정적 운영을 방해하는 행위</li>
              <li>다른 이용자의 서비스 이용을 방해하는 행위</li>
              <li>서비스를 통해 얻은 정보를 무단으로 복제, 유통, 조작하는 행위</li>
              <li>타인의 개인정보를 수집, 저장, 공개하는 행위</li>
              <li>음란, 저속한 정보를 교류하는 행위</li>
              <li>서비스의 운영을 방해하는 행위</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제6조 (테스트 결과의 활용)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 테스트 결과는 참고용으로만 활용되어야 하며, 의학적 진단이나 
              치료 목적으로 사용되어서는 안 됩니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 정확한 진단이나 상담이 필요한 경우에는 반드시 전문가와 상담하시기 바랍니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 테스트 결과의 정확성에 대해 회사는 보장하지 않으며, 
              결과 활용에 따른 책임은 이용자에게 있습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제7조 (지적재산권)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 서비스에 사용되는 모든 콘텐츠의 지적재산권은 회사에 속합니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 이용자는 서비스를 통해 얻은 정보를 회사의 사전 동의 없이 
              복제, 전송, 출판, 배포, 방송 기타 방법으로 이용하거나 
              제3자에게 이용하게 하여서는 안 됩니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 개인적 이용을 위한 테스트 결과 저장 및 공유는 허용됩니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제8조 (면책조항)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지, 
              정전 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 회사는 이용자의 컴퓨터 오류에 의한 손해나 이용자의 부주의로 
              인한 손해에 대해 책임을 지지 않습니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 회사는 테스트 결과의 활용으로 인한 직·간접적 손해에 대해 
              책임을 지지 않습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제9조 (분쟁 해결)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 서비스 이용과 관련하여 발생한 분쟁은 상호 협의를 통해 해결합니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 협의를 통해 해결되지 않는 분쟁은 대한민국 법률에 따라 
              관할법원에서 해결합니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 서비스 이용과 관련한 분쟁은 민사조정법 및 
              소비자기본법상의 소비자분쟁조정위원회의 조정에 따를 수 있습니다.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              제10조 (기타)
            </h2>
            <p className="text-gray-700 mb-4">
              1. 본 약관은 대한민국 법률에 따라 규율되고 해석됩니다.
            </p>
            <p className="text-gray-700 mb-4">
              2. 본 약관에 명시되지 않은 사항은 관계법령 및 상관례에 따릅니다.
            </p>
            <p className="text-gray-700 mb-6">
              3. 본 약관의 일부 조항이 무효가 되어도 나머지 조항의 효력에는 영향을 미치지 않습니다.
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mt-8">
              <p className="text-blue-800 text-center">
                이용약관에 대한 문의사항이 있으시면 
                <a href="/contact/" className="underline font-medium ml-1">문의하기</a>를 통해 연락해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}