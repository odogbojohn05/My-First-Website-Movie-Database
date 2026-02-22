function MovieCard({ movie }) {
  return (
    <div className="border rounded p-2 shadow hover:shadow-lg transition">
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
        alt={movie.Title}
        className="w-full h-64 object-cover mb-2 rounded"
      />
      <h2 className="font-bold text-lg">{movie.Title}</h2>
      <p className="text-gray-600">{movie.Year}</p>
      <a
        href={`https://www.imdb.com/title/${movie.imdbID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View on IMDb
      </a>
    </div>
  );
}

export default MovieCard;
