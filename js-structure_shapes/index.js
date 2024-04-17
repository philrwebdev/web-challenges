console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";
import Pentagon from "./components/Pentagon/pentagon.js";
import Square from "./components/Square/Square.js";

const root = document.getElementById("root");

// function Circle() {
//   const circle = document.createElement("div");
//   circle.classList.add("circle");
//   circle.addEventListener("click", () => {
//     circle.style.backgroundColor = getRandomColor();
//   });
//   return circle;
// }

const circleElement = Circle();
root.append(circleElement);

// function Square() {
//   const square = document.createElement("div");
//   square.classList.add("square");
//   square.addEventListener("click", () => {
//     square.style.backgroundColor = getRandomColor();
//   });
//   return square;
// }

const squareElement = Square();
root.append(squareElement);

// function Pentagon() {
//   const pentagon = document.createElement("div");
//   pentagon.classList.add("pentagon");
//   pentagon.addEventListener("click", () => {
//     pentagon.style.backgroundColor = getRandomColor();
//   });
//   return pentagon;
// }

const pentagonElement = Pentagon();
root.append(pentagonElement);

// root.append(circle, square, pentagon);
