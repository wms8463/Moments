const Koa = require('koa')
const router = require('./router')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')
const db = require('./model/index')
const app = new Koa ()
const PORT = 3051




app.use(cors())
app.use(bodyParser())
app.use(router.routes())



db.sequelize.sync().then(()=> {

  console.log('db synced')

  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT} 🚀🚀🚀`)
  })
})

