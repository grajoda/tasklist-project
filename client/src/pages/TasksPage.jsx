import { useContext, useState } from "react"
import NewTaskPopUp from "../components/newTaskPopUp/NewTaskPopup"
import Tasklist from "../components/Tasklist/tasklist"
import "./page.css"
import Header from "../components/header/header";
import { UpdateProvider } from "../context/updateContext";
import { PopupDisplayProvider, popupDisplaysContext } from "../context/popupDisplaysContext";
import { userContext } from "../context/userContext";
import EditUserPopUp from "../components/editUserPopup/editUserPopup";


export default function TasksPage() {
    
    const {newTaskPopUpDisplay} = useContext(popupDisplaysContext);
    const {editUserPopupDisplay} = useContext(userContext)

    return(
        <div className="page">
            <Header/>
            <Tasklist/>
            { newTaskPopUpDisplay ?  <NewTaskPopUp/> : ""}
            { editUserPopupDisplay ? <EditUserPopUp/> : ""}
        </div>
    )
}