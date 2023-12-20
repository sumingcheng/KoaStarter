import $user from '../controller/user';

import { Route } from '../libs/router';
import { Method } from '../middleware/http';

// 用户相关路由集合
export default <Route[]>[
  [
    Method.POST, '/user/getInfo',
    [
      $user.getUserInfo
    ]
  ]
];
