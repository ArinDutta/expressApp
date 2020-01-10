const redisClient=require('../config/redis')
class EmployeeService{

  saveEmploye(req,res,next){
     console.log('Employee Object:'+JSON.stringify(req.body))
     console.log('Employee Id:'+req.body.empId)
     let status=redisClient.set('Employee_'+req.body.empId,JSON.stringify(req.body))
     redisClient.expire('Employee_'+req.body.empId,60000)
     res.status(200).send(status)
  }  

  deleteEmployee(req,res,next){
    console.log('Input Parameter:'+req.params.empId)
    res.status(200).send(redisClient.del('Employee_'+req.params.empId))
  }

  getEmployee(req,res,next){
      console.log('Input Parameter:'+req.params.empId)
      let employeeData
      redisClient.get('Employee_'+req.params.empId,(error,success)=>{
              if(error){
                  console.log('Error Occured')
                  res.status(500).send('Error Occured')
              }
              employeeData=success
              console.log('Employee Data:'+success)
              res.status(200).send(employeeData)
      })
  }

}
module.exports={EmployeeService:EmployeeService}