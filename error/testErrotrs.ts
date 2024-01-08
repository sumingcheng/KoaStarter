// test 错误集合
import { ErrorInfo } from '../middleware/response';

export interface ItestErrorInfos {
  FAILED_TO_SIMULATE_DATA: ErrorInfo;
}

export const testErrorInfos: ItestErrorInfos = {
  FAILED_TO_SIMULATE_DATA: {
    code: 90001,
    msg: '登录失败'
  }
};
