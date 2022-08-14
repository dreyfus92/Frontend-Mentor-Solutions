export const App = () => {
  return (
    <div className="flex  h-screen justify-center items-center bg-[#F6F8FF]">
      <div className="w-[730px]">
        <div className="flex justify-between mb-[36px]">
          <h1>devfinder</h1>
          <div className="flex">
            <p className="text-[#697C9A]">dark</p>
            <img
              className="ml-[15px]"
              alt="moon-icon"
              src="assets/icon-moon.svg"
            />
          </div>
        </div>
        <div className="flex justify-between items-center py-[22px] bg-white rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]">
          <div className="flex ml-[32px]">
            <div>
              <img src="assets/icon-search.svg" alt="search-icon" />
            </div>
            <input
              type="text"
              placeholder="Search GitHub username..."
              className="w-[254px] h-[25px] ml-[23.94px] max-w-xs "
            />
          </div>
          <button className="bg-[#0079FF] py-[13px] px-[23px] text-base text-white mr-[10px] rounded-[10px]">
            Search
          </button>
        </div>
        <div>
          <div>
            <img src="assets/icon-search.svg" alt="search-icon" className="" />
          </div>
          <input
            type="text"
            placeholder="Search GitHub username..."
            className="w-full py-[22px] bg-white rounded-[15px] shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]"
          />
        </div>
      </div>
    </div>
  );
};
