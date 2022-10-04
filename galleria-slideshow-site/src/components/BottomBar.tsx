interface SliderProps {
  nameOfPaint: string;
  artist: string;
}

export const BottomBar = ({ nameOfPaint, artist }: SliderProps) => {
  return (
    <div className="h-[72px] border-t-[1px] border-[#E5E5E5] flex items-center justify-around">
      <div>
        <p>{nameOfPaint}</p>
        <p>{artist}</p>
      </div>
      <div className="flex justify-around">
        <img src="/shared/icon-back-button.svg"/>
        <img src="/shared/icon-next-button.svg" className="ml-[24.57px]"/>
      </div>
    </div>
  );
};
