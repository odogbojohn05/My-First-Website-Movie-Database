function MovieCard({ title, poster, year, imdbID }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      <img
        src={poster !== "N/A" ? poster : "/placeholder.png"}
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{year}</p>
        <a
          href={`https://www.imdb.com/title/${imdbID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white px-3 py-1 rounded mt-2 inline-block text-center"
        >
          View on IMDb
        </a>
      </div>
    </div>
  );
}

export default MovieCard;
