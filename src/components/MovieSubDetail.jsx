import { useState, useEffect } from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { getCastById, getGenresById } from "../data/movie_data";

function MovieSubDetail({ movie }) {
  const id = movie.id;

  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState(null);
  const [cast, setCast] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const castData = await getCastById(id);
      const genresData = await getGenresById(id);

      setCast(castData);
      setGenres(genresData);

      setLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Link
        to={`/movie/${movie.id}`}
        className="rounded-lg bg-white border border-gray-300 flex flex-col md:grid grid-cols-3 overflow-hidden group hover:shadow-lg hover:border-accent transition duration-300"
      >
        <div className="overflow-hidden col-span-1">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full  group-hover:scale-105 transition-transform duration-300 object-cover"
          />
        </div>

        <div className="p-5 col-span-2  ">
          <h2 className="group-hover:text-accent transition duration-300 text-xl font-bold mb-2">
            {movie.title}
          </h2>

          <div className="flex items-center gap-4 text-sm mb-2 text-gray-600">
            <span className="flex items-center gap-2 text-primary">
              <FaStar className="text-yellow-rating" />{" "}
              {movie.vote_average.toFixed(2)}
            </span>

            <span className="flex items-center gap-2">
              <CiCalendar /> {movie.release_date.slice(0, 4)}
            </span>

            <span className="uppercase">{movie.original_language}</span>
          </div>

          <div className="mb-2">
            {loading
              ? new Array(3)
                  .fill(0)
                  .map((_, idx) => (
                    <span
                      key={idx}
                      className="bg-accent/50 w-20 h-6 text-xs rounded-lg mr-2 inline-block animate-pulse"
                    />
                  ))
              : genres &&
                genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="bg-accent text-white px-3 py-1 text-xs rounded-lg mr-2 inline-block"
                  >
                    {genre.name}
                  </span>
                ))}
          </div>

          <p className="text-gray-500 text-sm">
            {movie.overview.slice(0, 130)}...
          </p>

          <div>
            <h3 className="mt-4 mb-2">Top Cast:</h3>

            {loading
              ? new Array(6)
                  .fill(0)
                  .map((_, idx) => (
                    <span
                      key={idx}
                      className={`bg-gray-200 ${
                        idx % 2 === 0 ? "w-20" : "w-16"
                      } h-6 text-xs rounded-lg mr-2 inline-block animate-pulse`}
                    />
                  ))
              : cast &&
                cast.length > 0 && (
                  <>
                    <div className="flex flex-wrap gap-2">
                      {cast.slice(0, 5).map((actor) => (
                        <span
                          key={actor.id}
                          className="bg-gray-200 text-gray-800 px-3 py-1 text-xs rounded-lg"
                        >
                          {actor.name}
                        </span>
                      ))}
                    </div>
                  </>
                )}
          </div>

          <hr className="my-5 text-gray-300" />

          <span className="text-accent flex items-center group-hover:underline">
            View Details{" "}
            <MdArrowRightAlt className="inline-block ml-1 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </Link>
    </>
  );
}

export default MovieSubDetail;
