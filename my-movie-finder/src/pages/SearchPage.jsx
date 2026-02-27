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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
    
      <header className="py-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide flex items-center justify-center gap-2">
          🎬 <span className="text-yellow-400">MovieFinder</span>
        </h1>
        <p className="mt-2 text-gray-300">Discover movies, series, and more</p>
      </header>

      
      <div className="max-w-3xl mx-auto px-4">
        <form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-4 bg-gray-800 p-4 rounded-lg shadow-lg"
        >
          <input
            type="text"
            id="movie-search"
            name="movie-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            autoComplete="on"
            className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

        
          <div className="flex gap-2">
            <input
              type="number"
              id="year-filter"
              name="year-filter"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-24 px-2 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <select
              id="type-filter"
              name="type-filter"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-2 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">All</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
              <option value="episode">Episode</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {/* Movie Results */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {submittedQuery ? (
          <MovieList
            query={submittedQuery}
            year={submittedYear}
            type={submittedType}
          />
        ) : (
          <p className="text-gray-300 text-center mt-10">
            Search for movies above to get started.
          </p>
        )}
      </main>
    </div>
  );
}

export default SearchPage;
