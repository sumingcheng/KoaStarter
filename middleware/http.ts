import fetch from 'node-fetch';

import { MW } from '../types';

export enum Method {
  GET = 'get',
  POST = 'post'
}

// 描述对象类型
export interface ObjectDesc {
  [key: string]: any;
}

// 增加上下文请求方法对象属性中间件
const http: MW = async (ctx, next) => {
  ctx.httpGet = httpGet;
  ctx.httpPost = httpPost;

  await next();
};

export default http;

/**
 * node-fetch Get方式封装
 * @param { string } url api接口链接
 * @param query
 * @returns 响应或错误
 */
export async function httpGet<T extends ObjectDesc> (url: string, query?: T) {
  try {
    const response = await fetch(url + formatParams<T>(query));
    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
}

/**
 * node-fetch Post方式封装
 * @param { string } url api接口链接
 * @param  body 数据接口参数 {}
 * @param { HeadersInit } headers header参数(可选)
 * @returns 响应或错误
 */

export async function httpPost<T extends ObjectDesc> (url: string, body: T, headers?: HeadersInit) {
  try {
    const response = await fetch(url, {
      method: Method.POST,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    });

    return await response.json();
  } catch (e) {
    return Promise.reject(e);
  }
}

function formatParams<T extends ObjectDesc> (query: T | undefined) {
  if (!query) return '';

  let params = '?';

  for (let key in query) {
    params += `${ key }=${ query[key] }&`;
  }

  return params.substring(0, params.length - 1);
}
