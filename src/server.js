import express from 'express'
import configVỉewEngine from './config/viewsEngine'
import path from 'path' // cấu hình path
const app = express()
const port = 3030

configVỉewEngine(app)

app.get('/', (req, res) => {
  res.send('Hello World! mạnh dang ho ne')
})
app.get('/t',(req,res)=>{
    res.send('mạnh nè')
})
app.get('/home',(req,res)=>{
  res.render('index.ejs')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})