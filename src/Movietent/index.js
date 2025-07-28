import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";


const API_URL = `${process.env.REACT_APP_OMDB_API_KEY}`;

const Movietent = () => {

  const [searchTerm, setSearchTerm] = useState("");

  //Helps to dynamically loop over an array of data which is fetched from an API
  //Taking each individual data and dynamically passing it as a prop to the external component which is going to result in the render of all the movies
  const [movies, setMovies] = useState([]);

  //A function that fetches the movies
  //Asynchronous function means that it takes sometime to fetch data
  const searchMovies = async (titles) => {
    const allResults = [];

    for (const title of titles) {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Response === "True") {
        allResults.push(...data.Search); // spread to flatten into one array
      }
    }

    setMovies(allResults);
  };

  //Fetches data from the API as the component loads
  useEffect(() => {
    searchMovies(["Avengers", "Fast", "X-Men"]);
  }, []);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      searchMovies([searchTerm]);
    }
  }, [searchTerm]);


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
          onClick={() => searchMovies([searchTerm])}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
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