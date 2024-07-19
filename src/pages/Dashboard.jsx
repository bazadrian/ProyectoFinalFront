import { useState, useEffect } from 'react'
import { getMeUserServices } from '@/services/userServices'

const Dashboard = () => {
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserServices(token)

        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserData()
  }, [token])

  return (
    <>
      <h1>Dashboard</h1>
      {userData?._id && <p>ID: {userData._id}</p>}
      {userData?.nombre && <p>Nombre: {userData.nombre}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
    </>
  )
}

export default Dashboard