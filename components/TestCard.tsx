import Link from 'next/link'
import { Test } from '../utils/testUtils'

interface TestCardProps {
  test: Test
  featured?: boolean
}

export default function TestCard({ test, featured = false }: TestCardProps) {
  const cardClasses = featured 
    ? "group relative overflow-hidden rounded-3xl p-8 gradient-threads text-white card-hover animate-glow"
    : "group relative overflow-hidden rounded-2xl p-6 bg-white shadow-lg card-hover border border-gray-100"

  const textClasses = featured 
    ? "text-white" 
    : "text-gray-900"

  return (
    <Link href={`/tests/${test.id}`} className="block">
      <div className={cardClasses}>
        {/* 배경 효과 */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        
        {/* 인기도 배지 */}
        {test.popularity > 90 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            🔥 HOT
          </div>
        )}
        
        <div className="relative z-10">
          {/* 이모지와 카테고리 */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-4xl animate-float">{test.emoji}</span>
            <span className={`text-sm font-medium px-3 py-1 rounded-full ${
              featured 
                ? 'bg-white/20 text-white' 
                : 'bg-gray-100 text-gray-600'
            }`}>
              {test.category}
            </span>
          </div>
          
          {/* 제목 */}
          <h3 className={`text-xl font-bold mb-3 leading-tight ${textClasses}`}>
            {test.title}
          </h3>
          
          {/* 설명 */}
          <p className={`text-sm mb-4 leading-relaxed ${
            featured ? 'text-white/90' : 'text-gray-600'
          }`}>
            {test.description}
          </p>
          
          {/* 메타 정보 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className={`text-xs ${
                featured ? 'text-white/80' : 'text-gray-500'
              }`}>
                ⏱ {test.estimatedTime}
              </span>
              <span className={`text-xs ${
                featured ? 'text-white/80' : 'text-gray-500'
              }`}>
                👥 {test.popularity}% 참여
              </span>
            </div>
            
            {/* 시작 버튼 */}
            <div className={`text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200 ${
              featured ? 'text-white' : 'text-threads-600'
            }`}>
              시작하기 →
            </div>
          </div>
        </div>
        
        {/* 호버 효과 */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </Link>
  )
}