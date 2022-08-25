import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  const timeToDays = 9 * 60 * 60 * 24 * 1000;
  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    let updateTime = setInterval(() => {
      let now = new Date().getTime();

      let difference = countDownDate - now;

      let newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      let newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      let newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, []);
  return (
    <body>
      <div className="bg-[url('/assets/bg-stars.svg')] h-[78vh] desktop:h-[83vh] bg-fit">
        <h1 className="font-['Red Hat Text'] font-bold text-white text-[18px] desktop:text-[22px] w-[327px] desktop:w-[431px] tracking-[6.14px] text-center mx-auto mt-[142px] mb-[54px] desktop:mt-[132px] desktop:mb-[104px]">
          WE&acute;RE LAUNCHING SOON
        </h1>
        <Counter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
        <div className="absolute bottom-0 h-[194px] w-full bg-[center_right_-11rem] desktop:bg-cover desktop:bg-center bg-no-repeat bg-[url('/assets/pattern-hills.svg')]"></div>
        <Footer />
      </div>
    </body>
  );
}

export default App;
