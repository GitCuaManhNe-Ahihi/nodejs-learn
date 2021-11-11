import mysql from 'mysql2'
const  connection  = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'nodebasic'
})

// connection.query(
//     'SELECT * FROM `users`',
//     (err,result,fields)=>{
//        result.map(item =>{
//            console.log(item)
//        })
   
//     }
// )
export default connection