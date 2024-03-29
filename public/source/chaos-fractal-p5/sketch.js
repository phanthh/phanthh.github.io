var numPnts = 5;
var percent = 0.5;
var points;
var current;
var previous;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function setup() {
  createCanvas(1280, 720);
  background(255);
  points = [];
  for (let i = 0; i < numPnts; i++) {
    let angle = PI / 2 + (i * TWO_PI) / numPnts;
    let v = p5.Vector.fromAngle(angle);
    v.mult(300);

    points[i] = new Point(v.x, v.y);
  }
  current = new Point(random(width), random(height));
  frameCount = 0;
  loop();
}

function draw() {
  if (frameCount >= 1000) {
    noLoop();
  }
  translate(width / 2, height / 2);
  for (let i = 0; i < 1000; i++) {
    stroke(0, 50);
    strokeWeight(1);
    let next = random(points);
    if (next !== previous) {
      newx = (current.x + next.x) * percent;
      newy = (current.y + next.y) * percent;
      current = new Point(newx, newy);
      points.forEach((p) => {
        push();
        stroke(0);
        strokeWeight(5);
        point(p.x, p.y);
        pop();
      });
      point(current.x, current.y);
    }

    previous = next;
  }
}

function mouseClicked() {
  setup();
}
