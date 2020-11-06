const Router = require('koa-router')
const KOA = require('koa')

const app = new KOA()
const router = new Router()
app.use(router.routes()).use(router.allowedMethods())

router.get('/', function (ctx) {
    ctx.body='hello serverless from koa'
})

// app.listen(3000)

module.exports = app