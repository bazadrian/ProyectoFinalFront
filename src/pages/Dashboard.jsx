import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { getMyMovies, deleteFavoriteMovie } from '@/services/userItems';
import { getMeUserServices } from '@/services/userServices';

const Dashboard = () => {
  const [userData, setUserData] = useState({});
  const [myMovies, setMyMovies] = useState([]);
  const [noMovies, setNoMovies] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchMyMoviesData();
  }, []);

  const fetchMyMoviesData = async () => {
    try {
      const response = await getMyMovies();
      if (response.status === 404 || !response.data.length) {
        setNoMovies(true);
      } else {
        setMyMovies(response.data);
        setNoMovies(false);
      }
    } catch (error) {
      console.error('Error fetching movies', error);
      setNoMovies(true);
    }
  };

  const handleDelete = async (tmdbId) => {
    try {
      const response = await deleteFavoriteMovie(tmdbId, token);
      alert('Película eliminada de favoritos!');
      fetchMyMoviesData(); // Recargar las películas favoritas
    } catch (error) {
      alert('Error al eliminar la película de favoritos');
      console.error(error);
    }
  };

  return (
    <div className='container-fluid justify-content-center'>
      <div className="d-flex col-10">
        <div className="row">
          <h1>Mis Películas</h1>
          {noMovies ? (
            <p>No hay películas disponibles.</p>
          ) : (
            myMovies.map(movie => (
              <div className="col-md-3" key={movie._id}>
                <div className="card" style={{ width: '16rem' }}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <button className="btn btn-danger" onClick={() => handleDelete(movie.tmdb_id)}>Eliminar Favorito</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
