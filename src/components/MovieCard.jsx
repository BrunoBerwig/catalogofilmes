// MovieCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : '/sem-imagem.jpg'}
        alt={movie.Title}
        className="movie-card__image"
      />
      <h2 className="movie-card__title">{movie.Title}</h2>
      <p className="movie-card__overview">Ano: {movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} className="movie-card__details-btn">
        Detalhes
      </Link>
    </div>
  );
};

export default MovieCard;
