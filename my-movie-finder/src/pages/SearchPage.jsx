import React, { useState } from "react";

function SearchPage({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">
          🎬 <span className="text-yellow-400">MovieFinder</span>
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex gap-4 bg-gray-800 p-4 rounded-lg shadow-lg"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."
            className="flex-1 px-4 py-2 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchPage;
