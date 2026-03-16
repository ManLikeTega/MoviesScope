import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Test from "./components/Test";
import MovieDetail from "./pages/MovieDetail";
import TrendingPage from "./pages/TrendingPage";
import TopRatedPage from "./pages/TopRatedPage";
import CastDetail from "./pages/CastDetail";
import GenresPage from "./pages/GenresPage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/actor/:actorId" element={<CastDetail />} />
        <Route path="/trending" element={<TrendingPage />} />
        <Route path="/toprated" element={<TopRatedPage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/search" element={<SearchResultsPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
