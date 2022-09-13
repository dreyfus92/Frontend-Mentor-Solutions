import type React from "react";

interface DataEntryProps {
  setBill: React.Dispatch<React.SetStateAction<string>>;
  setDiscount: React.Dispatch<React.SetStateAction<string>>;
  setNumberOfPeople: React.Dispatch<React.SetStateAction<string>>;
  numberOfPeopleParsed: number;
}

export const DataEntry = ({
  setBill,
  setDiscount,
  setNumberOfPeople,
  numberOfPeopleParsed,
}: DataEntryProps) => {
  return (
    <div className="w-[311px] h-[436px] md:w-[379px] md:h-[388px]">
      <div className="relative mt-[32px] md:mt-0">
        <label className="text-[#5E7A7D]">Bill</label>
        <input
          type="number"
          required
          placeholder={"0"}
          name="bill"
          className="relative caret-[#26C2AE] block bg-[#F3F9FA] w-[311px] md:w-[379px] h-[48px] text-right pr-[17px] focus:outline-[#26C2AE] focus:cursor-pointer"
          onChange={(e) => setBill(e.target.value)}
        />
        <img
          src="/icon-dollar.svg"
          alt="dollar-sign"
          className="absolute h-[15.46px] w-[9.84px] top-[41px] left-[15px]"
        />
      </div>
      <div className="mt-[32px] md:mt-[40px]">
        <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
        <div className="grid grid-cols-2 gap-y-4  md:grid-cols-3 md:gap-4">
          <button
            className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#9FE8DF] hover:text-[#00474B]"
            onClick={() => setDiscount("5")}
          >
            5%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#9FE8DF] hover:text-[#00474B]"
            onClick={() => setDiscount("10")}
          >
            10%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE] hover:text-[#00474B]"
            onClick={() => setDiscount("15")}
          >
            15%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE] hover:text-[#00474B]"
            onClick={() => setDiscount("20")}
          >
            20%
          </button>
          <button
            className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#26C2AE] hover:text-[#00474B]"
            onClick={() => setDiscount("25")}
          >
            25%
          </button>
          <input
            onChange={(e) => setDiscount(e.target.value)}
            placeholder="Custom"
            className="bg-[#F3F9FA] text-right pr-[13px] caret-[#26C2AE] text-[#00474B] text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] placeholder:text-[#547878] placeholder:text-right focus:outline-[#26C2AE]"
          />
        </div>
      </div>
      <div className="relative mt-[32px] md:mt-[40px]">
        <label className="text-[#5E7A7D]">Number of People</label>
        <input
          type="number"
          required
          placeholder={"0"}
          className={`relative block bg-[#F3F9FA] caret-[#26C2AE] w-[311px] md:w-[379px] h-[48px] text-right pr-[17px] focus:outline-[#26C2AE] focus:cursor-pointer ${
            numberOfPeopleParsed === 0 ? "focus:outline-[#E17052]" : ""
          }`}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />
        {window.innerWidth >= 1024 && (
          <p className="absolute bottom-[52px] -right-[0px] text-[#F74646]">
            {numberOfPeopleParsed === 0 ? "Can't be zero" : ""}
          </p>
        )}
        <img
          src="/icon-person.svg"
          className="absolute top-[40px] left-[15px]"
          alt="person icon"
        />
      </div>
    </div>
  );
};
