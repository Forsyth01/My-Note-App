import { doc, onSnapshot } from 'firebase/firestore';
import React, { createContext, useState } from 'react';


export const FirebaseContext = createContext();

const FirebaseContextProvider = (props) => {
 
    return (
        <FirebaseContext.Provider value={{ }}>
            {props.children}
        </FirebaseContext.Provider>
    );
};

export default FirebaseContextProvider;