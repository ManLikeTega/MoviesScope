import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { getTrailerById, getTrendingTodayData } from "../../data/movie_data";
import { FaPlay, FaHeart } from "react-icons/fa";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import MotionElement from "../../components/MotionElement.jsx";
import { useState, useEffect } from "react";
import { Link } from "react-router";

function Hero() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const trendingToday = await getTrendingTodayData();
      setMovies(trendingToday);
    };

    fetchData();
  }, []);

  const showTrailerHandler = async (id) => {
    const trailerId = await getTrailerById(id);

    window.open(
      `https://www.youtube.com/watch?v=${trailerId}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <section>
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          className="h-[calc(100vh-82px)] w-full"
        >
          {movies &&
            movies.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                {/* Background Image with Overlay */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${slide.backdrop_path})`,
                  }}
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/70 from-70% to-white" />

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="absolute bottom-30 max-w-9xl mx-auto px-6 w-full">
                    <div className="max-w-2xl ml-0 lg:ml-6 xl:ml-12">
                      {/* Title */}
                      <MotionElement delay={0.4} once={false}>
                        <h1 className="text-xl sm:text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
                          {slide.title}
                        </h1>
                      </MotionElement>

                      {/* Description */}
                      <MotionElement delay={0.6} once={false}>
                        <p className="text-lg text-gray-200 mb-8 leading-relaxed max-w-lg">
                          {slide.overview.slice(0, 150)}...
                          <Link
                            to={`/movie/${slide.id}`}
                            className="underline text-accent"
                          >
                            read more
                          </Link>
                        </p>
                      </MotionElement>

                      {/* CTA Buttons */}
                      <MotionElement delay={0.8} once={false}>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <button
                            onClick={() => showTrailerHandler(slide.id)}
                            className="bg-accent text-white px-4 py-2 rounded-lg gap-3 flex items-center justify-center hover:bg-dark-accent transition-all duration-300 transform"
                          >
                            <FaPlay /> Watch Trailer
                          </button>

                          <button className="bg-gray-50/20 border border-gray-300 text-white px-4 py-2 rounded-lg gap-3 flex items-center justify-center hover:bg-gray-50/30 transition-all duration-300">
                            <FaHeart /> Add to Favourites
                          </button>
                        </div>
                      </MotionElement>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </section>
    </>
  );
}

export default Hero;
