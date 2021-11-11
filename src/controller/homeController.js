import express from 'express'
let getHomepage = (req,res) =>{
    //logic
    return res.render('./index.ejs')

}

module.exports ={
    getHomepage
}