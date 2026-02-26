const API_KEY = import.meta.env.VITE_OMDB_KEY;
console.log("OMDb API Key:", API_KEY);

export async function searchMovies(query) {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  console.log("Fetching:", url);

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Response:", data);

  
    if (data.Response === "True" && Array.isArray(data.Search)) {
      return data.Search;
    }

    throw new Error(data.Error || "Movie not found");
  } catch (err) {
    throw new Error("Failed to fetch movies: " + err.message);
  }
}

export async function getMovieDetails(id) {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  console.log("Fetching details:", url);

  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log("Details Response:", data);

    if (data.Response === "True") {
      return data;
    }

    throw new Error(data.Error || "Movie details not found");
  } catch (err) {
    throw new Error("Failed to fetch movie details: " + err.message);
  }
}
