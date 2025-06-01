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

  const shareToKakao = async () => {
    const text = getShareText();
    const url = getShareUrl();
    
    // 웹 공유 API 먼저 시도
    if (navigator.share) {
      try {
        await navigator.share({
          title: '심리테스트 결과',
          text: text,
          url: url
        });
        return;
      } catch (err) {
        console.log('웹 공유 API 실패:', err);
      }
    }
    
    // 클립보드에 복사 후 알림
    try {
      const fullText = `${text}\n${url}`;
      await navigator.clipboard.writeText(fullText);
      alert('텍스트와 링크가 복사되었습니다!\n카카오톡에서 붙여넣기 해주세요.');
    } catch (err) {
      // 폴백: 프롬프트로 텍스트 표시
      const fullText = `${text}\n${url}`;
      prompt('다음 텍스트를 복사해주세요:', fullText);
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

  const shareToInstagram = async () => {
    // 인스타그램은 직접 URL 공유가 제한적이므로 텍스트 복사 후 안내
    const text = getShareText();
    try {
      await navigator.clipboard.writeText(text);
      alert('텍스트가 복사되었습니다!\n인스타그램 스토리나 게시물에 붙여넣기 해주세요.');
    } catch (err) {
      // 폴백: 프롬프트로 텍스트 표시
      prompt('다음 텍스트를 복사해주세요:', text);
    }
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

    // 고정된 안정적인 크기
    canvas.width = 1080;
    canvas.height = 1920;

    // 간단하고 깔끔한 그라데이션 배경
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 폰트 크기 설정
    const fontSize = {
      emoji: 80,
      title: 42,
      sectionTitle: 36,
      content: 28,
      description: 30,
      list: 26
    };

    // 텍스트 설정
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    let currentY = 100;
    const leftMargin = 100;
    const rightMargin = canvas.width - leftMargin;
    const maxWidth = rightMargin - leftMargin;

    // 이모지
    ctx.font = `${fontSize.emoji}px Arial`;
    ctx.fillText(result.result.emoji, canvas.width / 2, currentY);
    currentY += 120;

    // 메인 제목
    ctx.font = `bold ${fontSize.title}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
    const titleText = `당신은 ${result.result.title}입니다!`;
    ctx.fillText(titleText, canvas.width / 2, currentY);
    currentY += 80;

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

    // 상세 설명
    drawMultilineText(result.result.detailedDescription, fontSize.description, fontSize.description + 10, maxWidth * 0.9);
    currentY += 40;

    // 간단한 섹션 그리기
    const drawSection = (title: string, content: () => void) => {
      // 섹션 제목
      ctx.fillStyle = '#FFD700';
      ctx.font = `bold ${fontSize.sectionTitle}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
      ctx.fillText(title, canvas.width / 2, currentY);
      currentY += 50;
      
      // 내용
      ctx.fillStyle = 'white';
      content();
      currentY += 30;
      
      // 구분선
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(leftMargin + 100, currentY);
      ctx.lineTo(rightMargin - 100, currentY);
      ctx.stroke();
      currentY += 40;
    };

    // 특성들 표시 (traits가 있는 경우)
    if (result.result.traits && result.result.traits.length > 0) {
      drawSection('🎯 당신의 특성', () => {
        result.result.traits.forEach(trait => {
          ctx.font = `${fontSize.content}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          const traitText = `${trait.emoji} ${trait.name}: ${trait.percentage}%`;
          ctx.fillText(traitText, canvas.width / 2, currentY);
          currentY += fontSize.content + 15;
        });
      });
    }

    // 강점들 표시
    if (result.result.strengths && result.result.strengths.length > 0) {
      drawSection('✨ 당신의 강점', () => {
        result.result.strengths.forEach(strength => {
          ctx.font = `${fontSize.list}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          drawMultilineText(`• ${strength}`, fontSize.list, fontSize.list + 10, maxWidth * 0.9);
        });
      });
    }

    // 개선 사항들 표시
    if (result.result.improvements && result.result.improvements.length > 0) {
      drawSection('🚀 개선할 점', () => {
        result.result.improvements.forEach(improvement => {
          ctx.font = `${fontSize.list}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          drawMultilineText(`• ${improvement}`, fontSize.list, fontSize.list + 10, maxWidth * 0.9);
        });
      });
    }

    // 호환성 정보 표시 (compatibleTypes가 있는 경우)
    if (result.result.compatibleTypes && result.result.compatibleTypes.length > 0) {
      drawSection('💕 잘 맞는 유형', () => {
        result.result.compatibleTypes.slice(0, 3).forEach(compatible => {
          const compatText = `${compatible.emoji} ${compatible.title} (${compatible.compatibility}%)`;
          ctx.font = `${fontSize.list}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
          ctx.fillText(compatText, canvas.width / 2, currentY);
          currentY += fontSize.list + 15;
        });
      });
    }

    // 반응속도 결과 (해당하는 경우)
    if (result.averageReactionTime) {
      drawSection('⚡ 반응속도 결과', () => {
        ctx.font = `${fontSize.content}px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif`;
        ctx.fillText(`평균 반응속도: ${result.averageReactionTime}ms`, canvas.width / 2, currentY);
        currentY += fontSize.content + 15;
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
