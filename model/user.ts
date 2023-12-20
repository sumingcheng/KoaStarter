import {
  DataTypes,
  Sequelize
} from 'sequelize';

// 用户表模型
export default (seq: Sequelize) => {
  return seq.define('User', {
    id: {
      comment: '用户ID',
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      primaryKey: true,
      autoIncrement: true
    },
    uid: {
      comment: '用户唯一ID',
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      unique: true
    },
    username: {
      comment: '用户登录名',
      type: DataTypes.STRING,
      unique: true
    },
    // 邮箱
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // 手机号
    phone: {
      comment: '用户手机号',
      type: DataTypes.STRING,
      unique: true
    },
    // 是否激活账户
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    // 角色（可根据实际情况进行扩展）
    role: {
      type: DataTypes.STRING,
      defaultValue: 'user' // 示例：'user', 'admin'
    }
  });
}
