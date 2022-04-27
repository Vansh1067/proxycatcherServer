const express=require('express');
const router=express.Router();

const PollController=require('../Controller/Polls')

router.get('/',PollController.getPolls)
router.get('/:pollId',PollController.getPollDetails)
router.post('/',PollController.createPoll)




module.exports=router
