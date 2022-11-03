"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

export default function Home() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  /**
   * Function to get all countries
   */

  const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  /**
   * Function to get a single country
   */

  const getSingleCountry = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/");
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      {/*Navbar*/}
      <nav className="bg-[#FFFFFF] flex items-center justify-around box-shadow h-[80px]">
        <h2 className="">Where in the world?</h2>
        <button className="flex items-center">
          <img src="/moon.svg" alt="moon-icon" />
          Dark Mode
        </button>
      </nav>
      <main className="container flex flex-col items-start my-[24px]">
        {/** SearchBar Component*/}
        <div className="box-shadow">
          <img
            src="./mgIcon.svg"
            alt="magnifying-glass-icon"
            className="absolute bottom-4 left-[33px]"
          />
          <input
            placeholder="Search for a country..."
            className="w-[343px] h-[48px] text-center"
            type="text"
            onChange={(e) => setSearchCountry(e.target.value)}
          />
        </div>
        {/*OptionBar Component*/}
        <div className="box-shadow mt-[40px]">
          <select
            name="region"
            id="region"
            className="w-[240px] h-[48px]"
            placeholder="Filter By Region"
            defaultValue={"DEFAULT"}
          >
            <option value="DEFAULT" disabled>
              Filter By Region
            </option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
        {/*Card Component*/}
        <div className="grid grid-cols-1 gap-y-[40px]">
          {countries.map((country, index) => (
            <div
              key={index}
              className="box-shadow w-[264px] h-[336px] rounded-t-[5px]"
            >
              <img
                src={country.flags.svg}
                alt="flag"
                className="rounded-t-[5px]"
              />
              <h1 className="font-['Nunito'] text-[18px] font-bold font-size mt-[24px] ml-[24px]">
                {country.name.common}
              </h1>
              <div className="mt-[16px] ml-[24px]">
                <p className="font-light">
                  <strong>Population: </strong>
                  {country.population}
                </p>
                <p className="font-light">
                  <strong>Region: </strong>
                  {country.region}
                </p>
                <p className="font-light">
                  <strong>Capital: </strong>
                  {country.capital}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
