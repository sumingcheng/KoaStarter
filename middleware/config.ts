import { globalConfig } from '../libs/config';

import { MW } from '../types';
import errorInfos from '../error/index';

// 注册上下文配置属性中间件
const config: MW = async (ctx, next) => {
  // 错误信息
  ctx.errorInfos = errorInfos;
  // 全局配置
  ctx.config = globalConfig;
  // 请求接口
  // ctx.api = api;

  await next();
};

export default config;
