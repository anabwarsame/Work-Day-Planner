$(document).ready(function () {
  const clock = document.getElementById("clock");

  clock.innerHTML = moment().format("dddd, Do MMMM  YYYY, h:mm:ss a");

  function currentTime() {
    const current = moment().hours();
    const time = $(".timeblock");

    time.each(function () {
      const hour = parseInt($(this).attr("id"));

      if (hour === current) {
        $(this).children(".textbox").attr("class", "present textbox");
      } else if (current > hour) {
        $(this).children(".textbox").attr("class", "past textbox");
      } else {
        $(this).children(".textbox").attr("class", "future textbox");
      }
    });
  }

  currentTime();

  const button = $(".saveBtn");

  button.on("click", function () {
    const time = $(this).parent().attr("id");
    const textBox = $(this).siblings(".textbox").val();

    localStorage.setItem(time, textBox);
  });
});

// const saveBtn = document.getElementById("saveBtn");
// // when you click btn text from input should be saved

// const textBox = document.getElementById("textbox").textContent;
// console.log(textBox);

// const time = document.getElementById("timeblock").textContent;
// console.log(time);
// // button click isnt being picked up currently

// saveBtn.addEventListener("click", function () {
//   // currently only listening out for 1pm button click

//   localStorage.setItem(time, textBox);
//   console.log("hello");
// });
