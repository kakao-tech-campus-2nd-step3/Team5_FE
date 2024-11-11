import { AutoHandler } from './auto';
import { FetchShortsHandler } from './main';
import { ViewShortsHandler } from './viewer';
import { FetchCommentsHandler } from './viewer';

export const handlers = [...AutoHandler, ...FetchShortsHandler, ...ViewShortsHandler, ...FetchCommentsHandler];
