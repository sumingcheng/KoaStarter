import { MW } from '../../types';
import Mock from 'mockjs';
import $userServices
  from '../../service/user';

const mockUserInfo: MW = async (ctx) => {
  try {
    for (let i = 0; i < 100; i++) {
      const mockUser = {
        username: Mock.Random.cname(),
        email: Mock.Random.email(),
        phone: Mock.mock(/^1[34578]\d{9}$/),
        isActive: Mock.Random.boolean(),
        role: Mock.Random.pick([ 'user', 'admin' ])
      };

      await $userServices.createUser(ctx, mockUser);
    }

    ctx.success({
      code: 200,
      data: 'success'
    });
  } catch (e: any) {
    ctx.log.warning(e.message);
  }
};

export default { mockUserInfo };
