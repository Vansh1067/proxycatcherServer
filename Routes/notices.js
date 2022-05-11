const express=require('express');
const router=express.Router();

const NoticesController=require('../Controller/Notices')

router.get('/:userId',NoticesController.getNotice)
router.get('/noticeDetails/:noticeId/',NoticesController.getNoticeDetails)
router.post('/',NoticesController.createNotice)




module.exports=router
