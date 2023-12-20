import user from './user';
import test from './test';

import {
  initialRoutes
} from '../libs/router';

// 路由集合编写
export default initialRoutes([
  ...user,
  ...test
]);
