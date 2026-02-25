// src/App.jsx
import React, { useState } from "react";
import Search from "./Search";
import MovieList from "./components/MovieList";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex items-center mb-6">
        <span className="text-3xl mr-2">🎬</span>
        <h1 className="text-3xl font-bold text-blue-600">MovieFinder</h1>
      </header>

      <Search onSearch={setQuery} />

      {!query && (
        <p className="text-gray-600 mt-6">
          Search for movies above to get started.
        </p>
      )}

      {query && <MovieList query={query} />}
    </div>
  );
}

export default App;
