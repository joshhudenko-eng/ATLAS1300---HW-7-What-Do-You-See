function drawTree(branchling){

    const leafGreen = color(96, 167, 18);
    const leafYellow = color(225, 214, 0);
    const leafBrown = color(97, 49, 0);
    let leafColor = colorLerp(leafGreen, leafYellow, leafBrown);

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