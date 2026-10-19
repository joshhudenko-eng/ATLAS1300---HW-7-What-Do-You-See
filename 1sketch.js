function setup() {
  createCanvas(750, 650);
  angleMode(DEGREES);
}

function draw() {
  background(0, 0, 0);
  translate(width/2, height);
  drawTree(200);
  noLoop();
}