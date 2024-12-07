const express=require('express')
const userController=require('../controller/userController')
const jwtMiddleware = require('../middleware/jwtMiddleware')

const router=new express.Router()

// register
router.post('/register',userController.registerController)

// login
router.post('/login',userController.loginController)

router.get('/users',jwtMiddleware,userController.listUserController)

router.get('/users/:id',jwtMiddleware,userController.viewUserDetailsController)


module.exports=router