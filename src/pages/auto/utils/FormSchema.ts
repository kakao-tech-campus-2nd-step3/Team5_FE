import { z } from 'zod';

export const FormSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: '제목은 필수로 입력하셔야 합니다.',
    })
    .max(100, {
      message: '제목은 100자 이하로 입력하셔야 합니다.',
    }),
  category: z.string(),
  link: z
    .string()
    .url({ message: '올바른 URL 형식이어야 합니다.' })
    .optional()
    .or(z.literal(''))
    .refine((val) => !val || val.startsWith('https://'), {
      message: 'URL은 https로 시작해야 합니다.',
    }),
  keywords: z.string().optional(),
});
