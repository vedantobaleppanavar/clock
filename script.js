function digitalClock() {
  const todaysDate = new Date();
  let hours = todaysDate.getHours().toString().padStart(2, 0);
  const mins = todaysDate.getMinutes().toString().padStart(2, 0);
  const seconds = todaysDate.getSeconds().toString().padStart(2, 0);

  const merdium = hours < 12 ? "am" : "pm";
  hours = hours % 12 || 12;
  const now = `${hours}:${mins}:${seconds} ${merdium}`;

  document.getElementById("clock").textContent = now;
}
digitalClock();
setInterval(digitalClock, 1000);
