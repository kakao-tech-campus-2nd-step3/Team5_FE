import { AddHandler } from '@/pages/add/mocks';
import { AutoHandler } from '@/pages/auto/mocks';
import { FetchShortsHandler } from '@/pages/main/mocks';
import { ViewShortsHandler } from './viewer';
import { FetchCommentsHandler } from './viewer';
import { PostCommentsHandler } from './viewer';

export const handlers = [...AddHandler, ...AutoHandler, ...FetchShortsHandler, ...ViewShortsHandler, ...FetchCommentsHandler, ...PostCommentsHandler];
