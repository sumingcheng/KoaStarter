import idioms from '../data/idiom';
import { printDeep } from '../libs/utils';

export default {
  port: 3000,
  globalSecretKey: 'koaStart',
  globalPrefix: 'koaStart',

  ws: {
    fixedPassword: 'koaStart',
    heartbeatInterval: 30 * 1000
  },

  jwt: {
    expire: '30d'
  },

  idiom: {
    data: idioms,
    expire: 60
  },

  messageService: {
    appId: 'hw_12245',
    secretKey: '',
    templateSign: '闪验',
    templateId: 'ST_2023112900000001',
    requestURL: 'http://api.shansuma.com/gateway.do',
    codeCount: 6,
    expire: 60 * 30
  },

  redis: {
    username: '',
    password: '',
    host: '127.0.0.1',
    port: 6379,
    db: 0
  },

  db: {
    host: 'localhost',
    port: 3306,
    database: 'koaStart',
    username: 'root',
    password: '123456',
    dialect: 'mysql',
    logging: printDeep,
    benchmark: true,

    define: {
      timestamps: true,
      freezeTableName: true
    },

    pool: {
      max: 200,
      min: 0,
      idle: 10000
    }
  }
};
