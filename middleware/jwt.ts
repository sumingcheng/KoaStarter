import jwt from 'jsonwebtoken';

import { MW } from '../types';

// 扩展ctx中jwt相关方法
const jsonWebToken: MW = async (ctx, next) => {
  const {
    globalSecretKey,
    jwt: {
      expire
    }
  } = ctx.config;

  ctx.jwtSign = jwtSign(globalSecretKey, expire);
  ctx.jwtVerify = jwtVerify(globalSecretKey);

  await next();
};

export default jsonWebToken;

// jwt签名函数
function jwtSign (globalSecretKey: string, expire: string) {
  return (constant: any) => {
    return jwt.sign({
      id: String(constant)
    }, globalSecretKey, {
      expiresIn: expire
    });
  };
}

// jwt验证函数
function jwtVerify (globalSecretKey: string) {
  return (token: string) => {
    return jwt.verify(token, globalSecretKey);
  };
}
