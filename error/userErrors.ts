// 错误信息集合
import { ErrorInfo } from '../middleware/response';

export interface IUserErrorInfos {
  FAILED_TO_GET_USER_INFO: ErrorInfo;
}

export const userErrorInfos: IUserErrorInfos = {
  FAILED_TO_GET_USER_INFO: {
    code: 10001,
    msg: '获取用户信息失败'
  }
};
