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

let createNewUser  = async (req,res) => {
    let {name,email,address} = req.body
     await connection.execute('insert into `users`(Name,Email,Address) values (?,?,?)',[name,email,address])
    return res.redirect('/')
}
let deleteUser  = async (req,res) => {
    await connection.execute('DELETE FROM `users` WHERE `users`.`Id` = ?',[req.params.id])
    return res.redirect('/')
}
module.exports ={
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser
}