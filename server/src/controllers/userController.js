const userServices = require('../services/userServices')

async function handleRegisterUser(req, res) {
    try {
        const newUser = {
            username: req.body.username,
            password: req.body.password,
            confirmPassword: req.body.confirmPassword
        }

        await userServices.registerUser(newUser);

        res.status(200).json({message: "User Created"});

    } catch (err) {
        console.log(err);
        res.status(500).json({message: "Error on create user"});
    }
}


async function handleLoginUser(req, res) {
    try {
        const user = {
            username: req.body.username,
            password: req.body.password
        }

        const token = await userServices.loginUser(user)

        if (token) {
            res.status(200).json({message: 'Login bem sucedido', auth: true, token});
        } else {
            res.status(401).json({message: 'username ou senha inválidos', auth: false});
        }

    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Erro no login', auth: false});
    }
}


async function handleUserData(req, res) {
    try {
        const userId = req.userId;
        const user = await userServices.getUserData(userId)

        res.status(200).json(user);
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Erro ao buscar dados do usuário'});
    }
}


async function handleUserTasks(req, res) {
    try {
        const userId = req.userId;
        const tasks = await userServices.getUserTasks(userId)
        // console.log(tasks)
        res.status(200).json(tasks);

    } catch (err) {
        console.log(err)
        res.status(500).json({message: 'Erro ao buscar tarefas'});
    }
}

async function handleUpdateUser(req, res) {
    try {
        console.log("Atualizando usuário")
        const updatedUser = {
            userId: req.userId,
            username: req.body.newUsername
        }
        console.log(updatedUser)
        userServices.updateUser(updatedUser)
        res.status(200).json({message: "User Updated"});
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Erro ao Atualizar tarefas'});
    }
}


async function handleDeleteUser(req, res) {
    try {
        const userId = req.userId;
        userServices.deleteUser(userId);
        res.status(200).json({message: "User deleted"});
    } catch(err) {
        console.log(err);
        res.status(500).json({message: "Error on delete user"});
    }
}

module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleUserData,
    handleUserTasks,
    handleUpdateUser,
    handleDeleteUser
}