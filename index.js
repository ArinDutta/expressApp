const express=require('express')
const app=express()
const log=require('./config/logger')
var routes=require('./route/route')
const port=8080
let logger=new log.LoggerFunction()
app.use(logger.logRequest)
app.use('/employee',routes)
app.listen(port,() => console.log(`Server Started on Port ${port}`))