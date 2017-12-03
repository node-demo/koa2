const router = require('koa-router')();
const user = require('../bin/user');
const post = require('../bin/post');

router.get('/', async (ctx, next) => {
  let oneUser = await user.findById(1);
  let onePost = await post.findById(1);
  await ctx.render('index', {
    title: 'hello index',
    user: oneUser,
    post: onePost
  })
});

router.get('/string', async (ctx, next) => {
    let params = ctx.query;
    let page = 1;
    let pageSize = 2;
    if(typeof params.page!=='undefined' && typeof params.rows!=='undefined'){
        page = params.page;
        pageSize = params.rows;
    }
    let data = await post.findByPage(page,pageSize);
    ctx.body = {
        total:data.count,
        rows:data.rows
    };
});

router.post('/string', async (ctx, next) => {
    let params = ctx.request.body;
    let page = 1;
    let pageSize = 2;
    if(typeof params.page!=='undefined' && typeof params.rows!=='undefined'){
        page = params.page;
        pageSize = params.rows;
    }
    let data = await post.findByPage(parseInt(page),parseInt(pageSize));
    ctx.body = {
        total:data.count,
        rows:data.rows
    };
});

router.get('/json', async (ctx, next) => {
    let oneUser = await user.findById(1);
    let onePost = await post.findById(1);
  ctx.body = {
    uesr: oneUser,
    post: onePost
  }
});

module.exports = router;
