import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/movies'

const getAllMovies = () => axios.get(`${BASE_URL}/popular`, {
    params: {
        page: 1
    }
}

)
const getOneItemService = (id) => axios.get(`${BASE_URL}/items/${id}`)
const CreateItemService = (data, jwtToken) => axios.post(`${BASE_URL}/items`, data, {
  headers: {
    Authorization: `Bearer ${jwtToken}`
  }
})

export {
    getAllMovies,
  getOneItemService,
  CreateItemService
}