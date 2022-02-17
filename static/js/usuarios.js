let usersData = []
var usuarios = document.getElementById("registro")

fetch("/api/mostrar-usuarios")
.then((res) => {
    return res.json()})
.then((data) => {
    usersData = data
    renderUsers()
}) 

function eliminar(id){
    fetch("/api/eliminar-usuario/"+id,{
        method:"DELETE"
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        usersData = data
        renderUsers()
    })
}

// fetch("/api/registrar-usuario"){
//     method: "POST"
// }

function renderUsers(){
    usuarios.innerHTML = `<thead>
    <tr>
        <th>id</th><th>Nombre</th><th>Edad</th><th>Género</th><th>Email</th><th>Profesión</th><th>Salario</th><th>Editar</th><th>Eliminar</th>
    </tr>
    </thead>`
    for(var user of usersData){
        usuarios.innerHTML = usuarios.innerHTML + `
        <tr><td>${user.id}</td><td>${user.nombre}</td><td>${user.edad}</td><td>${user.genero}</td><td>${user.email}</td><td>${user.profesion}</td><td>${user.salario}</td><td> <button class="boton_table">Editar</button> </td><td><button class="boton_table" onClick="eliminar(${user.id})">Eliminar</button></td></tr>`
    }
}