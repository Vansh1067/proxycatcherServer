const express=require('express');
const router=express.Router();

const ClassesController=require('../Controller/Classes')

router.get('/',ClassesController.getAllClasses)
router.get('/:teacherId',ClassesController.getTeacherClasses)


router.post('/',ClassesController.addClasses)




module.exports=router
