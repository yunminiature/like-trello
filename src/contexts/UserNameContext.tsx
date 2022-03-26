import React, {createContext, useState} from 'react';

import {Local} from '../services/LocalStorage'

export const UserNameContext = createContext<{
  userName: string,
  addUserName?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  isAddUserName: boolean,
  toggleAddUserName?: () => void,
}>({userName: "", isAddUserName: false});

export const UserNameContextProvider: React.FC = ({children}) => {
  const [userName, setUserName] = useState("");
  const addUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value)
  };

  const [isAddUserName, setAddUserName] = useState(!(Local.getUserName()===null))
  const toggleAddUserName = () => {
    (userName!=="") && setAddUserName(true);
    Local.setUserName(userName);
  }

  return(
    <UserNameContext.Provider value={{
      userName,addUserName,
      isAddUserName,
      toggleAddUserName
    }}>
      {children}
    </UserNameContext.Provider>
  )
}
