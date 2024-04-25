import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Amazing react tutorial article title</h2>
      <label htmlFor="inputField">Enter some amazing text here:</label>
      <input type="text" id="inputField"></input>
      <a
        className="article__link"
        href="https://coreui.io/blog/how-to-create-a-single-page-application-using-reactjs/"
      >
        Click here for an amazing react tutorial.
      </a>
    </article>
  );
}
