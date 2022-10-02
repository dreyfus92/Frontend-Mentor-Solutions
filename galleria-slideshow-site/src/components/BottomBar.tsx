interface SliderProps {
  nameOfPaint: string;
  artist: string;
}

export const BottomBar = ({ nameOfPaint, artist }: SliderProps) => {
  return (
    <div>
      <div>
        <p>{nameOfPaint}</p>
        <p>{artist}</p>
      </div>
      <div></div>
    </div>
  );
};
