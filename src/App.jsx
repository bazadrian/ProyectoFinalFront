import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Dashboard, Login, Register, Header, Secret } from '@/pages'

function App() {


  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/Secret' element={<Secret />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
