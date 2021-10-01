import React, {useState, createContext} from 'react';

export const Context = createContext();
export function ContextProvider ({children}) {
    const [context, setContext] = useState([]);

    return (
        <Context.Provider value={[context, setContext]}>
            {children}
        </Context.Provider>
    )
};

