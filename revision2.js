// Task 1
let x = 300;
let speedX = 2;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background('lightblue');
    fill('red'); //fill(255, 0, 0)
    noStroke();

    if(x<=width){
        speedX *=-1;
    }

    x += speedX;
    circle(x, height/2, 80);
}



    



