// ANSI 颜色代码
import logger from 'koa-logger';
import dayjs from 'dayjs';

const GRAY = '\x1b[90m';
const RESET = '\x1b[0m';

export const customLogger = logger((str: string) => {
  const formattedTime = `T ${ GRAY } -> ${ dayjs().format('YYYY-MM-DD HH:mm:ss') }${ RESET }`;
  console.log(str, formattedTime);
});
