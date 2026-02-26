const API_KEY = import.meta.env.VITE_OMDB_KEY;

export async function searchMovies(query, year = "", type = "") {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}${
    year ? `&y=${year}` : ""
  }${type ? `&type=${type}` : ""}`;

  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True" && Array.isArray(data.Search)) {
    return data.Search;
  } else {
    throw new Error(data.Error || "Movie not found");
  }
}

export async function getMovieDetails(id) {
  if (!API_KEY) {
    throw new Error("API key is missing. Check your .env file.");
  }

  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;
  const res = await fetch(url);
  const data = await res.json();

  if (data.Response === "True") {
    return data;
  } else {
    throw new Error(data.Error || "Movie details not found");
  }
}
