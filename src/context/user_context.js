import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, loginWithPopup, logout, user } = useAuth0()

  const [userDetails, setUserDetails] = useState(null)

  useEffect(() => {
    setUserDetails(user)
  }, [user])

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, loginWithPopup, logout, userDetails }}
    >
      {children}
    </UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
