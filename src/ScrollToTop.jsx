// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Optional: smooth scroll
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
