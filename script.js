// Special Countdown
let daysItem = document.querySelector("#days");
let hoursItem = document.querySelector("#hours");
let minItem = document.querySelector("#min");
let secItem = document.querySelector("#sec");

let countDown = () => {
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  // Calculate the target month and year
  let targetMonth = currentMonth + 1;
  let targetYear = currentYear;

  // If the current month is December (11), set the target month to January (0) and increment the year
  if (targetMonth > 11) {
    targetMonth = 0; // January
    targetYear += 1; // Next year
  }

  // Set the target date to the 20th of the next month
  let futureDate = new Date(targetYear, targetMonth, 20);
  
  let myDate = futureDate - currentDate;

  // Stop the countdown if the target date is reached
  if (myDate <= 0) {
    clearInterval(intervalId);
    daysItem.innerHTML = 0;
    hoursItem.innerHTML = 0;
    minItem.innerHTML = 0;
    secItem.innerHTML = 0;
    return;
  }

  let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
  let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
  let min = Math.floor(myDate / 1000 / 60) % 60;
  let sec = Math.floor(myDate / 1000) % 60;

  daysItem.innerHTML = days;
  hoursItem.innerHTML = hours;
  minItem.innerHTML = min;
  secItem.innerHTML = sec;
};

let intervalId = setInterval(countDown, 1000);
countDown(); // Initial call to avoid 1-second delay


// Scroll Back To Top
function scrollTopBack() {
  let scrollTopBack = document.querySelector("#scrollup");
  window.onscroll = function () {
    var scroll = document.documentElement.scrollTop;
    if (scroll >= 250) {
      scrollTopBack.classList.add("scrollActive");
    } else {
      scrollTopBack.classList.remove("scrollActive");
    }
  };
}
scrollTopBack();
