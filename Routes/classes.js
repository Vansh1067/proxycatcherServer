const express=require('express');
const router=express.Router();

const ClassesController=require('../Controller/Classes')

router.get('/:userId',ClassesController.getAllClasses)
router.get('/:teacherId',ClassesController.getTeacherClasses)
router.post('/',ClassesController.addClasses)
router.put('/addStudent',ClassesController.addStudentsToClass)

router.put('/removeStudent',ClassesController.removeStudentsToClass)






module.exports=router
