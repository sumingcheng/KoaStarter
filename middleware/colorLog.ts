import chalk from 'chalk';
import { MW } from '../types';

const log = console.log;

// error
const errorLog = (message: string) => log(chalk.red(message));

// success
const successLog = (message: string) => log(chalk.green(message));

// warning
const warningLog = (message: string) => log(chalk.yellow(message));

// log
const highlightLog = (message: string) => log(chalk.bgWhite.black(message));


// 注册上下文 chalk 中间件
const colorLog: MW = async (ctx, next) => {
  ctx.log = {
    error: errorLog,
    success: successLog,
    warning: warningLog,
    highlight: highlightLog
  };

  await next();
};

export default colorLog;
