import { useEffect, useState } from "react";
import { getTopRated } from "../data/movie_data";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import MovieSubDetail from "../components/MovieSubDetail";
import Utilities from "../components/Utilities";

function TopRatedPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const topRated = await getTopRated();

      setMovies(topRated);

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
        <section className="px-4 py-10 md:px-6 lg:px-8 ">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
            {movies.map((movie) => (
              <MovieSubDetail movie={movie} key={movie.id} />
            ))}
          </div>
        </section>
      )}

      <Utilities />
    </>
  );
}

export default TopRatedPage;
