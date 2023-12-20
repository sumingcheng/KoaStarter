import { $UserModel } from '../model';
import { Service } from '../types';

/**
 * 获取用户信息
 * */
const getUserInfo: Service = async (ctx, uid) => {
  try {
    const res = await $UserModel.findOne({
      where: {
        uid
      }
    });

    return Promise.resolve(res);
  } catch (e: any) {
    ctx.log.warning(e.message);
    return Promise.reject(e);
  }
};

/**
 * 创建用户
 * */
const createUser: Service = async (ctx, userInfo) => {
  try {
    const res = await $UserModel.create(userInfo);

    return Promise.resolve(res);
  } catch (e: any) {
    ctx.log.warning(e.message);
    return Promise.reject(e);
  }
};

export default {
  getUserInfo,
  createUser
};
