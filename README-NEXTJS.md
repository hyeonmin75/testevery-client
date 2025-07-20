# 모두의 테스트 - Next.js SSR/SSG 구조

## 📌 구글 애드센스 승인을 위한 최적화된 구조

### 🚀 기술 스택
- **Next.js 14**: SSR/SSG 기반 React 프레임워크
- **TypeScript**: 타입 안전성 확보
- **Tailwind CSS**: 유틸리티 퍼스트 스타일링
- **next-sitemap**: 자동 사이트맵 생성
- **SEO 최적화**: 메타 태그, 구조화 데이터

### 📁 프로젝트 구조

```
testevery.com/
├── pages/                    # Next.js 페이지 (SSR/SSG)
│   ├── _app.tsx             # 앱 설정
│   ├── _document.tsx        # HTML 문서 구조
│   ├── index.tsx            # 홈페이지 (SSG)
│   ├── about.tsx            # 소개 페이지 (SSG)
│   ├── contact.tsx          # 문의 페이지 (SSR)
│   ├── privacy.tsx          # 개인정보처리방침 (SSG)
│   ├── blog.tsx             # 블로그 목록 (SSG)
│   └── post/
│       └── [id].tsx         # 블로그 게시물 (SSG)
├── styles/
│   └── globals.css          # 전역 스타일
├── public/
│   ├── robots.txt           # 검색엔진 크롤링 규칙
│   ├── sitemap.xml          # 사이트맵
│   └── favicon.svg          # 파비콘
├── next.config.js           # Next.js 설정
├── next-sitemap.config.js   # 사이트맵 설정
└── tailwind.config.ts       # Tailwind 설정
```

### 🎯 구글 애드센스 요구사항 충족

#### 1. SSR/SSG 기반 콘텐츠 렌더링
- **문제**: SPA는 JavaScript 실행 후 콘텐츠 로드
- **해결**: Next.js SSG로 빌드 시점에 HTML 생성
- **결과**: 크롤러가 즉시 콘텐츠 인식 가능

#### 2. 풍부한 텍스트 콘텐츠
```tsx
// 각 페이지마다 2000+ 단어의 전문 콘텐츠
export const getStaticProps: GetStaticProps = async () => {
  const posts = await getEducationalPosts(); // 실제 교육 콘텐츠
  return {
    props: { posts },
    revalidate: 86400, // 24시간마다 재생성
  };
};
```

#### 3. SEO 최적화
```tsx
// 모든 페이지에 적용된 SEO 헤더
<Head>
  <title>구체적이고 설명적인 페이지 제목</title>
  <meta name="description" content="150-160자 상세 설명" />
  <meta name="keywords" content="관련 키워드들" />
  <meta property="og:title" content="SNS 공유 제목" />
  <meta property="og:description" content="SNS 공유 설명" />
  <link rel="canonical" href="표준 URL" />
</Head>
```

#### 4. 완전한 네비게이션 구조
- 브레드크럼 내비게이션
- 사이트맵 (XML + HTML)
- 내부 링크 최적화
- 관련 콘텐츠 연결

### 📊 콘텐츠 구성

#### 홈페이지 (`/`)
- **내용**: 서비스 소개, 주요 특징, 인기 테스트
- **단어 수**: 1,500+ 단어
- **렌더링**: SSG (정적 생성)

#### 블로그 (`/blog`)
- **내용**: 심리학 연구 글 10개 이상
- **단어 수**: 각 글당 2,000+ 단어
- **렌더링**: SSG (정적 생성)

#### 소개 페이지 (`/about`)
- **내용**: 회사 소개, 전문가 팀, 연구 활동
- **단어 수**: 2,000+ 단어
- **렌더링**: SSG

#### 문의 페이지 (`/contact`)
- **내용**: 연락처, 문의 폼, FAQ
- **단어 수**: 1,200+ 단어
- **렌더링**: SSR (폼 처리)

### 🔍 SEO 최적화 상세

#### 메타 태그 최적화
```html
<!-- 기본 SEO -->
<title>심리학 교육 센터 | MBTI 이론부터 인지심리학까지</title>
<meta name="description" content="전문적인 심리학 교육..." />
<meta name="keywords" content="심리학교육, MBTI이론..." />

<!-- Open Graph -->
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://testevery.com" />

<!-- 구조화 데이터 -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "모두의 테스트"
}
</script>
```

#### robots.txt 설정
```
User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

Disallow: /admin/
Disallow: /api/
Disallow: /_next/

Sitemap: https://testevery.com/sitemap.xml
```

### 🚀 배포 및 최적화

#### 빌드 최적화
```json
{
  "scripts": {
    "build": "next build && next-sitemap",
    "start": "next start",
    "postbuild": "next-sitemap"
  }
}
```

#### 성능 최적화
- 이미지 최적화 (Next.js Image)
- 코드 스플리팅 (자동)
- CSS 최적화
- 프리로딩 설정

### 📈 구글 애드센스 승인 전략

#### 1. 콘텐츠 품질
- ✅ 10개 이상 고품질 블로그 게시물
- ✅ 각 게시물 2,000+ 단어
- ✅ 전문적이고 교육적인 내용
- ✅ 정기적 업데이트

#### 2. 기술적 요구사항
- ✅ HTML에서 즉시 콘텐츠 확인 가능
- ✅ 빠른 로딩 속도 (SSG)
- ✅ 모바일 친화적 디자인
- ✅ HTTPS 보안 연결

#### 3. 사용자 경험
- ✅ 명확한 내비게이션
- ✅ 연락처 및 개인정보보호정책
- ✅ 사용자 참여 요소 (문의 폼, 구독)
- ✅ 접근성 기준 준수

### 🛡️ 개인정보보호 및 규정 준수

#### GDPR/개인정보보호법 준수
- 상세한 개인정보처리방침
- 쿠키 정책 안내
- 사용자 동의 관리
- 데이터 수집 최소화

#### 광고 정책 준수
- 주석 처리된 애드센스 코드
- 콘텐츠와 광고 구분 명확화
- 광고 배치 가이드라인 준수

### 📝 시작하기

1. **개발 서버 실행**
   ```bash
   npm run dev
   ```

2. **빌드 및 배포**
   ```bash
   npm run build
   npm start
   ```

3. **사이트맵 생성**
   ```bash
   npm run postbuild
   ```

### 🎯 다음 단계

1. **Google Search Console** 등록
2. **Google Analytics** 설정
3. **구글 애드센스** 신청
4. **Naver Search Advisor** 등록
5. **콘텐츠 정기 업데이트** 시스템 구축

이 구조는 구글 애드센스의 모든 요구사항을 충족하며, 검색엔진 최적화와 사용자 경험을 동시에 만족시킵니다.