import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalculatedResult } from '../types/test';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculatedResult;
}

export function ShareModal({ isOpen, onClose, result }: ShareModalProps) {
  const [notification, setNotification] = useState<string>('');

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const shareToKakao = async () => {
    const text = `나는 ${result.result.title}입니다! ${result.result.description}`;
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
    canvas.height = 1920;

    // 배경 설정
    if (result.testId === 'intuition_test') {
      // 눈치력 테스트 배경
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#f0fdf4');
      gradient.addColorStop(0.5, '#eff6ff');
      gradient.addColorStop(1, '#faf5ff');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      // 일반 테스트 배경
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#667eea');
      gradient.addColorStop(1, '#764ba2');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 텍스트 설정
    ctx.fillStyle = result.testId === 'intuition_test' ? '#1f2937' : 'white';
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