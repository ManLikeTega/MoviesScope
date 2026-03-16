import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  getMovieById,
  getCastById,
  getTrailerById,
  getSimilarMoviesById,
} from "../data/movie_data";

import { FaArrowLeftLong } from "react-icons/fa6";

import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import SimilarMoviesSection from "../sections/movie_detail/SimilarMoviesSection";
import TrailerSection from "../sections/movie_detail/TrailerSection";
import CastRow from "../sections/movie_detail/CastRow";
import MovieOverview from "../sections/movie_detail/MovieOverview";
import Utilities from "../components/Utilities";

function MovieDetail() {
  const id = useParams().movieId;

  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [trailerId, setTrailerId] = useState(null);
  const [similarMovies, setSimilarMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const movieData = await getMovieById(id);
      const castData = await getCastById(id);
      const trailerData = await getTrailerById(id);
      const similarMoviesData = await getSimilarMoviesById(id);

      setMovie(movieData);
      setCast(castData);
      setTrailerId(trailerData);
      setSimilarMovies(similarMoviesData);

      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Navbar />

      {loading ? (
        <Preloader />
      ) : (
        <main className="px-4 lg:px-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 cursor-pointer hover:bg-accent hover:text-white w-max p-2 m-4 rounded-md transition"
          >
            <FaArrowLeftLong /> Back
          </button>

          <main>
            {movie && (
              <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-12">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="w-full lg:h-110 rounded-lg shadow-lg lg:sticky top-25"
                />

                <div className="col-span-3">
                  <MovieOverview movie={movie} />

                  {cast.length > 0 && <CastRow cast={cast} />}

                  <TrailerSection trailerId={trailerId} />

                  {similarMovies && similarMovies.length > 0 && (
                    <SimilarMoviesSection movies={similarMovies} />
                  )}
                </div>
              </div>
            )}
          </main>
        </main>
      )}

      <Utilities />
    </>
  );
}

export default MovieDetail;
