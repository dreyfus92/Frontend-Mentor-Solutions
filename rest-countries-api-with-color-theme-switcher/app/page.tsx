"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import type { Root2 } from "./lib/types";

export default function Home() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [region, setRegion] = useState([]);

  /**
   * Function to get a single country
   */

  const getSingleCountry = async () => {
    const response = await fetch("https://restcountries.com/v3.1/name/");
    const data = await response.json();
    console.log(data);
  };

  /**
   * Function to get all countries
   */

  const getAllCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  /**
   * Function to filter countries by region
   */

  const filterCountriesByRegion = (value: string) => {
    const filteredCountries = countries.filter(
      (countries: Root2) => countries.region === value
    );
    setRegion(filteredCountries);
  };

  /**
   * Function to filter countries by name
   */

  const filterCountriesByName = (value: string) => {
    const filteredCountries = countries.filter(
      (countries: Root2) => countries.name.common === value
    );
    setRegion(filteredCountries);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      {/*Navbar*/}
      <Navbar />
      <main className="container flex flex-col items-center my-[24px]">
        {/** SearchBar Component*/}
        <div className="box-shadow">
          <img
            src="/mgIcon.svg"
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
        <div className="box-shadow mt-[40px] mb-[40px]">
          <select
            name="region"
            id="region"
            className="w-[240px] h-[48px] appearance-none block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            placeholder="Filter By Region"
            defaultValue={"DEFAULT"}
            onChange={(e) => filterCountriesByRegion(e.target.value)}
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
          {region.length == 0
            ? countries.map((country: Root2, index) => (
                <Card country={country} key={index} />
              ))
            : region.map((country: Root2, index) => (
                <Card country={country} key={index} />
              ))}
        </div>
      </main>
    </>
  );
}
