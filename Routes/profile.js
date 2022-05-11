const express=require('express');
const router=express.Router();

const ProfileController=require('../Controller/Profile')




router.get('/getHods',ProfileController.getHods)

router.get('/:userId',ProfileController.profileDetails)

router.get('/approvalRequest/:userType/:userId',ProfileController.pendingApprovalRequest)

router.get('/users/:userType/:branch',ProfileController.getUsers)

router.post('/approvedUser/:userId',ProfileController.pendingRequest)





module.exports=router
