
const Router = require('koa-router')
const router = new Router()



// Get request --> grab all the moments
// Post request --> create a new moment
// (Maybe) Put request --> update or edit a moment

router.get('/moments', (ctx) => {
  console.log('Hello from router')
  ctx.body = 'Get all moments'
})

router.post('/moments', (ctx) => {
  console.log('Hello from router')
  ctx.body = ctx.request.body
})



module.exports = router