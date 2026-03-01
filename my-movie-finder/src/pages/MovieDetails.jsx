import React from "react";

function MovieDetails({ movie, onBack }) {
  return (
    <div
      className="min-h-screen text-white bg-cover bg-center relative px-6 py-10"
      style={{
        backgroundImage: "url('/background.png')", 
      }}
    >
      
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10">
        <button
          onClick={onBack}
          className="text-blue-400 hover:underline mb-6 inline-block"
        >
          ← Back to Results
        </button>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg p-6">
      
          <div className="flex justify-center">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"}
              alt={movie.Title}
              className="rounded-lg shadow-md w-64"
            />
          </div>

          
          <div className="md:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold flex items-center gap-2">
              🎬 <span className="text-blue-400">{movie.Title}</span>
            </h1>
            <p className="text-gray-300 text-lg">{movie.Year}</p>
            <p className="text-gray-200">{movie.Plot || "No plot available."}</p>
            <p><strong>Genre:</strong> {movie.Genre || "N/A"}</p>
            <p><strong>Type:</strong> {movie.Type || "N/A"}</p>

            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-semibold px-6 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
