export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        TestEvery - 심리테스트 플랫폼
      </h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">MBTI 성격 유형 검사</h2>
          <p className="text-gray-600">16가지 성격 유형을 통해 자신의 성격을 알아보세요.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">빅5 성격 검사</h2>
          <p className="text-gray-600">5가지 주요 성격 차원으로 성격을 분석합니다.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">창의력 검사</h2>
          <p className="text-gray-600">당신의 창의적 사고 능력을 측정해보세요.</p>
        </div>
      </div>
    </div>
  )
}