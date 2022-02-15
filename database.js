const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'primer_proyecto_backend'
 })

 function query(sql, data){
    return new Promise((resolve, reject) => {
        connection.query(sql, data, (error, result) => {
            // Error first callback
            if (error){
                reject(error.sqlMessage)
            }
            else{
                resolve(result)
            }
        })
    })
}
async function insert(tableName, data){
    try{
        await query(`INSERT INTO ${tableName}(??) VALUES(?)`,[Object.keys(data), Object.values(data)])
        return {data, success:true}
    }catch(error){
        return {error, uccess:false}
    }
}
//No podemos usar delete: palabra reservada
async function del(tableName, data){
    try{
        await query(`DELETE FROM ${tableName} WHERE id=?`,[data])
        return data
    }catch(error){
        return error
    }
}

async function update(tableName, data, id){
    try{
        await query(`UPDATE ${tableName} SET ? WHERE id=?`,[data, id])
        return data
    }catch(error){
        return error
    }
}
// Exportamos un objeto
module.exports = {query, insert, del, update}