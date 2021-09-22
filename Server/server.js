const Koa = require('koa')
const router = require('./router')

const app = new Koa ()
const PORT = 3051


app.use(router.routes())



app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT} 🚀🚀🚀`)
})