import express, { application } from "express";
const configVỉewEngine  = (app) => {
    app.set("view engine","ejs")
    app.set("views","./src/views")
}
export default configVỉewEngine