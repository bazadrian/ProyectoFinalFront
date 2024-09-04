import axios from 'axios'

const BASE_URL = 'https://proyectofinalfullsatck.onrender.com/api/users'

const registerUserServices = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserServices = (data) => axios.post(`${BASE_URL}/login`, data)
const getMeUserServices = (jwtToken) => axios.get(`${BASE_URL}/data`, {
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export {
  registerUserServices,
  loginUserServices,
  getMeUserServices
}