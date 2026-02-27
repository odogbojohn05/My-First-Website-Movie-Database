import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { searchMovies } from "../services/movieService";

function MovieList({ query, onSelectMovie }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    searchMovies(query)
      .then((moviesArray) => {
        setMovies(moviesArray || []);
      })
      .catch((err) => {
        setError(err.message);
        setMovies([]);
      })
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p className="text-center">Searching...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {movies.length === 0 ? (
        <p className="text-gray-600 text-center">No movies found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => onSelectMovie(movie)}
              className="cursor-pointer"
            >
              <MovieCard
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                imdbID={movie.imdbID}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieList;
