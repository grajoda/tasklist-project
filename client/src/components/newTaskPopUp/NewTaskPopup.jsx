import "./newTaskPopup.css"
import '../../css/popup-styles.css'

import { useContext, useEffect, useState } from "react";
import { handleCreateTask, handleUpdateTask } from "../../controllers/taskController";
import { updateContext } from "../../context/updateContext";
import { popupDisplaysContext } from "../../context/popupDisplaysContext";

export default function NewTaskPopUp() {
    return(
        <div className="pop-up">

            <NewTaskForm/>

            <div className="popup-background">
                <p>.</p>
            </div>
            
        </div>
    )
}


function NewTaskForm() {

    const {taskToUpdate, setTaskToUpdate} = useContext(updateContext)
    const {setNewTaskPopupDisplay} = useContext(popupDisplaysContext)

    function closePopup() {
        setNewTaskPopupDisplay(false);
        setTaskToUpdate(false)
    }

    return(
        <div className="new-task pop-up-form">
            <div className="popup-navigation">
                <p onClick={closePopup}><strong>x</strong></p>
            </div>

            {taskToUpdate ? <h2>Atualizar Tarefa</h2> : <h2>Nova Tarefa</h2>}
            
            <ActivityForm closePopup={closePopup}/>
        </div>
    )
}


function ActivityForm({closePopup}) {

    const {setUpdate, taskToUpdate, setTaskToUpdate} = useContext(updateContext)
    const {setNewTaskPopupDisplay} = useContext(popupDisplaysContext)
    const [taskId, setTaskId] = useState()
    
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [date, setDate] = useState()
    const [time, setTime] = useState()

    useEffect(() => {
        if(taskToUpdate) {
            console.log(taskToUpdate)

            setTaskId(taskToUpdate.task_id)
            setTitle(taskToUpdate.title)
            setDescription(taskToUpdate.description)
            setDate(taskToUpdate.date.substring(0, 10))
            setTime(taskToUpdate.time)
        }
    }, [])

    const formdata = {
        taskId,
        title,
        description,
        date,
        time
    }

    function submitCreateTask () {
        console.log(formdata)
        handleCreateTask(formdata)
        setUpdate(true)
        setNewTaskPopupDisplay(false)
    }

    function submitUpdateTask() {
        handleUpdateTask(formdata)
        setUpdate(true)
        setNewTaskPopupDisplay(false)
    }


    return(
        <div className="pop-up-form-content">
            <input 
                className="pop-up-input" 
                type="text" 
                placeholder="Nome da Tarefa" 
                // value={((taskToUpdate && !title) ? taskToUpdate.title : title)}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea 
                className="pop-up-input" 
                placeholder="Descrição" 
                // value={((taskToUpdate && !description) ? taskToUpdate.description : description)}
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
            />
            
            <label>Selecione a Data</label>
            <input 
                className="pop-up-input" 
                type="date" 
                // value={((taskToUpdate && !date) ? taskToUpdate.date.substring(0, 10) : date)}
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <label>Selecione o horário</label>
            <input 
                className="pop-up-input" 
                type="time" 
                // value={((taskToUpdate && !time) ? taskToUpdate.time : time)}
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />

            <div className="pop-up-form-buttons">
                <button className="pop-up-form-button" onClick={closePopup} >Cancelar</button>
                {taskToUpdate ? 
                    <button className="pop-up-form-button" onClick={submitUpdateTask}>Atualizar</button> 
                : <button className="pop-up-form-button" onClick={submitCreateTask}>Adicionar</button>}
                
            </div>
        </div>
    )
}