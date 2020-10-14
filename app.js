(() => {
  const hackathonDate = new Date("December 17, 2020 00:00:00");
  const countdown = document.querySelector(".landing__countdown");

  const updateTime = () => {
    const formatInt = (i) =>
      i.toLocaleString("pl-PL", { minimumIntegerDigits: 2 });
    let diffInSeconds = Math.abs(hackathonDate - Date.now()) / 1000;
    let secondsLeft = parseInt(diffInSeconds % 60);
    let minutesLeft = parseInt((diffInSeconds / 60) % 60);
    let hoursLeft = parseInt((diffInSeconds / (60 * 60)) % 24);
    let daysLeft = parseInt(diffInSeconds / (60 * 60 * 24));

    let dateString = `${formatInt(daysLeft)}D ${formatInt(
      hoursLeft
    )}H ${formatInt(minutesLeft)}M ${formatInt(secondsLeft)}S`;
    countdown.setAttribute("time-left", dateString);
    countdown.textContent = dateString;
  };

  setInterval(() => {
    updateTime();
  }, 1000);

  updateTime();
})();
