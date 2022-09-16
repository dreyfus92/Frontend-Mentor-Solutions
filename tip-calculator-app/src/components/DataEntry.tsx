import type React from "react";
import { useFormContext } from "react-hook-form";

export const DataEntry = () => {
  const buttons = [5, 10, 15, 20, 25];
  const { register, setValue, watch } = useFormContext();
  return (
    <div className="w-[311px] h-[436px] md:w-[379px] md:h-[388px]">
      <div className="relative mt-[32px] md:mt-0">
        <label className="text-[#5E7A7D]">Bill</label>
        <input
          type="number"
          required
          placeholder={"0"}
          className="relative caret-[#26C2AE] block bg-[#F3F9FA] w-[311px] md:w-[379px] h-[48px] text-right pr-[17px] focus:outline-[#26C2AE] focus:cursor-pointer"
          {...register("theBill")}
        />
        <img
          src="/icon-dollar.svg"
          alt="dollar-sign"
          className="absolute h-[15.46px] w-[9.84px] top-[41px] left-[15px]"
        />
      </div>
      <div className="mt-[32px] md:mt-[40px]">
        <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {buttons.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                className="bg-[#00474B] text-white text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] hover:bg-[#9FE8DF] hover:text-[#00474B]"
                onClick={() => setValue("customTip", item)}
              >
                {item}%
              </button>
            );
          })}
          <input
            placeholder="Custom"
            className="bg-[#F3F9FA] text-right pr-[13px] caret-[#26C2AE] text-[#00474B] text-[24px] w-[146px] md:w-[117px] h-[48px] rounded-[5px] placeholder:text-[#547878] placeholder:text-right focus:outline-[#26C2AE]"
            {...register("customTip")}
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
            parseFloat(watch("numOfPeople")) === 0
              ? "focus:outline-[#E17052]"
              : ""
          }`}
          {...register("numOfPeople")}
        />
        {window.innerWidth >= 1024 && (
          <p className="absolute bottom-[52px] -right-[0px] text-[#F74646]">
            {parseFloat(watch("numOfPeople")) === 0 ? "Can't be zero" : ""}
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
