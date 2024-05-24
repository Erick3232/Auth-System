import { useState } from 'react';
import React, { createContext, useContext} from 'react';

const UserContext = createContext();

export const HandleLogin = ({children}) => {
    const [user, setUser] = useState('');

    const login = (name) => {
        setUser(name);
    };

    return (
        <UserContext.Provider value={{ user, login}}>
          {children}
        </UserContext.Provider>
      );
};
export const useUser = () => useContext(UserContext);
