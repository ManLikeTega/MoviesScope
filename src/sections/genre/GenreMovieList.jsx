import { useEffect, useState } from "react";
import { getMovieListByGenreId } from "../../data/movie_data";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Preloader from "../../components/Preloader";
import MovieCard from "../../components/MovieCard";

function GenreMovieList({ activeGenre, currentPage, setCurrentPage }) {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const [loading, setLoading] = useState(false);

  const previousPageHandler = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else return;
  };

  const nextPageHandler = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else return;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const movieData = await getMovieListByGenreId(activeGenre, currentPage);

      setMovies(movieData.results);
      setTotalPages(movieData.total_pages);

      setLoading(false);
    };

    fetchData();
  }, [activeGenre, currentPage]);

  return (
    <>
      <section>
        {loading ? (
          <Preloader />
        ) : (
          <div className="p-4 flex flex-col md:grid  md:grid-cols-3 lg:grid-cols-6 gap-4 md:px-6 lg:px-8">
            {movies &&
              movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-between my-6 px-4">
            <button
              onClick={previousPageHandler}
              disabled={currentPage === 1}
              className="p-2 border rounded-md transition
        disabled:opacity-40 disabled:cursor-not-allowed
        hover:border-accent"
            >
              <MdNavigateBefore />
            </button>

            <span className="text-sm md:text-base text-gray-600">
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>

            <button
              onClick={nextPageHandler}
              disabled={currentPage === totalPages}
              className="p-2 border rounded-md transition
        disabled:opacity-40 disabled:cursor-not-allowed
        hover:border-accent"
            >
              <MdNavigateNext />
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default GenreMovieList;
