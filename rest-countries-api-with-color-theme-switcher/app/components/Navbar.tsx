"use client";

import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="bg-[#FFFFFF] flex items-center justify-around box-shadow h-[80px]">
      <Link href="/">Where in the world?</Link>
      <button className="flex items-center">
        <img src="/moon.svg" alt="moon-icon" />
        Dark Mode
      </button>
    </nav>
  );
}
