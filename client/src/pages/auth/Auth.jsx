import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'


const Auth = () => {
    const[isLogin, setIsLogin] = useState(true) 
if(isLogin)  return (
    <Login setIsLogin={setIsLogin} />
  )
  else return( <SignUp setIsLogin={setIsLogin}/>)


}

export default Auth