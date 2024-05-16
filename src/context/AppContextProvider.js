import AppContext from "./AppContext";

import React, { useState } from 'react'

export const AppContextProvider = ({children}) => {
    const [isLogin,setIsLogin] = useState(false);
  return (
    <AppContext.Provider value={{isLogin,setIsLogin}}>
    {children}
    </AppContext.Provider>
  )
}
