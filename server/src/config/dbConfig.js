// Configurações da conexão com banco de dados
// Database config to connection

const database = 'task-list';

const user = process.env.DB_TASKLIST_U
const password = process.env.DB_TASKLIST_P;  

const dBConfig = {
    host: 'localhost',
    port: '3306',
    user: user, 
    password: password,
    database: database
}


module.exports = dBConfig