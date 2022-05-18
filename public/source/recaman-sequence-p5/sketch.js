let numbers = [];
let count = 1;
let start = 0;

function setup() {
  createCanvas(1280, 720);
  background(255);
  stroke(0);
  line(0, height / 2, width, height / 2);
  strokeWeight(2);
  numbers.push(0);
}

function draw() {
  let newNum = start - count;
  let temp = start;
  if (!numbers.includes(newNum) && newNum >= 0) {
    numbers.push(newNum);
    start = newNum;
  } else {
    newNum = start + count;
    numbers.push(newNum);
    start = newNum;
  }

  count++;
  // console.log(numbers);

  if (newNum > 500) {
    noLoop();
  }

  // Drawing
  stroke(0, 100);
  noFill();
  let scl = width / 500;
  let centerPos = (temp * scl + newNum * scl) / 2;
  arc(
    centerPos,
    height / 2,
    abs(newNum - temp) * scl,
    abs(newNum - temp) * scl,
    count % 2 == 0 ? PI : 0,
    count % 2 == 0 ? 2 * PI : PI
  );
}
