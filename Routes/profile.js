const express=require('express');
const router=express.Router();

const ProfileController=require('../Controller/Profile')





router.get('/:userId',ProfileController.profileDetails)
router.get('/approvalRequest/:userType',ProfileController.pendingApprovalRequest)
router.post('/approvedUser/:userId',ProfileController.pendingRequest)





module.exports=router
