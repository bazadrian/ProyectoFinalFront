import { useEffect, useState } from 'react';
import { getAllMovies } from '@/services/userItems'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const [moviesData, setMovies] = useState([]);

  useEffect(() => {
    const fetchMoviesData = async () => {
      try {
        const response = await getAllMovies()
        if (response.status === 200) {
          setMovies(response.data.results)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchMoviesData()
  }, []);

  return (
    <>
      <div className='container-fluid justify-content-center'>
        <div className="d-flex  col-10">
          <div className="row ">
          <h1>Películas Populares</h1>
            {moviesData.map(movie => (
              <div className="col-md-3" key={movie.id}>
                <div className="card" style={{ width: '16rem' }}>
                  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt={movie.title} />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.overview}</p>
                    <NavLink to={`./secret/${movie.id}`} className="btn btn-primary">Info</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home