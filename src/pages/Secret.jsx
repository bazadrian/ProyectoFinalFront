import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom';
import { getOneMovieService, putFavService, /* toggleLikeService */ } from '@/services/userItems';
import LikeButton from '@/pages/like';
import '../pages/custom.css'

const Secret = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();  // Utiliza el hook useForm aquí
  /*   const [liked, setLiked] = useState(false);  */
  const token = localStorage.getItem('token');  // Asume que el token está almacenado en localStorage

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getOneMovieService(id);
        if (response.status === 200) {
          setMovie(response.data);
          /* Aqui agregue el like boton
          setLiked(response.data.isLikedByUser);
          */
          setValue('tmdbId', response.data.id.toString());
          setValue('poster_path', response.data.poster_path);
          setValue('title', response.data.title);
          setValue('overview', response.data.overview);
        }
      } catch (error) {
        console.error('Failed to fetch movie', error);
      }
    };

    fetchMovie();
  }, [id, setValue]) //Agregue el setValue
  // servicio de toggleLike
  /* const handleToggleLike = async () => {
    try {
      await toggleLikeService(id, token);
      setLiked(!liked);
    } catch (error) {
      console.error('Error al cambiar el like', error);
    }
  }; */
  // -------

  const onSubmit = async (data) => {
    try {
      const movieData = {
        tmdbId: data.tmdbId,
        poster_path: data.poster_path,
        title: data.title,
        overview: data.overview
      }
      const response = await putFavService(movieData, token);  // Asegúrate de pasar el token de autenticación
      alert('Película agregada a favoritos!');
      /* console.log(response.data) */
    } catch (error) {
      // Aquí manejas la respuesta del error
      if (error.response && error.response.data && error.response.data.message) {
        // Muestra el mensaje de error específico del backend si está disponible
        alert(error.response.data.message);
      } else {
        // Mensaje de error genérico si no hay detalles disponibles
        alert('No se pudo agregar a favoritos');
      }
      /*       console.error(error); */
    }
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="col-10">
        <div className="row featurette d-flex justify-content-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">{movie.title}</h2>
            <p className="lead">{movie.overview}</p>
            <p className="lead">Year: {new Date(movie.release_date).getFullYear()}</p>
            <p className="lead">Genres: {movie.genres.map(genre => genre.name).join(", ")}</p>
            <LikeButton
              movieId={id}
              initialLiked={movie.isLikedByUser}
              initialLikesCount={movie.likesCount}  // Pass the initial likes count
              token={token}
            />
            {/* Aqui va el boton like 
            <button type="button" className={`btn ${liked ? 'btn-primary' : 'btn-secondary'}`} onClick={handleToggleLike}>
              Like
            </button>
            */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" {...register('tmdbId')} defaultValue={movie.id} />
              <input type="hidden" {...register('poster_path')} defaultValue={movie.poster_path} />
              <input type="hidden" {...register('title')} defaultValue={movie.title} />
              <input type="hidden" {...register('overview')} defaultValue={movie.overview} />
              <button type="submit" className="btn btn-primary py-2">Agregar a Favoritos</button>
            </form>
          </div>
          <div className="col-md-5 order-md-1">
            <img className="featurette-image img-fluid mx-auto" width={500} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Secret
