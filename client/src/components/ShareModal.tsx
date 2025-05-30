import { motion, AnimatePresence } from 'framer-motion';
import { CalculatedResult } from '../types/test';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculatedResult;
}

export function ShareModal({ isOpen, onClose, result }: ShareModalProps) {
  const getShareUrl = () => {
    return window.location.href;
  };

  const getShareText = () => {
    return `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
  };

  const shareToKakao = () => {
    const text = getShareText();
    const url = getShareUrl();
    
    // 카카오톡 공유를 위한 웹 공유 API 또는 URL 스키마 사용
    if (navigator.share) {
      navigator.share({
        title: '심리테스트 결과',
        text: text,
        url: url
      }).catch(err => console.log('카카오톡 공유 실패:', err));
    } else {
      // 모바일에서 카카오톡 앱으로 공유
      const kakaoUrl = `kakaotalk://share?text=${encodeURIComponent(text + ' ' + url)}`;
      window.location.href = kakaoUrl;
    }
  };

  const shareToFacebook = () => {
    const url = encodeURIComponent(getShareUrl());
    const text = encodeURIComponent(getShareText());
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const shareToTwitter = () => {
    const text = encodeURIComponent(getShareText());
    const url = encodeURIComponent(getShareUrl());
    const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const shareToInstagram = () => {
    // 인스타그램은 직접 URL 공유가 제한적이므로 텍스트 복사 후 안내
    const text = getShareText();
    navigator.clipboard.writeText(text).then(() => {
      alert('텍스트가 복사되었습니다! 인스타그램 앱에서 붙여넣기 해주세요.');
      // 인스타그램 앱 열기 시도
      window.open('instagram://app', '_blank');
    }).catch(() => {
      alert('복사에 실패했습니다. 수동으로 텍스트를 복사해주세요.');
    });
  };

  const copyLink = async () => {
    try {
      const fullText = `${getShareText()}\n${getShareUrl()}`;
      await navigator.clipboard.writeText(fullText);
      alert('결과 텍스트와 링크가 복사되었습니다!');
    } catch (err) {
      console.error('링크 복사 실패:', err);
      // 폴백: 프롬프트로 링크 표시
      const fullText = `${getShareText()}\n${getShareUrl()}`;
      prompt('다음 텍스트를 복사해주세요:', fullText);
    }
  };

  const downloadImage = () => {
    // 캔버스를 사용하여 결과 이미지 생성
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 콘텐츠 양에 따라 동적으로 높이 계산 - 더 정확한 계산
    let estimatedHeight = 300; // 헤더 영역
    
    // 제목과 설명 영역
    estimatedHeight += 200;
    
    // 각 섹션별 높이 추정
    if (result.result.traits?.length) {
      estimatedHeight += 100 + (result.result.traits.length * 50);
    }
    if (result.result.strengths?.length) {
      estimatedHeight += 100 + (result.result.strengths.length * 60);
    }
    if (result.result.improvements?.length) {
      estimatedHeight += 100 + (result.result.improvements.length * 60);
    }
    if (result.result.compatibleTypes?.length) {
      estimatedHeight += 100 + (Math.min(result.result.compatibleTypes.length, 3) * 50);
    }
    if (result.averageReactionTime) {
      estimatedHeight += 150;
    }
    
    // 여백 추가
    estimatedHeight += 100;

    canvas.width = 1080;
    canvas.height = Math.max(estimatedHeight, 800); // 최소 높이 보장

    // 더 아름다운 그라데이션 배경
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(0.3, '#764ba2');
    gradient.addColorStop(0.7, '#667eea');
    gradient.addColorStop(1, '#5b4b8a');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 우아한 장식 요소들 추가
    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const size = Math.random() * 20 + 10;
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    // 상단과 하단에 미묘한 하이라이트
    const topGradient = ctx.createLinearGradient(0, 0, 0, 100);
    topGradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)');
    topGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = topGradient;
    ctx.fillRect(0, 0, canvas.width, 100);

    // 반응형 설정 - 화면 크기에 따른 조정
    const isMobile = canvas.width <= 768;
    const fontSize = {
      emoji: isMobile ? 80 : 100,
      title: isMobile ? 36 : 48,
      sectionTitle: isMobile ? 30 : 38,
      content: isMobile ? 24 : 32,
      description: isMobile ? 26 : 32,
      list: isMobile ? 22 : 28
    };

    // 텍스트 설정
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    let currentY = 120;
    const leftMargin = isMobile ? 80 : 120;
    const rightMargin = canvas.width - leftMargin;
    const maxWidth = rightMargin - leftMargin;

    // 이모지 - 더 크고 멋지게
    ctx.font = `${fontSize.emoji}px Arial`;
    ctx.fillText(result.result.emoji, canvas.width / 2, currentY);
    currentY += fontSize.emoji + 40;

    // 메인 제목 - 그림자 효과와 함께
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;
    
    ctx.font = `bold ${fontSize.title}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
    const titleText = `당신은 ${result.result.title}입니다!`;
    
    // 제목이 길면 두 줄로 나누기
    const titleWords = titleText.split(' ');
    if (ctx.measureText(titleText).width > maxWidth * 0.9) {
      const midPoint = Math.ceil(titleWords.length / 2);
      const firstLine = titleWords.slice(0, midPoint).join(' ');
      const secondLine = titleWords.slice(midPoint).join(' ');
      ctx.fillText(firstLine, canvas.width / 2, currentY);
      currentY += fontSize.title + 15;
      ctx.fillText(secondLine, canvas.width / 2, currentY);
    } else {
      ctx.fillText(titleText, canvas.width / 2, currentY);
    }
    
    // 그림자 효과 제거
    ctx.shadowColor = 'transparent';
    ctx.shadowBlur = 0;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    
    currentY += fontSize.title + 50;

    // 한국어 텍스트를 여러 줄로 나누어 표시 - 반응형 개선 버전
    const drawMultilineText = (text: string, textFontSize: number, lineHeight: number, maxTextWidth: number, isBold: boolean = false) => {
      const fontWeight = isBold ? 'bold' : 'normal';
      ctx.font = `${fontWeight} ${textFontSize}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
      
      // 텍스트를 단어별로 분할하여 줄바꿈 처리
      const words = text.split(' ');
      let currentLine = '';
      
      for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + (currentLine ? ' ' : '') + words[i];
        const metrics = ctx.measureText(testLine);
        
        if (metrics.width > maxTextWidth && currentLine) {
          // 현재 줄 출력
          ctx.fillText(currentLine.trim(), canvas.width / 2, currentY);
          currentY += lineHeight;
          currentLine = words[i];
          
          // 단일 단어가 너무 긴 경우 강제로 줄바꿈
          while (ctx.measureText(currentLine).width > maxTextWidth && currentLine.length > 10) {
            const breakPoint = Math.floor(currentLine.length * 0.7);
            ctx.fillText(currentLine.substring(0, breakPoint), canvas.width / 2, currentY);
            currentLine = currentLine.substring(breakPoint);
            currentY += lineHeight;
          }
        } else {
          currentLine = testLine;
        }
      }
      
      // 마지막 줄 출력
      if (currentLine.trim()) {
        ctx.fillText(currentLine.trim(), canvas.width / 2, currentY);
        currentY += lineHeight;
      }
    };

    // 상세 설명 - 더 넓은 여백과 깔끔한 레이아웃
    drawMultilineText(result.result.detailedDescription, fontSize.description, fontSize.description + 18, maxWidth * 0.85);
    currentY += 60;

    // 섹션별로 우아한 카드 스타일 - 더 깔끔하고 예쁘게
    const drawSection = (title: string, content: () => void) => {
      // 섹션 시작 여백
      currentY += 20;
      
      // 섹션 배경 카드 그리기
      const cardPadding = 40;
      const cardStartY = currentY - 15;
      let contentStartY = currentY;
      
      // 내용 높이 미리 계산을 위한 임시 Y 저장
      const tempY = currentY;
      currentY += fontSize.sectionTitle + 35;
      content();
      const cardHeight = currentY - cardStartY + 25;
      currentY = tempY; // Y 위치 복원
      
      // 반투명 카드 배경
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.beginPath();
      ctx.roundRect(leftMargin - cardPadding, cardStartY, rightMargin - leftMargin + (cardPadding * 2), cardHeight, 20);
      ctx.fill();
      
      // 카드 테두리
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // 섹션 제목 - 그라데이션 효과
      const titleGradient = ctx.createLinearGradient(0, currentY, 0, currentY + fontSize.sectionTitle);
      titleGradient.addColorStop(0, '#FFD700');
      titleGradient.addColorStop(1, '#FFA500');
      ctx.fillStyle = titleGradient;
      ctx.font = `bold ${fontSize.sectionTitle}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
      ctx.fillText(title, canvas.width / 2, currentY);
      currentY += fontSize.sectionTitle + 35;
      
      // 내용
      ctx.fillStyle = 'white';
      content();
      currentY += 40;
    };

    // 특성들 표시 (traits가 있는 경우)
    if (result.result.traits && result.result.traits.length > 0) {
      drawSection('🎯 당신의 특성', () => {
        result.result.traits.forEach((trait, index) => {
          ctx.font = `${fontSize.content}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          const traitText = `${trait.emoji} ${trait.name}: ${trait.percentage}%`;
          
          // 특성 텍스트가 길면 줄바꿈
          if (ctx.measureText(traitText).width > maxWidth * 0.8) {
            drawMultilineText(traitText, fontSize.content, fontSize.content + 20, maxWidth * 0.75);
          } else {
            ctx.fillText(traitText, canvas.width / 2, currentY);
            currentY += fontSize.content + 25;
          }
          
          // 특성 간 추가 여백
          if (index < result.result.traits.length - 1) {
            currentY += 10;
          }
        });
      });
    }

    // 강점들 표시
    if (result.result.strengths && result.result.strengths.length > 0) {
      drawSection('✨ 당신의 강점', () => {
        result.result.strengths.forEach((strength, index) => {
          drawMultilineText(`• ${strength}`, fontSize.list, fontSize.list + 20, maxWidth * 0.8);
          
          // 강점 간 추가 여백
          if (index < result.result.strengths.length - 1) {
            currentY += 15;
          }
        });
      });
    }

    // 개선 사항들 표시
    if (result.result.improvements && result.result.improvements.length > 0) {
      drawSection('🚀 개선할 점', () => {
        result.result.improvements.forEach((improvement, index) => {
          drawMultilineText(`• ${improvement}`, fontSize.list, fontSize.list + 20, maxWidth * 0.8);
          
          // 개선사항 간 추가 여백
          if (index < result.result.improvements.length - 1) {
            currentY += 15;
          }
        });
      });
    }

    // 호환성 정보 표시 (compatibleTypes가 있는 경우)
    if (result.result.compatibleTypes && result.result.compatibleTypes.length > 0) {
      drawSection('💕 잘 맞는 유형', () => {
        result.result.compatibleTypes.slice(0, 3).forEach((compatible, index) => {
          const compatText = `${compatible.emoji} ${compatible.title} (${compatible.compatibility}%)`;
          ctx.font = `${fontSize.list}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          
          if (ctx.measureText(compatText).width > maxWidth * 0.8) {
            drawMultilineText(compatText, fontSize.list, fontSize.list + 20, maxWidth * 0.75);
          } else {
            ctx.fillText(compatText, canvas.width / 2, currentY);
            currentY += fontSize.list + 25;
          }
          
          // 호환성 간 추가 여백
          if (index < Math.min(result.result.compatibleTypes.length, 3) - 1) {
            currentY += 10;
          }
        });
      });
    }

    // 반응속도 결과 (해당하는 경우)
    if (result.averageReactionTime) {
      drawSection('⚡ 반응속도 결과', () => {
        ctx.font = `${fontSize.content}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
        ctx.fillText(`평균 반응속도: ${result.averageReactionTime}ms`, canvas.width / 2, currentY);
        currentY += fontSize.content + 25;
      });
    }

    // 이미지 다운로드
    const link = document.createElement('a');
    link.download = `${result.result.title}_결과.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white rounded-3xl p-8 max-w-md w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center mb-6">
            <div className="text-4xl mb-4">{result.result.emoji}</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">결과 공유하기</h3>
            <p className="text-gray-600">친구들과 함께 재미있는 테스트를 즐겨보세요!</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToKakao}
              className="flex items-center gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-2xl transition-colors break-keep"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <i className="fas fa-comment text-white"></i>
              </div>
              <span className="font-semibold text-gray-800 break-keep">카카오톡</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToFacebook}
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors break-keep"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="fab fa-facebook-f text-white"></i>
              </div>
              <span className="font-semibold text-gray-800 break-keep">페이스북</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToTwitter}
              className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors break-keep"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <i className="fab fa-twitter text-white"></i>
              </div>
              <span className="font-semibold text-gray-800 break-keep">트위터</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToInstagram}
              className="flex items-center gap-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-2xl transition-colors break-keep"
            >
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <i className="fab fa-instagram text-white"></i>
              </div>
              <span className="font-semibold text-gray-800 break-keep">인스타그램</span>
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyLink}
            className="w-full bg-green-50 hover:bg-green-100 text-green-800 py-3 rounded-2xl font-semibold transition-all mb-4 break-keep"
          >
            <i className="fas fa-link mr-2"></i>텍스트와 링크 복사하기
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={downloadImage}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all mb-4"
          >
            <i className="fas fa-image mr-2"></i>결과 이미지 생성
          </motion.button>
          
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition-colors"
          >
            닫기
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
