function drawTree(branchling){

    const leafGreen = 
    const leafYellow =
    const leafBrown =


    strokeWeight(branchling/11);
    stroke(random(90, 130), 73, 0);
    line(0, 0, 0, -branchling);

    if (branchling > 40){
        push();
        translate(0, -branchling);
        rotate(radians(random(20, 40)));
        drawBranches(branchling * random(0.6, 0.75));
        pop();

        push();
        translate(0, -branchling);
        rotate(radians(random(-20, -40)));
        drawBranches(branchling * random(0.6, 0.75));
        pop();
    }
}