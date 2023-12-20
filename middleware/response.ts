import { Context } from 'koa';

import { MW } from '../types';

export interface SuccessInfo {
  code: number;
  data: any;
}

export interface ErrorInfo {
  code: number;
  msg: string;
  detail?: any;
}

// 扩展ctx上的响应体对象函数
const response: MW = async (ctx, next) => {
  // 成功的body设置
  ctx.success = setBody<SuccessInfo>(ctx);
  // 错误的body设置
  ctx.error = setBody<ErrorInfo>(ctx);

  await next();
};


function setBody<T> (ctx: Context) {
  return (info: T) => {
    ctx.body = info;
  };
}

export default response;
