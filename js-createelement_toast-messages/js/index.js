console.clear();


const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {

  const currentMessage = "I'm another toast message.";

  const newMessage = document.createElement("li");

  newMessage.classList.add("toast-container__message");
  newMessage.innerHTML = `${currentMessage}`;

  toastContainer.append(newMessage);

  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
