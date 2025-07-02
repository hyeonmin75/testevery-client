// 테스트 관련 유틸리티 함수들

export interface TestQuestion {
  id: number;
  text: string;
  options: {
    text: string;
    score: Record<string, number>;
  }[];
}

export interface TestResult {
  title: string;
  description: string;
  traits: string[];
  advice: string;
  color: string;
  percentage: number;
}

export interface Test {
  id: string;
  title: string;
  description: string;
  category: string;
  emoji: string;
  estimatedTime: string;
  popularity: number;
  shareText: string;
  questions: TestQuestion[];
  results: Record<string, TestResult>;
}

// 테스트 결과 계산
export function calculateTestResult(questions: any[], answers: number[]): string {
  const scores: Record<string, number> = {};
  
  questions.forEach((question, index) => {
    const selectedOption = question.options[answers[index]];
    if (selectedOption && selectedOption.score) {
      Object.entries(selectedOption.score).forEach(([key, value]) => {
        if (typeof value === 'number') {
          scores[key] = (scores[key] || 0) + value;
        }
      });
    }
  });
  
  // 가장 높은 점수를 가진 결과 반환
  const topResult = Object.entries(scores).reduce((a, b) => 
    a[1] > b[1] ? a : b
  );
  
  return topResult[0];
}

// 공유 문구 생성
export function generateShareText(test: Test, resultKey: string): string {
  const result = test.results[resultKey];
  return test.shareText.replace('{result}', result.title);
}

// SEO 메타 태그 생성
export function generateSEOMeta(test: Test, resultKey?: string) {
  const baseUrl = 'https://www.testevery.com';
  
  if (resultKey) {
    // 결과 페이지용 메타
    const result = test.results[resultKey];
    return {
      title: `${result.title} | ${test.title} 결과 - TestEvery`,
      description: `${result.description} ${test.title} 테스트 결과를 확인하고 친구들과 공유해보세요!`,
      ogTitle: `나는 ${result.title}! 너는 어떨까?`,
      ogDescription: result.description,
      ogImage: `${baseUrl}/api/og/${test.id}/${resultKey}`,
      url: `${baseUrl}/tests/${test.id}/result/${resultKey}`,
      keywords: `${test.category}, 테스트, 심리테스트, ${result.traits.join(', ')}, Threads 공유`
    };
  } else {
    // 테스트 페이지용 메타
    return {
      title: `${test.title} - TestEvery`,
      description: `${test.description} 간단한 ${test.estimatedTime} 테스트로 알아보세요!`,
      ogTitle: test.title,
      ogDescription: test.description,
      ogImage: `${baseUrl}/api/og/${test.id}`,
      url: `${baseUrl}/tests/${test.id}`,
      keywords: `${test.category}, 테스트, 심리테스트, 감성테스트, Threads 바이럴`
    };
  }
}

// 결과 이미지 생성용 Canvas 설정
export function generateResultImage(result: TestResult, testTitle: string): Promise<string> {
  return new Promise((resolve) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) {
      resolve('');
      return;
    }
    
    canvas.width = 600;
    canvas.height = 400;
    
    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, result.color);
    gradient.addColorStop(1, adjustBrightness(result.color, -20));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // 텍스트 설정
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 제목
    ctx.font = 'bold 36px "Noto Sans KR", sans-serif';
    ctx.fillText(result.title, canvas.width / 2, canvas.height / 2 - 60);
    
    // 설명
    ctx.font = '18px "Noto Sans KR", sans-serif';
    const words = result.description.split(' ');
    let line = '';
    let y = canvas.height / 2;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      
      if (testWidth > canvas.width - 60 && n > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = words[n] + ' ';
        y += 25;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);
    
    // 퍼센티지
    ctx.font = 'bold 24px "Noto Sans KR", sans-serif';
    ctx.fillText(`${result.percentage}%`, canvas.width / 2, canvas.height / 2 + 80);
    
    // 사이트 URL
    ctx.font = '14px "Noto Sans KR", sans-serif';
    ctx.fillText('www.testevery.com', canvas.width / 2, canvas.height - 30);
    
    resolve(canvas.toDataURL('image/png'));
  });
}

// 색상 밝기 조절
function adjustBrightness(color: string, amount: number): string {
  const usePound = color[0] === '#';
  const col = usePound ? color.slice(1) : color;
  
  const num = parseInt(col, 16);
  let r = (num >> 16) + amount;
  let g = (num >> 8 & 0x00FF) + amount;
  let b = (num & 0x0000FF) + amount;
  
  r = r > 255 ? 255 : r < 0 ? 0 : r;
  g = g > 255 ? 255 : g < 0 ? 0 : g;
  b = b > 255 ? 255 : b < 0 ? 0 : b;
  
  return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16).padStart(6, '0');
}

// GA4 이벤트 트래킹
export function trackEvent(eventName: string, parameters?: Record<string, any>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'viral_test',
      ...parameters
    });
  }
}

// 인기 순으로 테스트 정렬
export function sortTestsByPopularity(tests: any[]): any[] {
  return tests.sort((a, b) => b.popularity - a.popularity);
}

// 카테고리별 테스트 필터링
export function filterTestsByCategory(tests: any[], category: string): any[] {
  return tests.filter(test => test.category === category);
}

// 랜덤 테스트 선택
export function getRandomTest(tests: any[], exclude?: string): any {
  const availableTests = exclude 
    ? tests.filter(test => test.id !== exclude)
    : tests;
  
  const randomIndex = Math.floor(Math.random() * availableTests.length);
  return availableTests[randomIndex];
}

// 브라우저 환경에서 gtag 타입 선언
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}