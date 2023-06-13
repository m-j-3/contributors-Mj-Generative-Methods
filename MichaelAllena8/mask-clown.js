/* globals allMasks  Vector2D, drawContour */
allMasks["clown"] = {
  title: "clown mask",
  description: "run",
  setup() {},

  draw(p, face) {
    p.clear();

    let t = p.millis() * 0.001;

    let pct = (t % 2) / 2;

    let hue = pct * 360;
    face.sides.forEach((side, sideIndex) => {
      
      
      p.fill(255, 255, 255);
      //face makeup
      drawRibbon(p, side.eye[0].slice(0, 40), side.eye[1].slice(0, 40), {
        curve: true,
        close: false,

        side0: {
          lerpToPoint: side.eyeCenter,
          lerpPct: (index, pct) => {
            return -10 * p.noise(pct * 10 + t) * pct;
          },
        },
        
        side1: {
          //lerpToPoint: side.eyeCenter,
          //lerpPct: -1
        },
      });
      

      //eyes
      p.fill(hue, 100, 50);
      p.stroke(hue, 100, 20);
      p.circle(...side.eyeCenter, side.eyeWidth * 0.75);

    
    });
    
    //to layer the makeup properly
face.sides.forEach((side, sideIndex) => {
      //triangle makeup
      p.fill("#03fdfc");
      p.triangle(
        side.eyeTop[0] + 25,
        side.eyeTop[1]-20,
        side.eyeTop[0],
        side.eyeTop[1] - 75,
        side.eyeTop[0] - 25,
        side.eyeTop[1]-20
      );
      p.triangle(
        side.eyeBottom[0] + 25,
        side.eyeBottom[1]+20,
        side.eyeBottom[0],
        side.eyeBottom[1] + 75,
        side.eyeBottom[0] - 25,
        side.eyeBottom[1]+20
      );
});
    //lipstick
    face.mouth.forEach((contour, index) => {
      //p.fill(index*50, 100, 50)
      p.beginShape();
      contour.forEach((pt) => {
        p.text("🔴", ...pt);
      });

      p.endShape();
    });

    //honk
    p.fill("#FF0000");
    p.stroke(hue, 100, 20);
    p.circle(...face.nose, 20);
  },
};
