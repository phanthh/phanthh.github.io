var cols, rows;
var scl;
var terrain;
var flying;

function setup() {
  createCanvas(1280, 720, WEBGL);
  cols = 45;
  rows = 45;
  terrain = new Array(cols);
  scl = width / cols;
  for (let i = 0; i < cols; i++) {
    terrain[i] = new Array(rows);
  }
  flying = 0;
}

function draw() {
  var ioff = 0;
  for (let i = 0; i < cols; i++) {
    var joff = flying;
    for (let j = 0; j < rows; j++) {
      terrain[i][j] = map(noise(ioff, joff), 0, 1, -300, 400);
      joff += 0.05;
    }
    ioff -= 0.05;
  }
  flying -= 0.01;
  translate(-width / 2 - 200, height / 2 - 300, 100);
  rotateX(PI / 3);
  rotateZ(-PI / 3);
  background(255);
  noFill();
  stroke(0);
  for (let i = 0; i < cols - 1; i++) {
    beginShape(TRIANGLE_STRIP);
    for (let j = 0; j < rows; j++) {
      vertex(i * scl, j * scl, terrain[i][j]);
      vertex((i + 1) * scl, j * scl, terrain[i + 1][j]);
    }
    endShape();
  }
}
