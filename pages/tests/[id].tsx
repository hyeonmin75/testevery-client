import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Test, TestQuestion, calculateTestResult, generateSEOMeta, trackEvent } from '../../utils/testUtils'
import testsData from '../../data/tests.json'

interface TestPageProps {
  test: Test
}

export default function TestPage({ test }: TestPageProps) {
  const router = useRouter()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [isStarted, setIsStarted] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  const seoMeta = generateSEOMeta(test)
  const progress = ((currentQuestion + 1) / test.questions.length) * 100

  const handleStart = () => {
    setIsStarted(true)
    trackEvent('test_started', { test_id: test.id, test_title: test.title })
  }

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex)
  }

  const handleNext = () => {
    if (selectedOption === null) return

    const newAnswers = [...answers, selectedOption]
    setAnswers(newAnswers)
    setSelectedOption(null)

    trackEvent('question_answered', {
      test_id: test.id,
      question_number: currentQuestion + 1,
      total_questions: test.questions.length
    })

    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      // 테스트 완료 - 결과 계산 및 페이지 이동
      const resultKey = calculateTestResult(test.questions, newAnswers)
      trackEvent('test_completed', {
        test_id: test.id,
        result: resultKey,
        total_time: Date.now() // 실제로는 시작 시간과의 차이를 계산
      })
      router.push(`/tests/${test.id}/result/${resultKey}`)
    }
  }

  if (!isStarted) {
    return (
      <>
        <Head>
          <title>{seoMeta.title}</title>
          <meta name="description" content={seoMeta.description} />
          <meta name="keywords" content={seoMeta.keywords} />
          <meta property="og:title" content={seoMeta.ogTitle} />
          <meta property="og:description" content={seoMeta.ogDescription} />
          <meta property="og:image" content={seoMeta.ogImage} />
          <meta property="og:url" content={seoMeta.url} />
          <link rel="canonical" href={seoMeta.url} />
        </Head>

        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* 테스트 소개 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
              {/* 이모지 */}
              <div className="text-8xl mb-6 animate-float">
                {test.emoji}
              </div>
              
              {/* 제목과 설명 */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {test.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {test.description}
              </p>
              
              {/* 테스트 정보 */}
              <div className="flex justify-center space-x-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-threads-600">
                    {test.questions.length}
                  </div>
                  <div className="text-sm text-gray-500">문항</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-threads-600">
                    {test.estimatedTime}
                  </div>
                  <div className="text-sm text-gray-500">소요시간</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-threads-600">
                    {test.popularity}%
                  </div>
                  <div className="text-sm text-gray-500">참여율</div>
                </div>
              </div>
              
              {/* 시작 버튼 */}
              <button
                onClick={handleStart}
                className="btn-touch w-full md:w-auto px-12 py-4 bg-threads-600 text-white rounded-2xl font-bold text-lg hover:bg-threads-700 transition-all duration-200 transform hover:scale-105 gradient-threads"
              >
                테스트 시작하기 🚀
              </button>
            </div>
            
            {/* 광고 */}
            <div className="adsense-banner">
              <p className="text-gray-400 text-sm">광고</p>
            </div>
          </div>
        </div>
      </>
    )
  }

  const currentQ = test.questions[currentQuestion]

  return (
    <>
      <Head>
        <title>{`${currentQuestion + 1}/${test.questions.length} - ${test.title}`}</title>
        <meta name="description" content={`${test.title} 진행 중 - ${currentQuestion + 1}번째 문항`} />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* 진행 바 */}
        <div className="w-full bg-gray-200 h-2">
          <div 
            className="bg-gradient-to-r from-threads-600 to-primary-600 h-2 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* 질문 영역 */}
        <div className="flex items-center justify-center min-h-[calc(100vh-8px)] px-4 py-8">
          <div className="max-w-2xl mx-auto w-full">
            {/* 진행 표시 */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-gray-600">
                {currentQuestion + 1} / {test.questions.length}
              </span>
            </div>
            
            {/* 질문 카드 */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center leading-relaxed">
                {currentQ.text}
              </h2>
              
              {/* 선택지 */}
              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    className={`btn-touch w-full p-6 rounded-2xl text-left transition-all duration-200 transform hover:scale-[1.02] ${
                      selectedOption === index
                        ? 'bg-threads-600 text-white shadow-lg scale-[1.02]'
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900 hover:shadow-md'
                    }`}
                  >
                    <span className="font-medium text-lg leading-relaxed">
                      {option.text}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            {/* 다음 버튼 */}
            <div className="text-center">
              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`btn-touch px-12 py-4 rounded-2xl font-bold text-lg transition-all duration-200 ${
                  selectedOption === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-threads-600 text-white hover:bg-threads-700 transform hover:scale-105 gradient-threads'
                }`}
              >
                {currentQuestion === test.questions.length - 1 ? '결과 보기 🎉' : '다음 →'}
              </button>
            </div>
            
            {/* 광고 (중간 문항에서만) */}
            {currentQuestion === Math.floor(test.questions.length / 2) && (
              <div className="adsense-inline mt-8">
                <p className="text-gray-400 text-sm">광고</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const tests: Test[] = Object.values(testsData)
  const paths = tests.map(test => ({
    params: { id: test.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<TestPageProps> = async ({ params }) => {
  const testId = params?.id as string
  const test = testsData[testId as keyof typeof testsData] as Test

  if (!test) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      test
    }
  }
}