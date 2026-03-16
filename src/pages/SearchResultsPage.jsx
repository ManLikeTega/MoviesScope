import { useEffect, useState } from "react";

import { useLocation } from "react-router";

import { getMovieListByQuery } from "../data/movie_data";

import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import MovieCard from "../components/MovieCard";
import Utilities from "../components/Utilities";

function SearchResultsPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const query = params.get("q");

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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

      const searchData = await getMovieListByQuery(query, currentPage);

      setMovies(searchData.results);
      setTotalPages(searchData.total_pages);

      setLoading(false);
    };

    fetchData();
  }, [query, currentPage]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [query]);

  return (
    <>
      <Navbar />

      {loading ? (
        <Preloader />
      ) : (
        <main className="px-4 lg:px-8">
          <h1 className="text-2xl font-bold my-4">
            Search Results for "{query}"
          </h1>

          {movies && movies.length > 0 ? (
            <div className="flex flex-col md:grid  md:grid-cols-3 lg:grid-cols-6 gap-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <p className="">No movies found.</p>
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
        </main>
      )}

      <Utilities />
    </>
  );
}

export default SearchResultsPage;
