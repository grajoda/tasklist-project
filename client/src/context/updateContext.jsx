import React, { createContext, useState } from 'react';

export const updateContext = createContext();

export const UpdateProvider = ({ children }) => {

    const [update, setUpdate] = useState(false);

    const [taskToUpdate, setTaskToUpdate] = useState();

    const values = {
        update, 
        setUpdate,
        taskToUpdate,
        setTaskToUpdate
    }

    return (
    <updateContext.Provider value={ values }>
        {children}
    </updateContext.Provider>
    );
};