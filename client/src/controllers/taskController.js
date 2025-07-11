import { createTaskRequest, deleteTaskRequest, updateTaskRequest } from "../services/taskService"

export const handleCreateTask = (formdata) => {
    createTaskRequest(formdata)
}


export const handleUpdateTask = (formdata) => {
    updateTaskRequest(formdata)
}

export const handleDeleteTask = (id) => {
    const confirmation = window.confirm("Tem certeza que deseja deletar este item?");

    if (confirmation) {
        deleteTaskRequest(id)
        alert("Tarefa deletado com sucesso!");
    } else {
        alert("Ação cancelada.");   
    }
    
}