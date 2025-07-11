const mySqlUtils = require('../utils/dispatchQueryMySql')


function createUser(newUser) {
    
    const queryValues = [
        newUser.username, 
        newUser.password
    ]

    const sql = `INSERT INTO users (
        username,
        password
        ) VALUES ( 
            ? , 
            ? 
        )`;
    mySqlUtils.dispatchQuery(sql, queryValues)
}


function findUserById(id) {
    const sql = `SELECT * FROM users WHERE user_id = ?`;
    const results = mySqlUtils.dispatchQuery(sql, id)
    return results;
}


function findUserByUsername(username) {
    const sql = `SELECT * FROM users WHERE username = ?`;
    const results = mySqlUtils.dispatchQuery(sql, username)
    return results;
}


function updateUser(user) {
    const queryValues = [
            user.username, 
            user.userId
        ]
    
    const sql = `UPDATE users SET 
        username = ?
        WHERE user_id = ?`;
    
    mySqlUtils.dispatchQuery(sql, queryValues)
}


function deleteUser(id) {
    const sql = `DELETE FROM users WHERE user_id = ?`;
    const results = mySqlUtils.dispatchQuery(sql, id)
    return results;
}


module.exports = {
    createUser,
    findUserById,
    findUserByUsername,
    updateUser,
    deleteUser
}