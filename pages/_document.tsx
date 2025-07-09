import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* 폰트 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        
        {/* 파비콘 */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Progressive Web App 및 Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="모두의 테스트" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google AdSense 위치 */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9110596823822061"
          crossOrigin="anonymous"
        /> */}
        
        {/* SEO 최적화를 위한 추가 메타 태그 */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="모두의 테스트 - 심리학 교육 센터" />
        <meta name="publisher" content="testevery.com" />
        <meta name="theme-color" content="#8B5CF6" />
        <meta name="msapplication-TileColor" content="#8B5CF6" />
        
        {/* 구조화된 데이터를 위한 JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "모두의 테스트",
              "url": "https://testevery.com",
              "description": "과학적 심리학 교육과 신뢰성 높은 성격 분석을 제공하는 전문 플랫폼입니다.",
              "publisher": {
                "@type": "Organization",
                "name": "모두의 테스트",
                "url": "https://testevery.com"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://testevery.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Naver Analytics */}
        <script type="text/javascript" src="//wcs.naver.net/wcslog.js" />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              if(!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "6dc0bf68d89b40";
              if(window.wcs) {
                wcs_do();
              }
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}