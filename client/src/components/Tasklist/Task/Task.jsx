import { useContext } from "react"
import "./task.css"
import { updateContext } from "../../../context/updateContext"
import { popupDisplaysContext } from "../../../context/popupDisplaysContext";
import { handleDeleteTask } from "../../../controllers/taskController";

export default function Task ({task}) {    

    return(
        <div className="task">
            <input type="checkbox" />

            <p className="task-date">{
                (task.date && task.time) ? `${task.date.substring(0, 10)} às ${task.time.substring(0,5)}` : 
                    (task.date) ? `${task.date.substring(0, 10)}` : 
                        (task.time) ? `${task.time.substring(0,5)}` :
                "-"}</p>

            <h3 className="task-title">{task.title}</h3>

            <p className="task-description">{task.description}</p>
            <TaskMenu task={task}/>
        </div>
    )
}


function TaskMenu ({task}) {
    const {setTaskToUpdate, setUpdate} = useContext(updateContext)
    const {setNewTaskPopupDisplay} = useContext(popupDisplaysContext);

    function handleSetactivityToUpdate() {
        setTaskToUpdate(task)
        setNewTaskPopupDisplay(true)
    }

    function handleDeleteTaskClick() {
        handleDeleteTask(task.task_id)
        setUpdate(true)
    }

    return(
        <div className="task-menu">
            <i onClick={handleSetactivityToUpdate} class="fa-solid fa-pen-to-square"></i>
            <i onClick={handleDeleteTaskClick} className="fa-solid fa-trash-can"></i>
        </div>
    )
}