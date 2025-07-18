import './globals.css'

export const metadata = {
  title: 'TestEvery - 심리테스트 플랫폼',
  description: '과학적 기반의 심리테스트와 성격 분석을 제공하는 전문 플랫폼',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="font-korean antialiased">
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">TestEvery</h1>
          </div>
        </nav>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}