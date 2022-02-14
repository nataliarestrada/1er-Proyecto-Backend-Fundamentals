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
        connection.query(sql, data, (error, result, fields) => {
            // Error first callback
            if (error){
                reject(error.sqlMessage)
                //console.log(error.sqlMessage);
            }
            else{
                resolve(result)
                //console.log(result);
            }
        })
    })
}

module.exports = {query}