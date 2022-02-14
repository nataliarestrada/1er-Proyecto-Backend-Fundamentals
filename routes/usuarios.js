const express = require("express")
const database = require("../database")
const router = express.Router()


router.post("/registrar-usuario", async (req, res) => {
    const usuario = req.body
    try{
        const results = await database.query("INSERT INTO usuario(??) VALUES(?)", [Object.keys(usuario), Object.values(usuario)])
        
        return res.json(results) 
    }
    catch(error){

        return res.json(error)
    }

 })

 router.get("/mostrar-usuarios", async (req, res) => {
    // OTRA forma de gestionar promesas
    try{
        const results = await database.query("SELECT * FROM usuario")
        return res.json(results)
    }
    catch(error){
        return res.json(error)
    }
})

router.put("/editar-usuario", async (req,res)=>{
    const id = req.body.id
    const user = req.body.usuario
    const results = await database.query("UPDATE usuario SET ? WHERE id=?",[user,id])
    return res.json(results)
})

router.delete("/eliminar-usuario", async (req, res) => {
    const id = req.body.id
    const results = await database.query("DELETE FROM usuario WHERE id=?", id)
    return res.json(results)
})

module.exports = router