import Koa from 'koa';
import cors from 'koa2-cors';
import json from 'koa-json';
import router from './router';
import * as httpServer from 'http';
import koaBody from 'koa-body';
// import ws from './libs/websocket';

import { customLogger } from './libs/customLogger';
import { globalConfig } from './libs/config';

import {
  bcrypt,
  colorLog,
  config,
  http,
  jwt,
  redis,
  response,
  timeLog,
  KoaBodyOptions,
} from './middleware/index'

const app = new Koa();
// 跨域设置中间件
app.use(
  cors({
    credentials: true,
    exposeHeaders: [ '*' ]
  })
);
// 注册彩色打印中间件
app.use(colorLog);
// 注册 koaBody
app.use(koaBody(KoaBodyOptions));
// 注册 json 处理
app.use(json());
// 注册自定义日志中间件
app.use(customLogger);
// 注册配置中间件
app.use(config);
// 注册响应信息中间件
app.use(response);
// 注册http中间件
app.use(http);
// 注册redis中间件
app.use(redis);
// 注册jwt中间件
app.use(jwt);
// 注册bcrypt中间件
app.use(bcrypt);
// 打印执行请求与响应的时间中间件
app.use(timeLog);
// 注册队列中间件
// app.use(queueMiddleware);
// 注册路由中间件
app.use(router.routes());
app.use(router.allowedMethods());

const { port: PORT } = globalConfig;

app.on('error', (e) => {
  console.log(`Server running on port http://localhost:${ PORT } is failed.`, e);
});

const server = httpServer.createServer(app.callback());

// 初始化 WebSocket
// ws(server);

server.listen(PORT, () => {
  console.log('\x1b[32m%s\x1b[0m', `HTTP running on http://localhost:${ PORT }`);
  // console.log('\x1b[32m%s\x1b[0m', `WebSocket running on ws://localhost:${ PORT }`);
});

