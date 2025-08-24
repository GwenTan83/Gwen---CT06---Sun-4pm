// Exercise 1: Draw a square in the middle of the canvas
function setup(){
    createCanvas(600, 600);
    background(220); 
}

let size = 100;
function draw(){
    rect(width/2-size/2, height/2-size/2, size, size)
}


// Exercise 2: Draw 5 circles for horizontally