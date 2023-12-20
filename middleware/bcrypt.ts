import bcrypt from 'bcryptjs';

import { MW } from '../types';

// 加密中间件
const encryption: MW = async (
  ctx,
  next
) => {
  ctx.bcrypt = bcrypt;

  await next();
};

export default encryption;
