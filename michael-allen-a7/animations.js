import { data } from "./data.js";

// You can change this,
// but will need to change swatch-holder's tile settings in CSS
const SWATCH_SIZE = 300;

// Looping Animation inspirations
// https://www.thisiscolossal.com/2018/11/hand-drawn-gifs-by-benjamin-zimmerman/
// https://www.thisiscolossal.com/2018/04/animation-of-sinusoidal-waves-in-gifs-by-etienne-jacob/
// https://www.thisiscolossal.com/2018/08/gifs-by-marcus-martinez/
//

let animations = {
  //================================================
  // TODO: Copy and paste this example to make your own animations
  Sun: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);

      p.fill(255, 255, 0);

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Mercury: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill(160, 160, 160);

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Venus: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#e8e3d9");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Earth: {
    // draw a sphere with radius 40
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#B5E6BE");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },

  Mars: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#ba434b");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },

  Ceres: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#d3d3d3");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Jupiter: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#a45729");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Saturn: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#cc9966");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Uranus: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#0d98ba");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Neptune: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill("#00AAFF");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Pluto: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);
      p.fill(255, 87, 51);

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },

  Haumea: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);

      p.fill("#bf9494");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Makemake: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);

      p.fill("#622F22");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
  Eris: {
    setup(p) {},

    draw(p, t) {
      p.background(217, 242, 242);

      p.fill("#DCDCDC");

      p.ellipse(SWATCH_SIZE / 2, SWATCH_SIZE / 2, 100);
    },
  },
};

export { animations };
