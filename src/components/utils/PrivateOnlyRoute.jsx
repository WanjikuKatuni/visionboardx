import React from 'react'
import { Navigate } from 'react-router-dom';
import useStore from '../../store'

export default function PrivateOnlyRoute({Component}) {

    const {isLoggedIn} = useStore();
    return !isLoggedIn ? <Navigate to="/" replace /> : <Component />

}
