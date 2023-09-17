import React, { useState } from 'react'
import Name from './Name';

type users={
    name:string,
    email:string,
}

const User = () => {
   const[userLogin,setUserLogin]= useState<users >({}as users)

   const handleLogin=()=>{
    setUserLogin({
        name:'sreeram',
        email:"sreeram@0.com"
    })
   }

   const handleLogout= ()=>{
    setUserLogin({
        name:"",
        email:""
    })
   }
  return (
    <div>
        {
            userLogin.name!="" && userLogin.email!="" ? <button onClick={handleLogout}>login out</button>:
            <button onClick={handleLogin}>login</button>
        }     
    </div>
  )
}

export default User
