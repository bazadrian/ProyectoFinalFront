import '../pages/custom.css'
import logo from '@/assets/logo.png'

const Login = () => {
    return (
            <div className="d-flex align-items-center py-4 ">
                    <div className="form-signin w-100 m-auto">
                        <form>
                            <img className="mb-4" src={logo} alt width={65} height={57} />
                            <h1 className="h3 mb-3 fw-normal">Login</h1>
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Correo</label>
                            </div>
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                            <p className="mt-5 mb-3 text-body-secondary">© Adrian 2017–2024</p>
                        </form>
                    </div>
                </div>

    )
}

export default Login