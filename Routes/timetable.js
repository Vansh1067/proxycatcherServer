const express=require('express');
const router=express.Router();

const timetableController=require('../Controller/timetable')

router.get('/:userId',timetableController.getAllTimeTable)
router.get('/timetableclasses/:userId/:day',timetableController.getTimeTableClasses)
router.get('/timetableclassesforStudents/:userId/:day',timetableController.getTimeTableClassesForStudents)

router.post('/',timetableController.addTimetable)




module.exports=router
