import React, { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Loading from '../components/Loading';
import './Home.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const API_KEY = '6941ff82';

  useEffect(() => {
    // Exibir um catálogo inicial de filmes
    fetch(`https://www.omdbapi.com/?s=action&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        }
      })
      .catch((err) => setError('Erro ao carregar filmes iniciais.'));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    setLoading(true);
    setError('');
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
          setError('Nenhum resultado encontrado.');
        }
        setLoading(false);
      })
      .catch((err) => {
        setError('Erro ao buscar filmes.');
        setLoading(false);
      });
  };

  return (
    <div className="home">
      <header className="main-header">
        <h1>Catálogo</h1>
        <nav className="nav-links">
          <a href="#filmes">Filmes</a>
          <a href="#series">Séries</a>
        </nav>
  
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Buscar filmes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Buscar</button>
        </form>
      </header>
  
      {loading && <Loading />}
      {error && <p className="error">{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
