import { Routes, Route } from 'react-router-dom'
import { Home, Login, Secret, Register } from '@/pages'
/* import PrivateRoutes from '@/helpers/PrivateRoutes' */

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/secret' element={<Secret />} />
        </Routes>
    )
}

export default RoutesIndex