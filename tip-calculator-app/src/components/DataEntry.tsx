import type React from "react";

interface DataEntryProps {
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setDiscount: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<string>>;
}

export const DataEntry = ({
  setBill,
  setDiscount,
  setNumberOfPeople,
}: DataEntryProps) => {
  return (
    <div className="md:w-[379px] h-[388px]">
      <div className="relative">
        <label className="text-[#5E7A7D]">Bill</label>
        <input
          type="number"
          name="bill"
          className="relative block bg-[#F3F9FA] md:w-[379px] md:h-[48px] md:text-right md:pr-[17px] focus:outline-[#26C2AE] focus:cursor-pointer"
          onChange={(e) => setBill(e.target.value)}
        />
        <img
          src="/icon-dollar.svg"
          alt="dollar-sign"
          className="absolute h-[15.46px] w-[9.84px] top-[41px] left-[15px]"
        />
      </div>
      <div className="mt-[40px]">
        <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
        <div className="grid grid-cols-3 gap-4">
          <button
            className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE]"
            onClick={() => setDiscount("5")}
          >
            5%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE]"
            onClick={() => setDiscount("10")}
          >
            10%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE]"
            onClick={() => setDiscount("15")}
          >
            15%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE]"
            onClick={() => setDiscount("20")}
          >
            20%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE]"
            onClick={() => setDiscount("25")}
          >
            25%
          </button>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Custom"
            className="bg-[#F3F9FA] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] placeholder:text-[#547878] placeholder:text-center"
          />
        </div>
      </div>
      <div className="relative md:mt-[40px]">
        <label>Number of People</label>
        <input
          type="number"
          className="relative block bg-[#F3F9FA] md:w-[379px] md:h-[48px] md:text-right md:pr-[17px] focus:outline-[#26C2AE] focus:cursor-pointer"
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        <img
          src="/icon-person.svg"
          className="absolute top-[40px] left-[15px]"
        />
      </div>
    </div>
  );
};
