import express from 'express'
import configViewEngine from './config/viewsEngine'
import path from 'path' // cấu hình path
import initWebRouter from './route/web'
require('dotenv').config()
const app = express()
const port = process.env.PORT  // CÀI NPM DOTENV
require('dotenv').config();
configViewEngine(app)
//init router
initWebRouter(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})