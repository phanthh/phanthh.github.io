var bar = [];

function setup() {
  createCanvas(1280, 720);
  for (let i = 0; i < width; i++) {
    bar[i] = random(height);
  }
  i = width - 1;
}

function draw() {
  background(255);
  stroke(150);
  if (i >= 0) {
    for (let j = 0; j <= i; j++) {
      if (bar[j] > bar[j + 1]) {
        let temp = bar[j];
        bar[j] = bar[j + 1];
        bar[j + 1] = temp;
      }
    }
    i--;
  } else {
    noLoop();
  }
  for (let i = 0; i < width; i++) {
    line(i, height, i, height - bar[i]);
  }
}

function mouseClicked() {
  setup();
}
