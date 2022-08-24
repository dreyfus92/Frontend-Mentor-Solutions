export {}
interface timerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

 let timer = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
}


// function getTimeRemaining(endtime) {
//   const total = Date.parse(endtime) - Date.parse(new Date());
//   const seconds = Math.floor((total / 1000) % 60);
//   const minutes = Math.floor((total / 1000 / 60) % 60);
//   const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//   const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
//   return {
//     total,
//     days,
//     hours,
//     minutes,
//     seconds
//   };
// }

// function initializeClock(endtime) {
//   function updateClock(timer:timerProps) {
//     const t = getTimeRemaining(endtime);
    
//     timer.days = t.days;
//     timer.hours = t.hours
//     timer.minutes = t.minutes
//     timer.seconds = t.seconds
    
//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }
  
//   updateClock(timer);
//   const timeinterval = setInterval(updateClock, 1000);
// }

// const deadline = new Date(Date.parse(`${new Date()}`) + 15 * 24 * 60 * 60 * 1000);
// initializeClock(deadline);

let countDown = new Date(Date.parse(`${new Date()}`) + 15 * 24 * 60 * 60 * 1000).getTime();
console.log(countDown/(3600000*24))
const updateTimer = () => {
  setInterval((timer:timerProps) => {
  // Set the date we're counting down to
  const timeSubstraction = 1000
  countDown = countDown - timeSubstraction

  // Time calculations for days, hours, minutes and seconds
  let daysCalculated = Math.floor(countDown / (1000 * 60 * 60 * 24));
  let hoursCalculated = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutesCalculated = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  let secondsCalculated = Math.floor((countDown % (1000 * 60)) / 1000);
  // Setting values in object
},1000)}







