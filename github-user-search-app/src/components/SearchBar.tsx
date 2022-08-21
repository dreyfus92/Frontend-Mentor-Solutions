import React, { useState } from "react";

interface SearchBarProps {
  setGitUser: React.Dispatch<React.SetStateAction<string>>;
  isDark: boolean;
}

export const SearchBar = ({ setGitUser, isDark }: SearchBarProps) => {
  const [user, setUser] = useState("");
  return (
    <div className="relative block group">
      <span className="absolute top-[21px] -left-[6px] flex items-center pl-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
          <path
            fill="#0079ff"
            d="M10.609 0c5.85 0 10.608 4.746 10.608 10.58 0 2.609-.952 5-2.527 6.847l5.112 5.087a.87.87 0 01-1.227 1.233l-5.118-5.093a10.58 10.58 0 01-6.848 2.505C4.759 21.16 0 16.413 0 10.58S4.76 0 10.609 0zm0 1.74c-4.891 0-8.87 3.965-8.87 8.84 0 4.874 3.979 8.84 8.87 8.84a8.855 8.855 0 006.213-2.537l.04-.047a.881.881 0 01.058-.053 8.786 8.786 0 002.558-6.203c0-4.875-3.979-8.84-8.87-8.84z"
          ></path>
        </svg>
      </span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setGitUser(user);
        }}
      >
        <input
          type="text"
          name="search"
          placeholder="Search GitHub username…"
          onChange={(e) => setUser(e.target.value)}
          className={`w-full h-auto block pl-[13%] py-[22px] placeholder:text-[13px] placeholder:leading-6 rounded-[15px] ${
            isDark
              ? "bg-[#1E2A47] placeholder:text-white text-white"
              : "bg-white shadow-[0_16px_30px_-10px_rgba(70,96,187,0.198567)]"
          }`}
        />
        <button
          type="submit"
          className="absolute bottom-2 -right-0.5 bg-[#0079FF] py-[12.5px] px-[15px] text-base text-white mr-[10px] rounded-[10px]"
        >
          Search
        </button>
      </form>
    </div>
  );
};
