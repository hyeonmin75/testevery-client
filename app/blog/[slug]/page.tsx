import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Blog posts data with full content
const blogPosts = {
  'psychology-research-methods': {
    id: 'psychology-research-methods',
    title: '심리학 연구 방법론: 과학적 접근법과 측정 도구의 이해',
    excerpt: '심리학 연구의 과학적 방법론과 신뢰할 수 있는 측정 도구 개발 과정을 상세히 분석합니다.',
    date: '2024-12-07',
    category: '연구 방법론',
    readTime: '12분',
    author: '모두의 테스트 연구팀',
    tags: ['연구방법론', '심리측정', '실험설계', '통계분석'],
    content: `
심리학은 인간의 마음과 행동을 과학적으로 연구하는 학문입니다. 신뢰할 수 있는 연구 결과를 얻기 위해서는 엄격한 방법론적 접근이 필요합니다.

## 심리학 연구의 과학적 원칙

### 실증주의 접근법
심리학 연구는 관찰 가능하고 측정 가능한 현상에 초점을 맞춥니다. 주관적 경험도 객관적 방법으로 측정하여 과학적 타당성을 확보합니다.

### 재현가능성(Reproducibility)
연구 결과는 다른 연구자들이 동일한 조건에서 반복 실험을 통해 검증할 수 있어야 합니다. 이는 과학적 지식의 누적을 가능하게 합니다.

### 통제의 원리
연구에서 종속변수에 영향을 미칠 수 있는 외부 변인들을 통제하여 독립변수의 순수한 효과를 파악합니다.

## 연구 설계의 유형과 특징

### 실험 연구(Experimental Research)

**무선할당(Random Assignment)**: 참가자들을 실험 조건에 무작위로 배정하여 집단 간 동등성을 확보합니다. 이는 인과관계 추론의 핵심입니다.

**통제집단과 실험집단**: 실험집단은 처치를 받고, 통제집단은 처치를 받지 않아 순수한 처치 효과를 측정할 수 있습니다.

### 관찰 연구(Observational Research)

**자연주의적 관찰**: 자연스러운 환경에서 행동을 관찰하여 생태학적 타당도를 높입니다. 실험실 연구의 한계를 보완할 수 있습니다.

**참여관찰**: 연구자가 연구 대상 집단에 직접 참여하여 내부 관점에서 현상을 이해합니다.

## 심리측정학의 핵심 개념

### 신뢰도(Reliability)
측정 도구가 일관되게 같은 결과를 산출하는 정도를 의미합니다.

- **검사-재검사 신뢰도**: 동일한 검사를 시간 간격을 두고 실시했을 때의 일관성
- **내적 일관성**: 검사 문항들 간의 상관관계 정도
- **평가자 간 신뢰도**: 서로 다른 평가자들 간의 평가 일치도

### 타당도(Validity)
측정 도구가 측정하고자 하는 것을 실제로 측정하는 정도입니다.

- **내용 타당도**: 검사가 측정 영역을 적절히 대표하는 정도
- **구성 타당도**: 이론적 구성개념을 적절히 측정하는 정도
- **준거 타당도**: 외부 준거와의 상관관계 정도

## 윤리적 고려사항

심리학 연구에서는 참가자의 권리와 복지를 최우선으로 고려해야 합니다.

### 사전 동의(Informed Consent)
참가자는 연구의 목적, 절차, 위험성에 대해 충분히 설명을 듣고 자발적으로 참여 여부를 결정해야 합니다.

### 비밀보장
참가자의 개인정보와 연구 데이터는 엄격히 보호되어야 하며, 연구 결과 발표 시에도 개인을 식별할 수 없도록 해야 합니다.

### 사후 설명(Debriefing)
연구 종료 후 참가자에게 연구의 실제 목적과 결과를 설명하고, 필요시 상담이나 치료를 제공해야 합니다.

## 통계 분석의 중요성

### 기술 통계
데이터의 중심경향성(평균, 중앙값)과 변산성(표준편차, 분산)을 파악하여 데이터의 특성을 요약합니다.

### 추리 통계
표본 데이터를 바탕으로 모집단에 대한 추론을 실시합니다. t-검정, 분산분석, 회귀분석 등이 주요 방법입니다.

### 효과 크기
통계적 유의성과 함께 실질적 의미를 평가하기 위해 효과 크기를 보고해야 합니다.

## 결론

심리학 연구는 과학적 방법론을 통해 인간의 복잡한 심리 현상을 체계적으로 탐구합니다. 엄격한 연구 설계, 신뢰할 수 있는 측정 도구, 적절한 통계 분석, 그리고 윤리적 고려사항을 모두 충족할 때 비로소 가치 있는 연구 결과를 얻을 수 있습니다.
    `
  },
  'concentration-focus-psychology': {
    id: 'concentration-focus-psychology',
    title: '집중력과 주의력의 심리학: 디지털 시대의 인지적 도전과 해결책',
    excerpt: '현대 디지털 환경에서 집중력의 중요성과 주의력 향상을 위한 과학적 방법들을 제시합니다.',
    date: '2024-11-20',
    category: '인지 심리학',
    readTime: '15분',
    author: '모두의 테스트 연구팀',
    tags: ['집중력', '주의력', '디지털디톡스', '인지훈련'],
    content: `
현대 사회에서 집중력은 학업과 업무 성과를 좌우하는 핵심 인지 능력입니다. 디지털 기술의 발달로 인해 우리의 주의력은 끊임없이 분산되고 있으며, 이는 심각한 사회적 문제로 대두되고 있습니다.

## 집중력의 신경과학적 기전

### 주의 네트워크
뇌에는 세 가지 주요 주의 네트워크가 존재합니다:

1. **경고 네트워크(Alerting Network)**: 각성 상태를 유지하고 자극에 대한 준비 상태를 조절
2. **지향 네트워크(Orienting Network)**: 특정 위치나 감각 양식에 주의를 집중
3. **실행 네트워크(Executive Network)**: 갈등 상황에서 주의를 조절하고 인지적 통제를 실행

### 전전두피질의 역할
전전두피질(Prefrontal Cortex)은 집중력과 인지적 통제의 중심 역할을 담당합니다. 이 영역의 발달은 청소년기까지 지속되며, 개인차가 크게 나타납니다.

## 디지털 시대의 집중력 위기

### 멀티태스킹의 신화
많은 사람들이 멀티태스킹이 효율적이라고 믿지만, 연구 결과는 정반대입니다. 인간의 뇌는 동시에 여러 과제를 처리하는 것이 아니라 빠르게 전환하는 것이며, 이 과정에서 상당한 인지적 비용이 발생합니다.

### 디지털 기기의 영향
스마트폰, 소셜미디어, 알림 등은 우리의 주의력을 끊임없이 분산시킵니다. 연구에 따르면 평균적으로 11분마다 업무가 중단되며, 원래 과제로 돌아가는 데 평균 23분이 소요됩니다.

### 주의력 잔여(Attention Residue)
한 과제에서 다른 과제로 전환할 때, 이전 과제에 대한 주의의 일부가 남아있게 되어 새로운 과제의 수행을 방해합니다.

## 집중력 향상을 위한 과학적 방법

### 1. 마음챙김 명상(Mindfulness Meditation)

**정의**: 현재 순간에 의도적으로 주의를 기울이는 연습

**효과**:
- 지속적 주의력 향상
- 인지적 유연성 증대
- 감정 조절 능력 강화

**실천 방법**:
- 호흡에 집중하는 기본 명상 (하루 10-20분)
- 걷기 명상
- 바디스캔 명상

### 2. 포모도로 기법(Pomodoro Technique)

**원리**: 25분 집중 + 5분 휴식의 주기를 반복

**과학적 근거**:
- 울트라디안 리듬(90-120분 주기)을 고려한 설계
- 인지적 피로 예방
- 내재적 동기 향상

### 3. 인지 훈련(Cognitive Training)

**작업 기억 훈련**: N-back 과제, 듀얼 N-back 등을 통한 작업 기억 용량 확장

**주의 훈련**: 
- 주의망 훈련(Attention Network Training)
- 갈등 모니터링 과제
- 스트루프 과제 변형

### 4. 환경 최적화

**물리적 환경**:
- 적절한 조명 (자연광 선호)
- 온도 조절 (18-22°C)
- 소음 차단 또는 백색소음 활용

**디지털 환경**:
- 알림 차단
- 단일 화면 사용
- 방해 요소 제거

## 개인차를 고려한 맞춤형 접근

### 연령별 특성
- **아동·청소년**: 전전두피질 발달 과정에 있어 외부 구조화 필요
- **성인**: 개인의 생체리듬과 선호도 고려
- **노인**: 인지적 예비능력 감소를 고려한 점진적 훈련

### 성격적 특성
- **내향성/외향성**: 자극 민감도 차이 고려
- **성실성**: 자기조절 능력과 연관
- **신경증적 경향**: 스트레스 관리와 연계

## 장기적 관점에서의 집중력 관리

### 생활습관의 중요성

**수면**: 충분한 수면(7-9시간)은 주의력 회복에 필수적

**운동**: 유산소 운동은 BDNF(뇌유래신경영양인자) 분비를 촉진하여 인지 기능 향상

**영양**: 오메가-3 지방산, 항산화 물질 등은 뇌 건강에 도움

### 스트레스 관리
만성 스트레스는 코르티솔 분비를 증가시켜 집중력을 저해합니다. 효과적인 스트레스 관리 전략이 필요합니다.

## 미래 전망과 기술의 활용

### 뉴로피드백
실시간 뇌파 모니터링을 통한 집중력 훈련이 발전하고 있습니다.

### AI 기반 개인화
개인의 집중력 패턴을 분석하여 최적의 훈련 프로그램을 제공하는 기술이 개발되고 있습니다.

### 가상현실(VR) 활용
몰입감 있는 환경에서의 집중력 훈련이 새로운 대안으로 주목받고 있습니다.

## 결론

집중력은 현대 사회에서 성공을 위한 필수 역량입니다. 과학적으로 검증된 방법들을 체계적으로 적용하고, 개인의 특성을 고려한 맞춤형 접근을 통해 효과적으로 향상시킬 수 있습니다. 

디지털 기술의 발달로 인한 도전에 대응하기 위해서는 개인적 노력과 함께 사회적 차원의 인식 개선과 환경 조성이 필요합니다. 지속적인 연구와 기술 발전을 통해 더욱 효과적인 집중력 향상 방법들이 개발될 것으로 기대됩니다.
    `
  }
}

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]
  
  if (!post) {
    return {
      title: '게시글을 찾을 수 없습니다 | 모두의 테스트',
    }
  }

  return {
    title: `${post.title} | 모두의 테스트 블로그`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.testevery.com/blog/${post.id}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `https://www.testevery.com/blog/${post.id}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            홈
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            블로그
          </Link>
          <span className="mx-2 text-gray-500">/</span>
          <span className="text-gray-700">{post.title}</span>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-2xl p-8 shadow-lg mb-8">
          <header className="mb-8">
            <div className="mb-4">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <span>작성자: {post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('ko-KR')}</span>
              <span>⏱️ {post.readTime}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </div>
        </article>

        {/* Navigation */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex gap-4 justify-center">
            <Link
              href="/blog"
              className="bg-gray-100 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-200"
            >
              ← 블로그 목록으로
            </Link>
            <Link
              href="/"
              className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              심리테스트 하기
            </Link>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://www.testevery.com/blog/${post.id}`,
            "datePublished": post.date,
            "dateModified": post.date,
            "author": {
              "@type": "Organization",
              "name": post.author,
              "url": "https://www.testevery.com"
            },
            "publisher": {
              "@type": "Organization",
              "name": "모두의 테스트",
              "url": "https://www.testevery.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.testevery.com/logo.png"
              }
            },
            "keywords": post.tags.join(", "),
            "wordCount": post.content.length,
            "timeRequired": post.readTime,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "홈",
                  "item": "https://www.testevery.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "블로그",
                  "item": "https://www.testevery.com/blog"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": `https://www.testevery.com/blog/${post.id}`
                }
              ]
            }
          })
        }}
      />
    </main>
  )
}