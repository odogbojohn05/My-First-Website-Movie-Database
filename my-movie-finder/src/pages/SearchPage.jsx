import React, { useState } from "react";
import MovieList from "../components/MovieList";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmittedQuery(query.trim());
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">MovieFinder</h1>

      
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          id="movie-search"         
          name="movie-search"        
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          autoComplete="on"            
          className="border rounded px-4 py-2 flex-1"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      
      {submittedQuery ? (
        <MovieList query={submittedQuery} />
      ) : (
        <p className="text-gray-600">
          Search for movies above to get started.
        </p>
      )}
    </div>
  );
}

export default SearchPage;
