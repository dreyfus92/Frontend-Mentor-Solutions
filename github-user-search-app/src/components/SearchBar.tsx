interface SearchBarProps {}

export const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="h-[22px] w-full">
          <img
            src="/assets/icon-search.svg"
            alt="search-icon"
            className="relative top-[14px]"
          />
        </div>
        <input
          type="text"
          placeholder="Search GitHub username..."
          className="w-full h-auto bg-white rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]"
        />
        <button
          type="submit"
          className="relative bottom- left-1/2 bg-[#0079FF] py-[13px] px-[23px] text-base text-white mr-[10px] rounded-[10px]"
        >
          Search
        </button>
      </form>
    </div>
  );
};
