const Sequelize = require('sequelize');
const sequelize = require('./db');

// 1.创建模型
const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.STRING
  },
  status: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  remarks: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: false
});

// 2.创建表
const post = Post.sync();

// 3.发布文章
exports.newPost = function (json) {
  return Post.create(json);
};

// 查找所有文章
exports.findAllPosts = function () {
  return Post.findAll();
};

// 通过 ID 查找文章
exports.findById = function (id) {
  return Post.findById(id);
};

// 分页
exports.findByPage = function (page, pageSize) {
  /*return Post.scope({
   where : {}
   }).findAll({
   offset: (page - 1 ) * pageSize,
   limit: pageSize
   });*/

  return Post.findAndCountAll({
    'limit': parseInt(pageSize),
    'offset': (page - 1 ) * pageSize
  });
};