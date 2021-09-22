
const Router = require('koa-router')
const router = new Router()


router.get('/', (ctx) => {
  console.log('Hello from router')
  ctx.body = 'Hello from router'
})



module.exports = router