function setup() {
  createCanvas(650, 650);
  angleMode(RADIANS);
}

function draw() {
  background("black");
  translate(width/2, height)
  drawTree(200);
  noLoop();
}