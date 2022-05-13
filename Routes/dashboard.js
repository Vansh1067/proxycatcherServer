const express=require('express');
const router=express.Router();

const DashboardController=require('../Controller/dashboard')



router.get('/:branch/:userId',DashboardController.getDashboard)

module.exports=router

