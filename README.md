# TestEvery - 심리테스트 플랫폼

**www.testevery.com**에서 운영되는 과학적 기반의 심리테스트와 성격 분석 플랫폼입니다.

## 🎯 주요 특징

### 1. 완벽한 SEO 최적화
- **자동 sitemap.xml 생성**: 모든 페이지 자동 포함
- **최적화된 robots.txt**: 크롤러 친화적 설정
- **301 리다이렉트**: 삭제된 페이지 적절한 처리
- **메타 태그 최적화**: 페이지별 고유 title, description, keywords
- **구조화된 데이터**: JSON-LD 스키마 적용
- **Open Graph 태그**: 소셜미디어 최적화

### 2. Next.js 정적 사이트 생성
- **Static Site Generation (SSG)**: 빠른 로딩 속도
- **App Router**: 최신 Next.js 라우팅 시스템
- **자동 최적화**: 이미지, 폰트, 스크립트 최적화
- **TypeScript 지원**: 안정적인 코드 관리

### 3. Vercel 배포 최적화
- **Edge Runtime**: 전세계 빠른 응답
- **Skew Protection**: 배포 안정성 보장
- **자동 HTTPS**: SSL 인증서 자동 관리
- **CDN 최적화**: 정적 파일 전역 캐싱

### 4. 사용자 친화적 설계
- **반응형 디자인**: 모바일 퍼스트 접근
- **접근성 준수**: WCAG 가이드라인 준수
- **직관적 네비게이션**: 명확한 정보 구조
- **빠른 로딩**: 최적화된 성능

## 🛠️ 기술 스택

### Frontend
- **Next.js 15**: React 프레임워크
- **Tailwind CSS**: 유틸리티 CSS 프레임워크
- **React 19**: 최신 React 기능 활용

### SEO & 성능
- **자동 sitemap.xml**: 동적 사이트맵 생성
- **최적화된 메타데이터**: 페이지별 SEO 설정
- **구조화된 데이터**: Schema.org 마크업
- **웹 성능 최적화**: Core Web Vitals 준수

### 배포 & 인프라
- **Vercel**: 정적 사이트 호스팅
- **CDN**: 전세계 콘텐츠 배포
- **자동 배포**: Git 연동 자동 배포

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.js          # 전역 레이아웃
│   ├── page.js            # 홈페이지
│   ├── globals.css        # 전역 스타일
│   ├── not-found.js       # 404 페이지
│   ├── robots.js          # robots.txt 생성
│   ├── sitemap.js         # sitemap.xml 생성
│   ├── tests/             # 테스트 목록
│   │   └── page.js
│   ├── test/[slug]/       # 개별 테스트 페이지
│   │   └── page.js
│   ├── result/[slug]/     # 테스트 결과 페이지
│   │   └── page.js
│   ├── blog/[slug]/       # 블로그 포스트
│   │   └── page.js
│   ├── about/             # 소개 페이지
│   │   └── page.js
│   ├── contact/           # 문의 페이지
│   │   └── page.js
│   ├── privacy/           # 개인정보처리방침
│   │   └── page.js
│   └── terms/             # 이용약관
│       └── page.js
├── components/            # 재사용 가능한 컴포넌트
└── lib/                   # 유틸리티 함수

public/                    # 정적 파일
├── robots.txt            # 크롤러 설정
├── manifest.json         # PWA 매니페스트
└── images/               # 이미지 파일

Configuration Files:
├── next.config.js        # Next.js 설정
├── tailwind.config.js    # Tailwind CSS 설정
├── postcss.config.js     # PostCSS 설정
└── vercel.json          # Vercel 배포 설정
```

## 🚀 개발 및 배포

### 로컬 개발 환경 설정
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# 또는
node dev.js

# 빌드 테스트
npm run build
```

### 배포 옵션

#### 1. Vercel 배포 (추천)
```bash
# Vercel CLI 설치
npm install -g vercel

# 배포
vercel

# 프로덕션 배포
vercel --prod
```

#### 2. Replit 배포
```bash
# 빌드
npx next build

# 배포 설정
deploymentTarget = "static"
build = ["npx", "next", "build"]
publicDir = "out"
```

#### 3. 정적 호스팅
```bash
# 빌드
npm run build

# out/ 디렉토리를 정적 호스팅 서비스에 업로드
# (Netlify, GitHub Pages, AWS S3 등)
```

## 📊 SEO 최적화 상세

### 1. URL 구조 최적화
```
https://www.testevery.com/                    # 홈페이지
https://www.testevery.com/tests/               # 테스트 목록
https://www.testevery.com/test/mbti-personality-test/  # 개별 테스트
https://www.testevery.com/result/mbti-personality-test/ # 결과 페이지
https://www.testevery.com/blog/mbti-guide-complete/    # 블로그
```

### 2. 메타데이터 최적화
- **Title**: 페이지별 고유 제목
- **Description**: 검색 친화적 설명
- **Keywords**: 관련 키워드 최적화
- **Canonical URL**: 중복 콘텐츠 방지

### 3. 구조화된 데이터
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "TestEvery",
  "url": "https://www.testevery.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.testevery.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

## 🔧 사용자 정의 설정

### 새로운 테스트 추가
1. `src/app/test/[slug]/page.js`의 tests 객체에 새 테스트 데이터 추가
2. `src/app/sitemap.js`의 tests 배열에 추가
3. 테스트 페이지와 결과 페이지 구현

### 블로그 포스트 추가
1. `src/app/blog/[slug]/page.js` 구현
2. `src/app/sitemap.js`의 blogPosts 배열에 추가
3. 메타데이터 최적화

## 📈 성능 최적화

### Core Web Vitals
- **LCP (Largest Contentful Paint)**: < 2.5초
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### 최적화 기법
- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **코드 분할**: 동적 import 활용
- **캐싱**: 정적 파일 CDN 캐싱
- **압축**: Gzip/Brotli 압축 적용

## 🛡️ 보안 설정

### 보안 헤더
```javascript
{
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "X-Robots-Tag": "index, follow"
}
```

### 개인정보 보호
- **데이터 최소화**: 필요한 데이터만 수집
- **로컬 저장**: 테스트 결과 브라우저 저장
- **암호화**: 민감 데이터 암호화 저장

## 📞 문의 및 지원

- **이메일**: contact@testevery.com
- **웹사이트**: https://www.testevery.com
- **문의 양식**: https://www.testevery.com/contact/

---

**TestEvery**는 과학적 기반의 심리테스트를 통해 개인의 성장과 자아 발견을 돕는 플랫폼입니다.