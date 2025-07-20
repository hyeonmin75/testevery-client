import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-JV0EYSP06D"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-JV0EYSP06D');
            `,
          }}
        />
        
        {/* Google AdSense */}
        {/* <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9110596823822061"
          crossOrigin="anonymous"
        /> */}
        
        {/* Naver Search Advisor */}
        <meta name="naver-site-verification" content="a735df783e806fd4d0666538bd6fa0b49d4a7833" />
        
        {/* 기본 메타 태그 */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://testevery.com" />
        
        {/* 다국어 지원 */}
        <link rel="alternate" hreflang="ko" href="https://testevery.com" />
        <link rel="alternate" hreflang="en" href="https://testevery.com" />
        <link rel="alternate" hreflang="x-default" href="https://testevery.com" />
      </Head>
      
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </>
  );
}