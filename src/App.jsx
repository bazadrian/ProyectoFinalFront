import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from '@/context/AuthContext'
import RoutesIndex from './routes'
import Header from './components/Header'

function App() {
  return (
    <>
     <AuthProvider>
      <Router>
          <Header />
           <RoutesIndex /> 
      </Router>
     </AuthProvider>
    </>
  )
}

export default App
