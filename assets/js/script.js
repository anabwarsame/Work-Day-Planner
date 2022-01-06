$(document).ready(function () {
  const clock = document.getElementById("clock");
  clock.innerHTML = moment().format("dddd, Do MMMM  YYYY, h:mm:ss a");
});

// setInterval(() => {}, 1000);
