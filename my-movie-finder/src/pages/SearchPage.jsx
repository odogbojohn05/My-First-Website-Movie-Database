import React, { useState } from "react";
import Search from "../components/Search";

function SearchPage({ onSearch, onViewResults }) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input);      
    onViewResults();      
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Search for movies..."
        className="border rounded px-4 py-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}

export default SearchPage;
