import React from "react";
import { render } from "react-dom";
import { Pet } from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something">Adopt Me!</h1>
      <Pet name="Chewie" animal="Dog" breed="Golden Retriever" />
      <Pet name="Richard" animal="Cow" breed="Heifer" />
      <Pet name="Bernard" animal="Fish" breed="Gold" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
