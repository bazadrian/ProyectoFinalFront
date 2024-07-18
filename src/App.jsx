import { BrowserRouter as Router } from 'react-router-dom'
import RoutesIndex from './routes'
import Header from './components/Header'

function App() {
  return (
    <>
      <Router>
          <Header />
           <RoutesIndex /> 
      </Router>
    </>
  )
}

export default App
