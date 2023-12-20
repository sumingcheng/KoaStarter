import { Route } from '../libs/router';
import { Method } from '../middleware/http';

import $test from '../controller/test';

// 用户相关路由集合
export default <Route[]>[
  [
    Method.POST, '/mock/userInfo',
    [
      $test.mockUserInfo
    ]
  ]
];
