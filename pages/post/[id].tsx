import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  author: string;
}

interface PostProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function Post({ post, relatedPosts }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | 모두의 테스트 블로그</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ')} />
        <meta name="author" content={post.author} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://testevery.com/post/${post.id}`} />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <link rel="canonical" href={`https://testevery.com/post/${post.id}`} />
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
                <Link href="/blog" className="text-gray-600 hover:text-purple-600 transition-colors">
                  블로그
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
            {/* Breadcrumb */}
            <nav className="mb-8">
              <ol className="flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href="/" className="hover:text-purple-600">홈</Link></li>
                <li>/</li>
                <li><Link href="/blog" className="hover:text-purple-600">블로그</Link></li>
                <li>/</li>
                <li className="text-gray-800">{post.title}</li>
              </ol>
            </nav>

            {/* Article Header */}
            <header className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center mb-4">
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between border-t pt-4">
                <div className="flex items-center">
                  <div className="bg-purple-100 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">
                      {post.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{post.author}</div>
                    <div className="text-gray-500 text-sm">{post.date}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-gray-500 text-sm">#{tag}</span>
                  ))}
                </div>
              </div>
            </header>

            {/* Article Content */}
            <article className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="prose max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>

            {/* Share Buttons */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">이 글을 공유해보세요</h3>
              <div className="flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 transition-colors">
                  Facebook 공유
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600 transition-colors">
                  카카오톡 공유
                </button>
                <button className="bg-gray-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
                  링크 복사
                </button>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <section className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">관련 글</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium mr-2">
                          {relatedPost.category}
                        </span>
                        <span className="text-gray-500 text-xs">{relatedPost.readTime}</span>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">
                        <Link href={`/post/${relatedPost.id}`} className="hover:text-purple-600 transition-colors">
                          {relatedPost.title}
                        </Link>
                      </h4>
                      <p className="text-gray-600 text-sm mb-3">{relatedPost.excerpt.substring(0, 100)}...</p>
                      <div className="text-gray-500 text-xs">{relatedPost.date}</div>
                    </article>
                  ))}
                </div>
              </section>
            )}
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

export const getStaticPaths: GetStaticPaths = async () => {
  // 실제 환경에서는 API나 CMS에서 게시물 ID 목록을 가져옵니다
  const postIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  
  const paths = postIds.map((id) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params!;
  
  // 실제 환경에서는 API나 CMS에서 게시물 데이터를 가져옵니다
  const posts = [
    {
      id: '11',
      title: '에겐남-테토녀 성격 유형: 2024년 Z세대가 주목하는 새로운 성격 분석법',
      excerpt: '에스트로겐과 테스토스테론 호르몬 특성을 기반으로 한 에겐-테토 성격 유형 분석이 젊은 세대에게 큰 인기를 끌고 있습니다.',
      content: `
        <h2>에겐-테토 성격 유형이란?</h2>
        <p>2024년 현재, MBTI 다음으로 Z세대와 밀레니얼 세대 사이에서 큰 인기를 끌고 있는 성격 분석법이 바로 '에겐-테토' 유형입니다. 이는 에스트로겐(Estrogen)과 테스토스테론(Testosterone) 호르몬의 특성을 기반으로 한 성격 분류법으로, 연애와 인간관계에서 나타나는 개인의 성향을 4가지 유형으로 구분합니다.</p>

        <h3>탄생 배경과 역사</h3>
        <p>에겐-테토 성격 유형은 2021년 6월 네이버 블로그에서 시작되었습니다. 다이어트 콘텐츠 크리에이터 이상수가 '이상수 연애 먹이사슬 분석'이라는 포스팅에서 처음 제시했으며, 이후 2024년 3월 인스타툰 작가 내쪼가 웹툰 형식으로 재구성하면서 본격적으로 확산되기 시작했습니다.</p>

        <h2>4가지 성격 유형 분석</h2>
        
        <h3>1. 에겐남 (에스트로겐 남성)</h3>
        <p>에겐남은 생물학적 성별과 무관하게 에스트로겐 호르몬의 특성을 보이는 남성을 의미합니다. 이들의 주요 특징은 다음과 같습니다:</p>
        <ul>
          <li><strong>감정적 섬세함</strong>: 타인의 감정을 잘 읽고 공감하는 능력이 뛰어남</li>
          <li><strong>내향적 성향</strong>: 혼자만의 시간을 중요시하며 깊이 있는 관계를 선호</li>
          <li><strong>조화 추구</strong>: 갈등 상황을 피하고 평화로운 분위기를 만들려 노력</li>
          <li><strong>예술적 관심</strong>: 문학, 음악, 미술 등 예술 분야에 관심이 많음</li>
          <li><strong>배려심</strong>: 상대방의 마음을 헤아리고 배려하는 마음이 강함</li>
        </ul>
        <p><strong>대표 연예인</strong>: 차은우, 정해인, 최우식, 박보검</p>

        <h3>2. 테토남 (테스토스테론 남성)</h3>
        <p>테토남은 테스토스테론 호르몬의 특성을 강하게 보이는 남성으로, 전통적인 남성성과 부합하는 특징을 가집니다:</p>
        <ul>
          <li><strong>리더십</strong>: 자연스럽게 무리를 이끌고 결정을 내리는 능력</li>
          <li><strong>직설적 소통</strong>: 돌려말하기보다는 직접적이고 명확한 표현 선호</li>
          <li><strong>목표 지향적</strong>: 성취와 결과를 중시하며 경쟁적 성향</li>
          <li><strong>활동적</strong>: 스포츠, 게임 등 활동적인 취미를 즐김</li>
          <li><strong>자신감</strong>: 자신의 능력에 대한 확신과 존재감이 강함</li>
        </ul>
        <p><strong>대표 연예인</strong>: 김종국, 옥택연, 안보현, 강동원</p>

        <h3>3. 에겐녀 (에스트로겐 여성)</h3>
        <p>에겐녀는 전통적인 여성성과 부합하는 특징을 가진 여성으로, 다음과 같은 성향을 보입니다:</p>
        <ul>
          <li><strong>감정 표현</strong>: 자신의 감정을 솔직하게 표현하고 공유함</li>
          <li><strong>관계 중심</strong>: 인간관계를 무엇보다 중요시하며 소통을 즐김</li>
          <li><strong>직감적</strong>: 논리보다는 직감과 감정에 의존하는 경향</li>
          <li><strong>돌봄 본능</strong>: 타인을 돌보고 챙기는 것을 자연스럽게 여김</li>
          <li><strong>세심함</strong>: 작은 변화나 디테일을 잘 파악하는 능력</li>
        </ul>
        <p><strong>대표 연예인</strong>: 아이유, 수지, 김고은, 박소담</p>

        <h3>4. 테토녀 (테스토스테론 여성)</h3>
        <p>테토녀는 테스토스테론 호르몬의 특성을 보이는 여성으로, 독립적이고 주도적인 성향을 가집니다:</p>
        <ul>
          <li><strong>독립성</strong>: 스스로 문제를 해결하고 자립하려는 성향</li>
          <li><strong>직설적</strong>: 생각한 것을 솔직하게 표현하며 우회적 표현을 피함</li>
          <li><strong>경쟁 의식</strong>: 목표 달성을 위해 노력하며 경쟁을 즐김</li>
          <li><strong>논리적</strong>: 감정보다는 논리와 합리성을 중시</li>
          <li><strong>활동적</strong>: 움직이는 것을 좋아하며 에너지가 넘침</li>
        </ul>
        <p><strong>대표 연예인</strong>: 전지현, 김희선, 송혜교, 강소라</p>

        <h2>연애 궁합과 먹이사슬 이론</h2>
        <p>에겐-테토 이론의 핵심은 '연애 먹이사슬' 개념입니다. 각 유형은 자신에게 부족한 성향을 보완해줄 수 있는 상대에게 자연스럽게 끌린다는 이론입니다:</p>

        <h3>연애 먹이사슬 순환 구조</h3>
        <p><strong>에겐녀 → 에겐남 → 테토녀 → 테토남 → 에겐녀</strong></p>

        <h4>에겐녀 ❤️ 에겐남</h4>
        <p>에겐녀는 자신과 비슷한 감성을 가진 에겐남에게 끌립니다. 서로의 감정을 이해하고 공감할 수 있어 깊은 정서적 유대감을 형성합니다.</p>

        <h4>에겐남 ❤️ 테토녀</h4>
        <p>에겐남은 자신에게 부족한 추진력과 리더십을 가진 테토녀에게 매력을 느낍니다. 테토녀의 당당함과 주도성이 에겐남에게 안정감을 줍니다.</p>

        <h4>테토녀 ❤️ 테토남</h4>
        <p>테토녀는 자신보다 더 강한 남성성과 카리스마를 가진 테토남에게 끌립니다. 서로의 경쟁심과 목표 지향성을 인정하고 존중합니다.</p>

        <h4>테토남 ❤️ 에겐녀</h4>
        <p>테토남은 자신의 강함을 인정하고 의지할 수 있는 에겐녀에게 매력을 느낍니다. 에겐녀의 따뜻함과 감성이 테토남의 마음을 움직입니다.</p>

        <h2>2024년 인기 심리테스트 플랫폼 분석</h2>
        <p>에겐-테토 테스트는 여러 온라인 플랫폼에서 큰 인기를 끌고 있습니다:</p>

        <h3>푸망 (Poomang)</h3>
        <ul>
          <li><strong>에겐녀-테토녀 테스트</strong>: 82.5만 조회수 기록</li>
          <li><strong>에겐남-테토남 테스트</strong>: 5.1만 조회수 기록</li>
          <li>간단한 선택형 질문으로 구성된 직관적 인터페이스</li>
        </ul>

        <h3>타입스 (types.my)</h3>
        <ul>
          <li>에겐-테토 전용 테스트 플랫폼</li>
          <li>소셜 플레이그라운드 컨셉으로 결과 공유 활성화</li>
          <li>연애 궁합 분석 기능 제공</li>
        </ul>

        <h3>스모어 (smore.im)</h3>
        <ul>
          <li>퀴즈 형태의 재미있는 테스트 구성</li>
          <li>결과 카드 디자인이 SNS 공유에 최적화</li>
          <li>"나는 에겐녀일까 테토녀일까?" 등 직관적 제목</li>
        </ul>

        <h2>과학적 근거와 한계점</h2>
        
        <h3>호르몬과 성격의 관계</h3>
        <p>에겐-테토 이론은 성 호르몬이 행동과 성격에 미치는 영향을 기반으로 합니다. 실제로 테스토스테론은 경쟁심, 공격성, 리더십과 관련이 있으며, 에스트로겐은 공감능력, 사회적 유대감과 연관성이 있다는 연구 결과가 존재합니다.</p>

        <h3>신경과학적 배경</h3>
        <p>뇌과학 연구에 따르면, 성 호르몬은 뇌의 구조와 기능에 영향을 미칩니다. 테스토스테론은 편도체 활성화와 관련이 있고, 에스트로겐은 해마와 전전두엽 기능과 연관됩니다.</p>

        <h3>한계점과 비판</h3>
        <ul>
          <li><strong>과도한 단순화</strong>: 복잡한 인간 성격을 호르몬 두 가지로만 설명하는 것은 한계가 있음</li>
          <li><strong>성별 고정관념</strong>: 전통적인 성 역할을 강화할 수 있는 위험성</li>
          <li><strong>개인차 무시</strong>: 호르몬 수치와 성격 간의 개인차를 충분히 고려하지 못함</li>
          <li><strong>과학적 검증 부족</strong>: 대규모 실증 연구가 부족한 상태</li>
        </ul>

        <h2>올바른 활용 방법</h2>
        <p>에겐-테토 성격 유형은 다음과 같은 방식으로 활용하는 것이 바람직합니다:</p>

        <h3>자기 이해의 도구</h3>
        <p>자신의 성향을 돌아보고 이해하는 출발점으로 활용하되, 절대적 기준으로 삼지 말아야 합니다. 성격은 환경과 경험에 따라 변화할 수 있음을 인식해야 합니다.</p>

        <h3>관계 개선의 힌트</h3>
        <p>상대방의 성향을 이해하고 소통 방식을 조절하는 참고 자료로 활용할 수 있습니다. 다만, 상대방을 유형에 가둬서는 안 됩니다.</p>

        <h3>엔터테인먼트 목적</h3>
        <p>친구들과 재미있게 공유하고 이야기할 수 있는 소재로 활용하되, 진지한 성격 분석 도구로는 한계가 있음을 인식해야 합니다.</p>

        <h2>결론</h2>
        <p>에겐-테토 성격 유형은 2024년 현재 젊은 세대에게 큰 인기를 끌고 있는 성격 분석법입니다. 호르몬과 성격의 관계라는 흥미로운 관점을 제시하며, 특히 연애와 인간관계에서 유용한 통찰을 제공합니다.</p>
        
        <p>하지만 이는 과학적으로 완전히 검증된 이론이 아니며, 복잡한 인간 성격을 단순화한 측면이 있습니다. 따라서 재미있는 자기 탐색의 도구로 활용하되, 절대적 기준으로 삼지 말고 개인의 다양성과 변화 가능성을 인정하는 것이 중요합니다.</p>
        
        <p>무엇보다 에겐-테토 유형은 사람을 이해하고 소통하는 하나의 방법일 뿐이며, 진정한 관계는 상대방을 유형이 아닌 독립적인 개체로 인정하고 존중할 때 형성됩니다.</p>
      `,
      date: '2024년 1월 18일',
      category: '연애심리학',
      tags: ['에겐남', '테토녀', '성격유형', '연애궁합', 'Z세대'],
      readTime: '7분 읽기',
      author: '박연애 박사'
    },
    {
      id: '1',
      title: 'MBTI 심리유형론의 과학적 근거와 현대적 해석',
      excerpt: '칼 융의 심리유형론부터 현대 MBTI까지, 성격 심리학의 발전사와 과학적 타당성을 종합적으로 분석합니다.',
      content: `
        <h2>MBTI의 역사적 배경</h2>
        <p>마이어스-브릭스 유형 지표(Myers-Briggs Type Indicator, MBTI)는 20세기 중반 캐서린 쿡 브릭스와 그녀의 딸 이저벨 브릭스 마이어스에 의해 개발되었습니다. 이들은 칼 구스타프 융의 심리유형론을 기반으로 하여 개인의 성격 선호를 측정할 수 있는 실용적인 도구를 만들고자 했습니다.</p>
        
        <h3>융의 심리유형론</h3>
        <p>칼 융은 1921년 「심리유형(Psychological Types)」이라는 저서에서 인간의 의식이 네 가지 기본적인 심리 기능을 통해 작동한다고 제안했습니다:</p>
        <ul>
          <li><strong>사고(Thinking)</strong>: 논리적 분석과 객관적 기준에 따른 판단</li>
          <li><strong>감정(Feeling)</strong>: 가치와 의미에 따른 판단</li>
          <li><strong>감각(Sensing)</strong>: 구체적이고 현실적인 정보 수집</li>
          <li><strong>직관(Intuition)</strong>: 패턴과 가능성을 통한 정보 수집</li>
        </ul>
        
        <h3>MBTI의 4가지 선호 지표</h3>
        <p>마이어스와 브릭스는 융의 이론을 확장하여 네 가지 이분법적 선호 지표를 개발했습니다:</p>
        
        <h4>1. 외향성(E) vs 내향성(I)</h4>
        <p>에너지의 방향성을 나타내며, 외향형은 외부 세계에서, 내향형은 내부 세계에서 에너지를 얻습니다.</p>
        
        <h4>2. 감각(S) vs 직관(N)</h4>
        <p>정보를 받아들이는 방식으로, 감각형은 구체적 사실을, 직관형은 패턴과 가능성을 선호합니다.</p>
        
        <h4>3. 사고(T) vs 감정(F)</h4>
        <p>의사결정 방식으로, 사고형은 논리와 객관성을, 감정형은 가치와 인간관계를 중시합니다.</p>
        
        <h4>4. 판단(J) vs 인식(P)</h4>
        <p>외부 세계에 대한 태도로, 판단형은 구조와 계획을, 인식형은 유연성과 개방성을 선호합니다.</p>
        
        <h2>과학적 검증과 비판</h2>
        <p>MBTI는 널리 사용되고 있지만, 심리측정학적 관점에서 여러 비판을 받고 있습니다:</p>
        
        <h3>신뢰도 문제</h3>
        <p>재검사 신뢰도가 0.70-0.80 수준으로 다른 성격 검사에 비해 낮은 편입니다. 이는 개인이 시간이 지남에 따라 다른 유형으로 분류될 수 있음을 의미합니다.</p>
        
        <h3>이분법적 접근의 한계</h3>
        <p>성격 특성을 이분법적으로 구분하는 것은 연속적인 성격 차원의 복잡성을 과도하게 단순화할 수 있습니다.</p>
        
        <h3>예측 타당도</h3>
        <p>MBTI 유형이 직업 성과나 적성을 얼마나 잘 예측하는지에 대한 실증적 증거는 제한적입니다.</p>
        
        <h2>현대적 관점과 활용</h2>
        <p>비판에도 불구하고 MBTI는 다음과 같은 영역에서 유용성을 인정받고 있습니다:</p>
        
        <h3>자기 이해 증진</h3>
        <p>개인의 선호와 성향을 이해하는 도구로서 자기성찰과 개인 발달에 도움이 될 수 있습니다.</p>
        
        <h3>팀워크와 의사소통</h3>
        <p>팀 구성원 간의 차이를 이해하고 효과적인 협업 방안을 모색하는 데 활용됩니다.</p>
        
        <h3>진로 탐색</h3>
        <p>개인의 관심사와 강점을 탐색하는 출발점으로 사용될 수 있습니다.</p>
        
        <h2>결론</h2>
        <p>MBTI는 완벽한 성격 측정 도구는 아니지만, 인간의 다양성을 이해하고 소통하는 데 유용한 프레임워크를 제공합니다. 중요한 것은 MBTI 결과를 절대적 진리로 받아들이기보다는, 자기 이해와 타인과의 관계 개선을 위한 도구로 활용하는 것입니다.</p>
      `,
      date: '2024년 1월 15일',
      category: '성격심리학',
      tags: ['MBTI', '성격유형', '융', '심리측정'],
      readTime: '8분 읽기',
      author: '박성격 박사'
    },
    {
      id: '2',
      title: '인지 심리학의 핵심 원리와 실생활 적용 방법',
      excerpt: '기억, 주의, 학습 등 인간의 인지 과정을 이해하고 일상에서 활용할 수 있는 실용적 방법을 제시합니다.',
      content: `
        <h2>인지 심리학이란?</h2>
        <p>인지 심리학(Cognitive Psychology)은 인간의 정신적 과정을 연구하는 심리학의 한 분야입니다. 1950년대 '인지 혁명'을 통해 등장한 이 분야는 인간의 마음을 정보 처리 시스템으로 접근하여 기억, 주의, 지각, 학습, 사고, 언어 등의 정신적 과정을 과학적으로 분석합니다.</p>
        
        <h3>정보 처리 모델</h3>
        <p>인지 심리학의 핵심은 인간의 마음을 컴퓨터와 유사한 정보 처리 시스템으로 보는 것입니다. 이 모델에 따르면:</p>
        <ul>
          <li><strong>입력(Input)</strong>: 감각 기관을 통한 정보 수집</li>
          <li><strong>처리(Processing)</strong>: 뇌에서의 정보 가공 및 변환</li>
          <li><strong>저장(Storage)</strong>: 기억 시스템에의 정보 보관</li>
          <li><strong>출력(Output)</strong>: 행동이나 반응으로의 표현</li>
        </ul>
        
        <h2>기억의 구조와 과정</h2>
        <p>기억은 인지 과정의 핵심 요소로, 복잡한 구조와 과정을 가지고 있습니다.</p>
        
        <h3>기억의 3단계 모델</h3>
        <h4>1. 감각 기억(Sensory Memory)</h4>
        <p>감각 기관을 통해 들어온 정보를 매우 짧은 시간(0.5-3초) 동안 저장합니다. 시각적 정보는 도상 기억(iconic memory), 청각적 정보는 반향 기억(echoic memory)으로 처리됩니다.</p>
        
        <h4>2. 단기 기억(Short-term Memory)</h4>
        <p>제한된 용량(7±2개 항목)으로 15-30초간 정보를 유지합니다. 작업 기억(working memory)의 개념이 도입되면서 단순 저장뿐만 아니라 정보 처리와 조작의 기능도 포함하게 되었습니다.</p>
        
        <h4>3. 장기 기억(Long-term Memory)</h4>
        <p>무제한 용량으로 영구적 저장이 가능합니다. 선언적 기억(사실과 사건)과 절차적 기억(기술과 습관)으로 구분됩니다.</p>
        
        <h3>기억 향상 전략</h3>
        <p>인지 심리학 연구를 바탕으로 한 효과적인 기억 향상 방법들:</p>
        
        <h4>정교화(Elaboration)</h4>
        <p>새로운 정보를 기존 지식과 연결하여 의미있는 맥락을 만듭니다. 예를 들어, 새로운 개념을 배울 때 자신의 경험과 연관지어 생각해보세요.</p>
        
        <h4>조직화(Organization)</h4>
        <p>정보를 논리적 구조로 배열합니다. 개념 지도나 계층 구조를 만들어 정보 간의 관계를 명확히 하세요.</p>
        
        <h4>분산 학습(Spaced Learning)</h4>
        <p>학습을 여러 번에 걸쳐 분산시키는 것이 집중 학습보다 효과적입니다. 에빙하우스의 망각곡선 연구에 따르면, 일정한 간격을 두고 복습하면 장기 기억으로의 전환이 촉진됩니다.</p>
        
        <h2>주의(Attention)의 메커니즘</h2>
        <p>주의는 제한된 인지 자원을 효율적으로 배분하는 중요한 기능입니다.</p>
        
        <h3>주의의 특성</h3>
        <h4>선택적 주의</h4>
        <p>수많은 자극 중에서 특정 자극에만 집중하는 능력입니다. 칵테일 파티 효과가 대표적인 예로, 소음 속에서도 자신의 이름이나 관심 있는 대화에 주의를 집중할 수 있습니다.</p>
        
        <h4>분할 주의</h4>
        <p>동시에 여러 과제에 주의를 배분하는 능력입니다. 하지만 인간의 주의 자원은 제한적이므로 멀티태스킹 시 성능 저하가 발생할 수 있습니다.</p>
        
        <h3>주의력 향상 방법</h3>
        <ul>
          <li><strong>마음챙김 명상</strong>: 현재 순간에 의도적으로 주의를 집중하는 연습</li>
          <li><strong>환경 정리</strong>: 방해 요소를 제거하여 집중력을 높임</li>
          <li><strong>포모도로 기법</strong>: 25분 집중 + 5분 휴식의 사이클</li>
          <li><strong>단일 과제 집중</strong>: 한 번에 하나의 일에만 집중</li>
        </ul>
        
        <h2>학습의 인지적 원리</h2>
        <p>효과적인 학습을 위한 인지 심리학적 원리들을 소개합니다.</p>
        
        <h3>능동적 학습</h3>
        <p>수동적으로 정보를 받아들이기보다는 능동적으로 참여하는 학습이 더 효과적입니다:</p>
        <ul>
          <li><strong>자기 설명</strong>: 학습 내용을 자신의 말로 설명해보기</li>
          <li><strong>질문 생성</strong>: 학습 내용에 대한 질문을 스스로 만들어보기</li>
          <li><strong>연결 찾기</strong>: 새로운 내용과 기존 지식 간의 연결점 찾기</li>
        </ul>
        
        <h3>교대 학습(Interleaving)</h3>
        <p>서로 다른 주제나 기술을 번갈아가며 학습하는 것이 같은 내용을 반복 학습하는 것보다 효과적입니다. 이는 뇌가 차이점을 인식하고 각각의 특성을 더 잘 파악하게 도와줍니다.</p>
        
        <h3>검색 연습(Retrieval Practice)</h3>
        <p>단순히 내용을 다시 읽는 것보다 기억에서 정보를 꺼내는 연습이 학습에 더 효과적입니다. 플래시카드나 퀴즈를 활용한 학습이 대표적입니다.</p>
        
        <h2>일상 적용법</h2>
        <p>인지 심리학의 원리를 일상생활에서 활용하는 구체적인 방법들:</p>
        
        <h3>업무 효율성 향상</h3>
        <ul>
          <li><strong>우선순위 설정</strong>: 중요도와 긴급도에 따른 업무 분류</li>
          <li><strong>배치 처리</strong>: 유사한 업무를 묶어서 처리</li>
          <li><strong>정기적 휴식</strong>: 인지적 피로 방지를 위한 휴식 시간 확보</li>
        </ul>
        
        <h3>의사결정 개선</h3>
        <ul>
          <li><strong>인지편향 인식</strong>: 확증편향, 가용성 휴리스틱 등의 편향 인식</li>
          <li><strong>다관점 접근</strong>: 문제를 여러 각도에서 바라보기</li>
          <li><strong>시간 간격 두기</strong>: 즉석 판단보다는 충분한 고려 시간 확보</li>
        </ul>
        
        <h2>결론</h2>
        <p>인지 심리학의 원리를 이해하고 일상에 적용하면 학습 효율성을 높이고, 기억력을 개선하며, 더 나은 의사결정을 할 수 있습니다. 중요한 것은 이러한 원리들을 일회성으로 적용하는 것이 아니라 지속적으로 실천하여 습관화하는 것입니다.</p>
      `,
      date: '2024년 1월 12일',
      category: '인지심리학',
      tags: ['기억', '주의', '학습', '뇌과학'],
      readTime: '6분 읽기',
      author: '김인지 박사'
    },
    // 추가 게시물들...
  ];

  const post = posts.find(p => p.id === id);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  // 관련 게시물 (같은 카테고리)
  const relatedPosts = posts
    .filter(p => p.id !== id && p.category === post.category)
    .slice(0, 2);

  return {
    props: {
      post,
      relatedPosts,
    },
    revalidate: 3600, // 1시간마다 재생성
  };
};