var n = 10;
var wave;

function setup() {
  createCanvas(1280, 720);
  strokeWeight(2);
  wave = [];
  angle = 0;
}

function draw() {
  background(255);

  translate(width / 2 - 200, height / 2);
  var x = 0;
  var y = 0;
  for (let i = 0; i < n; i++) {
    var prevx = x;
    var prevy = y;
    var phi = 2 * i + 1;
    var radius = 100 * (4 / (phi * PI));
    x += radius * cos(phi * angle);
    y += radius * sin(phi * angle);
    // Draw circles
    ellipseMode(RADIUS);
    noFill();
    stroke(0, 150);
    ellipse(prevx, prevy, radius);
    stroke(0, 100);
    line(prevx, prevy, x, y);
  }

  wave.unshift(y);
  stroke(0, 50);
  line(x, y, 300, wave[0]);
  stroke(0);

  // Draw wave
  translate(300, 0);
  beginShape();
  noFill();
  for (let i = 0; i < wave.length; i++) {
    vertex(i * 0.6, wave[i]);
  }
  endShape();
  if (wave.length > 500) {
    wave.pop();
  }
  angle += 0.02;
}
