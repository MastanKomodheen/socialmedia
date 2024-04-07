import { IContextType, IUpdateUser } from "@/types"
import { createContext, useContext, useEffect, useState } from "react"


export const INITIAL_USER = {
    id: '',
    name: '',
    username: '',
    email: '',
    imageUrl: '',
    bio: ''
}

const INITIAL_STATE = {
    user: INITIAL_USER,
    isLoading: false,
    isAuthenticated: false,
    setUser: () => { },
    setIsAuthenticated: () => { },
    checkAuthUser: () => false as boolean,
}
const AuthContext = createContext<IContextType>(INITIAL_STATE);
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<IUpdateUser>(INITIAL_USER);
    const [isLoading, setIsLoading] = useState(false);
    const [isAuthenticated, setAuthenticated] = useState(false);


const checkAuthUser=async()=>{
    try {
        
    } catch (error) {
        
    }
}

const value={
    user,
    setUser,
    isLoading,
    isAuthenticated,
    setIsAuthenticated,
    checkAuthUser,
}
    return (
   <AuthContext.Provider >
{children}
   </AuthContext.Provider>
  )
}

export default AuthContext