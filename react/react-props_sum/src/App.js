import React from "react";
import "./styles.css";


export default function App() {
  return <Sum valueA={1} valueB={2}/>;
}

function Sum({valueA, valueB}) {

  return <h1>The sum of {valueA} and {valueB} is: {valueA + valueB}</h1>;

}
