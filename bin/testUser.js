const user = require('./user');

// 添加用户
user.addUser('saturn2', 'vmto@qq.com').then(() => {
  return user.findByName('saturn2'); // 根据name查询
}).then(user => {
  console.log('attributes', user.attributes);
  console.log(user.dataValues);
});