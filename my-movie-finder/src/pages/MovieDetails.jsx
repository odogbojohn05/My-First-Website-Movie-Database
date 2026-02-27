import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getMovieDetails } from "../services/movieService";

function MovieDetails() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMovieDetails(imdbID)
      .then(setMovie)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [imdbID]);

  if (loading) return <p className="animate-pulse text-center">Loading details...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white px-6 py-10">
      <Link to="/" className="text-yellow-400 hover:underline mb-6 inline-block">
        ← Back to Search
      </Link>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800 rounded-lg shadow-lg p-6">
        
        <div className="flex justify-center">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
            alt={movie.Title}
            className="rounded-lg shadow-md w-64"
          />
        </div>

        
        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            🎬 <span className="text-yellow-400">{movie.Title}</span>
          </h1>
          <p className="text-gray-400 text-lg">{movie.Year}</p>
          <p className="text-gray-300">{movie.Plot}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Type:</strong> {movie.Type}</p>

          <a
            href={`https://www.imdb.com/title/${movie.imdbID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded hover:bg-yellow-500 transition-colors"
          >
            View on IMDb
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
