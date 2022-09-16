import React from "react";
import { useFormContext } from "react-hook-form";

export const ResultBox = () => {
  const { reset, watch } = useFormContext();

  // parsing values
  const billParsed = parseFloat(watch("theBill"));
  const discountParsed = parseFloat(watch("customTip"));
  const numberOfPeopleParsed = parseFloat(watch("numOfPeople"));
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

  return (
    <div className="w-[327px] h-[257px] md:w-[413px] md:h-[417px] bg-[#00474B] rounded-[15px] mt-[52px] mb-[32px] md:mt-0 md:mb-0">
      <div className="flex justify-around items-center mt-[40px] mb-[25px]">
        <div>
          <h1 className="text-white text-[16px]">Tip Amount</h1>
          <p className="text-[#7F9D9F] text-[13px]">/ person</p>
        </div>
        <h1 className="text-[#26C2AE] text-[32px] md:text-[48px]">{`$${
          isNaN(tipAmountPerPerson) ? "0.00" : tipAmountPerPerson
        }`}</h1>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-white text-[16px]">Total</h1>
          <p className="text-[#7F9D9F] text-[13px]">/ person</p>
        </div>
        <h1 className="text-[#26C2AE] text-[32px] md:text-[48px]">{`$${
          isNaN(totalPerPerson) ? "0.00" : totalPerPerson
        }`}</h1>
      </div>
      <button
        onClick={() => reset({ theBill: "", customTip: "", numOfPeople: "" })}
        className="rounded-[5px] w-[281px] md:w-[333px] h-[48px] bg-[#26C2AE] text-[#00474B] ml-[24px] m-[32px] md:ml-[40px] md:mt-[122px] hover:bg-[#9FE8DF]"
      >
        RESET
      </button>
    </div>
  );
};
