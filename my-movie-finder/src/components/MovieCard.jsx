import React from "react";

function MovieCard({ title, poster, year, imdbID, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200 cursor-pointer"
    >
      <img
        src={poster !== "N/A" ? poster : "/placeholder.png"}
        alt={title}
        className="h-64 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-yellow-400 mb-2">
          {title} <span className="text-gray-400">({year})</span>
        </h2>
        <a
          href={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-4 py-2 rounded hover:bg-yellow-500 transition-colors"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
