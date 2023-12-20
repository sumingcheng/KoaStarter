import { globalConfig } from '../libs/config';

import { MW } from '../types';


// 注册上下文配置属性中间件
const config: MW = async (ctx, next) => {
  // ctx.errorInfos = errorInfos;
  // ctx.api = api;
  ctx.config = globalConfig;

  await next();
};

export default config;
