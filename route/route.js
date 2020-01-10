const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
const service=require('../service/service')
let employee=new service.EmployeeService()
let jsonParser=bodyParser.json()
router.put('/save',jsonParser,employee.saveEmploye)
router.get('/:empId',employee.getEmployee)
router.delete('/delete/:empId', employee.deleteEmployee)
module.exports=router