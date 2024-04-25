console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideSuccess() {
  success.setAttribute("hidden", "");
}

function showSuccess() {
  success.removeAttribute("hidden");
}

hideTosError();
hideSuccess();

tosCheckbox.addEventListener("change", (event) => {
  let tosChecked = tosCheckbox.checked;

  if (tosChecked) {
    hideTosError();
  } else {
    showTosError();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("In event listener.");

  let tosChecked = tosCheckbox.checked;

  if (tosChecked) {
    hideTosError();
    alert("Form submitted");
    showSuccess();
    // event.target.reset();
    // event.target.elements.firstName.focus();
  } else {
    showTosError();
  }
});
