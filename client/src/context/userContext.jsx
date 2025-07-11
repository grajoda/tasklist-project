import React, { createContext, useEffect, useState } from 'react';
import { getUserData } from '../controllers/userController';

export const userContext = createContext();

export const UserProvider = ({ children }) => {

    const [username, setUsername] = useState();
    const [editUserPopupDisplay, setEditUserPopupDisplay] = useState(false)

    useEffect(() => {
        setUserData()
    }, [])

    async function setUserData() {
        if (!username) {
            const user = await getUserData()
            setUsername(user.username)
        }
    }

    function openEditUserPopup() {
        setEditUserPopupDisplay(true)
    }

    const values = {
        username,
        setUsername,
        editUserPopupDisplay,
        setEditUserPopupDisplay,
        openEditUserPopup
    }

    return (
    <userContext.Provider value={ values }>
        {children}
    </userContext.Provider>
    );
};