import { HiOutlineCake } from "react-icons/hi2";
import { MdOutlineLocationOn } from "react-icons/md";

function ActorOverview({ actor }) {
  return (
    <>
      <section>
        <div className="flex flex-col gap-3 md:grid md:grid-cols-4 md:gap-12 mb-4 lg:mb-8">
          <div className="col-span-1">
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="w-full lg:h-110  rounded-lg shadow-lg"
              />
            ) : (
              <div className="rounded-lg shadow-lg bg-gray-300 flex items-center justify-center">
                <span className="text-6xl font-bold text-gray-600">
                  {actor.name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          <div className="col-span-3">
            <h1 className="text-3xl mb-3">{actor.name}</h1>

            <div className="flex flex-col md:flex-row md:items-center gap-4 text-lg mb-3 text-gray-600">
              <span className="flex items-center gap-2">
                <HiOutlineCake />
                {new Date(actor.birthday).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>

              <span className="flex items-center gap-2">
                <MdOutlineLocationOn />
                {actor.place_of_birth}
              </span>
            </div>

            <div className="mb-3">
              <h2 className="text-2xl mb-2">Overview</h2>
              <p className="text-gray-700 leading-relaxed">{actor.biography}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ActorOverview;
