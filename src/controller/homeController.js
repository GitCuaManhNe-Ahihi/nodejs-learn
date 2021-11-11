import json from 'body-parser/lib/types/json'
import express from 'express'
import connection from '../config/connectDB'

let getHomepage = (req,res) =>{

    let data= []
 
 connection.query(   'SELECT * FROM `users`',
    (err,result,fields)=>{
      data =  result.map(item =>{
          return item
       })
       return res.render('./index.ejs',{datauser:data})
   }
  
 )
 
    //logic
   

}

module.exports ={
    getHomepage
}