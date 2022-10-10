import { paintsLength } from "../data/data";
import { useState, useEffect } from "react";

interface SliderProps {
  nameOfPaint: string;
  artist: string;
  paintId: number;
}

export const BottomBar = ({ nameOfPaint, artist, paintId }: SliderProps) => {
  let calcProgress = (dynamicWidth: number) => {
    return Math.ceil((paintId / paintsLength) * dynamicWidth);
  };
  return (
    <div className="relative h-[72px] border-t-[1px] border-[#E5E5E5] flex items-center justify-between">
      <div className={`absolute top-0 h-[1px] w-[10px] full bg-black`}></div>
      <div className="ml-[24px]">
        <p className="text-[14px] leading-[17px]">{nameOfPaint}</p>
        <p className="text-[10px] mt-[9px]">{artist}</p>
      </div>
      <div className="flex justify-between mr-[24px]">
        <img src="/shared/icon-back-button.svg" />
        <img src="/shared/icon-next-button.svg" className="ml-[24px]" />
      </div>
    </div>
  );
};
