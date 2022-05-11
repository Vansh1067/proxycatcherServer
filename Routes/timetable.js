const express=require('express');
const router=express.Router();

const timetableController=require('../Controller/timetable')

router.get('/:userId',timetableController.getAllTimeTable)

router.post('/',timetableController.addTimetable)




module.exports=router
