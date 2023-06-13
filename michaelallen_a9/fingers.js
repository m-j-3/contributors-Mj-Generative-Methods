ALL_TASKS["fingers"] = {
  desc: "A model that attempts to count how many fingers you are holding up",

  // Add classifier options to do classification,
  // or comment out for 5 sliders for continuous values
  classifierOptions: ["0", "1", "2", "3", "4", "5"],

  // How long you want to train for
  // Find an accuracy that works for you
  epochCount: 50,

  modelDetails: {
    model: "fingers/model.json",
    metadata: "fingers/model_meta.json",
    weights:
      "https://cdn.glitch.global/9a21f37a-d2f7-4fa9-9c5f-6f64de918a66/model.weights.bin?v=1670369347206",
  },

  preload(p) {
    // Any extra asset loading
    // free sound effects: https://freesound.org/
    // Be sure to cite in your .md!

    this.swordHitSound = p.loadSound(
      "https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/536104__eminyildirim__sword-hit-heavy.wav?v=1669823017308"
    );
    this.pianoNote = p.loadSound(
      "https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/573512__gamedrix974__54.wav?v=1669823019716"
    );
    this.bubblePopSound = p.loadSound(
      " https://cdn.glitch.global/9df71f81-684c-4eec-b6fd-e1074f6828b8/376968__elmasmalo1__bubble-pop.wav?v=1669823025748"
    );
  },

  setup(p) {
    // Do any setup work here
    this.osc = new p5.Oscillator("sine");
    // this.osc.start()
    // this.osc.stop()
    this.color = [100, 100, 80];
    this.fingers = 0;
  },

  onChangeLabel(hand, newLabel, oldLabel) {
    // An event happened!
    console.log(`Changed from ${oldLabel} to ${newLabel}`);
    this.fingers = 0;

    //this.fingers = newLabel; storage limit means we cant have 11 labels sadly so this wouldve been nice but doesnt work realistically

    //well this sure has to be one of the more embarassing things ive ever coded
    //ten decrease
    /*
    if (oldLabel == 10 && newLabel == 9) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 8) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 7) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 6) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 5) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 10 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //nine dec
    if (oldLabel == 9 && newLabel == 10) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 9 && newLabel == 8) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 7) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 6) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 5) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 9 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //8 dec
    if (oldLabel == 8 && newLabel == 10) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 8 && newLabel == 9) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 8 && newLabel == 7) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 6) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 5) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 8 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //7 dec/
    if (oldLabel == 7 && newLabel == 10) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 7 && newLabel == 9) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 7 && newLabel == 8) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 7 && newLabel == 6) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 5) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 7 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //6 dec
    if (oldLabel == 6 && newLabel == 10) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 6 && newLabel == 9) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 6 && newLabel == 8) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 6 && newLabel == 7) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 6 && newLabel == 5) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 6 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 6 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 6 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 6 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 6 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //5 dec
*/
    //well well well would you look at that it ended up being just what i needed

    //storage limit doesnt like doing 2k frames per recording so limit it to around 1000 frames per recording ish
    if (oldLabel == 5 && newLabel == 4) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 5 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 5 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 5 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 5 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //4 dec

    if (oldLabel == 4 && newLabel == 5) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 4 && newLabel == 3) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 4 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 4 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 4 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //3 dec

    if (oldLabel == 3 && newLabel == 5) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 3 && newLabel == 4) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 3 && newLabel == 2) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 3 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 3 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //2 dec

    if (oldLabel == 2 && newLabel == 5) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 2 && newLabel == 4) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 2 && newLabel == 3) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 2 && newLabel == 1) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }
    if (oldLabel == 2 && newLabel == 0) {
      for (let i = oldLabel; i > newLabel; i--) {
        this.fingers--;
      }
    }

    //1 dec

    if (oldLabel == 1 && newLabel == 5) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 1 && newLabel == 4) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 1 && newLabel == 3) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 1 && newLabel == 2) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (oldLabel == 1 && newLabel == 0) {
      this.fingers--;
    }

    //0 inc

    if (oldLabel == 0 && newLabel == 5) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 0 && newLabel == 4) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 0 && newLabel == 3) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 0 && newLabel == 2) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }
    if (oldLabel == 0 && newLabel == 1) {
      for (let i = oldLabel; i < newLabel; i++) {
        this.fingers++;
      }
    }

    if (this.fingers < 0) {
      this.fingers = 0;
    }
    // Lots of options
    // Change some state, play a sound,
    // change some value....

    // Make a theremin!
    //    if (newLabel === "🗡")
    //    this.osc.start()
    // if (newLabel === "🛡")
    //    this.osc.stop()

    // Play a sound
    //  if (newLabel === "🗡")
    //    this.swordHitSound.play()
    // else
    //   this.bubblePopSound.play()

    //Play a pitch-shifted sound

    //      if (newLabel === "👊"){
    //       let pitch = (400 - hand.center[1])*.002 + 1
    //        this.pianoNote.play()
    //     this.pianoNote.rate(pitch)
    // }

    // Random color?
    //this.color = [360*Math.random(), 100, 50]
    // this.points++
  },

  draw(p, hands, face) {
    p.background(...this.color);

    hands.forEach((hand) => {
      // Draw each hand
      if (hand.isActive) {
        // Test drawing
        hand.points.forEach((pt) => p.circle(...pt, 5));
        // hand.points.forEach((pt, index) => p.text(index, ...pt))

        p.circle(...hand.center, 2);

        hand.fingers.forEach((f, index) => {
          let fingertip = f[3];
          p.fill(index * 40, 100, 50);
          p.circle(...fingertip, 5);
        });

        let pitch = 400 - hand.center[1];
        // console.log("Pitch", pitch)
        this.osc.freq(pitch);

        if (hand.prediction) {
          // Use the label and uncertainty to draw
          console.log(hand.prediction);
          let pred = hand.prediction;
          p.textSize(20);

          p.text(pred.label, ...hand.center);
        }
      }
    });

    // Show text if you want!
    p.textSize(14);

    if (this.fingers == 1) {
      p.fill(0);
      p.text(
        "You are holding up " + this.fingers + " finger",
        200,
        200,
        100,
        100
      );
    } else {
      p.fill(0);
      p.text(
        "You are holding up " + this.fingers + " fingers",
        200,
        200,
        100,
        100
      );
    }
  },

  track: "HANDS",
  // Options: "HAND", "HANDS", "HANDS AND FACE", "FACE"
};
