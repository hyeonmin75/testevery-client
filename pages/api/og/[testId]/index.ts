import { NextApiRequest, NextApiResponse } from 'next'
import testsData from '../../../../data/tests.json'
import { Test } from '../../../../utils/testUtils'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { testId } = req.query
  
  const test = testsData[testId as keyof typeof testsData] as Test
  
  if (!test) {
    return res.status(404).json({ error: 'Test not found' })
  }

  // 실제 운영 환경에서는 @vercel/og 등을 사용하여 동적 이미지 생성
  // 여기서는 간단한 HTML/CSS 기반 응답으로 대체
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            margin: 0;
            padding: 60px;
            width: 1200px;
            height: 630px;
            background: linear-gradient(135deg, #dc84f7 0%, #b232d9 100%);
            font-family: 'Noto Sans KR', sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            box-sizing: border-box;
          }
          .emoji {
            font-size: 120px;
            margin-bottom: 30px;
          }
          .title {
            font-size: 48px;
            font-weight: bold;
            margin-bottom: 20px;
            line-height: 1.2;
            max-width: 900px;
          }
          .description {
            font-size: 28px;
            margin-bottom: 40px;
            opacity: 0.9;
            max-width: 800px;
            line-height: 1.4;
          }
          .meta {
            display: flex;
            gap: 40px;
            font-size: 20px;
          }
          .site {
            position: absolute;
            bottom: 40px;
            right: 60px;
            font-size: 18px;
            opacity: 0.8;
          }
        </style>
      </head>
      <body>
        <div class="emoji">${test.emoji}</div>
        <div class="title">${test.title}</div>
        <div class="description">${test.description}</div>
        <div class="meta">
          <span>⏱ ${test.estimatedTime}</span>
          <span>👥 ${test.popularity}% 참여</span>
          <span>📂 ${test.category}</span>
        </div>
        <div class="site">www.testevery.com</div>
      </body>
    </html>
  `

  res.setHeader('Content-Type', 'text/html')
  res.status(200).send(html)
}