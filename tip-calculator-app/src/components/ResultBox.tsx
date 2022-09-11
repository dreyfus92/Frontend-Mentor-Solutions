import React from "react";

interface ResultBoxProps {
  tipAmountPerPerson: number;
  totalPerPerson: number;
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setDiscount: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<string>>;
}

export const ResultBox = ({
  tipAmountPerPerson,
  totalPerPerson,
  setBill,
  setDiscount,
  setNumberOfPeople,
}: ResultBoxProps) => {
  return (
    <div className="xl:w-[413px] h-[417px] bg-[#00474B] rounded-[15px]">
      <div className="flex justify-around items-center mt-[40px] mb-[25px]">
        <div>
          <h1 className="text-white text-[16px]">Tip Amount</h1>
          <p className="text-[#7F9D9F] text-[13px]">/ person</p>
        </div>
        <h1 className="text-[#26C2AE] text-[48px]">{`$${tipAmountPerPerson}`}</h1>
      </div>
      <div className="flex justify-around items-center">
        <div>
          <h1 className="text-white text-[16px]">Total</h1>
          <p className="text-[#7F9D9F] text-[13px]">/ person</p>
        </div>
        <h1 className="text-[#26C2AE] text-[48px]">{`$${totalPerPerson}`}</h1>
      </div>
      <button
        onClick={() => {
          setBill("");
          setDiscount("");
          setDiscount("");
        }}
        className="rounded-[5px] w-[333px] h-[48px] bg-[#26C2AE] text-[#00474B] ml-[40px] mt-[122px] hover:"
      >
        Reset
      </button>
    </div>
  );
};
