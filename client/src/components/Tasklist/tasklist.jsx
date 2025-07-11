import { useContext, useEffect, useState } from "react"
import "./tasklist.css"
import { getUserTasks } from "../../controllers/userController";
import { updateContext } from "../../context/updateContext";
import Task from "./Task/Task";
import { popupDisplaysContext } from "../../context/popupDisplaysContext";

export default function Tasklist () {

    const [tasks, setTasks] = useState([]);

    const {update, setUpdate} = useContext(updateContext)
    const {setNewTaskPopupDisplay} = useContext(popupDisplaysContext);

    useEffect(() => {
        handleTasks()
        setUpdate(false)
    }, [update])

    async function handleTasks() {
        const userTasks = await getUserTasks()
        if (userTasks) {
            setTasks(userTasks)
        }
    }

    function openPopup() {
        setNewTaskPopupDisplay(true)
    }

    return(
        <div className="tasklist-main">
            <h2>Tarefas</h2>
            
            <div className="tasks-list">
                {(tasks.length > 0) ? tasks.map(task => <Task task={task}/>) : "Ainda não tem tarefa" }
            </div>

            <button className="add-task-button" onClick={openPopup}>+ Adicionar Tarefa</button>

        </div>
    )
}

