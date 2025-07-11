const taskModel = require('../models/taskModel')

async function createTask (task) {
    taskModel.createTask(task)
}


async function updateTask (task) {
    taskModel.updateTask(task)
}

async function deleteTask(id) {
    taskModel.deleteTask(id)
}

module.exports = {
    createTask,
    updateTask,
    deleteTask
}