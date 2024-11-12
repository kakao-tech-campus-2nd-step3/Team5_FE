import { AddHandler } from '@/pages/add/mocks';
import { AutoHandler } from '@/pages/auto/mocks';
import { FetchShortsHandler } from '@/pages/main/mocks';
import {
  FetchCommentsHandler,
  PostCommentsHandler,
  ViewShortsHandler,
} from '@/pages/viewer/mocks';

export const handlers = [
  ...AddHandler,
  ...AutoHandler,
  ...FetchShortsHandler,
  ...ViewShortsHandler,
  ...FetchCommentsHandler,
  ...PostCommentsHandler,
];
