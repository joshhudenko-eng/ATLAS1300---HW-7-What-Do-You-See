function drawTree(branchling){

    strokeWeight(branchling/11);
    stroke(random(90, 130), 73, 0);  //gives the trunk some mismatching gradients for natures sake
    line(0, 0, 0, -branchling);

    if (branchling > 20){
        push();
        translate(0, -branchling); 
        rotate(random(20, 40));  //creates the righty set of branches by translating to end of branch, rotating, changing 200 by 0.6-0.75
        drawTree(branchling * random(0.6, 0.75));
        pop();

        push();
        translate(0, -branchling);
        rotate(random(-20, -40)); //same thing but for the lefty branches 
        drawTree(branchling * random(0.6, 0.75));
        pop();
    } else {
        drawLeafCluster(); //once we get to the end of the branch and branchling value is under 20 draw leaves!
    }
}

//onto the 3leaves.js file from here