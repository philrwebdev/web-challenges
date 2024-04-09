console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  const hour = new Date().getHours();
  let greeting = "";

  if (hour < 6 || hour === 23) {
    greeting = "Good Night";
  } else if (hour < 13) {
    greeting = "Good Morning";
  } else if (hour < 19) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

// - monday: "darkgray"
//   - tuesday - friday: "lightblue"
//   - saturday - sunday: "hotpink"

function getDayColor() {
  const weekday = new Date().getDay();
  let dayColor = "";

  console.log(weekday);

  if (weekday < 2) {
    dayColor = "darkgray";
  } else if (weekday < 6) {
    dayColor = "lightblue";
  } else {
    dayColor = "hotpink";
  }

  return dayColor;
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
