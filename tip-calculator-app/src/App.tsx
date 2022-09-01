import { DataEntry } from "./components/DataEntry";
import { ResultBox } from "./components/ResultBox";
export const App = () => {
  return (
    <div className="h-screen flex justify-center items-center font-mono-space">
      <div className="xl:w-[920px] xl:h-[481px] bg-white rounded-[20px] flex justify-center items-start">
        <DataEntry />
        <ResultBox />
      </div>
    </div>
  );
};
