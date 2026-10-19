function setup() {
  createCanvas(750, 650);
  angleMode(DEGREES); //easier to read in code than radians
}

function draw() {
  background(0, 0, 0);
  translate(width/2, height); //centers the origin for the tree trunk
  drawTree(200); //starts branchling out at 200, aka passes 200 in for the branchling inital value 
  noLoop(); //disable this and find out what happens for yourself yo!
}

//onto the 2tree.js file from here