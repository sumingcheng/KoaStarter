import { GlobalConfig } from '../../types';

import {
  dev,
  prod,
  sit
} from '../../config/index';

function getGlobalConfig (): GlobalConfig {
  const customize = <GlobalConfig>{
    port: 3335
  };

  switch (process.env.NODE_ENV) {
    case 'dev':
      return <GlobalConfig>{ ...dev, ...customize };
    case 'prod':
      return <GlobalConfig>{ ...prod, ...customize };
    case 'sit':
      return <GlobalConfig>{ ...sit, ...customize };
    default:
      return customize;
  }
}

// 使用
export const globalConfig = getGlobalConfig();
