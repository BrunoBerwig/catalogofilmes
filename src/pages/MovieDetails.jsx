import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

const MovieDetails = () => {
  // Pegando o imdbID da URL
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = '6941ff82'; // Lembre-se de substituir pela sua chave da API

  useEffect(() => {
    // Requisição para buscar detalhes do filme
    setLoading(true);
    setError(null);
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError('Filme não encontrado!');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao carregar os dados!');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="movie-details">
      {movie && (
        <>
          <h1>{movie.Title} ({movie.Year})</h1>
          <img 
            src={movie.Poster !== 'N/A' ? movie.Poster : '/sem-imagem.jpg'} 
            alt={movie.Title} 
            className="movie-details__image"
          />
          <p>{movie.Plot}</p>
          <p><strong>Diretor:</strong> {movie.Director}</p>
          <p><strong>Gênero:</strong> {movie.Genre}</p>
          <p><strong>Atores:</strong> {movie.Actors}</p>
          <p><strong>Nota IMDb:</strong> {movie.imdbRating}</p>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
