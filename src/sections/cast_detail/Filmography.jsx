import { useState } from "react";
import MovieCard from "../../components/MovieCard";

function Filmography({ movies }) {
  const [isSliced, setIsSliced] = useState(true);

  return (
    <>
      <section>
        <h2 className="text-2xl mb-2">Filmography</h2>

        <div className="flex flex-col md:grid  md:grid-cols-3 lg:grid-cols-6 gap-4">
          {isSliced
            ? movies
                .slice(0, 5)
                .map((movie, idx) => <MovieCard movie={movie} key={idx} />)
            : movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}

          <div
            onClick={() => setIsSliced((i) => !i)}
            className="w-full h-auto rounded-lg border border-gray-400 hover:border-accent flex items-center justify-center min-h-60 cursor-pointer transition"
          >
            {" "}
            <p>{isSliced ? "see more..." : "see less..."}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Filmography;
