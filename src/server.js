import express from 'express'
import configViewEngine from './config/viewsEngine'
import path from 'path' // cấu hình path
import initWebRouter from './route/web'
//import connection from './config/connectDB'
require('dotenv').config()
const app = express()
const port = process.env.PORT  // CÀI NPM DOTENV

app.use(express.urlencoded({extends:true})) //config lây data từ phía client
app.use(express.json())
configViewEngine(app)
//init router
initWebRouter(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})