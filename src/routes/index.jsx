import { Routes, Route, Navigate } from 'react-router-dom'
import { Home, Login, Secret, Register, Dashboard } from '@/pages'
import { useAuthContext } from '@/hooks/useAuthContext'

const RoutesIndex = () => {
    const { isAuth } = useAuthContext()
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={isAuth ? <Dashboard /> : <Navigate to='/login'/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/home/secret/:id' element={isAuth ? <Secret /> : <Navigate to='/login'/>} />            
        </Routes>
    )
}

export default RoutesIndex