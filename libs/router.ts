import Router from 'koa-router';

import { Method } from '../middleware/http';

import { MW } from '../types';


// 用户注册route的数据结构
export type Route = [ Method, string, MW[] ];

const router = new Router();

/**
 * 批量处理初始化路由函数
 * @param { Route[] } routes 路由数组
 * @returns 路由对象
 */
export function initialRoutes (routes: Route[]) {
  for (let i = 0; i < routes.length; i++) {
    const [ method, url, middlewares ] = routes[i];
    router[method](url, ...middlewares);
  }
  return router;
}



