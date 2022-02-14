const express = require('express')
const userRoutes = require("./routes/usuarios.js")

const app = express()

app.use(express.json())

app.use(userRoutes)

app.listen(4000,() => {
    console.log("Funcionando... http://localhost:4000")
})
