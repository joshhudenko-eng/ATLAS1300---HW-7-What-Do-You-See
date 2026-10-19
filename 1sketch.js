function setup() {
  createCanvas(600, 600);
  angleMode(RADIANS);
}

function draw() {
  background("black");
  translate(width/2, height)
  drawBranches(250);
  noLoop();
}