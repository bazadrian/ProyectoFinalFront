import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import '../pages/custom.css'
import logo from '@/assets/logo.png'
import { registerUserServices } from '@/services/userServices'

const Register = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const {status} = await registerUserServices(data)

      if (status === 201) {
        navigate('/login')
      }
    } catch (error) {
      alert('Error al registrar el usuario')
      console.log(error)
    }
  }

  return (
    <div className="d-flex align-items-center py-4">
    <div className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
            <img className="mb-4" src={logo} alt width={65} height={57} />
            <h1 className="h3 mb-3 fw-normal">Registro</h1>
            <div className="form-floating">
                <input 
                type="text" 
                className="form-control" 
                id="nombre"                 
                placeholder="Nombre" 
                {...register('nombre', { required: true } )}
                />
                <label htmlFor="nombre">Nombre</label>
            </div>
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
                <input type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Password" 
                      {...register('password', { required: true } )}
                      />
                <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Registrar</button>
            <p className="mt-5 mb-3 text-body-secondary">© Adrian 2017–2024</p>
        </form>
    </div>
</div>
  )
}

export default Register