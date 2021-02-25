function s(p5) {
    // this class describes the properties of a single particle.
    class Particle {
        // setting the co-ordinates, radius and the
        // speed of a particle in both the co-ordinates axes.
        constructor() {
            this.x = p5.random(0, p5.width);
            this.y = p5.random(0, p5.height);
            this.r = p5.random(1, 8);
            this.xSpeed = p5.random(-2, 2);
            this.ySpeed = p5.random(-1, 1.5);
        }

        // creation of a particle.
        createParticle() {
            p5.noStroke();
            p5.fill('rgba(200,169,169)');
            p5.circle(this.x, this.y, this.r);
        }

        // setting the particle in motion.
        moveParticle() {
            if (this.x < 0 || this.x > p5.width)
                this.xSpeed *= -1;
            if (this.y < 0 || this.y > p5.height)
                this.ySpeed *= -1;
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles) {
            particles.forEach(element => {
                let dis = p5.dist(this.x, this.y, element.x, element.y);
                if (dis < 85) {
                    p5.stroke('rgba(255,255,255,0.4)');
                    p5.line(this.x, this.y, element.x, element.y);
                }
            });
        }
    }


    // an array to add multiple particles
    let particles = [];

    p5.setup = () => {
        p5.createCanvas(279, 3070);
        for (let i = 0; i < p5.width / 10; i++) {
            particles.push(new Particle());
        }
    };

    p5.draw = () => {
        p5.background('#0f0f0f');
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
    };
}


var myp5 = new p5(s, 'side_left_div');

// second particles  
/////////////////////////////////////////////////////////////////////////////
function s(p5) {
    // this class describes the properties of a single particle.
    class Particle {
        // setting the co-ordinates, radius and the
        // speed of a particle in both the co-ordinates axes.
        constructor() {
            this.x = p5.random(0, p5.width);
            this.y = p5.random(0, p5.height);
            this.r = p5.random(1, 8);
            this.xSpeed = p5.random(-2, 2);
            this.ySpeed = p5.random(-1, 1.5);
        }

        // creation of a particle.
        createParticle() {
            p5.noStroke();
            p5.fill('rgba(200,169,169)');
            p5.circle(this.x, this.y, this.r);
        }

        // setting the particle in motion.
        moveParticle() {
            if (this.x < 0 || this.x > p5.width)
                this.xSpeed *= -1;
            if (this.y < 0 || this.y > p5.height)
                this.ySpeed *= -1;
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        }

        // this function creates the connections(lines)
        // between particles which are less than a certain distance apart
        joinParticles(particles) {
            particles.forEach(element => {
                let dis = p5.dist(this.x, this.y, element.x, element.y);
                if (dis < 85) {
                    p5.stroke('rgba(255,255,255,0.4)');
                    p5.line(this.x, this.y, element.x, element.y);
                }
            });
        }
    }


    // an array to add multiple particles
    let particles = [];

    p5.setup = () => {
        p5.createCanvas(279, 3070);
        for (let i = 0; i < p5.width / 10; i++) {
            particles.push(new Particle());
        }
    };

    p5.draw = () => {
        p5.background('#0f0f0f');
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
    };
}


var myp5 = new p5(s, 'side_right_div');

/////////////////////////////////////////////////////////////////////////////
//line dots

var s = function( p ) { // p could be any variable name
    let totalPts = 300;
let steps = totalPts + 1;
    p.setup = function() {
        p.createCanvas(710, 400);
        p.stroke(255);
        p.frameRate(1);
    };
  
    p.draw = function() {
        p.background(0);
        let rand = 0;
        for (let i = 1; i < steps; i++) {
          p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
          rand += p.random(-15, 15);
        }
    };
  };
  var myp5 = new p5(s, 'practice');