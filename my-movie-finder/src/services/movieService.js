const API_KEY = import.meta.env.VITE_OMDB_KEY;

export async function searchMovies(query) {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  const data = await res.json();
  if (data.Response === "True") {
    return data.Search; 
  } else {
    throw new Error(data.Error || "Movie not found");
  }
}
