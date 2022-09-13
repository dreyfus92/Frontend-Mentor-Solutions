import { DataEntry } from "./components/DataEntry";
import { ResultBox } from "./components/ResultBox";
import { useState } from "react";
export const App = () => {
  const [bill, setBill] = useState("");
  const [discount, setDiscount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  // parsing values
  const billParsed = parseFloat(bill);
  const discountParsed = parseFloat(discount);
  const numberOfPeopleParsed = parseFloat(numberOfPeople);

  //operations
  const tipAmountPerPerson = Number(
    ((billParsed * (discountParsed / 100)) / numberOfPeopleParsed).toFixed(2)
  );
  const totalPerPerson = Number(
    (
      (billParsed + (billParsed * discountParsed) / 100) /
      numberOfPeopleParsed
    ).toFixed(2)
  );

  //console logs
  console.log(bill, discount, numberOfPeople);
  console.log(tipAmountPerPerson, totalPerPerson);

  return (
    <div className="h-screen flex flex-col items-center md:justify-center md: font-mono-space">
      <h1 className="text-[#3D6666] text-[20px] mt-[40px] mb-[40px] md:mb-[60px] md:mt-0">
        S P L I
        <br />T T E R
      </h1>
      <div className="w-[375px] h-[789px] md:w-[920px] md:h-[481px] bg-white rounded-t-[20px] md:rounded-[25px] flex justify-around  items-center md:flex-row flex-col">
        <DataEntry
          setBill={setBill}
          setDiscount={setDiscount}
          setNumberOfPeople={setNumberOfPeople}
          numberOfPeopleParsed={numberOfPeopleParsed}
        />
        <ResultBox
          tipAmountPerPerson={tipAmountPerPerson}
          totalPerPerson={totalPerPerson}
          setBill={setBill}
          setDiscount={setDiscount}
          setNumberOfPeople={setNumberOfPeople}
        />
      </div>
    </div>
  );
};
