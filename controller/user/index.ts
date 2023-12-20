import { MW } from '../../types';
import $userServices
  from '../../service/user';

const getUserInfo: MW = async (ctx) => {
  const { uid } = ctx.request.body;

  try {
    const res = await $userServices.getUserInfo(ctx, uid);

    ctx.success({
      code: 200,
      data: res
    });

  } catch (e: any) {
    ctx.log.warning(e.message);
    return Promise.reject(e);
  }
};

export default {
  getUserInfo
};
