import MovieCard from "../../components/MovieCard";

const MovieRow = ({ title, movies }) => {
  return (
    <section className="p-4 md:px-6 lg:px-8">
      <h2 className="mb-4 text-xl">{title}</h2>

      {/* Movie List */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2 z-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <div className="flex md:hidden justify-center mt-3">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Swipe to explore more</span>
          <div className="flex gap-1">
            <div
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieRow;
