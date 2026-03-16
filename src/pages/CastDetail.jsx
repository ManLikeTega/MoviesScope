import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

import { getActorById, getActorMoviesById } from "../data/movie_data";

import { FaArrowLeftLong } from "react-icons/fa6";

import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
import Filmography from "../sections/cast_detail/Filmography";
import ActorOverview from "../sections/cast_detail/ActorOverview";
import Utilities from "../components/Utilities";

function CastDetail() {
  const id = useParams().actorId;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const actorData = await getActorById(id);
      const moviesData = await getActorMoviesById(id);

      setActor(actorData);
      setMovies(moviesData.sort((a, b) => b.release_date - a.release_date));

      setLoading(false);
    };

    fetchData();
  }, [id]);

  console.log(movies);

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
            {actor && (
              <>
                <ActorOverview actor={actor} />
                <Filmography movies={movies} />
              </>
            )}
          </main>
        </main>
      )}

      <Utilities />
    </>
  );
}

export default CastDetail;
