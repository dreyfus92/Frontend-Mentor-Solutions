interface digitBoxProps {
  num: string | number;
  unit: string;
  flip: boolean;
}
export default function DigitBox({ num, flip, unit }: digitBoxProps) {
  return (
    <div className="flex flex-col items-center mt-4 px-2">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-[70px] h-[70px] text-2xl md:text-4xl mt-4">
        <div className="rounded-t-lg bg-[#2c2e3f] w-full h-full"></div>

        <div className="text-[36px] absolute text-[#FB5E84] z-10 font-['Red Hat Text'] font-bold md:text-7xl">
          {num}
        </div>
        <div className="rounded-b-lg bg-[#343650] w-full h-full shadow-[]"></div>
        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            flip ? "animate-flip bg-[#2c2e3f]" : "bg-transparent"
          }`}
        ></div>
        <div className="absolute -right-1 top-[32.5px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[32.5px] rounded-full w-[6px] h-[6px] bg-[#1e1f29]"></div>
      </div>
      <p className="text-[7px] tracking-[2.96px] mt-3 font-['Red Hat Text'] font-semi-bold text-[#8385A9] md:text-2xl">
        {unit}
      </p>
    </div>
  );
}
