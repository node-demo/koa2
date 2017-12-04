const Sequelize = require('sequelize');
const sequelize = require('./db');

// 1.创建 model
const User = sequelize.define('user', {
    userName: {
        type: Sequelize.STRING, // 指定值的类型
        field: 'user_name'      // 指定存储在表中的键名称
    },
    email: {
        // 没有指定 field，表中键名称则与对象键名相同，为 email
        type: Sequelize.STRING
    }
}, {
    // true 表名称和 model 相同: user
    // false 创建表名称会是复数: users
    freezeTableName: false
});

// 2.创建表
// User.sync()创建表并返回Promise对象
// 如果 force = true 则把存在的表（如果users表已存在）先销毁再创建表
const user = User.sync({ force: false });// 默认 forse=false

// 3.添加新用户
exports.addUser = function(userName, email) {
    return User.create({
        userName: userName,
        email: email
    });
};

// 4.通过用户名查找用户
exports.findByName = function(userName) {
    return User.findOne({ where: { userName: userName } });
};

// 5.通过用户名查找用户
exports.findById = function(id) {
    return User.findOne({ where: { id: id } });
};