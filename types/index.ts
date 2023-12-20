import {
  Context,
  Middleware
} from 'koa';

export {
  GlobalConfig
} from './config';

export type MW = Middleware;
export type Service = (ctx: Context, ...args: any) => ReturnType<MW>;


