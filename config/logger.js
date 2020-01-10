class LoggerFunction{

    logRequest(req,res,next){
       console.log('Request URL:'+req.url)
       next()
    }

    logError(err, req, res, next){
        console.log('Error Log:'+err)
        res.send('error occured during the request')
    }

}
module.exports={LoggerFunction: LoggerFunction}