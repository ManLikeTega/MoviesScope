import { Link } from "react-router";

function MovieCard({ movie }) {
  if (!movie.poster_path) return null;

  return (
    <>
      <Link
        to={`/movie/${movie.id}`}
        className="relative bg-white shadow-lg rounded-lg overflow-hidden border border-gray-300 min-w-full md:min-w-70 lg:min-w-50 cursor-pointer transition-transform duration-300 group z-20"
      >
        <div className="rating absolute top-7 left-0 bg-black/65 text-white text-xs px-2 py-2 rounded-r-full z-10">
          <span>{movie.vote_average.toFixed(2)} / 10</span>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title || movie.original_title}
            className="h-125 md:h-105 lg:h-75 w-full object-cover  group-hover:scale-105 transition duration-300"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        <div className="p-4 ">
          <p className="font-semibold truncate">
            {movie.title || movie.original_title}
          </p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">
              {new Date(movie.release_date).getFullYear()}
            </span>

            <span className="text-sm text-gray-600 capitalize">
              {movie.original_language ? movie.original_language : "movie"}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
