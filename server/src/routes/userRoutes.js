const express = require('express')

const userController = require('../controllers/userController')
const auth = require('../middlewares/verifyJWB')

const router = express.Router();

router.post('/users/createUser', userController.handleRegisterUser)
router.get('/user/getUser', auth, userController.handleUserData)
router.post('/users/login', userController.handleLoginUser)
router.get('/user/tasks', auth, userController.handleUserTasks)
router.put('/user/update', auth, userController.handleUpdateUser)
router.delete('/user/delete', auth, userController.handleDeleteUser)



module.exports = router