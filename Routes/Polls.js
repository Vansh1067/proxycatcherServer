const express=require('express');
const router=express.Router();

const PollController=require('../Controller/Polls')

router.get('/:userId',PollController.getPolls)
router.get('/pollDetails/:pollId',PollController.getPollDetails)
router.post('/',PollController.createPoll)




module.exports=router
