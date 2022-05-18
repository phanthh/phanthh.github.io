var terrain;
var peaks;
var c;
var r;

function setup() {
  createCanvas(1280, 720);
  strokeWeight(3);
  terrain = [];
  peaks = [];
  r = random() * 100;
  for (let i = 0; i < width; i++) {
    terrain[i] = noise(r + i * 0.005) * height;
  }
  c = 1;
}

function draw() {
  background(255);
  stroke(0, 0, 0, 50);
  for (let i = 0; i < width; i++) {
    line(i, height, i, height - terrain[i]);
  }
  if (c < terrain.length - 1) {
    if (terrain[c] > terrain[c - 1] && terrain[c] > terrain[c + 1]) {
      peaks[c] = -terrain[c];
    } else {
      peaks[c] = terrain[c];
    }
    c++;
  } else {
    noLoop();
  }

  push();
  stroke(255);
  line(c, height, c, height - terrain[c]);
  pop();

  for (let i = 1; i < width; i++) {
    if (peaks[i] <= 0) {
      push();
      stroke(255, 255, 255, 200);
      line(i, height, i, height + peaks[i]);
      pop();
    }
  }
}

function mouseClicked() {
  setup();
}
