// DayNight Onclick
function toggle() {
  let dayNight = document.querySelector("#day-night");
  dayNight.x = "css/light" == dayNight.x ? "css/dark" : "css/light"; // short if
  dayNight.href = dayNight.x + ".css";
}

// Mobile Menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navbar").style.top = "0";
  } else {
    document.querySelector(".navbar").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
};
