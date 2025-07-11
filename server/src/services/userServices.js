const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieConfig = require('../config/cookieConfig')

const userModel = require('../models/userModel');
const taskModel = require('../models/taskModel');


async function registerUser(newUser) {
    if (newUser.password == newUser.confirmPassword) {
        const hashedPassword = await encryptPassword(newUser.password);

        console.log(hashedPassword)

        const user = {
            username: newUser.username,
            password: hashedPassword
        }

        console.log(user)

        userModel.createUser(user);
    } else {
        console.log("incorrect password");
    }
}

async function loginUser(user) {

    const result = await userModel.findUserByUsername(user.username);
    console.log(result)
    const foundUser = result[0]
    
    if (foundUser) {
        const isPasswordCorrect = verifyPassword(user.password, foundUser.password);
        if (isPasswordCorrect) {
            const token = createToken(foundUser);
            return token
        }
    }
}


async function getUserTasks (id) {
    const tasks = await taskModel.findTaskByUserId(id);
    return tasks
}


async function getUserData(id) {
    const foundUsers = await userModel.findUserById(id)
    const user = foundUsers[0]
    return user
}


function updateUser(updatedUser) {
    userModel.updateUser(updatedUser)
}


function deleteUser(id) {
    userModel.deleteUser(id)
}




async function encryptPassword(password) {
    const saltRounds = 10;
    try {
        const encryptedPassword = await bcrypt.hash(password, saltRounds);
        return encryptedPassword;
    } catch (err) {
        console.error(err);
        throw err; // ou retorne null se preferir tratar o erro fora
    }
}


function verifyPassword (password, userPassword) {
    const isPasswordCorrect = bcrypt.compare(password, userPassword);

    if (isPasswordCorrect) {
        return true
    } else {
        return false
    }
}

function createToken(user) {
    const token = jwt.sign(
        {userId: user.user_id}, 
        cookieConfig.secret, 
        { expiresIn: cookieConfig.expiresIn}
    );

    return token
}




module.exports = {
    registerUser,
    loginUser,
    getUserTasks,
    getUserData,
    updateUser,
    deleteUser

}