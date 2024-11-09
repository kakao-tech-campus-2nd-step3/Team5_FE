import { AddHandler } from '@/pages/add/mocks';
import { AutoHandler } from '@/pages/auto/mocks';
import { FetchShortsHandler } from '@/pages/main/mocks';

export const handlers = [...AutoHandler, ...FetchShortsHandler, ...AddHandler];
