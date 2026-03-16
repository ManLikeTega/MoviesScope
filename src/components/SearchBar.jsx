import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router";

function SearchBar({ className }) {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const query = formData.get("query");

    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <>
      <div className={className}>
        <form className="relative w-full" onSubmit={submitHandler}>
          <IoSearchOutline className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" />

          <input
            type="text"
            name="query"
            className="w-full border border-gray-300 rounded-lg pl-10 px-3 py-2 focus:outline-accent"
            placeholder="Search movies..."
          />
        </form>
      </div>
    </>
  );
}

export default SearchBar;
