import { http, HttpResponse } from 'msw';

import type { ShortsVideoProps } from '@/pages/main/apis/fetchShortsList.api';

import mockImg from '@/assets/shorts_img.png';

export const FetchShortsHandler = [
  http.get('/api/videos', async ({ request }) => {
    const url = new URL(request.url);
    const categoryId = Number(url.searchParams.get('categoryId') ?? '0');
    const page = Number(url.searchParams.get('page') ?? '0');
    const size = Number(url.searchParams.get('size') ?? '5');

    if (categoryId === 0) {
      return HttpResponse.json(
        { message: 'Category ID is required' },
        { status: 400 }
      );
    }

    const mockData: ShortsVideoProps[] = Array.from(
      { length: 50 },
      (_, index) => ({
        videoId: index + 1,
        thumbnail: mockImg,
        title: `Mocking Data ${index + 1}`,
        memberId: index % 5,
        createdAt: new Date().toISOString(),
      })
    );

    const start = page * size;
    const end = start + size;
    const filteredData = mockData.slice(start, end);

    return HttpResponse.json(filteredData);
  }),
];
