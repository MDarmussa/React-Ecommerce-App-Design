//There are different ways to develop protected routes. 
//In this method, I created two different files, ProtectedRoute & ProtectedRouteHook. then wrap all routes in app.js based on permission, admin and user.
//outlet: allows to protect group of routes at the same time.
//children: allows to protect one route only.

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ auth, children }) { //

     if(auth === false) {
          return <Navigate to="/login" replace />
     }


  return children ? children : <Outlet />
     
}

export default ProtectedRoute