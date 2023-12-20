// 错误信息集合
import { ErrorInfo } from '../middleware/response';

export interface IUserErrorInfos {
  LOGIN_FAILED: ErrorInfo;
  WRONG_PASSWORD: ErrorInfo;
}

export const userErrorInfos: IUserErrorInfos = {
  LOGIN_FAILED: {
    code: 10001,
    msg: '登录失败'
  },
  WRONG_PASSWORD: {
    code: 10002,
    msg: '密码错误'
  }
};
