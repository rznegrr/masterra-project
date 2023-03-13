const SearchBox = () => {
  return (
    <div className="relative mr-4">
      <div className="absolute inset-y-2 left-0 flex pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>
      <input
        // type="search"
        className="w-[180px] sm:w-[400px] md:w-60 lg:w-80 h-10 pr-3 text-sm rounded-md bg-gray-200 md:bg-gray-100 outline-none"
        placeholder="جستجو کنید.."
        required
      />
    </div>
  );
};

export default SearchBox;
