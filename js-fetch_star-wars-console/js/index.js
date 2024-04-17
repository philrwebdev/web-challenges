console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData(address) {
    const response = await fetch(address);
    const data = await response.json();
    console.log("Data within function:" , data);
    return data;
}

const data = await fetchData(url);

console.log("Returned data outside function:" , data);



