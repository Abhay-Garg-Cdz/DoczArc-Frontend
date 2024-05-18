import AppContext from "./AppContext";

import React, { useState } from 'react'

export const AppContextProvider = ({children}) => {
    const [isLogin,setIsLogin] = useState(false);
    const [userName,setUserName] = useState('');
    const[loading,setLoading] =useState(false);
  return (
    <AppContext.Provider value={{isLogin,setIsLogin,userName,setUserName,loading,setLoading}}>
    {children}
    </AppContext.Provider>
  )
}
