function drawBranches(branchling){
    strokeWeight(branchling/10);
    stroke("brown");
    line(0, 0, 0, -branchling);

    if (branchling > 7){
        push();
        translate(0, -branchling);
        rotate(radians(30));
        drawBranches(branchling * 0.7);
        pop();

        push();
        translate(0, -branchling);
        rotate(radians(-30));
        drawBranches(branchling * 0.5);
        pop();
    }
}