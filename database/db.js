const sqlite3 = require ("sqlite3").verbose()

const db = new sqlite3.Database("./database/database.db")

module.exports = db

// db.serialize(() => {

// //     // db.run(`
// //     //     CREATE TABLE IF NOT EXISTS places (
// //     //         id INTEGER PRIMARY KEY AUTOINCREMENT,
// //     //         image TEXT,
// //     //         name TEXT,
// //     //         address TEXT,
// //     //         address2 TEXT,
// //     //         state TEXT,
// //     //         city TEXT,
// //     //         items TEXT
// //     //     )
// //     // `)

//     // const query = `
//     //     INSERT INTO places (
//     //         image,
//     //         name,
//     //         address,
//     //         address2,
//     //         state,
//     //         city,
//     //         items
//     //     ) VALUES (?,?,?,?,?,?,?);
//     // `
    
//     // const values = [
//     //     "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
//     //     "Papersider",
//     //     "Guilherme Gemballa, Jardim America",
//     //     "Número 260",
//     //     "Santa Catarina",
//     //     "Rio do Sul",
//     //     "Residuos Eletrônicos, Lampadas"
//     // ]

//     // function afterInsertData(err){
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log ("Cadastro com sucesso")
//     //     console.log(this)
//     // }

//     // db.run(query, values, afterInsertData)


//     //deletar registro
//     // db.run (`DELETE FROM places WHERE id = ?`, [5], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso!")
//     // })

//     //consulta
//     // db.all(`SELECT * FROM places`, function(err, rows) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros: ")
//     //     console.log(rows)
//     // })
// })