import React, { useState } from "react";
import Landing from "./components/Landing";
import SearchPage from "./pages/SearchPage";
import MovieList from "./components/MovieList";

function App() {
  
  const [page, setPage] = useState("landing");
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {page === "landing" && (
        <Landing onGetStarted={() => setPage("search")} />
      )}

      {page === "search" && (
        <SearchPage
          onSearch={setQuery}
          onViewResults={() => setPage("movies")}
        />
      )}

      {page === "movies" && <MovieList query={query} />}
    </div>
  );
}

export default App;
