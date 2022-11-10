import type { Root2 } from "../lib/types";

interface CardProps {
  country: Root2;
  key: number;
}

export default function Card({ country, key }: CardProps) {
  return (
    <div key={key} className="box-shadow w-[264px] h-[336px] rounded-t-[5px]">
      <img src={country.flags.svg} alt={`flag`} className="rounded-t-[5px]" />
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
  );
}
