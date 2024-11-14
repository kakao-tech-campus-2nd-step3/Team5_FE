import { z } from 'zod';

export const ProfileSchema = z.object({
  gender: z.enum(['남자', '여자'], {
    errorMap: () => ({ message: '성별을 선택해주세요.' }),
  }),
  age: z.enum(['10대', '20대', '30대', '40대', '50대 이상'], {
    errorMap: () => ({ message: '연령대를 선택해주세요.' }),
  }),
  category: z
    .array(z.enum(['음식', '여행', '게임', '음악', '스포츠']))
    .length(3, {
      message: '선호 카테고리를 정확히 세 개 선택해주세요.',
    }),
});
