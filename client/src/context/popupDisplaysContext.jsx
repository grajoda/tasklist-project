import React, { createContext, useState } from 'react';

export const popupDisplaysContext = createContext();

export const PopupDisplayProvider = ({ children }) => {

    const [newTaskPopUpDisplay, setNewTaskPopupDisplay] = useState(false);

    const values = {
        newTaskPopUpDisplay,
        setNewTaskPopupDisplay
    }

    return (
    <popupDisplaysContext.Provider value={ values }>
        {children}
    </popupDisplaysContext.Provider>
    );
};