import { useState, useEffect } from "react";
import { IoMdArrowUp } from "react-icons/io";

function Utilities() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    // run once in case user reloads mid-page
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
        {visible && (
          <a
            href="#top"
            onClick={() => console.log(window.scrollY)}
            className="bg-accent text-white p-2 rounded-full hover:bg-accent-hover transition"
          >
            <IoMdArrowUp />
          </a>
        )}
      </div>
    </>
  );
}

export default Utilities;
