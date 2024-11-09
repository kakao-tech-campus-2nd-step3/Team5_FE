import { AddHandler } from '@/pages/add/mocks';
import { AutoHandler } from '@/pages/auto/mocks';
import { FetchShortsHandler } from './main';

export const handlers = [...AutoHandler, ...FetchShortsHandler, ...AddHandler];
