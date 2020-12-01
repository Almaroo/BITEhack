(() => {
  const hackathonDate = new Date("December 3, 2020 00:00:00");
  const countdown = document.querySelector(".landing__countdown");
  let dateString = "";

  const updateTime = () => {
    const formatInt = (i) =>
      i.toLocaleString("pl-PL", { minimumIntegerDigits: 2 });
    let diffInSeconds = Math.abs(hackathonDate - Date.now()) / 1000;

    if(diffInSeconds > 0){
      let secondsLeft = parseInt(diffInSeconds % 60);
      let minutesLeft = parseInt((diffInSeconds / 60) % 60);
      let hoursLeft = parseInt((diffInSeconds / (60 * 60)) % 24);
      let daysLeft = parseInt(diffInSeconds / (60 * 60 * 24));

      dateString = `${formatInt(daysLeft)}:${formatInt(
        hoursLeft
      )}:${formatInt(minutesLeft)}:${formatInt(secondsLeft)}`;
    }
    else{
      dateString = "OTWARTE";
    }

    countdown.setAttribute("time-left", dateString);
    countdown.textContent = dateString;
  };

  setInterval(() => {
    updateTime();
  }, 1000);

  updateTime();
})();

