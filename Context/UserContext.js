import React, {createContext, useState, useContext} from 'react'

const UserContext = createContext()

export default function UserProvider({children}){
    const [user,setUser]= useState({
        id:0,
        nome:'',
        username:'',
        senha:'',
        logado: false,
        email:''

    })


    return(
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>
    )
}

export function userUser(){
    const context = useContext(UserContext)
    const {user,setUser} = context
    console.log(setUser)
    return {user,setUser}
}

