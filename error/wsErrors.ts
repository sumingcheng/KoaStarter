import { ErrorInfo } from '../middleware/response';

export interface IWsErrorInfos {
  WS_ERROR: ErrorInfo;
}

export const wsErrorInfos: IWsErrorInfos = {
  WS_ERROR: {
    code: 20001,
    msg: 'websocket error'
  }
};
