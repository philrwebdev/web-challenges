import React from "react";
import "./styles.css";


export default function App() {
  return <Button disabled={false} color="red" text="Cool button"/>;
}

function Button({text, color, disabled}) {
  return <button color={color} disabled={disabled} onClick={() => alert('You clicked me!')}
  style={{height: "100px"}}>{text}</button>
}
