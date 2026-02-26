const API_KEY = import.meta.env.VITE_OMDB_KEY;
console.log("OMDb API Key:", API_KEY);

export async function searchMovies(query) {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`;
  console.log("Fetching:", url);

  const res = await fetch(url);
  const data = await res.json();
  console.log("Response:", data);

  if (data.Response === "True") {
    return data.Search; 
  } else {
    throw new Error(data.Error || "Movie not found");
  }
}

export async function getMovieDetails(id) {
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  console.log("Fetching details:", url);

  const res = await fetch(url);
  const data = await res.json();
  console.log("Details Response:", data);

  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error || "Movie details not found");
  }
}
