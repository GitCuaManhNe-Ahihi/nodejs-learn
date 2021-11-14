// phụ trách route
import express from "express";
import homeController from '../controller/homeController'
import multer from 'multer'
import path from 'path'
import approot from 'app-root-path'
let router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, approot+'/src/public/images')
    },
    filename: function (req, file, cb) {
      cb(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname));
    }
    
  })
let imagefillter  = (req,file,cb) => {
      if(!file.originalname.toLowerCase().match(/\.(jpg|png|jpeg|gif)/))
      {
          req.fileValodationError ='only image'
          return cb(new Error('Only image file '),false)
      }
      cb(null,true)
  }

  let upload = multer({storage,fileFilter:imagefillter}).single('avatar')

const initWebRouter  = (app) => {
    router.get('/',homeController.getHomepage)
    router.get('/info/:id',homeController.getDetailPage)
    router.post('/create-user',homeController.createNewUser)
    router.get('/delete/:id',homeController.deleteUser)
    router.get('/edit-user/:id',homeController.editUser)
    router.post('/submit-edit/:id',homeController.submitEdit)
    router.get('/uploadfile',homeController.uploadfile)
    router.post('/uploadf',upload,homeController.uploadf)
    return app.use('/',router)
}


export default initWebRouter