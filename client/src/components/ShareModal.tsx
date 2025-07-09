import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalculatedResult } from '../types/test';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculatedResult;
  customMessage?: string;
}

export function ShareModal({ isOpen, onClose, result, customMessage }: ShareModalProps) {
  const [notification, setNotification] = useState<string>('');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const shareToKakao = async () => {
    const text = customMessage || `나는 ${result.result.title}입니다! ${result.result.description}`;
    const url = window.location.href;
    const fullText = `${text}\n${url}`;
    
    try {
      await navigator.clipboard.writeText(fullText);
      showNotification('텍스트가 복사되었습니다! 카카오톡에서 붙여넣기 해주세요.');
    } catch (err) {
      prompt('다음 텍스트를 복사해주세요:', fullText);
    }
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`나는 ${result.result.title}입니다!`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(`나는 ${result.result.title}입니다! ${result.result.description}`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareToInstagram = async () => {
    const text = `나는 ${result.result.title}입니다! ${result.result.description}`;
    try {
      await navigator.clipboard.writeText(text);
      showNotification('텍스트가 복사되었습니다! 인스타그램에서 붙여넣기 해주세요.');
    } catch (err) {
      prompt('다음 텍스트를 복사해주세요:', text);
    }
  };

  const copyLink = async () => {
    const text = `나는 ${result.result.title}입니다! ${result.result.description}`;
    const url = window.location.href;
    const fullText = `${text}\n${url}`;
    
    try {
      await navigator.clipboard.writeText(fullText);
      showNotification('결과 텍스트와 링크가 복사되었습니다!');
    } catch (err) {
      prompt('다음 텍스트를 복사해주세요:', fullText);
    }
  };

  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1080;
    canvas.height = 2400; // MBTI용 더 긴 캔버스

    if (result.testId === 'mbti') {
      // MBTI 테스트 전용 종합 이미지
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#6366f1');
      gradient.addColorStop(0.5, '#8b5cf6');
      gradient.addColorStop(1, '#ec4899');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const margin = 50;
      const centerX = canvas.width / 2;
      
      // 전체 내용의 높이를 계산하여 세로 중앙 정렬
      const totalContentHeight = 1800; // 대략적인 전체 내용 높이
      const startY = (canvas.height - totalContentHeight) / 2 + 100; // 세로 중앙에서 시작
      let y = startY;

      // 헤더
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.font = 'bold 30px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText('MBTI 성격유형 분석 완료', centerX, y);
      y += 80; // 더 큰 간격

      // 이모지 (헤더와 겹치지 않게 충분한 간격)
      ctx.font = '80px Arial';
      ctx.fillText(result.result.emoji, centerX, y);
      y += 70;

      // 성격유형 제목
      ctx.font = 'bold 40px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(result.result.title, centerX, y);
      y += 50;

      // 성격유형 설명
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '24px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(result.result.description, centerX, y);
      y += 70;

      // 성향 분석 그래프 섹션
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.fillRect(margin, y, canvas.width - margin * 2, 300);
      
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('성향 분석', centerX, y + 35);
      
      // MBTI 차원별 분석 바
      const traits = [
        { name: '외향성 (E) vs 내향성 (I)', eValue: result.scores?.E || 50, iValue: result.scores?.I || 50 },
        { name: '감각형 (S) vs 직관형 (N)', sValue: result.scores?.S || 50, nValue: result.scores?.N || 50 },
        { name: '사고형 (T) vs 감정형 (F)', tValue: result.scores?.T || 50, fValue: result.scores?.F || 50 },
        { name: '판단형 (J) vs 인식형 (P)', jValue: result.scores?.J || 50, pValue: result.scores?.P || 50 }
      ];

      let barY = y + 70;
      traits.forEach((trait, index) => {
        const colors = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b'];
        const barWidth = 500;
        const barHeight = 28;
        const barX = (canvas.width - barWidth) / 2;

        // 배경
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(barX, barY, barWidth, barHeight);

        // 왼쪽 값 (E, S, T, J)
        const leftValue = index === 0 ? (trait.eValue || 50) : index === 1 ? (trait.sValue || 50) : index === 2 ? (trait.tValue || 50) : (trait.jValue || 50);
        const leftWidth = (leftValue / 100) * barWidth;
        
        ctx.fillStyle = colors[index];
        ctx.fillRect(barX, barY, leftWidth, barHeight);

        // 텍스트 (중앙 정렬)
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'right';
        const leftLabel = index === 0 ? `E ${leftValue}%` : index === 1 ? `S ${leftValue}%` : index === 2 ? `T ${leftValue}%` : `J ${leftValue}%`;
        const rightValue = 100 - leftValue;
        const rightLabel = index === 0 ? `I ${rightValue}%` : index === 1 ? `N ${rightValue}%` : index === 2 ? `F ${rightValue}%` : `P ${rightValue}%`;
        
        ctx.fillText(leftLabel, barX - 10, barY + 19);
        ctx.textAlign = 'left';
        ctx.fillText(rightLabel, barX + barWidth + 10, barY + 19);

        barY += 50;
      });

      y += 320;

      // 상세 설명 박스 (여백 줄임)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      ctx.fillRect(margin, y, canvas.width - margin * 2, 140);
      
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('성격 설명', centerX, y + 35);
      
      // 상세 설명 텍스트 (중앙 정렬)
      ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#374151';
      ctx.textAlign = 'center';
      const detailedText = result.result.detailedDescription || result.result.personalityStory || '';
      const maxLineWidth = canvas.width - margin * 2 - 60;
      const lines = detailedText.split('\n\n').slice(0, 2);
      let textY = y + 65;
      
      lines.forEach(line => {
        const words = line.split(' ');
        let currentLine = '';
        
        for (let i = 0; i < words.length; i++) {
          const testLine = currentLine + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxLineWidth && i > 0) {
            ctx.fillText(currentLine, centerX, textY);
            currentLine = words[i] + ' ';
            textY += 22;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine && textY < y + 125) {
          ctx.fillText(currentLine, centerX, textY);
          textY += 25;
        }
      });

      y += 160;

      // 잘 맞는 사람 섹션
      if (result.result.compatibleTypes && result.result.compatibleTypes.length > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 140);
        
        ctx.fillStyle = '#dc2626';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💕 이런 사람과 잘 맞아요', centerX, y + 35);
        
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        
        // MBTI 유형과 궁합 퍼센트 표시
        let compatY = y + 70;
        result.result.compatibleTypes.slice(0, 2).forEach((type, index) => {
          // MBTI 유형 코드 추출 (예: "수호자형 (ISFJ)" -> "ISFJ")
          const mbtiCode = type.title.match(/\(([A-Z]{4})\)/)?.[1] || type.id;
          const compatText = `${mbtiCode} 유형 (${type.compatibility}%)`;
          ctx.fillText(compatText, centerX, compatY);
          compatY += 25;
        });
        
        // 궁합 이유 간단 설명
        if (result.result.bestMatch) {
          ctx.font = '16px "Malgun Gothic", Arial, sans-serif';
          ctx.fillStyle = '#6b7280';
          ctx.textAlign = 'center';
          const reasonText = "서로 다른 강점으로 완벽한 조화를 이룹니다";
          ctx.fillText(reasonText, centerX, compatY + 10);
        }
        
        y += 160;
      }

      // 연애 스타일
      if (result.result.loveStyle) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 140);
        
        ctx.fillStyle = '#ec4899';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💝 연애 스타일', centerX, y + 35);
        
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        
        // 텍스트를 프레임 안에 맞게 줄바꿈
        const loveText = result.result.loveStyle;
        const maxLoveWidth = canvas.width - margin * 2 - 60;
        const words = loveText.split(' ');
        let currentLine = '';
        let loveY = y + 65;
        
        for (let i = 0; i < words.length && loveY < y + 120; i++) {
          const testLine = currentLine + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxLoveWidth && i > 0) {
            ctx.fillText(currentLine, centerX, loveY);
            currentLine = words[i] + ' ';
            loveY += 22;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine && loveY < y + 120) {
          ctx.fillText(currentLine, centerX, loveY);
        }
        
        y += 160;
      }

      // 유명인물
      if (result.result.celebrities && result.result.celebrities.length > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 90);
        
        ctx.fillStyle = '#f59e0b';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('⭐ 유명 인물', centerX, y + 35);
        
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        const celebrityText = result.result.celebrities.join(', ');
        ctx.fillText(celebrityText, centerX, y + 65);
        
        y += 110;
      }

      // 직업/진로 추천
      if (result.result.careers && result.result.careers.length > 0) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 90);
        
        ctx.fillStyle = '#8b5cf6';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('💼 직업/진로 추천', centerX, y + 35);
        
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        const careerText = result.result.careers.join(', ');
        ctx.fillText(careerText, centerX, y + 65);
        
        y += 110;
      }

      // 동물 비유
      if (result.result.animalMetaphor) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 140);
        
        ctx.fillStyle = '#10b981';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🐾 동물에 비유하면', centerX, y + 35);
        
        ctx.fillStyle = '#374151';
        ctx.font = '18px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        
        // 텍스트를 프레임 안에 맞게 줄바꿈
        const animalText = result.result.animalMetaphor;
        const maxAnimalWidth = canvas.width - margin * 2 - 60;
        const words = animalText.split(' ');
        let currentLine = '';
        let animalY = y + 65;
        
        for (let i = 0; i < words.length && animalY < y + 120; i++) {
          const testLine = currentLine + words[i] + ' ';
          const metrics = ctx.measureText(testLine);
          
          if (metrics.width > maxAnimalWidth && i > 0) {
            ctx.fillText(currentLine, centerX, animalY);
            currentLine = words[i] + ' ';
            animalY += 22;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine && animalY < y + 120) {
          ctx.fillText(currentLine, centerX, animalY);
        }
        
        y += 160;
      }

      // 전체 통계
      if (result.result.percentage) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(margin, y, canvas.width - margin * 2, 110);
        
        ctx.fillStyle = '#6366f1';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('📊 전체 통계', centerX, y + 35);
        
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 32px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`${result.result.percentage}%`, centerX, y + 75);
        
        ctx.fillStyle = '#374151';
        ctx.font = '16px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(result.result.rarity || `전체 중 ${result.result.percentage}%의 희귀한 유형`, centerX, y + 100);
      }

    } else if (result.testId === 'intuition_test') {
      // 눈치력 테스트 전용 상세 이미지
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#f0fdf4');
      gradient.addColorStop(0.3, '#eff6ff');
      gradient.addColorStop(0.7, '#fef3ff');
      gradient.addColorStop(1, '#f9fafb');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 여백 설정
      const margin = 80;
      const contentWidth = canvas.width - (margin * 2);
      const centerX = canvas.width / 2;
      
      ctx.fillStyle = '#1f2937';
      ctx.textAlign = 'center';
      let y = margin + 60;

      // 헤더
      ctx.font = 'bold 40px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText('눈치력 테스트 결과', centerX, y);
      y += 80;

      // 이모지
      ctx.font = '100px Arial';
      ctx.fillText(result.result.emoji, centerX, y);
      y += 120;

      // 제목
      ctx.font = 'bold 48px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(result.result.title, centerX, y);
      y += 80;

      // 점수 표시
      const scores = result.scores;
      const score = Math.round(scores?.score || 0);
      
      ctx.font = 'bold 60px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#059669';
      ctx.fillText(`점수: ${score}/10`, centerX, y);
      y += 90;

      // 등급 정보
      const gradeInfo = [
        { name: "눈치력 천재", emoji: "🧠", min: 9, desc: "최상급 눈치력" },
        { name: "눈치력 고수", emoji: "⭐", min: 8, desc: "매우 높은 눈치력" },
        { name: "눈치력 우수", emoji: "👍", min: 7, desc: "우수한 눈치력" },
        { name: "눈치력 보통", emoji: "😊", min: 6, desc: "평균적인 눈치력" },
        { name: "눈치력 초보", emoji: "🌱", min: 5, desc: "노력이 필요함" },
        { name: "사회성 훈련 필요", emoji: "📚", min: 0, desc: "더 많은 연습이 필요함" }
      ];

      const currentGrade = gradeInfo.find(grade => 
        score >= grade.min && (grade.min === 10 || score < gradeInfo[gradeInfo.indexOf(grade) - 1]?.min)
      ) || gradeInfo[gradeInfo.length - 1];

      ctx.font = 'bold 36px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#7c3aed';
      ctx.fillText(`등급: ${currentGrade.name}`, centerX, y);
      y += 80;

      // 설명 (여러 줄 처리)
      ctx.font = '28px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#374151';
      const words = result.result.description.split(' ');
      let line = '';
      const maxWidth = contentWidth - 100;
      
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && i > 0) {
          ctx.fillText(line, centerX, y);
          line = words[i] + ' ';
          y += 40;
        } else {
          line = testLine;
        }
      }
      if (line) {
        ctx.fillText(line, centerX, y);
        y += 60;
      }

      // 반응속도 분석
      if (result.averageReactionTime) {
        ctx.font = 'bold 30px "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#dc2626';
        ctx.fillText('반응속도 분석', centerX, y);
        y += 50;
        
        ctx.font = '24px "Malgun Gothic", Arial, sans-serif';
        ctx.fillStyle = '#374151';
        ctx.fillText(`평균 반응속도: ${result.averageReactionTime.toFixed(0)}ms`, centerX, y);
        y += 40;
        
        const speedGrade = result.averageReactionTime < 500 ? '매우 빠름' :
                          result.averageReactionTime < 700 ? '빠름' :
                          result.averageReactionTime < 900 ? '보통' : '느림';
        ctx.fillText(`반응속도 등급: ${speedGrade}`, centerX, y);
        y += 60;
      }

      // 등급표 시각화
      ctx.font = 'bold 28px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#1f2937';
      ctx.fillText('눈치력 등급표', centerX, y);
      y += 50;

      // 등급표 막대 그래프
      const barWidth = Math.min(450, contentWidth - 100);
      const barHeight = 40;
      const barX = (canvas.width - barWidth) / 2;
      
      // 배경 막대
      ctx.fillStyle = '#e5e7eb';
      ctx.fillRect(barX, y, barWidth, barHeight);
      
      // 점수 막대
      const scoreWidth = (score / 10) * barWidth;
      const scoreGradient = ctx.createLinearGradient(barX, y, barX + barWidth, y);
      scoreGradient.addColorStop(0, '#10b981');
      scoreGradient.addColorStop(0.5, '#3b82f6');
      scoreGradient.addColorStop(1, '#8b5cf6');
      ctx.fillStyle = scoreGradient;
      ctx.fillRect(barX, y, scoreWidth, barHeight);
      
      // 점수 마커
      ctx.fillStyle = '#fbbf24';
      ctx.beginPath();
      ctx.arc(barX + scoreWidth, y + barHeight / 2, 15, 0, Math.PI * 2);
      ctx.fill();
      
      y += barHeight + 50;

      // 등급 라벨들 (간격 조정)
      ctx.font = '20px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#374151';
      gradeInfo.forEach((grade, index) => {
        const isCurrentGrade = grade === currentGrade;
        if (isCurrentGrade) {
          ctx.fillStyle = '#dc2626';
          ctx.font = 'bold 22px "Malgun Gothic", Arial, sans-serif';
        } else {
          ctx.fillStyle = '#6b7280';
          ctx.font = '20px "Malgun Gothic", Arial, sans-serif';
        }
        ctx.fillText(`${grade.emoji} ${grade.name} (${grade.min}점 이상)`, centerX, y);
        y += 35;
      });

    } else {
      // 일반 테스트 이미지
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(1, '#764ba2');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      let y = 200;

      // 이모지
      ctx.font = '80px Arial';
      ctx.fillText(result.result.emoji, canvas.width / 2, y);
      y += 120;

      // 제목
      ctx.font = 'bold 42px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(`당신은 ${result.result.title}입니다!`, canvas.width / 2, y);
      y += 80;

      // 설명
      ctx.font = '30px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(result.result.description, canvas.width / 2, y);
    }

    // 다운로드
    const link = document.createElement('a');
    link.download = `${result.result.title}_결과.png`;
    link.href = canvas.toDataURL();
    link.click();
    
    showNotification('이미지가 다운로드되었습니다!');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white rounded-3xl p-8 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
        <div className="text-center mb-6">
          <div className="text-4xl mb-4">{result.result.emoji}</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">결과 공유하기</h3>
          <p className="text-gray-600">친구들과 함께 재미있는 테스트를 즐겨보세요!</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={shareToKakao}
            className="flex items-center gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-2xl transition-colors"
          >
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-white">💬</span>
            </div>
            <span className="font-semibold text-gray-800">카카오톡</span>
          </button>
          
          <button
            onClick={shareToFacebook}
            className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors"
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white">📘</span>
            </div>
            <span className="font-semibold text-gray-800">페이스북</span>
          </button>
          
          <button
            onClick={shareToTwitter}
            className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors"
          >
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white">🐦</span>
            </div>
            <span className="font-semibold text-gray-800">트위터</span>
          </button>
          
          <button
            onClick={shareToInstagram}
            className="flex items-center gap-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-2xl transition-colors"
          >
            <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white">📷</span>
            </div>
            <span className="font-semibold text-gray-800">인스타그램</span>
          </button>
        </div>
        
        <button
          onClick={copyLink}
          className="w-full bg-green-50 hover:bg-green-100 text-green-800 py-3 rounded-2xl font-semibold transition-all mb-4"
        >
          <span className="mr-2">🔗</span>텍스트와 링크 복사하기
        </button>
        
        <button
          onClick={downloadImage}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all mb-4"
        >
          <span className="mr-2">📷</span>결과 이미지 생성
        </button>
        
        <button
          onClick={onClose}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
        >
          닫기
        </button>

        {notification && (
          <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
}