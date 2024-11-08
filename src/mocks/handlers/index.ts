import { AutoHandler } from './auto';
import { FetchShortsHandler } from './main';

export const handlers = [...AutoHandler, ...FetchShortsHandler];
