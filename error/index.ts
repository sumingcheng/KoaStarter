import {
  IUserErrorInfos,
  userErrorInfos
} from './userErrors';

import {
  IWsErrorInfos,
  wsErrorInfos
} from './wsErrors';

import {
  ItestErrorInfos,
  testErrorInfos
} from './testErrotrs';

export interface ErrorInfos extends IWsErrorInfos, IUserErrorInfos, ItestErrorInfos {
  // ... 继续扩展其他错误类型
}

export default <ErrorInfos>{
  ...userErrorInfos,
  ...wsErrorInfos,
  ...testErrorInfos
};
