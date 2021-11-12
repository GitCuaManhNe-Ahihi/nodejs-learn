import mysql from 'mysql2/promise'
const  connection  =  mysql.createPool({
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