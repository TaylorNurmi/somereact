import { animals } from "./animals";
import React from "react";
import * as ReactDOM from "react-dom";

const background = (
    <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const title = "";
let images = [];
for (let animal in  animals ) {
    images.push(
    <img
        key={ animal }
        className= "animal" 
        alt={ animal }
        src={ animals[animal].image }
        aria-label={ animal }
        role="button"
    />
    );
}
const animalFacts = (
    <div>
        {background}
        <div className="animals">{images}</div>
        <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
