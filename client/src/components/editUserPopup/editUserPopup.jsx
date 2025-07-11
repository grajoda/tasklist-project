import "./editUserPopup.css"
import '../../css/popup-styles.css'

import { useContext, useEffect, useState } from "react";
import { updateContext } from "../../context/updateContext";
import { userContext } from "../../context/userContext";
import { handleUpdateUser } from "../../controllers/userController";

export default function EditUserPopUp() {
    return(
        <div className="pop-up">

            <EditUserData/>

            <div className="popup-background">
                <p>.</p>
            </div>
            
        </div>
    )
}


function EditUserData() {

    const {setEditUserPopupDisplay} = useContext(userContext)

    function closePopup() {
        setEditUserPopupDisplay(false);
    }

    return(
        <div className="edit-user pop-up-form">
            <div className="popup-navigation">
                <p onClick={closePopup}><strong>x</strong></p>
            </div>

            <h2>Atualizar Usuário</h2>
            
            <EditUserForm closePopup={closePopup}/>
        </div>
    )
}


function EditUserForm({closePopup}) {

    const {setUpdate} = useContext(updateContext)
    const {username, setEditUserPopupDisplay} = useContext(userContext)

    const [newUsername, setNewUsername] = useState()

    useEffect(() => {
        if (username) {
            setNewUsername(username)
        }
    }, [])

    const formdata = {
        newUsername
    }

    function submitUpdateUser() {
        handleUpdateUser(formdata)
        setUpdate(true)
        setEditUserPopupDisplay(false)
    }


    return(
        <div className="pop-up-form-content">
            <input 
                className="pop-up-input" 
                type="text" 
                placeholder="Nome da Tarefa" 
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
            />

            <div className="pop-up-form-buttons">
                <button className="pop-up-form-button" onClick={closePopup} >Cancelar</button>
                <button className="pop-up-form-button" onClick={submitUpdateUser}>Atualizar</button> 
            </div>
        </div>
    )
}