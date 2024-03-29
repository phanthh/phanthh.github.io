var points;

function setup() {
  createCanvas(1280, 720);
  points = [new PointA()];
  for (let i = 1; i < 160; i++) {
    points.push(new Point(200 - i, points[i - 1]));
  }
}

function draw() {
  background(255);
  stroke(50);
  strokeWeight(10);
  points.forEach((point) => {
    point.update();
    point.show();
  });
}

class PointA {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = 50;
  }

  update() {
    let dy =
      (this.speed * (mouseY - this.y)) / dist(this.x, this.y, mouseX, mouseY);
    let dx =
      (this.speed * (mouseX - this.x)) / dist(this.x, this.y, mouseX, mouseY);
    this.x += dx;
    this.y += dy;
  }
  show() {
    point(this.x, this.y);
  }
}

class Point {
  constructor(index, point) {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = index * 0.1 + 2;
    this.point = point;
  }

  update() {
    let dy =
      (this.speed * (this.point.y - this.y)) /
      dist(this.x, this.y, this.point.x, this.point.y);
    let dx =
      (this.speed * (this.point.x - this.x)) /
      dist(this.x, this.y, this.point.x, this.point.y);
    this.x += dx;
    this.y += dy;
  }
  show() {
    point(this.x, this.y);
    // line(this.x, this.y, this.point.x, this.point.y);
  }
}
