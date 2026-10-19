function drawTree(branchling){

    strokeWeight(branchling/11);
    stroke(random(90, 130), 73, 0);
    line(0, 0, 0, -branchling);

    if (branchling > 40){
        push();
        translate(0, -branchling);
        rotate(random(20, 40));
        drawTree(branchling * random(0.6, 0.75));
        pop();

        push();
        translate(0, -branchling);
        rotate(random(-40, -20));
        drawTree(branchling * random(0.6, 0.75));
        pop();
    } else {
        drawLeafCluster();
    }

}