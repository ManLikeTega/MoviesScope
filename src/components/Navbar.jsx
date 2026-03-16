import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";

import { Link } from "react-router";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className=" bg-white p-5 sticky top-0 w-full shadow-lg z-100">
        <div>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-10">
              <Link to="/" className="text-xl flex items-center gap-2">
                <IoIosPlayCircle className="text-accent text-5xl" />
                <p>
                  Movies<span className="text-accent">Scope</span>
                </p>
              </Link>

              <SearchBar className="hidden md:block min-w-100" />
            </div>

            <ul className="hidden lg:flex gap-5">
              <li className="nav-link_lg">
                <Link to="/">home</Link>
              </li>
              <li className="nav-link_lg">
                <Link to="/trending">trending</Link>
              </li>
              <li className="nav-link_lg">
                <Link to="/toprated">Top Rated</Link>
              </li>
              <li className="nav-link_lg">
                <Link to="/genres">Genres</Link>
              </li>
            </ul>

            <div className="flex items-center lg:hidden">
              <button
                className="text-3xl"
                onClick={() => setIsMenuOpen((i) => !i)}
              >
                {isMenuOpen ? (
                  <RiCloseLargeFill className="h-6 w-6" />
                ) : (
                  <RxHamburgerMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="mt-5 lg:hidden">
              <ul className="flex flex-col gap-5">
                <li className="capitalize">
                  <SearchBar className="md:hidden min-w-full" />
                </li>
                <li className="capitalize">
                  <Link to="/">home</Link>
                </li>
                <li className="capitalize">
                  <Link to="/trending">trending</Link>
                </li>
                <li className="capitalize">
                  <Link to="/toprated">Top Rated</Link>
                </li>
                <li className="capitalize">
                  <Link to="/genres">Genres</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
