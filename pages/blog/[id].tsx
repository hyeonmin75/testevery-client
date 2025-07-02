import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { GetStaticProps, GetStaticPaths } from 'next'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  tags: string[]
}

interface BlogPostPageProps {
  post: BlogPost
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title} | 심리학 교육센터 블로그</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://testevery.com/blog/${post.id}`} />
        <meta name="article:published_time" content={post.date} />
        <meta name="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} name="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://testevery.com/blog/${post.id}`} />
        
        {/* JSON-LD 구조화 데이터 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": post.title,
              "description": post.excerpt,
              "author": {
                "@type": "Organization",
                "name": "심리학 교육센터"
              },
              "publisher": {
                "@type": "Organization",
                "name": "심리학 교육센터",
                "url": "https://testevery.com"
              },
              "datePublished": post.date,
              "dateModified": post.date,
              "articleSection": post.category,
              "keywords": post.tags.join(', '),
              "url": `https://testevery.com/blog/${post.id}`
            })
          }}
        />
      </Head>

      <article className="max-w-4xl mx-auto">
        {/* 브레드크럼 */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-gray-700">홈</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-gray-700">블로그</Link></li>
            <li>/</li>
            <li className="text-gray-900">{post.title}</li>
          </ol>
        </nav>

        {/* 포스트 헤더 */}
        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
            <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {/* 광고 위치 (승인 후 활성화) */}
        <div className="adsense-inline mb-8">
          {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567894" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
        </div>

        {/* 포스트 내용 */}
        <div className="prose prose-lg max-w-none">
          {getPostContent(post.id)}
        </div>

        {/* 광고 위치 (승인 후 활성화) */}
        <div className="adsense-inline my-8">
          {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567895" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
        </div>

        {/* 태그 */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            <span className="text-gray-700 font-medium">태그:</span>
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* 관련 글 추천 */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">관련 글 더 보기</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/blog/psychology-basics" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  심리학 기초 이론 완전 정복
                </h4>
                <p className="text-gray-600 text-sm">심리학의 주요 이론들과 연구 방법론에 대한 종합적인 가이드</p>
              </div>
            </Link>
            <Link href="/blog/personality-development" className="group">
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 mb-2">
                  성격 발달과 환경의 영향
                </h4>
                <p className="text-gray-600 text-sm">유전적 요인과 환경적 요인이 성격 발달에 미치는 영향</p>
              </div>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  )
}

// 포스트별 상세 내용을 반환하는 함수
function getPostContent(postId: string) {
  const content: Record<string, JSX.Element> = {
    'psychology-basics': (
      <div>
        <h2>심리학의 정의와 역사</h2>
        <p>
          심리학(Psychology)은 인간과 동물의 마음과 행동을 과학적으로 연구하는 학문입니다. 
          1879년 빌헬름 분트(Wilhelm Wundt)가 라이프치히에 최초의 심리학 실험실을 설립하면서 
          독립적인 과학 분야로 자리잡았습니다.
        </p>
        
        <h3>주요 심리학 이론과 학파</h3>
        
        <h4>1. 구조주의 (Structuralism)</h4>
        <p>
          에드워드 티치너(Edward Titchener)가 발전시킨 구조주의는 의식의 기본 구조를 분석하려 했습니다. 
          내성법(introspection)을 통해 감각, 감정, 이미지 등의 정신적 요소들을 파악하고자 했습니다.
        </p>
        
        <h4>2. 기능주의 (Functionalism)</h4>
        <p>
          윌리엄 제임스(William James)가 주도한 기능주의는 의식의 구조보다는 기능에 초점을 맞췄습니다. 
          적응과 생존에 도움이 되는 정신적 과정들의 역할을 중시했습니다.
        </p>
        
        <h4>3. 행동주의 (Behaviorism)</h4>
        <p>
          존 왓슨(John Watson)과 B.F. 스키너(B.F. Skinner)로 대표되는 행동주의는 관찰 가능한 
          행동에만 집중했습니다. 고전적 조건화와 조작적 조건화 이론을 통해 학습 과정을 설명했습니다.
        </p>
        
        <h4>4. 인지주의 (Cognitivism)</h4>
        <p>
          1950년대 인지혁명 이후 등장한 인지주의는 정보 처리 관점에서 마음을 연구합니다. 
          기억, 주의, 언어, 문제해결 등의 인지 과정을 컴퓨터 모델과 비교하여 분석합니다.
        </p>
        
        <h3>현대 심리학의 연구 방법</h3>
        <p>
          현대 심리학은 다양한 과학적 연구 방법을 사용합니다:
        </p>
        <ul>
          <li><strong>실험 연구:</strong> 통제된 조건에서 변인들 간의 인과관계를 규명</li>
          <li><strong>관찰 연구:</strong> 자연스러운 환경에서 행동을 체계적으로 관찰</li>
          <li><strong>설문 조사:</strong> 대규모 집단의 태도, 의견, 행동 패턴을 조사</li>
          <li><strong>사례 연구:</strong> 특정 개인이나 집단을 심층적으로 분석</li>
          <li><strong>뇌영상 기법:</strong> fMRI, EEG 등을 통한 뇌 활동 측정</li>
        </ul>
        
        <h3>심리학의 실생활 적용</h3>
        <p>
          심리학 연구 결과는 다양한 분야에서 활용됩니다:
        </p>
        <ul>
          <li>교육: 효과적인 학습 방법과 교수법 개발</li>
          <li>치료: 정신건강 문제의 진단과 치료</li>
          <li>마케팅: 소비자 행동 분석과 광고 전략</li>
          <li>인사관리: 직원 선발과 조직 관리</li>
          <li>설계: 사용자 친화적인 제품과 인터페이스 개발</li>
        </ul>
      </div>
    ),
    'personality-development': (
      <div>
        <h2>성격 발달의 기본 원리</h2>
        <p>
          인간의 성격은 유전적 요인과 환경적 요인의 복합적 상호작용을 통해 형성됩니다. 
          이는 심리학의 오랜 논쟁 주제인 '유전 vs 환경(Nature vs Nurture)' 문제의 핵심이기도 합니다.
        </p>
        
        <h3>유전적 요인의 영향</h3>
        
        <h4>쌍둥이 연구의 중요성</h4>
        <p>
          일란성 쌍둥이와 이란성 쌍둥이를 비교한 연구들은 성격의 유전적 기반을 밝혀왔습니다. 
          미네소타 쌍둥이 연구(Minnesota Twin Study)에 따르면, 주요 성격 특성들의 유전율은 
          약 40-60%에 이릅니다.
        </p>
        
        <h4>기질(Temperament)과 성격</h4>
        <p>
          토마스와 체스(Thomas & Chess)는 영아기부터 나타나는 기질적 차이를 발견했습니다:
        </p>
        <ul>
          <li><strong>순한 아이(Easy child):</strong> 규칙적이고 적응력이 좋음</li>
          <li><strong>까다로운 아이(Difficult child):</strong> 불규칙적이고 예민함</li>
          <li><strong>느린 아이(Slow-to-warm-up child):</strong> 새로운 상황에 천천히 적응</li>
        </ul>
        
        <h3>환경적 요인의 영향</h3>
        
        <h4>가족 환경</h4>
        <p>
          부모의 양육 방식은 아이의 성격 발달에 결정적 영향을 미칩니다. 
          바움린드(Baumrind)의 양육 스타일 분류:
        </p>
        <ul>
          <li><strong>권위적 양육:</strong> 따뜻함과 통제의 균형 - 가장 긍정적 결과</li>
          <li><strong>권위주의적 양육:</strong> 높은 통제, 낮은 반응성</li>
          <li><strong>허용적 양육:</strong> 높은 반응성, 낮은 통제</li>
          <li><strong>방임적 양육:</strong> 낮은 통제와 반응성</li>
        </ul>
        
        <h4>사회문화적 환경</h4>
        <p>
          문화적 배경, 사회경제적 지위, 또래 집단 등이 성격 발달에 영향을 미칩니다. 
          집단주의 문화와 개인주의 문화에서 자라는 아이들은 서로 다른 성격적 특성을 보입니다.
        </p>
        
        <h3>후성유전학(Epigenetics)의 새로운 발견</h3>
        <p>
          최근 후성유전학 연구는 환경이 유전자 발현에 영향을 미칠 수 있음을 보여줍니다. 
          스트레스, 영양, 사회적 경험 등이 DNA 메틸화를 통해 유전자 활동을 조절합니다.
        </p>
        
        <h4>주요 연구 사례</h4>
        <ul>
          <li><strong>홀로코스트 생존자 연구:</strong> 트라우마가 후손에게 전달되는 메커니즘</li>
          <li><strong>네덜란드 기근 연구:</strong> 산전 영양 상태가 평생에 걸친 건강에 미치는 영향</li>
          <li><strong>쥐 양육 실험:</strong> 어미의 핥기 행동이 새끼의 스트레스 반응에 미치는 영향</li>
        </ul>
        
        <h3>성격 발달의 생애주기적 관점</h3>
        
        <h4>에릭슨의 심리사회적 발달 단계</h4>
        <p>
          에릭 에릭슨은 전 생애에 걸친 8단계 발달 이론을 제시했습니다:
        </p>
        <ol>
          <li>신뢰 vs 불신 (0-1세)</li>
          <li>자율성 vs 수치심 (1-3세)</li>
          <li>주도성 vs 죄책감 (3-5세)</li>
          <li>근면성 vs 열등감 (5-12세)</li>
          <li>정체감 vs 역할 혼미 (12-18세)</li>
          <li>친밀감 vs 고립 (18-40세)</li>
          <li>생산성 vs 침체 (40-65세)</li>
          <li>통합성 vs 절망 (65세 이후)</li>
        </ol>
        
        <h3>성격 변화의 가능성</h3>
        <p>
          과거에는 성격이 고정불변이라 여겨졌지만, 현대 연구는 성인기에도 성격 변화가 
          가능함을 보여줍니다. 의도적 노력, 치료, 중요한 생활 사건 등이 성격 변화를 
          촉진할 수 있습니다.
        </p>
      </div>
    ),
    // 다른 포스트들의 내용을 여기에 추가...
  }

  return content[postId] || (
    <div>
      <p>이 글의 상세 내용이 준비 중입니다. 곧 업데이트될 예정입니다.</p>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  // 모든 블로그 포스트 ID를 가져와서 경로 생성
  const postIds = [
    'psychology-basics',
    'personality-development', 
    'cognitive-psychology-applications',
    'social-psychology-relationships',
    'stress-management-psychology',
    'mbti-scientific-analysis',
    'positive-psychology-wellbeing',
    'neuroscience-psychology-connection',
    'child-development-psychology',
    'psychological-research-methods'
  ]

  const paths = postIds.map((id) => ({
    params: { id }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: Record<string, BlogPost> = {
    'psychology-basics': {
      id: 'psychology-basics',
      title: '심리학 기초 이론 완전 정복 가이드',
      excerpt: '심리학의 주요 이론들과 연구 방법론에 대한 종합적인 가이드입니다. 행동주의부터 인지주의까지, 심리학의 핵심 이론들을 체계적으로 정리했습니다.',
      content: '',
      date: '2024-12-20',
      category: '기초 이론',
      readTime: '12분 읽기',
      tags: ['심리학기초', '이론', '연구방법론', '행동주의', '인지주의']
    },
    'personality-development': {
      id: 'personality-development',
      title: '성격 발달과 환경의 영향: 유전 vs 환경 논쟁',
      excerpt: '인간의 성격이 어떻게 형성되고 발달하는지, 유전적 요인과 환경적 요인이 미치는 영향을 과학적으로 분석합니다.',
      content: '',
      date: '2024-12-18',
      category: '발달 심리학',
      readTime: '15분 읽기',
      tags: ['성격발달', '유전', '환경', '후성유전학', '쌍둥이연구']
    }
    // 추가 포스트들...
  }

  const post = posts[params?.id as string]

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    },
    revalidate: 86400
  }
}