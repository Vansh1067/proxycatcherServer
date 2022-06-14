const Attendance=require('../model/Attendance')
const axios = require('axios');
const path=require('path')
const FormData = require('form-data');
exports.StartClass=(req,res,next)=>{
const {classesId}=req.params
    console.log(classesId)
  const atten=new Attendance({classesId,teacherimageURL:req.file.filename})
  atten.save().then((data)=>{
    res.json({
        message:'Class is Start',
        data:data
    })
  })

}
exports.joinClass=(req,res,next)=>{
    const {classesId,studentId}=req.params

     console.log(req.files)
    /* Attendance.find({classesId:classesId}).then(cls=>{
        const data=new FormData()
        data.append('api_key','nmEp6p8CWnj7RZH7NCnsfG5YZLE6YoOz')
        data.append('api_secret','Uvi52B524HBvUvnKL9cJ1TN6koaTgMT3')
        data.append('image_file1',`${__dirname}../uploads/20220608T194731780Z236130`)
        data.append('image_file2',`${__dirname}../uploads/20220608T194731780Z236130`)

        axios.post('https://api-us.faceplusplus.com/facepp/v3/compare',data).then((res)=>{
            console.log(res)
        

        }).catch(err=>console.log(''))
    })
    console.log(__dirname) */
      res.json({
        message:'Class is Start',
        
     
    })
    }