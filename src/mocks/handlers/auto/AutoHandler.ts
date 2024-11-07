import { http, HttpResponse } from 'msw';

import type { UrlOnlyProps } from '@/pages/auto/apis';

export const AutoHandler = [
  http.post('/api/videos/youtube-url-validation', async ({ request }) => {
    const { url } = (await request.json()) as UrlOnlyProps;

    if (!url) {
      return HttpResponse.json({ message: 'URL is required' }, { status: 400 });
    }

    return HttpResponse.json({
      title: 'Title',
      user: 'User',
      url: 'https://www.youtube.com/embed/Y7xC3PlWfq0?si=h04zH0xQX-HB1jlD',
    });
  }),
];
