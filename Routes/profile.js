const express=require('express');
const router=express.Router();

const ProfileController=require('../Controller/Profile')





router.get('/:userId',ProfileController.profileDetails)



module.exports=router
