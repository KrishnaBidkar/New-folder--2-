function updateClock() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  const greetingElement = document.getElementById("greeting");

  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const time = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
  const day = currentDate.toLocaleDateString(undefined, { weekday: 'long' });
  const formattedDate = currentDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  clockElement.textContent = time;
  dateElement.textContent = `${day}, ${formattedDate}`;
  greetingElement.textContent = getGreeting(hours);
}

function getGreeting(hours) {
  let greeting = '';

  if (hours >= 5 && hours < 12) {
    greeting = 'Good Morning';
  } else if (hours >= 12 && hours < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }

  return greeting;
}

function changeBackground() {
  const containerElement = document.querySelector(".container");
  const backgrounds = ["background-1", "background-2", "background-3"];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  containerElement.className = "container " + randomBackground;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

updateClock();
setInterval(updateClock, 1000);

setInterval(changeBackground, 20000);
