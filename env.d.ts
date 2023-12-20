import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Redis } from 'ioredis';
import { GlobalConfig } from './types';
import { ObjectDesc } from './middleware/http';

import {
  ErrorInfo,
  SuccessInfo
} from './middleware/response';

import { ErrorInfos } from './error';

// import {
//   API,
//   ErrorInfos
// } from './config';

declare module 'koa' {
  interface DefaultState {
    stateProperty: boolean;
  }

  interface ExtendableContext {
    success (info: SuccessInfo): void;

    error (info: ErrorInfo): void;

    httpGet<T extends ObjectDesc> (url: string, body?: T): Promise<any>;

    httpPost<T extends ObjectDesc> (url: string, body: T, headers?: HeadersInit): Promise<any>;

    jwtSign (constant: any): string;

    jwtVerify (token: string): string | jwt.JwtPayload;

    log: {
      error (message: string): void;
      success (message: string): void;
      warning (message: string): void;
      highlight (message: string): void;
    };

    config: GlobalConfig;
    // api: API;
    errorInfos: ErrorInfos;
    redis: Redis;
    bcrypt: typeof bcrypt;
  }
}

