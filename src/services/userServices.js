import axios from 'axios'

const BASE_URL = 'http://localhost:5000'

const registerUserServices = (data) => axios.post(`${BASE_URL}/api/users/register`, data)
const loginUserServices = (data) => axios.post(`${BASE_URL}/api/users/login`, data)
const getMeUserServices = (jwtToken) => axios.get(`${BASE_URL}/me`, {
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export {
  registerUserServices,
  loginUserServices,
  getMeUserServices
}