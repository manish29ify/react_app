import React from 'react'
import { useAuth } from '../utils/AuthProvider'
import Container from './Container';
import { Navigate, useLocation } from 'react-router-dom';


function Template() {
    const location = useLocation()
    const auth = useAuth()
    if (!auth.user) {
        return <Navigate to='/login' state={{ path: location.pathname }} />
    }
    return <Container />

}

export default React.memo(Template)
