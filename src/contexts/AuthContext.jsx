import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (val) => {},
  user: null,
  setUser: (val) => {},
  login: () => {},
  logout: () => {}
})

function AuthContextProvider({children}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState(null)
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    user, 
    setUser,
    login: (phone, password) => {
      setUser({ phone: phone })
      setIsLoggedIn(true)
    },
    logout: () => {
      setUser(null)
      setIsLoggedIn(false)
    }
  }
  return (  
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;