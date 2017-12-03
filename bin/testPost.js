const post = require('./post');

// 发布文章
post.newPost({
    'title':'这是标题',
    'content':'你好，这是内容！',
    'status':'1',
    'author':'张三',
    'remarks':'这是备注'
}).then(()=> {
    return post.findAllPosts(); // 查询所有
}).then((post)=> {
    console.log('attributes',post.attributes);
    console.log(post.dataValues);
});
