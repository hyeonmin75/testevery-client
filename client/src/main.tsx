import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Redirect to the Next.js app
window.location.href = '/'

// Fallback content
function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        width: '90%'
      }}>
        <h1 style={{ color: '#1f2937', marginBottom: '1rem', fontSize: '2rem', fontWeight: '700' }}>
          TestEvery
        </h1>
        <p style={{ color: '#6b7280', marginBottom: '2rem', lineHeight: '1.6' }}>
          창의력과 심리 테스트 플랫폼에 오신 것을 환영합니다.
        </p>
        <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
          잠시 후 메인 사이트로 이동됩니다...
        </p>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)