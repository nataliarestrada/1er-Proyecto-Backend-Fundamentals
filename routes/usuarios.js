const express = require("express")
const path = require("path")
const UserController = require("../controllers/usuario.js")

const router = express.Router()
const userController = new UserController()

function views(document){
    return path.join(__dirname,"../","views",document)
}

router.get('/registro', (req,res) => {
    return res.sendFile(views("registro.html"))
})

router.post("/registrar-usuario", async (req, res) => {
    const usuario = req.body
    const registro = await userController.create(usuario)
    if(registro.success){
        return res.redirect("/")
    }else{
        return res.redirect("/registro")
    }
 })

 router.get("/mostrar-usuarios", async (req, res) => {
    var usuarios = await userController.readAll()
    return res.json(usuarios)
})

router.put("/editar-usuario", async (req,res)=>{
    const id = req.body.id
    const usuario = req.body.usuario
    const result = await userController.update(usuario, id)
    return res.json(result)
})

router.delete("/eliminar-usuario/:id", async (req, res) => {
    const id = req.params.id
    var usuario = await userController.delete(id)
    return res.json(usuario)
})

module.exports = router