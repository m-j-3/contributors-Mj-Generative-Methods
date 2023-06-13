/* globals allMasks  Vector2D, drawContour */
allMasks["Spider"] = {
  title: "Spider mask",
  description: "jesus christ",
  setup() {},

  draw(p, face) {
    p.clear();
    let width = face.nose[0] + 300;
    let height = face.nose[1] + 100;

    let neckL = p.createVector(width * 0.4 + 20, height * 0.9 + 40);
    let neckR = p.createVector(width * 0.6 - 20, height * 0.9 + 40);

    face.sides.forEach((side, sideIndex) => {
      //tear tracks crying cuz jesus theres a spider on her face oh and shes like dying too but id be more concerned over the huge spider
      p.fill("#03fdfc");

      /* p.triangle(
        side.eyeBottom[0] + 25,
        side.eyeBottom[1]+20,
        side.eyeBottom[0],
        side.eyeBottom[1] + 75,
        side.eyeBottom[0] - 25,
        side.eyeBottom[1]+20
      );*/

      p.bezier(
        side.eyeBottom[0] - 25,
        side.eyeBottom[1],
        neckL.x,
        neckL.y,
        neckR.x,
        neckR.y,
        ((neckL.x + neckR.x) / 2),
        ((neckL.y + neckR.y) / 2)
      );
    });

    // spider is black
    p.fill(0);
    p.stroke(0);
    p.strokeWeight(1);

    // first left leg
    p.line(width * 0.5, height * 0.5, width * 0.25, height * 0.25);
    p.line(width * 0.25, height * 0.25, width * 0.05, height * 0.5);

    // first right leg
    p.line(width * 0.5, height * 0.5, width * 0.75, height * 0.25);
    p.line(width * 0.75, height * 0.25, width * 0.95, height * 0.5);

    // second left leg
    p.line(width * 0.5, height * 0.5, width * 0.25, height * 0.4);
    p.line(width * 0.25, height * 0.4, width * 0.05, height * 0.7);

    // second right leg
    p.line(width * 0.5, height * 0.5, width * 0.75, height * 0.4);
    p.line(width * 0.75, height * 0.4, width * 0.95, height * 0.7);

    // third left leg
    p.line(width * 0.5, height * 0.5, width * 0.25, height * 0.6);
    p.line(width * 0.25, height * 0.6, width * 0.05, height * 0.9);

    // third right leg
    p.line(width * 0.5, height * 0.5, width * 0.75, height * 0.6);
    p.line(width * 0.75, height * 0.6, width * 0.95, height * 0.9);

    // fourth left leg
    p.line(width * 0.5, height * 0.5, width * 0.25, height * 0.75);
    //neck point

    p.line(width * 0.25, height * 0.75, neckL.x, neckL.y);

    // fourth right leg
    p.line(width * 0.5, height * 0.5, width * 0.75, height * 0.75);

    p.line(width * 0.75, height * 0.75, neckR.x, neckR.y);

    // body
    p.ellipse(width * 0.5, height * 0.5, width * 0.15, height * 0.15);

    {
      // web
      p.stroke(200);
      p.strokeWeight(10);
      p.line(width * 0.5, 0, width * 0.5, height * 0.5);
    }

    p.strokeWeight(1);

    let eyeWidth = width * 0.9;
    let eyeHeight = height * 0.9;
    //eyes
    p.fill(255);
    p.ellipse(
      eyeWidth * 0.5 - eyeWidth * 0.05,
      eyeHeight * 0.5 - eyeHeight * 0.05,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 - eyeWidth * -0.05,
      eyeHeight * 0.5 - eyeHeight * 0.05,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 + eyeWidth * 0.15,
      eyeHeight * 0.5 - eyeHeight * 0.05,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 - eyeWidth * 0.05,
      eyeHeight * 0.5 + eyeHeight * 0.03,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 + eyeWidth * 0.15,
      eyeHeight * 0.5 + eyeHeight * 0.03,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 + eyeWidth * 0.05,
      eyeHeight * 0.5 + eyeHeight * 0.03,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 + eyeWidth * 0.01,
      eyeHeight * 0.5 + eyeHeight * 0.1,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );
    p.ellipse(
      eyeWidth * 0.5 + eyeWidth * 0.11,
      eyeHeight * 0.5 + eyeHeight * 0.1,
      eyeWidth * 0.05,
      eyeHeight * 0.05
    );

    //bleeding
    p.stroke(353, 90, 39);
    p.fill(353, 90, 39);
    p.circle(neckL.x, neckL.y, 20);
    p.circle(neckR.x, neckR.y, 20);

    p.translate((neckL.x + neckR.x) / 2, (neckL.y + neckR.y) / 2);
    p.noStroke();
    p.scale(0.5);
    for (let i = 0; i < 10; i++) {
      p.ellipse(0, 30, 20, 80);
      p.rotate(p.PI / 5);
    }
    /*
    // eyes
    p.fill(255);
    p.ellipse(
      width * 0.5 - width * 0.04,
      height * 0.5 - height * 0.025,
      width * 0.05,
      height * 0.05
    );
    p.ellipse(
      width * 0.5 + width * 0.04,
      height * 0.5 - height * 0.025,
      width * 0.05,
      height * 0.05
    );*/

    /*
    // mouth
    p.noFill();
    p.stroke(255);
    p.arc(
      width * 0.5,
      height * 0.525,
      width * 0.075,
      height * 0.05,
      0,
      0,
      p.PI
    ); */
  },
};
