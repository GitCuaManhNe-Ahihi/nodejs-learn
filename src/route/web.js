// phụ trách route
import express from "express";
import homeController from '../controller/homeController'
let router = express.Router();

const initWebRouter  = (app) => {
    router.get('/',homeController.getHomepage)
    router.get('/info/:id',homeController.getDetailPage)
    router.post('/create-user',homeController.createNewUser)
    router.get('/delete/:id',homeController.deleteUser)
    return app.use('/',router)
}

export default initWebRouter