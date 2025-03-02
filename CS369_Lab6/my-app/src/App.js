import React from 'react';

function MovieList({ movies }) {
  return (
    <div>
      <h1>List of Thai Movies</h1>
      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <strong>Title:</strong> {movie.title} <br />
            <strong>Director:</strong> {movie.director} <br />
            <strong>Release Year:</strong> {movie.year} <br />
            <strong>Genre:</strong> {movie.genre}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer({ noFilms }) {
  return (
    <h1 className="footer" style={{ color: 'green', fontStyle: 'italic' }}>
      มีภาพยนตร์ในรายการทั้งหมด {noFilms} เรื่อง
    </h1>
  );
}

function App({ movies }) {
  return (
    <div>
      <MovieList movies={movies} />
      <Footer noFilms={movies.length} />
    </div>
  );
}

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
