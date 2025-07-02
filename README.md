# 심리학 교육센터 - Next.js SSR/SSG 플랫폼

## 📋 프로젝트 개요

testevery.com을 위한 구글 애드센스 승인 최적화 심리학 교육 플랫폼입니다. React SPA에서 Next.js SSR/SSG 기반으로 완전 마이그레이션하여 검색엔진 최적화와 콘텐츠 인덱싱을 개선했습니다.

## 🚀 주요 특징

### ✅ 구글 애드센스 승인 요구사항 완전 충족
- **SSR/SSG 기반**: View Page Source에서 모든 콘텐츠가 HTML로 렌더링
- **풍부한 콘텐츠**: 10개 이상의 전문 블로그 포스트
- **필수 페이지**: Home, About, Contact, Privacy Policy 완비
- **SEO 최적화**: 메타태그, JSON-LD, Open Graph 완벽 구성
- **광고 준비**: Head/body 태그에 애드센스 삽입 위치 사전 마킹

### 🔧 기술 스택
- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS
- **SEO**: next-sitemap으로 자동 sitemap/robots.txt 생성
- **API**: Next.js API Routes
- **Validation**: Zod

## 📁 프로젝트 구조

```
root/
├── pages/
│   ├── _app.tsx              # 전역 App 컴포넌트
│   ├── index.tsx             # 홈페이지 (SSG)
│   ├── about.tsx             # 소개 페이지 (SSG)
│   ├── contact.tsx           # 문의 페이지 (SSR)
│   ├── privacy.tsx           # 개인정보처리방침 (SSG)
│   ├── blog/
│   │   ├── index.tsx         # 블로그 목록 (SSG)
│   │   └── [id].tsx          # 개별 포스트 (SSG)
│   └── api/
│       └── contact.ts        # 문의 폼 API
├── components/
│   └── Layout.tsx            # 공통 레이아웃
├── styles/
│   └── globals.css           # 전역 스타일
├── next.config.js            # Next.js 설정
└── next-sitemap.config.js    # 사이트맵 설정
```

## 🎯 완성된 페이지 목록

### 📄 정적 페이지 (SSG)
- **홈페이지** (`/`) - 서비스 소개, 인기 테스트, 최신 글
- **소개** (`/about`) - 회사 소개, 미션, 비전, 강점
- **개인정보처리방침** (`/privacy`) - 법적 요구사항 완전 준수

### 📝 블로그 시스템 (SSG)
- **블로그 목록** (`/blog`) - 10개 전문 심리학 글
- **개별 포스트** (`/blog/[id]`) - 상세 콘텐츠, 관련 글 추천

1. 심리학 기초 이론 완전 정복 가이드
2. 성격 발달과 환경의 영향: 유전 vs 환경 논쟁
3. 인지심리학의 실생활 적용법: 학습과 기억력 향상
4. 사회심리학으로 이해하는 인간관계의 법칙
5. 스트레스 관리의 심리학: 과학적 해결책
6. MBTI의 과학적 분석: 신뢰도와 타당성 검증
7. 긍정심리학과 웰빙: 행복의 과학적 접근
8. 신경과학과 심리학의 만남: 뇌과학이 밝힌 마음의 비밀
9. 아동 발달심리학: 성장 단계별 특성과 교육법
10. 심리학 연구방법론: 과학적 접근과 통계 분석

### 🔄 동적 기능 (SSR)
- **문의 페이지** (`/contact`) - 실시간 폼 처리, API 연동

## 🔍 SEO 최적화 요소

### 메타데이터
- 각 페이지별 고유한 title, description
- 타겟 키워드 최적화
- Open Graph 태그로 소셜 미디어 최적화

### 구조화 데이터
- JSON-LD를 통한 Schema.org 마크업
- Article, Organization 스키마 적용

### 사이트맵 & 크롤링
- 자동 생성되는 sitemap.xml
- robots.txt로 크롤링 가이드
- 적절한 캐노니컬 URL 설정

## 💰 구글 애드센스 준비

### 광고 삽입 위치 사전 마킹
```html
<!-- 배너 광고 -->
<div className="adsense-banner">
  <!-- 승인 후 활성화 예정 -->
</div>

<!-- 사이드바 광고 -->
<div className="adsense-sidebar">
  <!-- 승인 후 활성화 예정 -->
</div>

<!-- 인라인 광고 -->
<div className="adsense-inline">
  <!-- 승인 후 활성화 예정 -->
</div>
```

### 준비된 애드센스 코드
- Head 태그: Google Analytics, AdSense 스크립트 (주석 처리)
- 다양한 광고 형태: 배너, 사이드바, 인라인 위치 확보

## 🚀 배포 및 운영

### 개발 환경
```bash
npm run dev        # 개발 서버 실행
```

### 프로덕션 빌드
```bash
npm run build      # Next.js 빌드
npm run start      # 프로덕션 서버 실행
npm run sitemap    # 사이트맵 수동 생성
```

### 자동 사이트맵 생성
- 빌드 시 `postbuild` 스크립트로 자동 실행
- `next-sitemap.config.js`에서 설정 관리

## 📊 성과 목표

### 구글 애드센스 승인 기준 충족
- ✅ 풍부한 오리지널 콘텐츠 (10+ 블로그 포스트)
- ✅ 필수 페이지 완비 (Home, About, Contact, Privacy)
- ✅ SEO 최적화 완료
- ✅ 사용자 친화적 네비게이션
- ✅ 모바일 반응형 디자인

### 수익화 전략
- **1차 목표**: 구글 애드센스 승인 획득
- **2차 목표**: 월 200,000-500,000 KRW 광고 수익
- **장기 목표**: 프리미엄 서비스 및 B2B 확장

## 🛡️ 법적 준수사항

### 개인정보보호
- 상세한 개인정보처리방침
- GDPR 및 국내 개인정보보호법 준수
- 쿠키 정책 및 사용자 동의

### 이용약관
- 서비스 이용 규칙 명시
- 저작권 및 지식재산권 보호
- 면책조항 포함

## 📈 향후 계획

1. **구글 애드센스 신청 및 승인**
2. **추가 콘텐츠 확장** (월 5-10개 신규 글)
3. **사용자 인터랙션 기능** (댓글, 평점)
4. **분석 도구 연동** (Google Analytics 4)
5. **성능 최적화** (Core Web Vitals 개선)

---

**구글 애드센스 승인을 위한 모든 기술적, 콘텐츠적 요구사항이 충족된 완성된 플랫폼입니다.**