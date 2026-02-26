import React, { useState } from "react";
import MovieList from "../components/MovieList";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [submittedYear, setSubmittedYear] = useState("");
  const [submittedType, setSubmittedType] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedQuery(query.trim());
    setSubmittedYear(year.trim());
    setSubmittedType(type);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        🎬 MovieFinder
      </h1>

      
      <form onSubmit={handleSearch} className="flex flex-col gap-4 mb-6 sm:flex-row sm:items-center">
        <input
          type="text"
          id="movie-search"
          name="movie-search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          autoComplete="on"
          className="border rounded px-4 py-2 flex-1"
        />

      
        <div className="flex gap-2">
          <input
            type="number"
            id="year-filter"
            name="year-filter"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="border rounded px-2 py-2 w-24"
          />
          <select
            id="type-filter"
            name="type-filter"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded px-2 py-2"
          >
            <option value="">All</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </form>

      
      {submittedQuery ? (
        <MovieList query={submittedQuery} year={submittedYear} type={submittedType} />
      ) : (
        <p className="text-gray-600">Search for movies above</p>
      )}
    </div>
  );
}

export default SearchPage;
