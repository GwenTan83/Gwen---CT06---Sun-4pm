// write your codes here

let circleColor = 0; // 0 = black, 255 = red

function setup(){
    createCanvas(400, 400);
}

function draw(){
    background(220);
    // Red scale, green and blue are 0.
    fill(circleColor, 0, 0);
    circle(width / 2, height)
}