// let img; 
// let soundEffect; 
// let music; 
// let imgWidth = 100; 
// let imgHeight = 100; 
// let speed = 1; 
// let x = 200;
// let y = 200; 

// function preload() {
//     img = loadImage('assets/pico-a.png');
//     soundEffect = loadSound('assets/pop.mp3'); 
//     music = loadSound('assets/bossaNova.mp3'); 
// }

// function setup() {
//     createCanvas(400, 400); 
//     music.loop(); 
// }

// function draw() {
//     background('lightblue'); 

//     x = constrain(x, 0, width-imgWidth);
//     y = constrain(y, 0, height-imgHeight); 

//     if(keyIsDown(RIGHT_ARROW)) {
//         x +=speed; 
//     }
//     if(keyIsDown(LEFT_ARROW)) {
//         x -=speed; 
//     }
//     if(keyIsDown(UP_ARROW)) {
//         y -=speed; 
//     }
//     if(keyIsDown(DOWN_ARROW)) {
//         y +=speed; 
//     }

//     //load image onto canvas
//     image(img, x, y, imgWidth, imgHeight); 
// }

// function keyPressed() {
//     if(keyCode == 32) {
//         imgWidth = 50; 
//         soundEffect.play(); 
//     }
//     if(key == 's') {
//         music.stop(); //music.pause();  
//     }
// }

// function keyReleased() {
//     imgWidth = 100; 
//     //soundEffect.stop(); 
//     soundEffect.pause(); 
// }
///////////////////////////////////////////////

//task 1

let x = 300;
let y = 200; 
let size = 30; 
let speedX = 5; 
let speedY = 5; 
let shapeColor = 'blue'; 

function setup() {
    createCanvas(600, 400); 
    background(220); 
}

function draw() {
    //background(220); 

    if (x-size/2 <= 0 || x + size/2>= width) {  // x <= size/r || x >= width - size/2
        speedX *= -1; // speedX = speedX*-1
        shapeColor = color(random(255), random(255),random(255)); 
        //fill(random(255,random(255),random(255)); 
    }
    if (y-size/2 <= 0 || y + size/2>= height) {  // x <= size/r || x >= height - size/2
        speedY *= -1; // speedX = speedX*-1
        shapeColor = color(random(255), random(255),random(255)); 
        //fill(random(255,random(255),random(255)); 
    }

    x += speedX; //x = x + speedX
    y += speedY; //y = y + speedY



    noStroke(); 
    fill(shapeColor); 
    circle(x, y, size); 

}

function keyPressed() {
    if(keyCode === UP_ARROW) {
        speedX *=1.2; 
        speedY *=1.2; 
    }
    if(keyCode === DOWN_ARROW) {
        speedX *=0.8;  
        speedY *=0.8; 
    }
}