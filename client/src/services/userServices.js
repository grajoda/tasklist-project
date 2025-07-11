import {deleteToUrl, getToUrl, postToUrl, postToUrlAndReturn, putToUrl} from './http'

export const createUserRequest = async (formdata) => {
    try {
        postToUrl(formdata, 'users/createUser');
        alert('Usuário Criado Com sucesso')
    } catch (err) {
        console.log(err);
        alert('Erro ao Criar Usuário')
    }
}


export const loginUserRequest = async (formdata) => {
    try {
        const response = await postToUrlAndReturn(formdata, "users/login")
        return response
    } catch(err) {
        console.log(err);
    }
}


export const getUserDataRequest = async () => {
    try {
        const data = await getToUrl('user/getUser')
        return data
    } catch(err) {
        console.log(err);
    }
}


export const getUserTasksRequest = async () => {
    try {
        const data = await getToUrl('user/tasks')
        return data
    } catch(err) {
        console.log(err);
    }
}

export const updateUserRequest = async(formdata) => {
    try {
        putToUrl(formdata, `user/update`)
        alert('Usuário Atualizado Com sucesso')
    } catch (err) {
        console.log(err);
    }
}

export const deleteUserRequest = async() => {
    let isDeleted
    try {
        deleteToUrl(`user/delete`)
        isDeleted = true
    } catch(err) {
        console.log(err)
        alert('Erro ao deletar usuário')
        isDeleted = false
    }

    return isDeleted
}