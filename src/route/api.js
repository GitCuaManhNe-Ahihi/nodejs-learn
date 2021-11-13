import express from 'express'
import apiController from '../controller/apiController'
let router = express.Router();

const initApiRouter  = (app) => {
    router.get('/user',apiController.getAlluser)
    router.post('/create-user',apiController.createUser)
    router.put('/update-user',apiController.updateUser)
    router.delete('/delete-user',apiController.deleteUser)
    return app.use('/api/v1',router)
}

export default initApiRouter