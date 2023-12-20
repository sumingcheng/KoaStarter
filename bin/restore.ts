import { exec } from 'child_process';
import path from 'path';
import fs from 'fs';


const backupDir = path.join(__dirname, 'backup');

const dbName = 'xxxxxx';
const dbUser = 'xxxxx';
const dbPass = 'xxxxxx';

// 获取最新的备份文件
const getLatestBackupFile = (): string | null => {
  const files = fs.readdirSync(backupDir);
  const sqlFiles = files.filter(file => file.endsWith('.sql'));
  if (sqlFiles.length === 0) {
    return null;
  }
  const latestFile = sqlFiles.sort((a, b) => fs.statSync(path.join(backupDir, b)).mtime.getTime() - fs.statSync(path.join(backupDir, a)).mtime.getTime())[0];
  return path.join(backupDir, latestFile);
};

const latestBackupFile = getLatestBackupFile();

if (latestBackupFile) {
  console.log(`找到最新的备份文件: ${ latestBackupFile }`);
  const command = `mysql -u ${ dbUser } -p${ dbPass } ${ dbName } < ${ latestBackupFile }`;

  exec(command, (error) => {
    if (error) {
      console.error(`恢复错误: ${ error }`);
      return;
    }
    console.log('恢复成功');
  });
} else {
  console.log('没有找到备份文件');
}
