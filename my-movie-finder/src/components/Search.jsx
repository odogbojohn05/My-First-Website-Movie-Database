import React, { useState } from "react";
import { searchMovies } from "../services/movieService";
import MovieList from "./MovieList";

function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError("");
    setMovies([]);

    try {
      const results = await searchMovies(query);
      setMovies(results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Searching...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default Search;
