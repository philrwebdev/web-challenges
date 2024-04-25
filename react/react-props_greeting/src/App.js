import "./styles.css";


export default function App() {
  return <Greeting name="Dominik"/>;
}

function Greeting({name}) {
  return <h1>Greeting, {name === "Dominik" ? "Coach" : name}!</h1>;
}
