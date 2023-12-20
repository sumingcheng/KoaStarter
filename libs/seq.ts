import {
  Options,
  Sequelize
} from 'sequelize';

// 连接MySQL
export default (dbConfig: Options) => {
  const seq = new Sequelize(dbConfig);

  seq.authenticate().then(() => {
    console.log('MySQL server is connected completely.');
  }).catch((error) => {
    console.log('MySQL server is failed to be connected. Error information is below: ' + error);
  });

  // 同步MySQL表
  // syncTables(seq);

  return seq;
}

// 同步表函数
function syncTables (seq: Sequelize) {
  seq.sync({
    force: true
  }).then(() => {
    console.log('Sequelize: tables sync completed');
    process.exit();
  });
}


