const express = require('express')
const routes = express.Router()

routes.get("/", function(req, res){
    return res.render("home")
})

routes.get("/register", function(req, res){
    return res.render("register")
})
routes.get("/list", function(req, res){
    return res.render("list")
})

module.exports = routes