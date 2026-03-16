const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingTodayData = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    const newData = data.results.filter(
      (movie) => Math.round(movie.vote_average) >= 8,
    );

    return newData;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTrendingData = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPopularData = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/popular?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTopRated = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getUpcomingMovies = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSimilarMoviesById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}/similar?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.results.filter((item) => item.title && item.vote_average);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTrailerById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}/videos?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return (
      data.results.filter((video) => video.type === "Trailer")[1].key ||
      data.results.filter((video) => video.type === "Trailer")[0].key
    );
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getCastById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.cast;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getActorById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/person/${id}?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getActorMoviesById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/person/${id}/combined_credits?api_key=${
        import.meta.env.VITE_TMDB_TOKEN
      }`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.cast.filter((item) => !item.name && item.vote_average);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getGenresById = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/movie/${id}?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.genres;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getGenreList = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/genre/movie/list?api_key=${import.meta.env.VITE_TMDB_TOKEN}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data.genres;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieListByGenreId = async (id, page = 1) => {
  if (!id) return { results: [] };
  try {
    const res = await fetch(
      `${BASE_URL}/discover/movie?api_key=${import.meta.env.VITE_TMDB_TOKEN}&with_genres=${id}&page=${page}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getMovieListByQuery = async (query, page = 1) => {
  if (!query) return { results: [] };

  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${import.meta.env.VITE_TMDB_TOKEN}&query=${query}&page=${page}`,
    );

    if (!res.ok) {
      throw new Error(`TMDB API Error: ${res.status}`);
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
