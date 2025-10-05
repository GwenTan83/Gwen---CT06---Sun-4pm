// write your codes here

//task 2 - countdown timer

let countdown = 5;
let interval;

function setup() {
    createCanvas(600,400)
    textAlign(CENTER, CENTER);
}

function draw(){
    background(220);

    fill(0);
    textSize(24);
    text("Click to start timer", width/2, height-50);
    fill('blue');
    textSize(80);
    text(countdown, width/2, height/2);

}

function mousePressed(){
    interval = setInterval(updateCountdown, 1000);
    
}