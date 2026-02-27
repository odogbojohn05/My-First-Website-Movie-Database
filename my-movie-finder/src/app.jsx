import React, { useState } from "react";
import Landing from "./components/Landing";
import SearchPage from "./pages/SearchPage";
import MovieList from "./components/MovieList";
import MovieDetails from "./pages/MovieDetails";

function App() {
  const [page, setPage] = useState("landing");
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

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

      {page === "movies" && (
        <MovieList
          query={query}
          onSelectMovie={(movie) => {
            setSelectedMovie(movie);
            setPage("details");
          }}
        />
      )}

      {page === "details" && selectedMovie && (
        <MovieDetails movie={selectedMovie} onBack={() => setPage("movies")} />
      )}
    </div>
  );
}

export default App;
