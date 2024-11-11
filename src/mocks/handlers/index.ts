import { AutoHandler } from './auto';
import { FetchShortsHandler } from './main';
import { ViewShortsHandler } from './viewer';

export const handlers = [...AutoHandler, ...FetchShortsHandler, ...ViewShortsHandler];
