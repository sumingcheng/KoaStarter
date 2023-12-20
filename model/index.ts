import Seq from '../libs/seq';
import User from './user';

import { globalConfig } from '../libs/config';

const {
  db
} = globalConfig;

const seq = Seq(db);
const $UserModel = User(seq);

export {
  $UserModel
};

