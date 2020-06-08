const express = require('express')
const routes = express.Router()

const db = require("./database/db")

routes.get("/", function(req, res){
    return res.render("home")
})

routes.get("/register", function(req, res){
    return res.render("register")
})

routes.post("/savepoint", (req, res) => {

    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items,
    ]
    function afterInsertData(err){
        if(err) {
             console.log(err)
             return res.send("Erro o cadastro!")
        }

        console.log ("Cadastro com sucesso")
        console.log(this)

        return res.render("register", {saved: true})
    }

    db.run(query, values, afterInsertData)

})

routes.get("/list", function(req, res){

    const list = req.query.search

    if(list == ""){
        return res.render("list", {total: 0})
    }
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${list}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }

        const total = rows.length
        
        return res.render("list", {places: rows, total})
    })
})

module.exports = routes