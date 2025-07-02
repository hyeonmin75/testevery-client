import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/Layout'
import { GetStaticProps } from 'next'

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

interface BlogIndexProps {
  posts: BlogPost[]
}

export default function BlogIndex({ posts }: BlogIndexProps) {
  return (
    <Layout>
      <Head>
        <title>심리학 블로그 | 최신 연구와 이론 - 심리학 교육센터</title>
        <meta
          name="description"
          content="심리학 전문가들이 작성한 최신 연구 동향, 이론 해설, 실생활 적용법을 다루는 전문 블로그입니다. 심리학의 모든 분야를 체계적으로 학습하세요."
        />
        <meta
          name="keywords"
          content="심리학블로그, 심리학연구, 성격심리학, 인지심리학, 사회심리학, 발달심리학, 임상심리학, 심리학이론, 심리학뉴스"
        />
        <meta property="og:title" content="심리학 블로그 | 최신 연구와 이론" />
        <meta property="og:description" content="심리학 전문가들이 작성한 최신 연구 동향, 이론 해설, 실생활 적용법을 다루는 전문 블로그입니다." />
        <link rel="canonical" href="https://testevery.com/blog" />
      </Head>

      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">심리학 전문 블로그</h1>
          <p className="text-xl text-gray-600">
            최신 심리학 연구 동향부터 일상에서 활용할 수 있는 실용적인 팁까지, 
            전문가가 엄선한 양질의 콘텐츠를 만나보세요.
          </p>
        </header>

        <div className="grid gap-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
                <span className="text-gray-500 text-sm">{post.date}</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                <Link href={`/blog/${post.id}`} className="hover:text-purple-600">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center text-purple-600 hover:text-purple-800 font-semibold"
              >
                전체 글 읽기 →
              </Link>
            </article>
          ))}
        </div>

        {/* 광고 위치 (승인 후 활성화) */}
        <div className="adsense-inline mt-8">
          {/* <ins className="adsbygoogle" style={{display: 'block'}} data-ad-client="ca-pub-9110596823822061" data-ad-slot="1234567893" data-ad-format="auto" data-full-width-responsive="true"></ins> */}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts: BlogPost[] = [
    {
      id: 'psychology-basics',
      title: '심리학 기초 이론 완전 정복 가이드',
      excerpt: '심리학의 주요 이론들과 연구 방법론에 대한 종합적인 가이드입니다. 행동주의부터 인지주의까지, 심리학의 핵심 이론들을 체계적으로 정리했습니다. 초보자도 쉽게 이해할 수 있도록 실제 사례와 함께 설명합니다.',
      content: '',
      date: '2024년 12월 20일',
      category: '기초 이론',
      readTime: '12분 읽기',
      tags: ['심리학기초', '이론', '연구방법론', '행동주의', '인지주의']
    },
    {
      id: 'personality-development',
      title: '성격 발달과 환경의 영향: 유전 vs 환경 논쟁',
      excerpt: '인간의 성격이 어떻게 형성되고 발달하는지, 유전적 요인과 환경적 요인이 미치는 영향을 과학적으로 분석합니다. 쌍둥이 연구부터 최신 후성유전학 연구까지, 성격 발달의 비밀을 파헤쳐봅니다.',
      content: '',
      date: '2024년 12월 18일',
      category: '발달 심리학',
      readTime: '15분 읽기',
      tags: ['성격발달', '유전', '환경', '후성유전학', '쌍둥이연구']
    },
    {
      id: 'cognitive-psychology-applications',
      title: '인지심리학의 실생활 적용법: 학습과 기억력 향상',
      excerpt: '기억력 향상, 집중력 개선, 학습 효율성 증대 등 인지심리학 원리를 활용한 실용적인 방법들을 소개합니다. 과학적 근거를 바탕으로 한 구체적인 실천 방안을 제시합니다.',
      content: '',
      date: '2024년 12월 15일',
      category: '인지 심리학',
      readTime: '10분 읽기',
      tags: ['인지심리학', '기억력', '학습', '집중력', '실생활적용']
    },
    {
      id: 'social-psychology-relationships',
      title: '사회심리학으로 이해하는 인간관계의 법칙',
      excerpt: '첫인상의 과학부터 장기적 관계 유지의 비결까지, 사회심리학 연구를 통해 밝혀진 인간관계의 원리를 탐구합니다. 더 나은 대인관계를 위한 과학적 조언을 제공합니다.',
      content: '',
      date: '2024년 12월 12일',
      category: '사회 심리학',
      readTime: '13분 읽기',
      tags: ['사회심리학', '인간관계', '첫인상', '대인관계', '소통']
    },
    {
      id: 'stress-management-psychology',
      title: '스트레스 관리의 심리학: 과학적 해결책',
      excerpt: '현대인의 만성 스트레스 문제를 심리학적 관점에서 분석하고, 효과적인 대처 방안을 제시합니다. 인지행동치료 기법과 마음챙김 명상의 과학적 근거를 살펴봅니다.',
      content: '',
      date: '2024년 12월 10일',
      category: '임상 심리학',
      readTime: '11분 읽기',
      tags: ['스트레스관리', '인지행동치료', '마음챙김', '명상', '정신건강']
    },
    {
      id: 'mbti-scientific-analysis',
      title: 'MBTI의 과학적 분석: 신뢰도와 타당성 검증',
      excerpt: 'MBTI 검사의 심리측정학적 특성을 객관적으로 분석합니다. 학술적 연구 결과를 바탕으로 MBTI의 장단점과 올바른 활용법을 제시합니다.',
      content: '',
      date: '2024년 12월 8일',
      category: '성격 심리학',
      readTime: '14분 읽기',
      tags: ['MBTI', '성격검사', '심리측정학', '신뢰도', '타당성']
    },
    {
      id: 'positive-psychology-wellbeing',
      title: '긍정심리학과 웰빙: 행복의 과학적 접근',
      excerpt: '마틴 셀리그만의 긍정심리학 이론을 바탕으로 진정한 행복과 웰빙의 조건을 탐구합니다. PERMA 모델과 실증적 연구 결과를 통해 행복 증진 방법을 제시합니다.',
      content: '',
      date: '2024년 12월 5일',
      category: '긍정 심리학',
      readTime: '12분 읽기',
      tags: ['긍정심리학', '웰빙', '행복', 'PERMA모델', '셀리그만']
    },
    {
      id: 'neuroscience-psychology-connection',
      title: '신경과학과 심리학의 만남: 뇌과학이 밝힌 마음의 비밀',
      excerpt: '최신 뇌과학 연구를 통해 밝혀진 마음과 뇌의 관계를 탐구합니다. fMRI, EEG 등 뇌영상 기술이 심리학 연구에 미친 혁신적 영향을 살펴봅니다.',
      content: '',
      date: '2024년 12월 3일',
      category: '신경 심리학',
      readTime: '16분 읽기',
      tags: ['신경과학', '뇌과학', 'fMRI', 'EEG', '뇌영상']
    },
    {
      id: 'child-development-psychology',
      title: '아동 발달심리학: 성장 단계별 특성과 교육법',
      excerpt: '피아제의 인지발달 이론부터 최신 발달심리학 연구까지, 아동의 성장 단계별 특성을 과학적으로 분석합니다. 효과적인 양육과 교육을 위한 실용적 조언을 제공합니다.',
      content: '',
      date: '2024년 12월 1일',
      category: '발달 심리학',
      readTime: '13분 읽기',
      tags: ['아동발달', '피아제', '인지발달', '양육', '교육심리학']
    },
    {
      id: 'psychological-research-methods',
      title: '심리학 연구방법론: 과학적 접근과 통계 분석',
      excerpt: '심리학 연구의 핵심인 실험설계, 통계 분석, 윤리적 고려사항을 체계적으로 설명합니다. 연구 결과를 올바르게 해석하는 능력을 기르는 데 도움이 됩니다.',
      content: '',
      date: '2024년 11월 28일',
      category: '연구 방법론',
      readTime: '15분 읽기',
      tags: ['연구방법론', '실험설계', '통계분석', '연구윤리', '과학적방법']
    }
  ]

  return {
    props: {
      posts
    },
    revalidate: 86400
  }
}