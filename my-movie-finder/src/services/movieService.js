const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(title) {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      return data.Search;
    } else {
      throw new Error(data.Error || "No movies found");
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
}
