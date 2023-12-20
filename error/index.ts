import {
  IUserErrorInfos,
  userErrorInfos
} from './userErrors';

import {
  IWsErrorInfos,
  wsErrorInfos
} from './wsErrors';

export interface ErrorInfos extends IWsErrorInfos, IUserErrorInfos {
  // ... 可以继续扩展其他错误类型
}

export default <ErrorInfos>{
  ...userErrorInfos,
  ...wsErrorInfos
};
