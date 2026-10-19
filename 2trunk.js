function drawBranches(branchling){
    strokeWeight(branchling/12);
    stroke(random(100, 150), 73, 0);
    line(0, 0, 0, -branchling);

    if (branchling > 10){
        push();
        translate(0, -branchling);
        rotate(radians(random(30)));
        drawBranches(branchling * random(0.5, 0.7));
        pop();

        push();
        translate(0, -branchling);
        rotate(radians(random(-20, -30)));
        drawBranches(branchling * random(0.5, 0.7));
        pop();
    }
}