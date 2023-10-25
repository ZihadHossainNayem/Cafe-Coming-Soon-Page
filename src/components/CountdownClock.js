import { useState, useEffect } from "react";
export const CountdownClock = () => {
  const getNextLaunchDate = () => {
    const currentDate = new Date();
    let launchYear = currentDate.getFullYear();
    /* initial launch date */
    let nextLaunchDate = new Date(launchYear, 11, 1, 9, 0, 0);

    /* loop after the 1st launch date */
    if (currentDate > nextLaunchDate) {
      launchYear++;
      nextLaunchDate = new Date(launchYear, 11, 1, 9, 0, 0);
    }
    return nextLaunchDate;
  };

  const calculateTimeRemaining = () => {
    const launchDate = getNextLaunchDate();
    const now = new Date();
    const timeDiff = launchDate - now;
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Format days, hours, minutes, and seconds to always display two digits
    const formattedDays = days.toString().padStart(2, "0");
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return {
      days: formattedDays,
      hours: formattedHours,
      minutes: formattedMinutes,
      seconds: formattedSeconds,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interVal = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 100);
    return () => clearInterval(interVal);
  }, []);

  return (
    <div>
      <span>{timeRemaining.days + " : "}</span>
      <span>{timeRemaining.hours + " : "}</span>
      <span>{timeRemaining.minutes + " : "}</span>
      <span>{timeRemaining.seconds}</span>
    </div>
  );
};
