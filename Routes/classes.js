const express=require('express');
const router=express.Router();

const ClassesController=require('../Controller/Classes')


router.post('/',ClassesController.addClasses)




module.exports=router
