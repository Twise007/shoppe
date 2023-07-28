import React, { useRef, useState, useEffect } from "react";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  
  const startTimer = () => {
    const countDownDate = new Date("September 30, 2023 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        //  stop our timer
        clearInterval(interval.current);
      } else {
        // update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className="flex items-center justify-center gap-1 pr-2 text-xl md:gap-2">
      <h1 className="flex">
        {timerDays}d <span className="hidden md:flex">:</span>
      </h1>
      <h1 className="flex">
        {timerHours}h <span className="hidden md:flex">:</span>
      </h1>
      <h1 className="flex">
        {timerMinutes}m <span className="hidden md:flex">:</span>
      </h1>
      <h1>{timerSeconds}s </h1>
    </div>
  );
};

export default CountDown;
