import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h2>{name} is a Web Developer from {city}</h2>
      </div>
  )
}

export default Home;
