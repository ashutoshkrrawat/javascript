//* .setInterval( function here, time in ms here)

const clockArea = document.querySelector("#clock");

setInterval(() => {
  const myTime = new Date();
  clockArea.innerHTML = `${myTime.toLocaleTimeString()}`;
}, 1000);
