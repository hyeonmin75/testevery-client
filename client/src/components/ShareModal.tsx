import { motion, AnimatePresence } from 'framer-motion';
import { CalculatedResult } from '../types/test';
import { useToast } from '../hooks/use-toast';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculatedResult;
}

export function ShareModal({ isOpen, onClose, result }: ShareModalProps) {
  const { toast } = useToast();
  
  const getShareUrl = () => {
    return window.location.href;
  };

  const getShareText = () => {
    return `나는 ${result.result.title}입니다! ${result.result.description} 🎯 심리테스트에서 확인해보세요!`;
  };

  const shareToKakao = async () => {
    const text = getShareText();
    const url = getShareUrl();
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: '심리테스트 결과',
          text: text,
          url: url
        });
        return;
      }
    } catch (err) {
      console.log('웹 공유 실패:', err);
    }
    
    try {
      const fullText = `${text}\n${url}`;
      await navigator.clipboard.writeText(fullText);
      toast({
        title: "복사 완료!",
        description: "텍스트와 링크가 복사되었습니다. 카카오톡에서 붙여넣기 해주세요.",
      });
    } catch (err) {
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
    const text = getShareText();
    try {
      await navigator.clipboard.writeText(text);
      toast({
        title: "복사 완료!",
        description: "텍스트가 복사되었습니다. 인스타그램에서 붙여넣기 해주세요.",
      });
    } catch (err) {
      prompt('다음 텍스트를 복사해주세요:', text);
    }
  };

  const copyLink = async () => {
    try {
      const fullText = `${getShareText()}\n${getShareUrl()}`;
      await navigator.clipboard.writeText(fullText);
      toast({
        title: "복사 완료!",
        description: "결과 텍스트와 링크가 복사되었습니다.",
      });
    } catch (err) {
      const fullText = `${getShareText()}\n${getShareUrl()}`;
      prompt('다음 텍스트를 복사해주세요:', fullText);
    }
  };

  const downloadImage = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1080;
    canvas.height = 1920;

    // 눈치력 테스트 전용 처리
    if (result.testId === 'intuition_test') {
      const score = result.scores?.score || 0;
      const reactionTimes = result.allReactionTimes || [];
      const avgReactionTime = result.averageReactionTime || 0;
      
      // 배경 그라데이션
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#f0fdf4');
      gradient.addColorStop(0.5, '#eff6ff');
      gradient.addColorStop(1, '#faf5ff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let currentY = 120;
      
      // 제목
      ctx.fillStyle = '#1f2937';
      ctx.font = 'bold 64px "Malgun Gothic", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('👀', canvas.width / 2, currentY);
      currentY += 100;
      
      ctx.font = 'bold 48px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText('눈치력 테스트 결과', canvas.width / 2, currentY);
      currentY += 120;

      // 점수 표시
      ctx.font = 'bold 96px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#7c3aed';
      ctx.fillText(`${score}/10`, canvas.width / 2, currentY);
      currentY += 80;

      // 등급 정보
      const gradeInfo = [
        { name: '눈치 핵고수', min: 10, emoji: '🧠' },
        { name: '눈치 만렙 근접', min: 8, emoji: '🎯' },
        { name: '눈치 50%', min: 6, emoji: '👁️' },
        { name: '사회성 훈련 필요', min: 3, emoji: '📚' },
        { name: '멍때리는 타입', min: 0, emoji: '😴' }
      ];
      
      const currentGrade = gradeInfo.find(grade => score >= grade.min) || gradeInfo[gradeInfo.length - 1];
      
      ctx.font = 'bold 42px "Malgun Gothic", Arial, sans-serif';
      ctx.fillStyle = '#1f2937';
      ctx.fillText(`${currentGrade.emoji} ${currentGrade.name}`, canvas.width / 2, currentY);
      currentY += 100;

      // 설명
      ctx.font = '32px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText(result.result.description, canvas.width / 2, currentY);
      currentY += 120;

      // 등급표 제목
      ctx.font = 'bold 36px "Malgun Gothic", Arial, sans-serif';
      ctx.fillText('📊 등급표', canvas.width / 2, currentY);
      currentY += 60;

      // 등급 막대 그래프
      const barWidth = 600;
      const barHeight = 40;
      const barX = (canvas.width - barWidth) / 2;
      
      gradeInfo.forEach((grade, index) => {
        const barY = currentY + (index * 60);
        
        // 막대 배경
        ctx.fillStyle = '#e5e7eb';
        ctx.fillRect(barX, barY, barWidth, barHeight);
        
        // 현재 등급 표시
        if (grade === currentGrade) {
          ctx.fillStyle = '#7c3aed';
          const fillWidth = barWidth * 0.8;
          ctx.fillRect(barX, barY, fillWidth, barHeight);
        }
        
        // 등급명
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 24px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'left';
        ctx.fillText(`${grade.emoji} ${grade.name}`, barX + 20, barY + 28);
        
        // 점수 범위
        ctx.textAlign = 'right';
        const nextMin = gradeInfo[index - 1]?.min || 11;
        const rangeText = grade.min === 10 ? '10점' : `${grade.min}-${nextMin - 1}점`;
        ctx.fillText(rangeText, barX + barWidth - 20, barY + 28);
      });
      
      currentY += gradeInfo.length * 60 + 80;

      // 반응속도 분석
      if (avgReactionTime > 0) {
        ctx.textAlign = 'center';
        ctx.font = 'bold 36px "Malgun Gothic", Arial, sans-serif';
        ctx.fillText('⚡ 반응속도 분석', canvas.width / 2, currentY);
        currentY += 60;
        
        ctx.font = '28px "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(`평균 반응속도: ${avgReactionTime}ms`, canvas.width / 2, currentY);
        
        if (avgReactionTime < 500) {
          ctx.fillText('🚀 매우 빠른 반응속도!', canvas.width / 2, currentY + 40);
        } else if (avgReactionTime < 800) {
          ctx.fillText('⚡ 빠른 반응속도', canvas.width / 2, currentY + 40);
        } else if (avgReactionTime < 1200) {
          ctx.fillText('👍 보통 반응속도', canvas.width / 2, currentY + 40);
        } else {
          ctx.fillText('🐌 느린 반응속도', canvas.width / 2, currentY + 40);
        }
      }

      const link = document.createElement('a');
      link.download = `눈치력테스트_결과.png`;
      link.href = canvas.toDataURL();
      link.click();
      return;
    }

    // 일반 테스트 처리
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    let currentY = 200;

    ctx.font = '80px Arial';
    ctx.fillText(result.result.emoji, canvas.width / 2, currentY);
    currentY += 120;

    ctx.font = 'bold 42px "Malgun Gothic", Arial, sans-serif';
    ctx.fillText(`당신은 ${result.result.title}입니다!`, canvas.width / 2, currentY);
    currentY += 80;

    ctx.font = '30px "Malgun Gothic", Arial, sans-serif';
    ctx.fillText(result.result.description, canvas.width / 2, currentY);

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
              className="flex items-center gap-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-2xl transition-colors"
            >
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white">💬</span>
              </div>
              <span className="font-semibold text-gray-800">카카오톡</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToFacebook}
              className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-2xl transition-colors"
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white">📘</span>
              </div>
              <span className="font-semibold text-gray-800">페이스북</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToTwitter}
              className="flex items-center gap-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-2xl transition-colors"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white">🐦</span>
              </div>
              <span className="font-semibold text-gray-800">트위터</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={shareToInstagram}
              className="flex items-center gap-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-2xl transition-colors"
            >
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white">📷</span>
              </div>
              <span className="font-semibold text-gray-800">인스타그램</span>
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyLink}
            className="w-full bg-green-50 hover:bg-green-100 text-green-800 py-3 rounded-2xl font-semibold transition-all mb-4"
          >
            <span className="mr-2">🔗</span>텍스트와 링크 복사하기
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={downloadImage}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-2xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all mb-4"
          >
            <span className="mr-2">📷</span>결과 이미지 생성
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