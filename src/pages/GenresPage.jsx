import { useEffect, useState } from "react";

import { getGenreList } from "../data/movie_data";

import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import GenreMovieList from "../sections/genre/GenreMovieList";
import Utilities from "../components/Utilities";

function GenresPage() {
  const [genres, setGenres] = useState(null);
  const [activeGenre, setActiveGenre] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const genresData = await getGenreList();

      setGenres(genresData);

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
        <main>
          <section className="p-4 md:px-6 lg:px-8">
            <h2 className="mb-4 text-xl">Browse by Genre</h2>

            {genres && (
              <div className="hidden md:flex flex-wrap gap-4">
                {genres.map((genre) => (
                  <div
                    key={genre.id}
                    onClick={() => {
                      setActiveGenre(genre.id);
                      setCurrentPage(1);
                    }}
                    className={`${activeGenre === genre.id ? "bg-accent text-white" : "bg-white"} border border-gray-300 rounded-full py-2 px-4 cursor-pointer hover:bg-accent hover:text-white transition `}
                  >
                    <h3>{genre.name}</h3>
                  </div>
                ))}
              </div>
            )}

            <select
              value={activeGenre}
              onChange={(e) => setActiveGenre(e.target.value)}
              className="md:hidden p-2 border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-accent transition"
            >
              <option value="">Select a genre</option>
              {genres?.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </select>
          </section>

          <GenreMovieList
            activeGenre={activeGenre}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </main>
      )}

      <Utilities />
    </>
  );
}

export default GenresPage;
