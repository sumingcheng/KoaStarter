import { MW } from '../../types';
import $userServices
  from '../../service/user';

const getUserInfo: MW = async (ctx) => {
  const { uid } = ctx.request.body;

  try {
    const res = await $userServices.getUserInfo(ctx, uid);

    return ctx.success({
      code: 200,
      data: res
    });
  } catch (e: any) {
    ctx.log.warning(e.message);
    return ctx.error({
      ...ctx.errorInfos.FAILED_TO_GET_USER_INFO,
      detail: e.message
    });
  }
};

export default {
  getUserInfo
};
