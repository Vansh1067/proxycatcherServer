const express=require('express');
const router=express.Router();

const AuthController=require('../Controller/Auth')


router.post('/registration',AuthController.registration)
router.post('/login',AuthController.login)
router.post('/forgotpassword',AuthController.forgotpassword)








module.exports=router