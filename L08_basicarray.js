// write your codes here


let x = 300;
let y = 200; 
let size = 40; 
let speedX = 5; 
// let speedY = 5; 
let shapeColor = 'blue'; 

function setup() {
    createCanvas(600, 400); 
    background(220); 
}

function draw() {
    //background(220); 

    if (x<= 0 || x >= width - size/2){ 
        speedX *= -1; // speedX = speedX*-1
        shapeColor = color(random(255), random(255),random(255)); 
        //fill(random(255,random(255),random(255)); 
    }
    x += speedX; //x = x + speedX
   



    noStroke(); 
    fill(shapeColor); 
    rect(x, y, size); 

}