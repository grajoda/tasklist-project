const express = require('express')

const taskController = require('../controllers/taskController')
const auth = require('../middlewares/verifyJWB')

const router = express.Router();

router.post('/tasks/createTask', auth, taskController.handleCreateTask)
router.put('/tasks/:id', auth, taskController.handleUpdateTask)
router.delete('/tasks/:id', auth, taskController.handleDeleteTask)


module.exports = router