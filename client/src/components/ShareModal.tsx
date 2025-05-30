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

    canvas.width = 800;
    canvas.height = 600;

    // 배경 그라데이션
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 텍스트 설정
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    
    // 이모지와 제목
    ctx.font = '72px Arial';
    ctx.fillText(result.result.emoji, canvas.width / 2, 150);
    
    ctx.font = 'bold 36px Arial';
    ctx.fillText(result.result.title, canvas.width / 2, 250);
    
    ctx.font = '24px Arial';
    const maxWidth = 600;
    const lineHeight = 35;
    const words = result.result.description.split(' ');
    let line = '';
    let y = 320;
    
    for (let n = 0; n < words.length; n++) {
      const testLine = line + words[n] + ' ';
      const metrics = ctx.measureText(testLine);
      const testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        ctx.fillText(line, canvas.width / 2, y);
        line = words[n] + ' ';
        y += lineHeight;
      } else {
        line = testLine;
      }
    }
    ctx.fillText(line, canvas.width / 2, y);

    // 하단 텍스트
    ctx.font = '20px Arial';
    ctx.fillText('심리테스트 모음집', canvas.width / 2, canvas.height - 50);

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
