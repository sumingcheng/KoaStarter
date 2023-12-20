import Redis from 'ioredis';
import { MW } from '../types';

// 创建 Redis 客户端实例
const redisClient = new Redis();

redisClient.on('error', (e: Error) => {
  console.error('Redis client encountered an error:', e);

  if (e.message === 'ERR invalid password') {
    console.error('Fatal error: Invalid Redis password. Stopping server.');
    process.exit(1);
  }
});

const redisMiddleware: MW = async (ctx, next) => {
  if (!ctx.config?.redis) {
    console.error('Missing Redis configuration in the context.');
    throw new Error('Redis configuration not found.');
  }

  // 根据上下文中的配置初始化 Redis 客户端
  ctx.redis = new Redis(ctx.config.redis);

  // 继续处理请求
  await next();
};

export default redisMiddleware;
