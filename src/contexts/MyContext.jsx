import { useState, createContext } from "react";

export const MyContext = createContext()

export const MyContextProvider = ({ children }) => {
  const [message, setMessage] = useState("Hello")

  // what is sended to components to consume 
  const contextValue = { 
    message,
    setMessage
  }

  return(
    <MyContext.Provider value={contextValue}>
      {children}
    </MyContext.Provider>
  )
}