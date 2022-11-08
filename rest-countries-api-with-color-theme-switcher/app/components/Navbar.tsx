"use client";

export default function Navbar() {
  return (
    <nav className="bg-[#FFFFFF] flex items-center justify-around box-shadow h-[80px]">
      <h2 className="">Where in the world?</h2>
      <button className="flex items-center">
        <img src="/moon.svg" alt="moon-icon" />
        Dark Mode
      </button>
    </nav>
  );
}
