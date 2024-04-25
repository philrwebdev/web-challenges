console.clear();

const userElement = document.querySelector(".user");

async function getUser(url) {
  try {
    const response = await fetch(url);
    console.log(response);

    if (!response.ok) {
      const errorMessage = "Failed to fetch data: unknown user";
      document.querySelector(".error").innerText = errorMessage;
      throw new Error(errorMessage);
    }

    const json = await response.json();
    return json.data;
    
  } catch (error) {
    document.querySelector(".error").innerText = error;
    console.error("Error fetching data:", error);
    throw error;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);
