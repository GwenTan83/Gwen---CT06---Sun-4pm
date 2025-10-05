// write your codes here

//task 2 - countdown timer

// let countdown = 5;
// let interval;

// function setup() {
//     createCanvas(600,400)
//     textAlign(CENTER, CENTER);
// }

// function draw(){
//     background(220);

//     fill(0);
//     textSize(24);
//     text("Click to start timer", width/2, height-50);
//     fill('blue');
//     textSize(80);
//     text(countdown, width/2, height/2);

// }

// function mousePressed(){
//     interval = setInterval(updateCountdown, 1000);
// }

// function updateCountdown(){
//     if(countdown>0) {
//         countdown -=1;
//     } else {
//         clearInterval(interval);
//     }
// }

////////////////////////////////////////////////////////////
//Task 3

let countdown = 5;
let interval;
let change;
let bgColor = 220;
let sound;

function preload(){
    sound = loudSound('assets/bossaNova.mp3');
}


function setup() {
    createCanvas(600,400)
    textAlign(CENTER, CENTER);
}

function draw(){
    background(bgColor);

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

function updateCountdown(){
    if(countdown>0) {
        countdown -=1;
    } else {
        clearInterval(interval);
        change = setInterval(changeVar, 500);
    }
}

function changeVar(){
    bgColor = color(random(255), random(255), random(255));
    sound.play()
}