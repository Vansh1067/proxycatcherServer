const express=require('express');
const router=express.Router();

const ProfileController=require('../Controller/Profile')





router.get('/:userId',ProfileController.profileDetails)
router.get('/approvalRequest/:userType',ProfileController.pendingApprovalRequest)




module.exports=router
