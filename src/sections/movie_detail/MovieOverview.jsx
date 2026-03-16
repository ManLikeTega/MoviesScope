import { useState } from "react";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline, IoPlayOutline } from "react-icons/io5";

function MovieOverview({ movie }) {
  const [isMinute, setIsMinute] = useState(true);

  return (
    <>
      <section>
        <h1 className="text-3xl mb-3">{movie.title}</h1>

        <div className="flex items-center gap-4 text-lg mb-3 text-gray-600">
          <span className="flex items-center gap-2 text-primary">
            <FaStar className="text-yellow-rating" /> {movie.vote_average}
          </span>

          <span
            onClick={() => setIsMinute((i) => !i)}
            className="flex items-center gap-2 cursor-pointer hover:text-accent transition"
          >
            <IoTimeOutline />{" "}
            {isMinute ? (
              <> {movie.runtime} min</>
            ) : (
              <>
                {Math.floor(movie.runtime / 60)}h : {movie.runtime % 60}m
              </>
            )}
          </span>

          <span className="flex items-center gap-2">
            <CiCalendar /> {movie.release_date.slice(0, 4)}
          </span>
        </div>

        <div className="mb-3">
          {movie.genres.map((genre) => (
            <span
              key={genre.id}
              className="bg-accent text-white px-3 py-1 text-xs rounded-lg mr-2 mb-2 inline-block"
            >
              {genre.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 text-sm mb-6  font-semibold">
          <a
            href="#trailer"
            className="bg-accent text-white px-4 py-2 rounded-lg gap-3 flex items-center justify-center hover:bg-dark-accent transition-all duration-300 transform"
          >
            <IoPlayOutline className="text-xl" /> Watch Trailer
          </a>

          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg gap-3 flex items-center justify-center hover:bg-gray-50/30 transition-all duration-300">
            <FaRegHeart /> Add to Favourites
          </button>
        </div>

        <div className="mb-3">
          <h2 className="text-2xl mb-2">Overview</h2>
          <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
        </div>
      </section>
    </>
  );
}

export default MovieOverview;
