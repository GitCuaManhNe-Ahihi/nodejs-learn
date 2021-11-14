import json from 'body-parser/lib/types/json'
import express from 'express'
import connection from '../config/connectDB'
const multer = require('multer')

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
let editUser  = async (req,res) => {
    let [row,fiels] = await connection.execute('SELECT * FROM `users` WHERE Id = ?',[req.params.id])
    return res.render('update.ejs',{row})
}
let submitEdit  = async (req,res) => {
    let{name,email,address} = req.body
    await connection.execute('UPDATE `users` SET Name =?,Email = ?,Address =? Where Id = ? ' ,[name,email,address,req.params.id])
    return res.redirect('/')
}
let uploadfile  = (req,res) => {
    return res.render('loadfile.ejs',{filem:'xinhne.jpg'})
}
let upload = multer().single('avatar')

let uploadf  = (req,res) => {
    upload(req, res, (err) =>{
        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }
      })
      return res.render('loadfile.ejs',{filem:req.file.filename})
} 
module.exports ={
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    submitEdit,
    uploadfile,
    uploadf}