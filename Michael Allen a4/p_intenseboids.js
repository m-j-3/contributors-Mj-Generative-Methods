/* globals Vector2D, Particle, ParticleSystem, p */

/*
 * Basic particles with an attraction force
 */

class inBoidSystem extends ParticleSystem {
  static label = "⏩"; // Ignore the Glitch parse error
  static desc = "Intense Boids animation of rockets"; // Ignore the Glitch parse error

  constructor() {
    // Make what particle, and how many?
    // Try different numbers of particles
    super(inBoidParticle, 10);
        this.windScale = 0.001;

    this.flockCenter = new Vector2D()
    this.flockVelocity = new Vector2D()
  }
  
  beforeMove(p, dt) {
//     Calculate the flock's center and average direction
    
    this.flockCenter.mult(0)
    this.flockVelocity.mult(0)
    this.particles.forEach(pt => {
      this.flockCenter.add(pt.pos)
      this.flockVelocity.add(pt.v)
    })
    this.flockVelocity.div(this.particles.length)
    this.flockCenter.div(this.particles.length)
  }
  
  
  mousePressed(p) {
    super.mousePressed(p)
    if (!this.held) {
      let pt = new inBoidParticle(this)
      pt.pos.setTo(p.mouseX, p.mouseY)
      this.particles.push(pt)
    }
  }

  draw(p) {
    // A little bit of trails!
    p.background(0, 0, 50, 5);
     
    p.noFill()
    p.stroke(100, 0, 100, .4)
    p.circle(...this.flockCenter, 100)

    // The "super-class" draws the particles
    super.draw(p);
  }
}

//=========================================================================
//=========================================================================
//=========================================================================

class inBoidParticle extends Particle {
  constructor(ps, index) {
    // ps: the particle system this particle belongs to
    // index: of all the particles in that system, this one's index
    super(ps, index);
    
    this.draggable = true

    this.pos.setToRandom(0, p.width, 0, p.height);
    this.radius = 10
    this.angle = Math.random()*100
    this.v.setToPolar(10, this.angle)
    
    this.cohesionForce = new Vector2D()
    this.alignmentForce = new Vector2D()
    this.separationForce = new Vector2D()
    
    // A few forces to keep the boid interesting
    this.propulsionForce = new Vector2D()
    this.attractionForce = new Vector2D()
    //
     this.thrusterStrength = 1;
    this.turnStrength = 0.1;
    this.flameAnimation = 0.1;
    
    // Store forces so we can debug-draw them
    this.thrustForce = new Vector2D();
    this.turnForce = new Vector2D();
    
    // Store a trail of past-positions
    this.trail = [];
  }

  calculateForces(p, dt) {
let t = p.millis()*.001 // Get the time
    
    // My angle is whichever way I'm going
    this.angle = this.v.angle;
    
    
    // Add a border force
    let center = new Vector2D(p.width / 2, p.height / 2);
    this.f.add(
      this.pos.getForceTowardsPoint(center, 1, {
        startRadius: 140,
        falloff: 1.2,
      })
    );

    // Add boids force
    
    // Cohesion
    // Move toward center
    this.cohesionForce = this.pos.getForceTowardsPoint(this.ps.flockCenter, 1, {falloff: 1.2})
     
    // Separation
    // Push away from all other boids
    this.separationForce.mult(0)
    this.ps.particles.forEach(pt => {
      // Ignore any force on myself
      if (pt !== this) {
        // Get the current distance and (normalized) 
        // offset vector to this particle
        let d = this.pos.getDistanceTo(pt.pos)
        let offset = Vector2D.sub(this.pos, pt.pos).div(d)
        let range = 100
        if (d < range) {
          this.separationForce.addMultiple(offset, range - d)
        }
      }
    })
    
    // Alignment
     this.alignmentForce = Vector2D.sub(this.ps.flockVelocity, this.v)
    
    // A force to keep everyone moving forward
    let flyingStrength = p.noise(this.idNumber)
    let turn = p.noise(this.idNumber, t) - .5
    this.propulsionForce.setToPolar(100 + 120*flyingStrength, 
                                    this.angle + turn)
    
    // Chase the mouse?
    let mouse = new Vector2D(p.mouseX, p.mouseY)
    this.attractionForce = this.pos.getForceTowardsPoint(mouse, 1, {falloff: 1.2})
    
    // Apply "drag"
    this.v.mult(.97)
    this.v.constrainMagnitude(10, 300)
    
    // Try different tunings
    this.separationForce.mult(100)
    this.cohesionForce.mult(100)
    this.alignmentForce.mult(2)
    
    this.f.add(this.separationForce )
    this.f.add(this.alignmentForce )
    this.f.add(this.cohesionForce )
    this.f.add(this.propulsionForce )
    this.f.add(this.attractionForce )
    
    // this.debugText = this.cohesionForce.toString()
  }
  
   move(p, dt) {
     super.move(p, dt)
      this.pos.wrapX(0, p.width);
     this.pos.wrapY(0, p.height); 
   }

  draw(p, drawDebug = false) {
   /* 
    let t = p.millis() * 0.001;
  
    p.noStroke();
    p.fill('#00ffff')
    p.push()
    p.translate(...this.pos)
    p.rotate(this.angle)
    
    p.beginShape()
    p.vertex(this.radius, 0)
    p.vertex(-this.radius, -this.radius)
     p.vertex(0, 0)
    p.vertex(-this.radius, this.radius)
    
    
    p.endShape()
    
    p.pop()
    */
    let t = p.millis() * 0.001;

    // Draw the trail
    p.noStroke();
    p.fill('#ffffff');

    // Draw every third trail poof
    this.trail
      .filter((pt, index) => index % 3 == 0)
      .forEach((pt, index) => {
        // Draw the circle, with a little offset wiggle
        p.circle(
          pt[0] + 10 * p.noise(pt[0]) - 5,
          pt[1] + 10 * p.noise(pt[0]) - 5,
          5 + -0.1 * index
        );
      });

    // Move to the rocket's location
    p.push();
    p.translate(...this.pos);
    p.rotate(this.v.angle);

    // Rocket body
    p.noStroke();
    p.rectMode(p.CENTER);
    p.stroke(0, 0, 100, 1);
    p.fill('#00ffff');
    p.rect(10, 0, 15, 10);
    p.ellipse(30, 0, 22, 5);

    // Fins
    p.beginShape();
    p.vertex(0, 0);
    p.vertex(20, 0);
    p.fill('#00ffff');
    p.vertex(0, -40 * this.turnStrength);
    p.endShape();

    // Flamejet
    let cycle = this.flameAnimation;
    let flameCount = 7;
    p.scale(this.thrusterStrength, 0.6 + this.thrusterStrength * 0.4);
    for (var i = 0; i < flameCount; i++) {
      let pct = ((i + cycle * 10) % flameCount) / flameCount;
      let r = (0.3 + Math.sin(pct * Math.PI)) * (1 - pct);
      p.fill('#00ffff');
      p.noStroke();
      p.ellipse(-pct * 100, pct * 3 * Math.sin(i * 3 + cycle), r * 20, r * 8);
    }

    p.pop();
    
    //this turned out so much better than i expected im so glad
    //the little rockets are so cute i love them // time to see if i can add the playability and retain boids
    
    if (drawDebug) {
      p.fill(0)
      p.text(this.debugText, ...this.pos)
       this.pos.drawArrow(p, this.separationForce, { m: .2, color: [30, 100, 50] });
      this.pos.drawArrow(p, this.cohesionForce, { m: .2, color: [60, 100, 50] });
      this.pos.drawArrow(p, this.alignmentForce, { m: .2, color: [160, 100, 50] });
      this.pos.drawArrow(p, this.attractionForce, { m: .2, color: [220, 100, 50] });
     
    }
  }
}
