import { z } from 'zod';

export const AddSchema = z.object({
  categories: z
    .array(z.string())
    .nonempty('적어도 하나 이상의 카테고리를 선택해주세요.')
    .refine((categories) => categories.length <= 3, {
      message: '카테고리는 최대 3개까지 선택 가능합니다.',
    }),
  age: z.string().min(1, '나이를 입력해주세요.'),
  gender: z.string().min(1, '성별을 입력해주세요.'),
});
