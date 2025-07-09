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