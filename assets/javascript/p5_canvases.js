// first particles 
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
        p5.createCanvas(339, 617);
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


var myp5 = new p5(s, 'particles-left');

/////////////////////////////////////////////////////////////////////////////
// second particles 
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
        p5.createCanvas(339, 617);
        for (let i = 0; i < p5.width / 10; i++) {
            particles.push(new Particle());
        }
    };

    p5.draw = () => {
        p5.background('#000000');
        for (let i = 0; i < particles.length; i++) {
            particles[i].createParticle();
            particles[i].moveParticle();
            particles[i].joinParticles(particles.slice(i));
        }
    };
}


var myp5 = new p5(s, 'particles-right');

/////////////////////////////////////////////////////////////////////////////
//line dots  in about me section

var s = function (p) { // p could be any variable name
    let totalPts = 300;
    let steps = totalPts + 1;
    p.setup = function () {
        p.createCanvas(1017, 100);
        p.stroke(255);
        p.frameRate(10);
    };

    p.draw = function () {
        p.background(0);
        let rand = 0;
        for (let i = 1; i < steps; i++) {
            p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
            rand += p.random(-15, 15);
        }
    };
};
var myp5 = new p5(s, 'about-me-dots');

/////////////////////////////////////////////////////////////////////////////
//line dots  in about experience

var s = function (p) { // p could be any variable name
    let totalPts = 300;
    let steps = totalPts + 1;
    p.setup = function () {
        p.createCanvas(1017, 100);
        p.stroke(255);
        p.frameRate(10);
    };

    p.draw = function () {
        p.background(0);
        let rand = 0;
        for (let i = 1; i < steps; i++) {
            p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
            rand += p.random(-15, 15);
        }
    };
};
var myp5 = new p5(s, 'experience-dots');

/////////////////////////////////////////////////////////////////////////////
//line dots  in more section

var s = function (p) { // p could be any variable name
    let totalPts = 300;
    let steps = totalPts + 1;
    p.setup = function () {
        p.createCanvas(1017, 100);
        p.stroke(255);
        p.frameRate(10);
    };

    p.draw = function () {
        p.background(0);
        let rand = 0;
        for (let i = 1; i < steps; i++) {
            p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
            rand += p.random(-15, 15);
        }
    };
};
var myp5 = new p5(s, 'more-dots');

/////////////////////////////////////////////////////////////////////////////
//line dots  in contact section

var s = function (p) { // p could be any variable name
    let totalPts = 300;
    let steps = totalPts + 1;
    p.setup = function () {
        p.createCanvas(1440, 100);
        p.stroke(255);
        p.frameRate(10);
    };

    p.draw = function () {
        p.background(0);
        let rand = 0;
        for (let i = 1; i < steps; i++) {
            p.point((p.width / steps) * i, p.height / 2 + p.random(-rand, rand));
            rand += p.random(-15, 15);
        }
    };
};
var myp5 = new p5(s, 'top5');

/////////////////////////////////////////////////////////////////////////////
//bouncing balls  in bottom of contact section

var s = function (p) { // p could be any variable name
    let numBalls = 13;
    let spring = 0.05;
    let gravity = 0.03;
    let friction = -0.9;
    let balls = [];

    p.setup = function () {
        p.createCanvas(1440, 200);
        for (let i = 0; i < numBalls; i++) {
            balls[i] = new Ball(
                p.random(p.width),
                p.random(p.height),
                p.random(30, 70),
                i,
                balls
            );
        }
        p.stroke('#3190A6');
        p.fill(255);
    };

    p.draw = function () {
        p.background(0);
        balls.forEach(ball => {
            ball.collide();
            ball.move();
            ball.display();
        });
    };

    class Ball {
        constructor(xin, yin, din, idin, oin) {
            this.x = xin;
            this.y = yin;
            this.vx = 0;
            this.vy = 0;
            this.diameter = din;
            this.id = idin;
            this.others = oin;
        }

        collide() {
            for (let i = this.id + 1; i < numBalls; i++) {
                // console.log(others[i]);
                let dx = this.others[i].x - this.x;
                let dy = this.others[i].y - this.y;
                let distance = p.sqrt(dx * dx + dy * dy);
                let minDist = this.others[i].diameter / 2 + this.diameter / 2;
                //   console.log(distance);
                //console.log(minDist);
                if (distance < minDist) {
                    //console.log("2");
                    let angle = p.atan2(dy, dx);
                    let targetX = this.x + p.cos(angle) * minDist;
                    let targetY = this.y + p.sin(angle) * minDist;
                    let ax = (targetX - this.others[i].x) * spring;
                    let ay = (targetY - this.others[i].y) * spring;
                    this.vx -= ax;
                    this.vy -= ay;
                    this.others[i].vx += ax;
                    this.others[i].vy += ay;
                }
            }
        }
        move() {
            this.vy += gravity;
            this.x += this.vx;
            this.y += this.vy;
            if (this.x + this.diameter / 2 > p.width) {
                this.x = p.width - this.diameter / 2;
                this.vx *= friction;
            } else if (this.x - this.diameter / 2 < 0) {
                this.x = this.diameter / 2;
                this.vx *= friction;
            }
            if (this.y + this.diameter / 2 > p.height) {
                this.y = p.height - this.diameter / 2;
                this.vy *= friction;
            } else if (this.y - this.diameter / 2 < 0) {
                this.y = this.diameter / 2;
                this.vy *= friction;
            }
        }

        display() {
            p.ellipse(this.x, this.y, this.diameter, this.diameter);
        }
    }
};
var myp5 = new p5(s, 'bottom_anim');