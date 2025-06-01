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
      toast({
        title: "복사 완료!",
        description: "텍스트와 링크가 복사되었습니다. 카카오톡에서 붙여넣기 해주세요.",
      });
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
      toast({
        title: "복사 완료!",
        description: "텍스트가 복사되었습니다. 인스타그램에서 붙여넣기 해주세요.",
      });
    } catch (err) {
      // 폴백: 프롬프트로 텍스트 표시
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
      console.error('링크 복사 실패:', err);
      // 폴백: 프롬프트로 링크 표시
      const fullText = `${getShareText()}\n${getShareUrl()}`;
      prompt('다음 텍스트를 복사해주세요:', fullText);
    }
  };

  const downloadImage = () => {
    // 눈치력 테스트의 경우 화면 캡처 방식 사용
    if (result.testId === 'intuition_test') {
      // 결과 영역만 캡처 (공유하기 버튼 이전까지)
      const resultElement = document.querySelector('.min-h-screen');
      if (resultElement) {
        // HTML to canvas 라이브러리가 없으므로 간단한 캔버스 방식 사용
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 1080;
        canvas.height = 1920;

        // 눈치력 테스트 전용 이미지 생성
        const score = result.scores?.score || 0;
        
        // 배경
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, '#f0fdf4'); // green-50
        gradient.addColorStop(0.5, '#eff6ff'); // blue-50  
        gradient.addColorStop(1, '#faf5ff'); // purple-50
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 제목
        ctx.fillStyle = '#1f2937';
        ctx.font = 'bold 48px "Malgun Gothic", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('👀', canvas.width / 2, 150);
        ctx.fillText('눈치력 테스트 결과', canvas.width / 2, 220);

        // 점수 표시
        ctx.font = 'bold 72px "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(`${score}/10`, canvas.width / 2, 320);

        // 등급 표시
        const gradeInfo = [
          { name: '눈치 핵고수', min: 10, emoji: '🧠' },
          { name: '눈치 만렙 근접', min: 8, emoji: '🎯' },
          { name: '눈치 50%', min: 6, emoji: '👁️' },
          { name: '사회성 훈련 필요', min: 3, emoji: '📚' },
          { name: '멍때리는 타입', min: 0, emoji: '😴' }
        ];
        
        const currentGrade = gradeInfo.find(grade => score >= grade.min) || gradeInfo[gradeInfo.length - 1];
        
        ctx.font = 'bold 36px "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(`${currentGrade.emoji} ${currentGrade.name}`, canvas.width / 2, 420);

        // 결과 설명
        ctx.font = '28px "Malgun Gothic", Arial, sans-serif';
        ctx.fillText(result.result.description, canvas.width / 2, 500);

        const link = document.createElement('a');
        link.download = `눈치력테스트_결과.png`;
        link.href = canvas.toDataURL();
        link.click();
        return;
      }
    }

    // 일반 테스트용 캔버스 생성
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1080;
    canvas.height = 1920;

    // 그라데이션 배경
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 텍스트 설정
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    let currentY = 100;

    // 이모지
    ctx.font = '80px Arial';
    ctx.fillText(result.result.emoji, canvas.width / 2, currentY);
    currentY += 120;

    // 메인 제목
    ctx.font = 'bold 42px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif';
    const titleText = `당신은 ${result.result.title}입니다!`;
    ctx.fillText(titleText, canvas.width / 2, currentY);
    currentY += 80;

    // 설명
    ctx.font = '30px "Malgun Gothic", "Apple SD Gothic Neo", Arial, sans-serif';
    ctx.fillText(result.result.description, canvas.width / 2, currentY);

    // 이미지 다운로드
    const link = document.createElement('a');
    link.download = `${result.result.title}_결과.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <AnimatePresence>
      {isOpen && (
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
                  <span className="text-white">💬</span>
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
                  <span className="text-white">📘</span>
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
                  <span className="text-white">🐦</span>
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
                  <span className="text-white">📷</span>
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
      )}
    </AnimatePresence>
  );
}