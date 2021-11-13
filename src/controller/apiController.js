import moduleTransformations from "@babel/preset-env/lib/module-transformations"
import connection from "../config/connectDB"

let getAlluser  = async (req,res) => {
    let [rows,field] = await connection.execute('select * from `users`')
    console.log(rows)
    return res.status(200).json({
        messege:'ok',
        data:rows
    })
}
let createUser  = async (req,res) => {

    let {name,email,address} = req.body
    if(!name || !email || !address)
        return res.status(200).json({
            messege:'missing required'
        })
    else
   {
    await connection.execute('insert into `users`(Name,Email,Address) values (?,?,?)',[name,email,address])
    return res.status(200).json({
        messege:'done'
    })
   }
}
let deleteUser  =  async(req,res) => {
    let{id} = req.body
    if( !id)
    return res.status(200).json({
        messege:'missing required'
    })
    await connection.execute('DELETE FROM `users` WHERE `users`.`Id` = ?',[id])
    return res.status(200).json({
        messege:'done'
    })
}
let updateUser  = async(req,res) => {
    let{name,email,address,id} = req.body
    if(!name || !email || !address|| !id)
    return res.status(200).json({
        messege:'missing required'
    })
    await connection.execute('UPDATE `users` SET Name =?,Email = ?,Address =? Where Id = ? ' ,[name,email,address,id])
    return res.status(200).json({
        messege:'done'
    })
}
module.exports ={
    getAlluser,
    createUser,
    deleteUser,
    updateUser
}