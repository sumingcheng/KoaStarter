const schedule = require('node-schedule');
const {exec} = require('child_process');
const {promisify} = require('util');
const path = require('path');
const fs = require('fs').promises;
const dayjs = require('dayjs');

const execAsync = promisify(exec);

const backupDir = path.join(__dirname, 'backup');

// 确保备份目录存在
async function ensureBackupDir() {
    try {
        await fs.access(backupDir);
    } catch (error) {
        await fs.mkdir(backupDir);
    }
}

async function backupDatabase() {
    await ensureBackupDir();

    const dateTime = dayjs().format('YYYY-MM-DD_HH-mm-ss');
    const dbName = process.env.DB_NAME;
    const dbUser = process.env.DB_USER;
    const dbPass = process.env.DB_PASS;

    const command = `mysqldump -u ${dbUser} -p${dbPass} ${dbName} > ${backupDir}/backup-${dateTime}.sql`;

    try {
        await execAsync(command);
        console.log('备份成功');
    } catch (error) {
        console.error(`备份错误: ${error}`);
        // 可以在这里添加重试逻辑
    }
}

// 立即执行一次备份
await backupDatabase();

// 设置定时任务，每周日凌晨 1 点执行
schedule.scheduleJob('0 1 * * 0', backupDatabase);

console.log('备份任务已设定，每周日凌晨 1 点执行。');
