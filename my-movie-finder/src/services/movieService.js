const API_KEY = import.meta.env.VITE_OMDB_KEY;


export async function searchMovies(query) {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.Response === "True") {
      return data.Search; 
    } else {
      throw new Error(data.Error || "Movie not found");
    }
  } catch (err) {
    throw new Error("Failed to fetch movies: " + err.message);
  }
}
