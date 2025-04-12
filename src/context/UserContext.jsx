import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userActive = localStorage.getItem('user');
        if (userActive) {
            setUser(JSON.parse(userActive));
        }
    }, []);

    return (
        <UserContext.Provider value={({user, setUser})}>
            {children}
        </UserContext.Provider>
    )
}