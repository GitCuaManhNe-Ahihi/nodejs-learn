const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! mạnh dang ho ne')
})
app.get('/t',(req,res)=>{
    res.send('mạnh nè')
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})