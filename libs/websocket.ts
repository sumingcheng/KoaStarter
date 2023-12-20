// import { parse } from 'url';
// import http, { IncomingMessage } from 'http';
// import { v4 as uuid } from 'uuid';
// import { validatePassword } from './utils';
// // import Error from '../config/error';
// import { globalConfig } from './config';
//
// import {
//   ClientInfo,
//   WSStatus
// } from '../types/websocket';
//
// import {
//   Server as WSServer,
//   WebSocket
// } from 'ws';
//
// const {
//   ws: {
//     fixedPassword,
//     heartbeatInterval
//   }
// } = globalConfig;
//
// export const clients = new Map<string, ClientInfo>();
//
// function webSocket (server: http.Server) {
//   const wss = new WSServer({ server });
//
//   wss.on('connection', async (ws: WebSocket, request: IncomingMessage) => {
//     const queryParams = parse(request.url || '', true).query;
//     const password = queryParams.password as string;
//
//     if (!validatePassword(password, fixedPassword)) {
//       ws.send(JSON.stringify(Error.WS_INVALID_PASSWORD));
//       ws.close(1000, '连接 WebSocket 失败，密码错误');
//       return;
//     }
//
//     const uniqueId = uuid();
//     console.log(`USER: —> ${ uniqueId } - connected`);
//     clients.set(uniqueId, {
//       ws,
//       isAlive: true
//     });
//
//     try {
//       const data = {
//         code: 200,
//         state: WSStatus.WAITING,
//         data: {
//           uniqueId,
//         },
//       };
//
//       ws.send(JSON.stringify(data));
//     } catch (error) {
//       console.error('二维码生成失败: —> ', error);
//     }
//
//     ws.on('pong', () => {
//       const client = clients.get(uniqueId);
//       if (client) {
//         client.isAlive = true;
//       }
//     });
//
//     ws.on('message', (message) => {
//       console.log(`RECEIVE: —> ${ uniqueId } - NEWS: —> ${ message }`);
//     });
//
//     ws.on('close', () => {
//       console.log(`USER: —> ${ uniqueId } - DISCONNECTED`);
//       clients.delete(uniqueId);
//     });
//   });
//
//   startHeartbeatCheck();
//
//   return wss;
// }
//
// function startHeartbeatCheck () {
//   const heartbeatCheck = () => {
//     clients.forEach((client, uniqueId) => {
//       if (!client.isAlive) {
//         try {
//           client.ws.terminate(); // 尝试终止连接
//         } catch (error) {
//           console.error(`ErrorTerminatingClient: —> ${ uniqueId }:`, error);
//         }
//         clients.delete(uniqueId);
//       } else {
//         client.isAlive = false;
//         try {
//           client.ws.ping(); // 发送 ping
//         } catch (error) {
//           console.error(`ErrorSendingPingToClient: —> ${ uniqueId }:`, error);
//         }
//       }
//     });
//
//     // HEARTBEAT_INTERVAL 时间后再次检查
//     setTimeout(heartbeatCheck, heartbeatInterval);
//   };
//
//   heartbeatCheck();
// }
//
//
// export default webSocket;
