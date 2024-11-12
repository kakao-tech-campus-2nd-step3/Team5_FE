import { http, HttpResponse } from 'msw';

import type { AddInfoProps } from '@/pages/add/apis';

export const AddHandler = [
  http.post('/api/additional-info', async ({ request }) => {
    const { categories, age, gender } = (await request.json()) as AddInfoProps;

    if (!categories || !age || !gender) {
      return HttpResponse.json(
        { message: 'info is required' },
        { status: 400 }
      );
    }

    return HttpResponse.json({
      categories: [
        { id: 0, name: '여행' },
        { id: 1, name: '스포츠' },
        { id: 2, name: '음식' },
      ],
      age: '26',
      gender: '남성',
    });
  }),
];
