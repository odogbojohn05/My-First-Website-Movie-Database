import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { searchMovies } from "../services/movieService";

function MovieList({ query }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    searchMovies(query)
      .then(moviesArray => {
        console.log("Movies received:", moviesArray);
        setMovies(moviesArray); 
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p className="animate-pulse">Searching...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            imdbID={movie.imdbID}
          />
        ))
      ) : (
        <p className="text-gray-600">No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
