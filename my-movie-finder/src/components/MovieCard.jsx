import React from "react";

function MovieCard({ title, poster, year, imdbID }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={poster !== "N/A" ? poster : "/placeholder.png"}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">
          {title} ({year})
        </h2>
        <a
          href={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
