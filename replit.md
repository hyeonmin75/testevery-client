# 모두의 테스트 (TestEvery) - 심리테스트 플랫폼

## Overview

TestEvery is a Korean psychological testing platform transformed from a simple SPA to a comprehensive educational platform using Next.js SSR/SSG architecture for Google AdSense approval. The application provides psychological tests, educational content, and research materials with full server-side rendering for optimal SEO and content indexing.

## System Architecture

**NEW: Next.js SSR/SSG Architecture (2025.01.02)**
- **Framework**: Next.js 14 with TypeScript for SSR/SSG
- **Rendering**: Static Site Generation (SSG) for most pages, Server-Side Rendering (SSR) for dynamic content
- **SEO**: Complete meta tag optimization, structured data, canonical URLs
- **Content**: 10+ educational blog posts (2000+ words each), comprehensive educational sections
- **Sitemap**: Auto-generated XML sitemap with next-sitemap
- **Styling**: Tailwind CSS with responsive design

**Legacy Architecture (Maintained)**
- **Frontend**: React.js with TypeScript using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack Query for server state

## Key Components

### Frontend Architecture
- **React + TypeScript**: Modern React application with full TypeScript support
- **Component Library**: shadcn/ui based on Radix UI primitives
- **Styling**: Tailwind CSS with custom Korean-optimized design system
- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Animation**: Framer Motion for smooth UI transitions and interactions

### Backend Architecture
- **Express Server**: RESTful API server with TypeScript
- **Database Integration**: Drizzle ORM for type-safe database operations
- **Session Management**: Memory-based storage implementation with interface for future database integration
- **Development Setup**: Hot reloading with Vite integration

### Testing System
- **Interactive Tests**: Reaction time, concentration, intuition, and endurance tests
- **Question-Answer Format**: Multi-choice personality assessments
- **Result Calculation**: Algorithm-based scoring system for personality analysis
- **Local Storage**: Client-side result persistence

## Data Flow

1. **Test Selection**: Users browse and select tests from the home page
2. **Test Execution**: Progressive question answering with real-time progress tracking
3. **Result Calculation**: Client-side computation of personality scores based on answer patterns
4. **Result Display**: Comprehensive personality analysis with visual representations
5. **Social Sharing**: Result sharing capabilities for social media platforms

## External Dependencies

### Core Dependencies
- **@radix-ui/**: Complete set of UI primitives for accessible components
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for smooth UI interactions
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL database connection

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

### Analytics & Monitoring
- **Google Analytics**: User behavior tracking
- **Google AdSense**: Advertisement integration
- **Naver Search Console**: Korean search engine optimization

## Deployment Strategy

The application is configured for deployment on Vercel with the following setup:

- **Build Process**: Vite builds the client-side application to `dist/public`
- **Server Bundle**: ESBuild bundles the Express server for production
- **Static Assets**: Served from the `attached_assets` directory
- **Environment Variables**: Database connection and external service configurations

### Database Configuration
- **Development**: Uses Drizzle with PostgreSQL
- **Production**: Configured for Neon serverless PostgreSQL
- **Migrations**: Drizzle-kit for schema migrations

## Changelog

- January 18, 2025. SEO 최적화 및 서버사이드 렌더링 구현 완료 (배포 대기 중)
  - **서버사이드 렌더링**: Express에서 모든 테스트 페이지 정적 HTML 제공 ✅
  - **동적 sitemap.xml**: 모든 테스트 페이지 자동 포함 (46개 페이지) ✅
  - **개선된 robots.txt**: 크롤링 가이드라인 및 sitemap 위치 명시 ✅
  - **완전한 메타 태그**: 각 테스트별 고유 title, description, keywords ✅
  - **Open Graph 태그**: 소셜미디어 공유 최적화 ✅
  - **구조화된 데이터**: JSON-LD 스키마로 검색엔진 이해도 향상 ✅
  - **클라이언트 사이드 SEO**: 동적 메타 태그 업데이트 ✅
  - **봇 감지**: 실제 사용자와 크롤러 구분하여 적절한 콘텐츠 제공 ✅
  - **디버깅 도구**: SEO 상태 확인 API 및 진단 도구 추가 ✅
  - **라우팅 최적화**: Express 라우트 우선순위 및 case-insensitive 처리 ✅
  - **배포 준비**: Vite 개발환경과 프로덕션 환경 분리 처리 ✅
  - **블로그 라우팅**: 모든 블로그 포스트 SEO 최적화 및 리다이렉트 추가 ✅
  - **Vercel 서버리스 함수 전환**: Express 서버에서 Vercel API 함수로 변경 ✅
  - **API 라우팅**: /api/blog, /api/test, /api/result, /api/sitemap 구현 ✅
  - **완전한 해결**: Vercel 서버리스 함수로 모든 404 오류 해결 완료 ✅
  - **블로그 데이터 내장**: 외부 의존성 제거, 독립적 API 함수 구현 ✅
  - **테스트 완료**: concentration-focus-psychology 등 모든 URL 정상 작동 확인 ✅
  - **최종 배포 대기**: Git 커밋 후 Vercel 자동 배포 진행 중 🚀
- January 18, 2025. 창의력 진단 테스트 및 감정탱크 테스트 추가
  - 창의력 진단 테스트 구현 (Alternate Uses Task 기반)
    * 5가지 랜덤 사물 중 1개 선택
    * 최대 10개 아이디어 자유 입력
    * 유창성, 독창성, 유연성, 정교성 4가지 점수 계산
    * 4가지 창의력 유형 결과 (창의적 천재, 혁신가, 탐험가, 실행가)
    * 창의력 향상 팁 제공
  - 직장인 감정탱크 진단기 구현
    * 10가지 직장 스트레스 상황 체크리스트
    * 가중치 기반 감정 소모량 계산
    * 탱크 모양 시각화 및 감정 기상도 표시
    * AI 추천 감정 회복 루틴 제공
  - 홈 화면 네비게이션 버튼 추가 (모든 테스트에서 홈으로 돌아가기)
- January 18, 2025. 에겐-테토 심리테스트 추가 및 SEO 최적화
  - 에겐-테토 성격 유형 테스트 구현 (12개 질문, 4가지 결과 유형)
  - 에겐-테토 관련 전문 블로그 게시물 추가
  - 동적 sitemap.xml 및 robots.txt 생성
  - PWA 지원을 위한 manifest.json 추가
  - 구조화된 데이터 (JSON-LD) 추가
  - 완전한 SEO 최적화 (메타 태그, 보안 헤더 등)
- July 02, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.