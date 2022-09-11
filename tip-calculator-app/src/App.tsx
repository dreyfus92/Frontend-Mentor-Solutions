import { DataEntry } from "./components/DataEntry";
import { ResultBox } from "./components/ResultBox";
import { useState } from "react";
export const App = () => {
  const [bill, setBill] = useState("");
  const [discount, setDiscount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");

  //console logs
  console.log(bill, discount, numberOfPeople);

  // parsing values
  const billParsed = parseFloat(bill);
  const discountParsed = parseFloat(discount);
  const numberOfPeopleParsed = parseFloat(numberOfPeople);

  //operations
  const tipAmountPerPerson = (
    (billParsed * (discountParsed / 100)) /
    numberOfPeopleParsed
  ).toFixed(2);
  const totalPerPerson = (
    (billParsed + (billParsed * discountParsed) / 100) /
    numberOfPeopleParsed
  ).toFixed(2);

  console.log(tipAmountPerPerson, totalPerPerson);
  return (
    <div className="h-screen flex items-center justify-center font-mono-space">
      <div className="md:w-[920px] xl:h-[481px] bg-white rounded-[20px] justify-around flex items-center">
        <DataEntry
          setBill={setBill}
          setDiscount={setDiscount}
          setNumberOfPeople={setNumberOfPeople}
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
