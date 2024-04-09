const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  let newOutput = "Let's see...";

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  if (age < 13 || age > 19) {
    newOutput = "Sorry, but you are not a teenager.";
  } else {
    newOutput = "Congrats, you're a teenager!";
  }

  output.innerHTML = newOutput;
});
