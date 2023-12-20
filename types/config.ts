export type GlobalConfig = {
  port: number;
  globalSecretKey: string;
  globalPrefix: string;

  ws: {
    fixedPassword: string;
    heartbeatInterval: number;
  };

  jwt: {
    expire: string;
  };

  idiom: {
    data: any;
    expire: number;
  };

  messageService: {
    appId: string;
    secretKey: string;
    templateSign: string;
    templateId: string;
    requestURL: string;
    codeCount: number;
    expire: number;
  };

  redis: {
    username: string;
    password: string;
    host: string;
    port: number;
    db: number;
  };

  db: {
    host: string | 'localhost';
    port: number;
    dbname: string;
    username: string;
    password: string;
    dialect: 'mysql';
    logging: boolean;
    benchmark: boolean;

    define: {
      timestamps: boolean;
      freezeTableName: boolean;
    };

    pool: {
      max: number;
      min: number;
      idle: number;
    }
  }
}
