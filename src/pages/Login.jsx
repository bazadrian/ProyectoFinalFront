import { useForm } from 'react-hook-form'
import { loginUserServices } from '@/services/userServices'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/hooks/useAuthContext'
import '../pages/custom.css'
import logo from '@/assets/logo.png'

const Login = () => {
    const { login } = useAuthContext()
  
    const navigate = useNavigate()
  
    const {
      register,
      handleSubmit
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        const response = await loginUserServices(data)
  
        if (response.status === 200) {
            login(response.data.token)
            navigate('/dashboard')
          }
      } catch (error) {
        alert('Verifica Usuario y Password')
        console.log(error)
      }
    }


    return (
        <div className="d-flex align-items-center py-4 ">
            <div className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <img className="mb-4" src={logo} alt="Logo" width={65} height={57} />
                    <h1 className="h3 mb-3 fw-normal">Login</h1>
                    <div className="form-floating">
                        <input type="email"
                            className="form-control"
                            id="email"
                            placeholder="name@example.com"
                            {...register('email', { required: true } )}
                        />
                        <label htmlFor="email">Correo</label>
                    </div>
                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Password"
                            {...register('password', { required: true } )}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
                    <p className="mt-5 mb-3 text-body-secondary">© Adrian 2017–2024</p>
                </form>
            </div>
        </div>

    )
}

export default Login