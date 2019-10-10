const router = require('koa-router')()
import { urlModel } from '../db/model/url'

router.post('/saveUrl', async (ctx, next) => {
  const querys = ctx.request.body
  const url = new urlModel({
    name: querys.names,
    url: querys.url
  })
  let code = ''
  try {
    await url.save()
    code = 0
  } catch(e) {
    console.log(e)
    code = -1
  }
  
  ctx.body = {
    code
  }
})

module.exports = router