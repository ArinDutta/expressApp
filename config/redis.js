const redis=require('redis')
const port=6379
const host='127.0.0.1'
const client=redis.createClient(port,host)
client.on('connect',() => console.log('Redis Connection Successful'))
client.on('error',(err) => console.error('Unable to connect Redis'+err))
module.exports=client