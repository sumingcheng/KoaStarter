import { WebSocket } from 'ws';

// 定义一个接口来表示客户端信息
export interface ClientInfo {
  ws: WebSocket;
  isAlive: boolean;
}

// 做图状态
export enum WSStatus {
  // 等待中
  WAITING = 0,
  // 处理中
  PROCESSING = 1,
  // 完成
  FINISHED = 2,
  // 失败
  FAILED = 3,
  // 排队中
  QUEUING = 4
}
