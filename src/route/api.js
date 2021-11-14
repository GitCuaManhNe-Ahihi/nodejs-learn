import express from 'express'
import apiController from '../controller/apiController'
import multer from 'multer'
let router = express.Router();

const initApiRouter  = (app) => {
   
    router.get('/user',apiController.getAlluser)
    router.put('/update-user',apiController.updateUser)
    router.delete('/delete-user',apiController.deleteUser)
    return app.use('/api/v1',router)
}

export default initApiRouter