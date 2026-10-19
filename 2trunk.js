function drawBranches(branchling){
    trunk = 250;
    strokeWeight(8);
    stroke("brown");
    line(0, 0, 0, -trunk);

    push();
    if (branchling > 3){
        strokeWeight (map(30, 20, 10))
        stroke("brown")
        translate(0, -branchling)
        rotate(30)
        drawBranches(branchling * random(1, 2))
    }
    pop();
}