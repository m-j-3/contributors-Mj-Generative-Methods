/**
 * Starter code
 * Create N swatches
 * Each swatch has code for when it starts and each frame after
 */
import { data } from "./data.js";
import { animations } from "./animations.js";
const SWATCH_SIZE = 300;

window.addEventListener("load", function () {
  console.log("LOADED");
  let swatchHolderEl = document.getElementById("swatch-holder");

  // Function to add an element to a parent element
  // for my own convenience
  function createElement(type, classList, parentEl, innerHTML) {
    let el = document.createElement(type);
    el.classList.add(classList);
    parentEl.appendChild(el);
    // Add inner HTML
    if (innerHTML) el.innerHTML = innerHTML;
    return el;
  }

  // Create all of the swatches here
  data.planets.forEach((d) => {
    let animation = animations[d.name];
    if (animation) {
      // Add a new div to hold the swatch
      let swatchEl = createElement("div", "swatch", swatchHolderEl);

      // Create a P5 canvas element, JS-style
      // https://github.com/processing/p5.js/wiki/p5.js-overview#instantiation--namespace
      const s = (p) => {
        p.setup = function () {
          p.createCanvas(SWATCH_SIZE, SWATCH_SIZE);
          //p.colorMode(p.HSL, 360, 100, 100);
          p.ellipseMode(p.CENTER_RADIUS);
          animation.setup(p);
        };

        p.draw = function () {
          let t = p.millis() * 0.001;
          animation.draw(p, t);
          let a;
          if (d.moons.length != 0) {
            a = (2 * Math.PI) / d.moons.length;
          } else {
            a = 0;
          }
          let w = Math.min(80, a * 50);
          let distanceFromCenter = 20 + 50 + w / 2 + d.moons.length;

          let distanceBetweenObjects = w + 2;

          let accumulatedAngle = t * (d.velocity / 10);

          for (let i = 0; i < d.moons.length; i++) {
            p.push();
            p.fill("#A9A9A9");
            p.ellipse(
              SWATCH_SIZE / 2 + Math.cos(accumulatedAngle) * distanceFromCenter,
              SWATCH_SIZE / 2 + Math.sin(accumulatedAngle) * distanceFromCenter,
              w
            );
            accumulatedAngle += a;
            p.pop();
          }
        };
      };

      let myp5 = new p5(s, swatchEl);

      // Add the label underneath
      // Add a new div to hold the label
      let labelEl = createElement("div", "label", swatchEl);

      // Add a new h2 tag to hold the title
      let titleEl = createElement("h2", "title", labelEl, d.name);

      // Add a new p to hold the description
      let descEl = createElement("p", "description", labelEl, d.description);

      let descEl1 = createElement(
        "p",
        "description",
        labelEl,
        d.name + "'s average orbital velocity is about " + d.velocity + " km/s"
      );
      let descEl2 = createElement(
        "p",
        "description",
        labelEl,
        d.name +
          " is position " +
          d.position +
          " in regards to placement ordering from the sun."
      );
      let descEl3 = createElement(
        "p",
        "description",
        labelEl,
        d.name + " is about " + d.distance + " million kilometers from the Sun"
      );
      var sum = "";
      let descEl4;
      let i;
      if (d.moons.length == 1) {
        descEl4 = createElement(
          "p",
          "description",
          labelEl,
          d.name + "'s moon is " + d.moons[0] + "."
        );
      } else {
        if (d.moons.length == 2) {
          descEl4 = createElement(
            "p",
            "description",
            labelEl,
            d.name + "'s moons are " + d.moons[0] + " and " + d.moons[1] + "."
          );
        } else {
          if (d.moons.length > 0) {
            for (i = 0; i < d.moons.length; i++) {
              if (i == d.moons.length - 1 && d.moons.length != 1) {
                sum += "and " + d.moons[i];
              } else {
                sum += d.moons[i] + ", ";
              }
            }

            descEl4 = createElement(
              "p",
              "description",
              labelEl,
              d.name + "'s moons are: " + sum + "."
            );
          } else {
            descEl4 = createElement(
              "p",
              "description",
              labelEl,
              d.name + " has no moons."
            );
          }
        }
      }
    }
  });
});

//=========================================
// Utility functions
// Given a processing object, a pct around the circle, a radius, and an offset (optional)
function getLoopingNoise({ p, loopPct, radius, offset = 0 }) {
  // This number should go from 0 to 1 every loopLength seconds
  // And PI*2 radians every loopLength seconds

  let theta = 2 * Math.PI * loopPct;

  // Place to sample the noise from
  let x = radius * Math.cos(theta);
  let y = radius * Math.sin(theta);

  let noiseVal = p.noise(x + 100, y + 30, offset);

  return noiseVal;
}
