import './userTag.css'

import { useContext, useState } from 'react'
import { destroyUserToken, handleDeleteUser } from '../../../controllers/userController'
import { userContext } from '../../../context/userContext'

export default function UserTag() {

    const {username} = useContext(userContext)
    const [displayOptions, setDisplayOptions ] = useState(false)
    const [tagWidth, setTagWidth] = useState("fit-content")

    function handleOptionsDisplay() {
        if (displayOptions) {
            setDisplayOptions(false)
            setTagWidth('fit-content')
        } else {
            setDisplayOptions(true)
            setTagWidth('20%')
        }
    }

    return(
        <div className="user-tag" style={{width: tagWidth}} onClick={handleOptionsDisplay}>
            <img src='#'/>
            
            <div className="username">
                <h3>{username}</h3>
            </div>

            {displayOptions ? <UserOptions/> : ""}
            
        </div>
    )
}


function UserOptions() {

    const {openEditUserPopup} = useContext(userContext)
    const {userId} = useContext(userContext)

    function submitDeleteUser() {
        handleDeleteUser(userId)
    }

    return(
        <div className='user-options'>
            <UserOption 
                name={"Logoff"} 
                actionOnClick={destroyUserToken} 
                iconClass={"fa-solid fa-arrow-right-from-bracket"}
            />

            <UserOption 
                name={"Edit"} 
                actionOnClick={openEditUserPopup} 
                iconClass={"fa-solid fa-pen-to-square"}
            />

            <UserOption 
                name={"Delete User"} 
                actionOnClick={submitDeleteUser} 
                iconClass={"fa-solid fa-circle-xmark"}
            />

        </div>
    )
}



function UserOption({name, actionOnClick, iconClass}) {

    const [displaText, setDisplaText] = useState("none")

    function handleShowText() {
        setDisplaText("initial")
    }

    function handleHideText() {
        setDisplaText("none")
    }

    return(
        <div className='user-option' onMouseOver={handleShowText} onMouseOut={handleHideText}>
            <i class={iconClass}></i>
            <p style={{display: displaText}} onClick={actionOnClick}>{name}</p>
        </div>
    )
}