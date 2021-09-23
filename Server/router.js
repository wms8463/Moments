
const Router = require('koa-router')
const router = new Router()
const {getAllMoments, postMoment} = require('./controllers/controller')



// Get request --> grab all the moments
// Post request --> create a new moment

router.get('/moments', getAllMoments)

router.post('/moments', postMoment)




module.exports = router