const express=require('express');
const router=express.Router();
const multer=require('multer');
const AttendanceController=require('../Controller/attendance');
const upload=multer({dest:'uploads/'})
const uploads=multer()


 
function getRandomFileName() {
    var timestamp = new Date().toISOString().replace(/[-:.]/g,"");  
    var random = ("" + Math.random()).substring(2, 8); 
    var random_number = timestamp+random;  
    return random_number;
    }
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    
    cb(null,  getRandomFileName());
  },
});

const diskStorage = multer({ storage: storage }); 


router.post('/:classesId',diskStorage.single('teacherImage'),AttendanceController.StartClass)
router.post('/mark/:classesId/:studentId',diskStorage.array('studentImage',2),AttendanceController.joinClass)





module.exports=router
