const taskService = require('../services/taskServices')


async function handleCreateTask (req, res) {
    try {
        const newTask = {
            userId: req.userId,
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time
        }

        console.log(newTask)

        taskService.createTask(newTask);

        res.status(200).json({message: "Task Created"});

    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Error on create user"});
    }
}


async function handleUpdateTask (req, res) {
    try {
        const updatedTask = {
            taskId: req.params.id,
            title: req.body.title,
            description: req.body.description,
            date: req.body.date.substring(0, 10),
            time: req.body.time
        }

        console.log(updatedTask)

        taskService.updateTask(updatedTask)

        res.status(200).json({message: "Task Updated"});


    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Error on update Task"});
    }
}


async function handleDeleteTask(req, res) {
    try {
        console.log("deleting task")
        const taskId = req.params.id;
        taskService.deleteTask(taskId);
        res.status(200).json({message: "Task Updated"});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Error on update Task"});
    }
}

module.exports = {
    handleCreateTask,
    handleUpdateTask,
    handleDeleteTask
}