import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import './Header.scss'


const Header = () => {
  return (
<div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <div className="col-md-3 mb-2 mb-md-0">
        <NavLink to='./dashboard'>
        <nav class="navbar ">
  <div class="container-fluid">
    <span class="navbar-brand mb-0 h1">Catalogo</span>
  </div>
</nav>
        </NavLink>
    </div>
{/*     <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
      <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
      <li><a href="#" className="nav-link px-2">Features</a></li>
      <li><a href="#" className="nav-link px-2">Pricing</a></li>
      <li><a href="#" className="nav-link px-2">FAQs</a></li>
      <li><a href="#" className="nav-link px-2">About</a></li>
    </ul> */}
    <div className="col-md-3 text-end">
        <Link to='./login'>
      <button type="button" className="btn btn-outline-primary me-2">Login</button>
        </Link>
      <Link to='./register'>
      <button type="button" className="btn btn-primary">Registro
        </button>
      </Link>
    </div>
  </header>
</div>

  )
}

export default Header