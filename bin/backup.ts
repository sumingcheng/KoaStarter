import schedule from 'node-schedule';
import { exec } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import fs from 'fs/promises';
import dayjs from 'dayjs';

const execAsync = promisify(exec);
const backupDir = path.join(__dirname, 'backup');

const dbName = process.env.DB_NAME ?? 'default_db_name';
const dbUser = process.env.DB_USER ?? 'default_user';
const dbPass = process.env.DB_PASS ?? 'default_password';

// 确保备份目录存在
async function ensureBackupDir(): Promise<void> {
  try {
    await fs.access(backupDir);
  } catch (error) {
    await fs.mkdir(backupDir);
  }
}

async function backupDatabase(): Promise<void> {
  await ensureBackupDir();

  const dateTime = dayjs().format('YYYY-MM-DD_HH-mm-ss');
  const command = `mysqldump -u ${dbUser} -p${dbPass} ${dbName} > ${backupDir}/backup-${dateTime}.sql`;

  try {
    await execAsync(command);
    console.log('备份成功');
  } catch (error) {
    console.error(`备份错误: ${error}`);
  }
}

// 立即执行一次备份
backupDatabase();

// 设置定时任务，每周日凌晨 1 点执行
schedule.scheduleJob('0 1 * * 0', backupDatabase);

console.log('备份任务已设定，每周日凌晨 1 点执行。');
