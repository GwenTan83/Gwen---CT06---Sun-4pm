// write your codes here

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
     noStroke(); 
    fill(shapeColor); 
        circle(x, y, size); }
