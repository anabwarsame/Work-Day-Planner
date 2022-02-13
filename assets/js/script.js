$(document).ready(function () {
  const clock = document.getElementById("clock");
  clock.innerHTML = moment().format("dddd, Do MMMM  YYYY, h:mm:ss a");
  const saveBtn = document.getElementById("saveBtn");
  // when you click btn text from input should be saved
  const textBox = document.getElementById("text-box").textContent;
  console.log(textBox);

  const time = document.getElementById("timeblock").textContent;
  console.log(time);
  // button click isnt being picked up currently

  saveBtn.addEventListener("click", () => {
    // currently only listening out for 1pm button click

    localStorage.setItem(time, textBox);
    console.log("hello");
  });
});

// setInterval(() => {}, 1000);

// // when you click save button
// const saveBtn = document.getElementById("saveBtn");
// // when you click btn text from input should be saved
// const textBox = document.getElementById("textbox").textContent;
// saveBtn.addEventListener("click", (event) => {
//   localStorage.setItem("1PM", textBox);
//   console.log("hello");
// });
// local storage

// const getFromLocalStorage = function (key, defaultValue) {
//   const localStorageData = JSON.parse(localStorage.getItem(key));

//   if (!localStorageData) {
//     return defaultValue;
//   } else {
//     return localStorageData;
//   }
// };
