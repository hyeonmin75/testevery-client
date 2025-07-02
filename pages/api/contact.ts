import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  subject: z.string().min(1, '문의 유형을 선택해주세요'),
  message: z.string().min(10, '문의 내용을 10자 이상 입력해주세요')
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const validatedData = contactSchema.parse(req.body)
    
    // 실제 구현에서는 여기에 이메일 발송 로직을 추가
    // 예: SendGrid API 호출
    console.log('Contact form submission:', validatedData)
    
    // 성공 응답
    res.status(200).json({ 
      message: '문의가 성공적으로 전송되었습니다.',
      success: true 
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        message: '입력 데이터가 올바르지 않습니다.',
        errors: error.errors 
      })
    }
    
    console.error('Contact form error:', error)
    res.status(500).json({ 
      message: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.' 
    })
  }
}