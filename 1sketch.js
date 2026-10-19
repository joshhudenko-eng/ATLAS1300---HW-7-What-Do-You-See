function setup() {
  createCanvas(650, 650);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  translate(width/2, height);
  drawTree(200);
  noLoop();
}