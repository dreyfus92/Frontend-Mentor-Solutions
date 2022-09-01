export const DataEntry = () => {
  return (
    <div className="xl:w-[379px] h-[388px] bg-yellow-300">
      <div className="relative">
        <p className="text-[#5E7A7D]">Bill</p>
        <input className="relative block bg-[#F3F9FA] xl:w-[379px] xl:h-[48px]" />
        <img
          src="/icon-dollar.svg"
          alt="dollar-sign"
          className="absolute h-[15.46px] w-[9.84px] top-[41px] left-[15px]"
        />
      </div>
      <div className="mt-[40px]">
        <p className="text-[#5E7A7D] mb-[16px]">Select Tip %</p>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px]">
            5%
          </button>
          <button className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px]">
            10%
          </button>
          <button className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px]">
            15%
          </button>
          <button className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px]">
            20%
          </button>
          <button className="bg-[#00474B] text-white text-[24px] w-[117px] h-[48px] rounded-[5px]">
            25%
          </button>
          <input
            placeholder="Custom"
            className="bg-[#F3F9FA] text-white text-[24px] w-[117px] h-[48px] rounded-[5px] placeholder:text-[#547878] placeholder:text-center"
          />
        </div>
      </div>
      <div className="relative xl:mt-[40px]">
        <p>Number of People</p>
        <input className="relative block bg-[#F3F9FA] xl:w-[379px] xl:h-[48px]" />
        <img
          src="/icon-person.svg"
          className="absolute top-[41px] left-[15px]"
        />
      </div>
    </div>
  );
};
