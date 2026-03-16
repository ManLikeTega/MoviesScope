import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/home/Hero";
import MovieRow from "../sections/home/MovieRow";
import { useEffect } from "react";
import {
  getTrendingData,
  getPopularData,
  getTopRated,
  getUpcomingMovies,
} from "../data/movie_data";
import Preloader from "../components/Preloader";
import Utilities from "../components/Utilities";

function LandingPage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const trending = await getTrendingData();
      const popular = await getPopularData();
      const topRated = await getTopRated();
      const upcoming = await getUpcomingMovies();

      setTrendingMovies(trending);
      setPopularMovies(popular);
      setTopRated(topRated);
      setUpcomingMovies(upcoming);

      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Hero />
          <MovieRow title="Trending Now" movies={trendingMovies} />
          <MovieRow title="Popular Movies" movies={popularMovies} />
          <MovieRow title="Top Rated" movies={topRated} />
          <MovieRow title="Upcoming Movies" movies={upcomingMovies} />{" "}
        </>
      )}

      <Utilities />
    </>
  );
}

export default LandingPage;
