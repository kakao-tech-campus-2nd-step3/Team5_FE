import { z } from 'zod';

export const ProfileSchema = z.object({
  gender: z.enum(['남성', '여성', '그 외'], {
    errorMap: () => ({ message: '성별을 선택해주세요.' }),
  }),
  age: z.enum(['10대', '20대', '30대', '40대', '50대 이상'], {
    errorMap: () => ({ message: '연령대를 선택해주세요.' }),
  }),
  category: z.array(z.string()).min(1, {
    message: '선호 카테고리를 선택해주세요.',
  }),
});
