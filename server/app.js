const koa = require('koa')
const Router = require('koa-router')
const cors = require('koa2-cors')
let User = require('./user')
const app = new koa();
const router = new Router()

app.use(cors({
  origin: function (ctx) {
    return '*'
    // if (ctx.url === '/test') {
    //     return "*"; // 允许来自所有域名请求
    // }
    // return 'http://localhost:8080'; / 这样就能只允许 http://localhost:8080 这个域名的请求了
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))


router.get('/user', async (ctx, next) => {
  await User.find((err, res) => {
    if (err) {
      console.log(`Error:${err}`)
    } else {
      let ret
      res.forEach(item => {
        ret += `name:${item.name},今年我${item.age}岁，我的座右铭是:${item.content}啦啦啦`
      })
      // ctx.type='html'
      ctx.body = ret;
    }
  })
})
app.use(router.routes())
app.use(router.allowedMethods())
// app.use(async ctx => {
//   await User.find((err, res) => {
//     if (err) {
//       console.log(`Error:${err}`)
//     } else {
//       let ret
//       res.forEach(item => {
//         ret = `name:${item.name},今年我${item.age}岁，我的座右铭是:${item.content}`
//       })
//       ctx.body = ret;
//     }
//   })
// })

app.listen(3000)