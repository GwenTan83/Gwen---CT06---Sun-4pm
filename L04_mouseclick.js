// write your codes here

let shapeColor = 'blue'; // Initial color

function setup(){
    createCanvas(400, 400);
    background(220);
}

function draw(){
    fill(shapeColor);
    ellipse(200, 200, 80, 80); // Draw a circle
}

function mousePressed(){
    shapeColor = 'red'; // Change color on press
}

function mouseReleased(){
    shapeColor = 'blue'; // Change color back on release
}

function setup(){
    createCanvas(200, 200);
    background(220);
    fill(255);
    circle
}