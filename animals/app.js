import { animals } from "./animals";
import React from "react";
import * as ReactDOM from "react-dom";

const background = (
    <img className="background" alt="ocean" src="/images/ocean.jpg" />
);
const title = "";
let images = [];
for (let animal in animals) {
    images.push(
    <img
        key={animal}
        className="animal"
        alt={animal}
        src={animals[animal].image}
        aria-label={animal}
        role="button"
        onClick={displayFact}
    />
    );
}
const animalFacts = (
    <div>
        {background}
        <p id="fact"></p>
        <div className="animals">{images}</div>
        <h1>{title === "" ? "Click an animal for a fun fact" : title}</h1>
    </div>
);
function displayFact(e) {
    let selectedAnimal = e.target.alt;
    let optionIndex = Math.floor(
    Math.random() * animals[selectedAnimal].facts.length
    );
    let funFact = animals[selectedAnimal].facts[optionIndex];
    document.getElementById("fact").innerHTML = funFact;
}

ReactDOM.render(animalFacts, document.getElementById("root"));
