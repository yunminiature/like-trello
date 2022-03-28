import React, {createContext, useState} from 'react';

import {Local} from '../services/LocalStorage'

export const UserNameContext = createContext<{
  userName: string,
  addUserName?: (userName: string) => void,
}>({userName:""});

export const UserNameContextProvider: React.FC = ({children}) => {

  const [userName, setUserName] = useState(Local.getUserName())
  const addUserName = (userName: string) => {
    setUserName(userName);
    Local.setUserName(userName);
  }

  return(
    <UserNameContext.Provider value={{
      userName,
      addUserName
    }}>
      {children}
    </UserNameContext.Provider>
  )
}
