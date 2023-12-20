import { createContext, useContext, useState } from 'react'

const authContext = createContext(null)

export const AuthProvider = ({ children, initialUserId = '' }) => {
  const [userId, setUserId] = useState(initialUserId)

  return (
    <authContext.Provider value={{ userId, setUserId }}>
      {children}
    </authContext.Provider>
  )
}

export const useAuthContext = () => useContext(authContext)
