console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  let calcFun;

  if (data.operator == "addition") {
    calcFun = add;
  } else if (data.operator == "subtraction") {
    calcFun = subtract;
  } else if (data.operator == "division") {
    calcFun = divide;
  } else {
    calcFun = multiply;
  }

  result = calcFun(Number(data.numberA), Number(data.numberB));

  resultOutput.textContent = result;
});
