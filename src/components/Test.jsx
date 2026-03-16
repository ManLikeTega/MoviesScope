function Test() {
  const videoId = "BjkIOU5PhyQ"; // Replace with your desired YouTube video
  return (
    <>
      <div className="aspect-video w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-50 h-50 rounded-lg"
        />
      </div>
    </>
  );
}

export default Test;
