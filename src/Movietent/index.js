import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";


const API_URL = "OMDb API";

const Movietent = () => {

  const [searchTerm, setSearchTerm] = useState("");

  //Helps to dynamically loop over an array of data which is fetched from an API
  //Taking each individual data and dynamically passing it as a prop to the external component which is going to result in the render of all the movies
  const [movies, setMovies] = useState([]);

  //Fetches data from the API as the component loads
  useEffect(() => {
    searchMovies("Batman");
  }, []);

  //A function that fetches the movies
  //Asynchronous function means that it takes sometime to fetch data
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    //Gives access to data
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movietent</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default Movietent;