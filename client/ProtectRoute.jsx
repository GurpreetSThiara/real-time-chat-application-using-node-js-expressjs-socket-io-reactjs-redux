import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectRoute = ({user , children , redirect = "/auth"}) => {
   if(!user) return <Navigate to={redirect}/>
   return children ? children : <Outlet/>;
}

export default ProtectRoute