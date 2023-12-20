import { HttpMethodEnum } from 'koa-body';

export {
  default as timeLog
} from './timeLog';

export {
  default as redis
} from './redis';

export {
  default as jwt
} from './jwt';

export {
  default as http
} from './http';

export {
  default as response
} from './response';

export {
  default as config
} from './config';

export {
  default as bcrypt
} from './bcrypt';

export {
  default as colorLog
} from './colorLog';


export const KoaBodyOptions = {
  multipart: true,
  formidable: {
    uploadDir: './public/upload', // 文件上传目录
    keepExtensions: true
  },
  parsedMethods: [
    HttpMethodEnum.GET,
    HttpMethodEnum.POST
  ]
};
