import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import './Header.scss'


const Header = () => {
  const { isAuth, logout } = useAuthContext()

  // Comparamos si el link está activo o no, con ayuda del NavLink
  const linkIsActive = ({ isActive, isPending }) => {
    return isActive ? 'header__item-link header__item-link--is-active' : 'header__item-link'
  }

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <nav class="navbar ">
            <div class="container-fluid">
              <span class="navbar-brand mb-0 h1">Catalogo de Películas</span>
            </div>
          </nav>
        </div>
        {isAuth
          ? (
            <>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink to='./dashboard' className="nav-link px-2">Mis Películas</NavLink></li>
          <li><NavLink to='./home' className="nav-link px-2">Todas las Películas</NavLink></li>
        </ul>
        <div className="col-md-3 text-end">
          <NavLink to='./' onClick={logout}>
            <button type="button" className="btn btn-primary">Salir</button>
          </NavLink>
        </div>
            </>
            )
          : (
            <>
        <div className="col-md-3 text-end">
          <Link to='./login'>
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
          </Link>
          <Link to='./register'>
            <button type="button" className="btn btn-primary">Registro</button>
          </Link>
        </div>        
            </>
            )}
      </header>
    </div>

  )
}

export default Header