import {deleteToUrl, postToUrl, putToUrl} from './http'

export const createTaskRequest = async (formdata) => {
    try {
        postToUrl(formdata, 'tasks/createTask');
        alert('Tarefa Criado Com sucesso')
    } catch (err) {
        console.log(err);
        alert('Erro ao Criar Tarefa')
    }
}

export const updateTaskRequest = async (formdata) => {
    try {
        putToUrl(formdata, `tasks/${formdata.taskId}`);
        alert('Tarefa Atualizada Com sucesso')
    } catch (err) {
        console.log(err);
        alert('Erro ao Atualizar Tarefa')
    }
}

export const deleteTaskRequest = async (taskId) => {
    try {
        deleteToUrl(`tasks/${taskId}`)
    } catch(err) {
        alert('Erro ao Deletar Tarefa')
    }
} 
