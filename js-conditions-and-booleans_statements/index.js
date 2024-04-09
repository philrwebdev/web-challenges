console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 4;

console.log(number % 2);
if (number % 2 == 0) {
  console.log("Even number.");
} else {
  console.log("Odd number.");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1;

// - for less than 5 hotdogs: 2 euro per hotdog
// - for at least 5 but less than 100 hotdogs: 1.50 euro per hotdog
// - for at least 100 but less than 1 000 000 hotdogs: 1 euro per hotdog
// - for at least 1 000 000 hotdogs: 0.10 euro per hotdog
// - change the `numberOfHotdogs` to see if your code works properly

let price = null;

if (numberOfHotdogs < 5) {
  price = 2;
} else if (numberOfHotdogs < 100) {
  price = 1.5;
} else if (numberOfHotdogs < 1000000) {
  price = 1;
} else {
  price = 0.1;
}

console.log(
  "Price per hotdog for " + numberOfHotdogs + " hotdogs is " + price + " euros."
);

// Part 4: Daytime
// - if the currentHour is smaller than 17, `statement` should read "Still need to learn..."
// - if the currentHour is greater or equal to 17 it should equal "Partytime!!!"

const currentHour = 16;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime";

console.log(statement);

// Part 5: Greeting

// - use a ternary operator inside the round brackets to complete the `greeting` as follows.
// - if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
// - otherwise the string saved in `name` should be used instead, e.g.:
//   ```js
//   const name = "Archibald";
//   // logs "Hello Archibald!"
//   ```
// - change the value of `name` to check if the ternary operator works properly.

const userName = "Alexandar";

const greeting =
  "Hello " + (userName == "Alexandar" ? "Coach" : userName) + "!";

console.log(greeting);
