import { useEffect, useState, createContext } from "react"
import { auth } from "../lib/firebase"
import { onAuthStateChanged } from "firebase/auth"

export const AuthContext = createContext();
export function AuthProvider({ children }){
  const [user, setUser] = useState(null)
  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential){
        setUser(userCredential)
      }
    })
  })
  return (
  <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}