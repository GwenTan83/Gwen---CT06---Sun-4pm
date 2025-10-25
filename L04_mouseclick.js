// write your codes here

// let shapeColor = 'blue'; // Initial color

// function setup(){
//     createCanvas(400, 400);
//     background(220);
// }

// function draw(){
//     fill(shapeColor);
//     ellipse(200, 200, 80, 80); // Draw a circle
// }

// function mousePressed(){
//     shapeColor = 'red'; // Change color on press
// }

// function mouseReleased(){
//     shapeColor = 'blue'; // Change color back on release
// }

// Random colour using random()
// function setup(){
//     createCanvas(200, 200);
//     background(220);
//     fill(255);
//     circle(width / 2, height / 2, 80);
// }

// function mousePressed(){
//     fill(random(255), random(255), random(255));
//     circle(width / 2, height / 2, 80);
// }

// function setup(){
//     createCanvas(400, 400);
//     background(220);
//     fill(255, 0, 0);
// }

// function mouseMoved(){
//     ellipse(mouseX, mouseY, 10, 10);
// }

function setup(){
    createCanvas(400, 400);
    background(220);
}

function mouseDragged(){
    // Draw a circle at mouse position
    ellipse(mouseX, mouseY, 20, 20);
}

