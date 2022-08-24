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
    <body className="bg-[url('/assets/bg-stars.svg')] min-h-[78vh] bg-fit ">
      <Counter days={days} hours={hours} minutes={minutes} seconds={seconds} />
      <img
        src="/assets/pattern-hills.svg"
        alt="pattern-hills"
        className="absolute bottom-0 h-fit w-full"
      />
      <Footer />
    </body>
  );
}

export default App;
