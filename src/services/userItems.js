import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api/movies'
const getAllMovies = () => axios.get(`${BASE_URL}/popular`, {
  params: {
    page: 1
  }
}

)
const getOneMovieService = (id) => {
  const token = localStorage.getItem('token');

  return axios.get(`${BASE_URL}/movie/${id}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})}

const getMyMovies = () => {
  const token = localStorage.getItem('token');

  return axios.get(`${BASE_URL}`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})}

const putFavService = (data, token) => {
  return axios.post(`${BASE_URL}/`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
})
}

const deleteFavoriteMovie = (tmdbId, token) => {
  return axios.delete(`${BASE_URL}/${tmdbId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export {
    getAllMovies,
    getOneMovieService,
    putFavService,
    getMyMovies,
    deleteFavoriteMovie
}