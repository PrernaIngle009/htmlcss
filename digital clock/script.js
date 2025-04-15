function clock() {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let period = document.getElementById("period");
  let seconds = document.getElementById("seconds");
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? "0" + h : h;
  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;
  let ampm = h >= 12 ? "AM" : "PM";
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
}
setInterval(clock, 1000);
