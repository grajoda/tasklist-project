import { createUserRequest, deleteUserRequest, getUserDataRequest, getUserTasksRequest, loginUserRequest, updateUserRequest } from '../services/userServices'

export const handleCreateUser = (formdata) => {
    createUserRequest(formdata)
}

export const handleLoginUser = async (formdata) => {
    const response = await loginUserRequest(formdata)
    if (response.auth) {
        createUserToken(response.token)
    }
}

export const getUserData = async () => {
    const response = await getUserDataRequest()
    if (response) {
        return response
    }
}

export const getUserToken = () => {
    const userToken = sessionStorage.getItem('userToken');
    if(userToken) {
        return userToken
    } else {
        console.log("token de usuário não encontrado")
        return false
    }
}

export const createUserToken = (token) => {
    sessionStorage.setItem('userToken', token)
    window.location.href = '/';
}


export const destroyUserToken = () => {
    sessionStorage.removeItem('userToken');
    window.location.href = '/'
}


export const getUserTasks = async () => {
    const tasks = await getUserTasksRequest()
    return tasks
}

export const handleUpdateUser = async (formdata) => {
    updateUserRequest(formdata)
}

export const handleDeleteUser = async () => {
    const confirmation = window.confirm("Tem certeza que deseja deletar este usuário?");
    
    if (confirmation) {
        const isDeleted = await deleteUserRequest()
        if (isDeleted) {
            alert("Usuário deletado com sucesso!");
            destroyUserToken()
        }
    } else {
        alert("Ação cancelada.");   
    }
}