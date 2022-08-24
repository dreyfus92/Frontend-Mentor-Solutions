import DigitBox from "./DigitBox";

interface timeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const Counter = ({ days, hours, minutes, seconds }: timeProps) => {
  let daysFlip = false;
  let hoursFlip = false;
  let minutesFlip = false;
  let secondsFlip = true;

  if (seconds <= 0 && minutes <= 0 && hours <= 0 && days <= 0) {
    daysFlip = false;
    hoursFlip = false;
    minutesFlip = false;
    secondsFlip = false;
  }

  if (seconds == 0) {
    if (minutes != 0) {
      seconds = 59;
    }

    secondsFlip = false;
    minutesFlip = true;
  }
  if (minutes == 0) {
    if (hours != 0) {
      minutes = 59;
    }

    minutesFlip = false;
    hoursFlip = true;
  }

  if (hours == 0) {
    hoursFlip = false;
    if (days != 0) {
      daysFlip = true;
    }
  }

  if (days < 10) {
    days = "0" + days;
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (
    <div>
      <h1 className="font-['Red Hat Text'] font-bold text-white text-[18px] w-[327px] tracking-[6.14px] text-center mx-auto mt-[142px]">
        WE&acute;RE LAUNCHING SOON
      </h1>
      <div className="max-w-327 flex justify-center mt-[54px] text-white">
        <DigitBox num={days} unit={"DAYS"} flip={daysFlip} />
        <DigitBox num={hours} unit={"HOURS"} flip={hoursFlip} />
        <DigitBox num={minutes} unit={"MINUTES"} flip={minutesFlip} />
        <DigitBox num={seconds} unit={"SECONDS"} flip={secondsFlip} />
      </div>
    </div>
  );
};
