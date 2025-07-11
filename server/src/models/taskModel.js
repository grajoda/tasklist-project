const mySqlUtils = require('../utils/dispatchQueryMySql')


function createTask(newTask) {

    const queryValues = [
        newTask.userId,
        newTask.title, 
        newTask.description,
        newTask.date,
        newTask.time
    ]

    const sql = `INSERT INTO tasks (
        user_id,
        title,
        description,
        date,
        time
        ) VALUES ( 
            ? , 
            ? ,
            ? ,
            ? ,
            ?
        )`;
    mySqlUtils.dispatchQuery(sql, queryValues)
}


function findTaskById(id) {
    const sql = `SELECT * FROM tasks WHERE task_id = ?`;
    const results = mySqlUtils.dispatchQuery(sql, id)
    return results;
}


function findTaskByUserId(id) {
    const sql = `SELECT * FROM tasks WHERE user_id = ?`;
    const results = mySqlUtils.dispatchQuery(sql, id)
    return results;
}


function updateTask(task) {

    const queryValues = [
        task.title, 
        task.description,
        task.date,
        task.time,
        task.taskId,
    ]

    const sql = `UPDATE tasks SET 
        title = ?, 
        description = ?, 
        date = ?,
        time = ? 
        WHERE task_id = ?`;

    mySqlUtils.dispatchQuery(sql, queryValues)
}


function deleteTask(id) {
    const sql = `DELETE FROM tasks WHERE task_id = ?`;
    const results = mySqlUtils.dispatchQuery(sql, id)
    return results;
}



module.exports = {
    createTask,
    findTaskById,
    findTaskByUserId,
    updateTask,
    deleteTask
}