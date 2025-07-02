import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 폰트 로드 */}
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
        
        {/* 기본 메타 태그 */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://testevery.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JV0EYSP06D"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JV0EYSP06D');
          `}
        </Script>
        
        {/* Google AdSense - 승인 후 활성화 */}
        {/* <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9110596823822061"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        /> */}
      </body>
    </Html>
  )
}