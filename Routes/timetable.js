const express=require('express');
const router=express.Router();

const timetableController=require('../Controller/timetable')


router.post('/',timetableController.addTimetable)




module.exports=router
