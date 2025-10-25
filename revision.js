// Exercise 1: Draw a square in the middle of the canvas
// function setup(){
//     createCanvas(600, 600);
//     background(220); 
// }

// let size = 100;
// function draw(){
//     rect(width/2-size/2, height/2-size/2, size, size)
// }


// Exercise 2: Draw 5 circles horizontally across the canvas and fill in with green colour gradient

function setup() {
    createCanvas(600,600);
    background(220);
}

circleDiameter=50;

function draw() {
    for(let i=0; i<5; i++) {
        fill(0, i*50, 0);
        ellipse(50 + i*50, 50 + i*50, circleDiameter, circleDiameter); 
    }
}

// Syntax: for(let <Variable> ; <LoopConditions> ; <Increment>) {<LoopCode>}
// The *for loop*
for (let i = 1; i < 11; i++){
    // code to loop
}