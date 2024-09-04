import axios from 'axios'

const BASE_URL = 'https://proyectofinalfullsatck.onrender.com/api/movies'
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

const putFavService = (movieData, token) => {
  return axios.post(`${BASE_URL}/`, movieData, {
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

const toggleLikeService = (id, token) => {
  return axios.post(`${BASE_URL}/${id}/like`, {}, {
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
    deleteFavoriteMovie,
    toggleLikeService
}