import React, { useState } from 'react';
import './Header.css';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('movie');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm, selectedCategory);
    }
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Catálogo de Filmes</h1>

        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="category-selector">
          <button
            className={`category-btn ${selectedCategory === 'movie' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('movie')}
          >
            Filme
          </button>
          <button
            className={`category-btn ${selectedCategory === 'series' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('series')}
          >
            Série
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
