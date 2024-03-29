var grid;
var ncol = 32;
var nrow = 18;
var w = 40;
var h = 40;

var stack;
var openSet;
var start;
var end;

class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.visited = false;
    this.walls = [true, true, true, true];
    this.neighbors = [undefined, undefined, undefined, undefined];
  }

  show = (color) => {
    if (this.walls[0]) {
      line(this.i * w, this.j * h, (this.i + 1) * w, this.j * h);
    }
    if (this.walls[1]) {
      line((this.i + 1) * w, this.j * h, (this.i + 1) * w, (this.j + 1) * h);
    }
    if (this.walls[2]) {
      line((this.i + 1) * w, (this.j + 1) * h, this.i * w, (this.j + 1) * h);
    }
    if (this.walls[3]) {
      line(this.i * w, (this.j + 1) * h, this.i * w, this.j * h);
    }
    if (this.visited) {
      push();
      fill(color);
      noStroke();
      rect(this.i * w, this.j * h, w, h);
      pop();
    }
  };
  searchNeighbor = () => {
    if (this.j > 0) {
      this.neighbors[0] = grid[this.i][this.j - 1];
    }
    if (this.i < ncol - 1) {
      this.neighbors[1] = grid[this.i + 1][this.j];
    }
    if (this.j < nrow - 1) {
      this.neighbors[2] = grid[this.i][this.j + 1];
    }
    if (this.i > 0) {
      this.neighbors[3] = grid[this.i - 1][this.j];
    }
  };
}

function removeWalls(a, b) {
  if (a.j > b.j) {
    a.walls[0] = false;
    b.walls[2] = false;
  }
  if (a.j < b.j) {
    a.walls[2] = false;
    b.walls[0] = false;
  }
  if (a.i > b.i) {
    a.walls[3] = false;
    b.walls[1] = false;
  }
  if (a.i < b.i) {
    a.walls[1] = false;
    b.walls[3] = false;
  }
}

function setup() {
  createCanvas(ncol * w, nrow * h);
  strokeWeight(3);
  grid = [];
  stack = [];
  openSet = [];

  for (let i = 0; i < ncol; i++) {
    grid[i] = new Array(nrow);
  }
  for (let i = 0; i < ncol; i++) {
    for (let j = 0; j < nrow; j++) {
      grid[i][j] = new Cell(i, j);
    }
  }
  for (let i = 0; i < ncol; i++) {
    for (let j = 0; j < nrow; j++) {
      grid[i][j].searchNeighbor();
    }
  }

  current = grid[0][0];
  current.visited = true;
  start = grid[0][0];
  end = grid[ncol - 1][nrow - 1];
  openSet.push(start);
  frameCount = 0;
  loop();
}

function draw() {
  let unvisited = [];
  for (let i = 0; i < current.neighbors.length; i++) {
    if (current.neighbors[i]) {
      let neighbor = current.neighbors[i];
      if (!neighbor.visited) {
        unvisited.push(neighbor);
      }
    }
  }

  if (unvisited.length > 0) {
    let r = floor(random(0, unvisited.length));
    let next = unvisited[r];
    stack.push(current);
    removeWalls(current, next);
    next.visited = true;
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  } else {
    console.log('DONE!');
    noLoop();
  }

  background(255);
  stroke(0);
  for (let i = 0; i < ncol; i++) {
    for (let j = 0; j < nrow; j++) {
      grid[i][j].show(color(0, 0, 0, 0));
    }
  }
  for (let i = 0; i < stack.length; i++) {
    stack[i].show(color(0, 0, 0, 100));
  }
}

function mouseClicked() {
  setup();
}
