import React from "react";
import Search from "../components/Search";

function SearchPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Movie Finder</h1>
      <Search />
    </div>
  );
}

export default SearchPage;
