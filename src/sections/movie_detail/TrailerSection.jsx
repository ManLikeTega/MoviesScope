function TrailerSection({ trailerId }) {
  return (
    <>
      <section>
        <div id="trailer">
          <h2 className="text-2xl mb-4">Trailer</h2>

          {trailerId && (
            <iframe
              src={`https://www.youtube.com/embed/${trailerId}`}
              title="YouTube trailer"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video rounded-lg"
            />
          )}
        </div>
      </section>
    </>
  );
}

export default TrailerSection;
