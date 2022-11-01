"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";

export default function Home() {
  const router = useRouter();
  const [countries, setCountries] = useState([]);

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
    const response = await fetch(
      "https://restcountries.com/v3.1/name/" + country
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return (
    <>
      <nav className="bg-[#FFFFFF] flex justify-around box-shadow">
        <h2>Where in the world?</h2>
        <button className="flex items-center">
          <img src="/moon.svg" alt="moon-icon" />
          Dark Mode
        </button>
      </nav>
      <main className="container flex justify-center">
        {/** SearchBar Component*/}
        {/*OptionBar Component*/}
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
              <h1 className="font-['Nunito'] font-bold font-size mt-[24px] ml-[24px]">
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
