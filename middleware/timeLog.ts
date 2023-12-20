import { MW } from '../types';

// 请求与响应时间的中间件
const timeLog: MW = async (ctx, next) => {
  const start = Number(new Date());

  await next();

  const ms = Number(new Date()) - start;

  ctx.log.highlight(`${ ctx.method } ${ ctx.url } - ${ ms }ms`);
};

export default timeLog;
