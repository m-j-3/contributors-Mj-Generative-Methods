// A place for utility functions, if you need any
import { hexToHSL, quickdrawToVectors } from "./utilities.js";

import planets from "./data/planets-moons.json" assert { type: "json" };

console.log("....Loading data");

//==================================
// API example
// function loadGutendexData(topic) {
//   console.log("REQUEST DATA");
//   let url = f`https://gutendex.com/books/?topic=${topic}`;
//   console.log("Fetch URL", topic);
//   fetch(url, {})
//     .then((res) => res.json())
//     .then((out) => console.log("Checkout this JSON! ", out))
//     .catch((err) => {
//       throw err;
//     });
// }
// loadGutendexData("pirates")
//==================================

// Load and preprocess any data

// Preprocess data

// Often its useful to store your data
// (planets, movies, colors, soccer matches,etc),
// in a class for easier access
class Planet {
  constructor({ position, name, velocity, distance, description, moons }) {
    this.position = position;
    this.name = name;
    this.velocity = velocity;
    this.distance = distance;
    this.description = description;
    this.moons = moons;
  }
}

// planets
let planetss = planets.planets.map(
  (p) =>
    new Planet({
      position: p.position,
      name: p.name,
      velocity: p.velocity,
      distance: p.distance,
      description: p.description,
      moons: p.moons,
    })
);

// What data we want to export to our visualization app?
let data = {
  planets: planetss,
};

export { data };
