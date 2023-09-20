// component should be shown when user is not authnticated

import React from 'react'
import { Navigate } from 'react-router-dom'
import useStore from '../../store'

function PublicOnlyRoute({Component}) {

    // check if use is loggedin
    const {isLoggedIn} = useStore()
    return isLoggedIn ? <Navigate to="/visionboards" replace /> : <Component />
  
}

export default PublicOnlyRoute