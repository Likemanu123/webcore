const express = require("express")
const router = express.Router()
var bodyParser = require('body-parser')
const userCtrl = require("./controllers/users")
const multer = require('multer')
var storage = multer.diskStorage({ destination:function(req,file,cb){
    cb(null,'public/')
},
filename:function(req,file,cb){
    let newName = Date.now()+'-'+file.originalname;
    cb(null,'database')
}})
var upload =multer({ storage })


// router.post('/profile',upload.single(`profile_pic`),userCtrl.userProfile)

// router.post('profile',upload.array(`profile_pic`),userCtrl.userProfile)

router.post('/Createprofile',upload.array('file', 3),userCtrl.createUser)

router.post('profile',userCtrl.userProfile)

// <-----------No Page found----------------->
router.all('*', (req, res) => {res.status(404).send({status : false, message:"No Page Found !!"})})



module.exports = router;