import { Link } from "react-router";

function CastRow({ cast }) {
  return (
    <>
      <section>
        <h2 className="text-2xl mb-2">Cast</h2>

        <div className="flex gap-4 overflow-x-auto scrollbar-hide py-2">
          <div className="relative">
            {/* Scroll container */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-2">
              {cast.map((member) => (
                <Link
                  to={`/actor/${member.id}`}
                  key={member.cast_id || member.id || member.name}
                  className="shrink-0 w-28 flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-105"
                >
                  {/* Cast member avatar */}
                  <div className="relative w-24 h-24 rounded-full overflow-hidden ring-2 ring-white ring-offset-2 ring-offset-gray-50 shadow-lg group-hover:ring-accent transition-all duration-300">
                    {member.profile_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w200${member.profile_path}`}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                            member.name
                          )}&background=random&color=fff&size=128&bold=true`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <span className="text-3xl font-bold text-gray-600">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Cast member info */}
                  <div className="mt-3 text-center w-full px-1">
                    <p className="font-semibold text-sm leading-tight line-clamp-2">
                      {member.name}
                    </p>
                    <div className="mt-1 text-xs text-gray-600 leading-tight">
                      <span className="text-gray-500 text-[10px] uppercase tracking-wide font-medium">
                        as
                      </span>
                      <p className="line-clamp-2 mt-0.5">
                        {member.character || "Unknown Role"}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CastRow;
