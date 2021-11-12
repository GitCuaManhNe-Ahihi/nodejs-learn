import json from 'body-parser/lib/types/json'
import express from 'express'
import connection from '../config/connectDB'

let getHomepage = async (req,res) =>{

//  connection.query(   'SELECT * FROM `users`',
//     (err,result,fields)=>{
//       data =  result.map(item =>{
//           return item
//        })
//     //    return res.render('./index.ejs',{datauser:data})
//    }
  
//  )
 const [row,fields] = await connection.execute('SELECT * FROM `users`')
 return res.render('./index.ejs',{datauser:row})
    //logic
}
let getDetailPage  = async (req,res) => {
    const [row,fields] = await connection.execute('SELECT * FROM `users` WHERE Id = ?',[req.params.id])
    return res.render("./info.ejs",{row})
}

module.exports ={
    getHomepage,
    getDetailPage
}