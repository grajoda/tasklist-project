const mysql = require('mysql2');
const dbConfig = require('../config/dbConfig.js')

const connection = mysql.createPool(dbConfig);

connection.getConnection((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados: ' + err.stack);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
});


function dispatchQuery(sqlQuery, values) {
    const queryValues = Array.isArray(values) ? values : [values];
    
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, queryValues, (error, results, fields) => {
            if (error) {
                reject(error)
            } else {
                resolve(results)
            }
        });
    })
}


module.exports = {
    dispatchQuery
}