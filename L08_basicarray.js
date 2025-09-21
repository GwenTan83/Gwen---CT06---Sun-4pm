// write your codes here


// let x = 200-20;
// let y = 200-20; 
// let size = 40; 
// let speedX = 5; 
// let speedY = 5; 
// let shapeColor = 'blue'; 

// function setup() {
//     createCanvas(600, 400); 
//     // background(220); 
// }

// function draw() {
//     background(220); 

//     if (x<= 0 || x >= width - size){ 
//         speedX *= -1; // speedX = speedX*-1
//         shapeColor = color(random(255), random(255),random(255)); 
//         //fill(random(255,random(255),random(255)); 
//     }

//      if (y <= 0 || y >= height - size) {  
//         speedY *= -1; // speedX = speedX*-1
//         shapeColor = color(random(255), random(255),random(255)); 
//         //fill(random(255,random(255),random(255)); 
//     }
//     x += speedX; //x = x + speedX
//     y += speedY;            
   
//     noStroke(); 
//     fill(shapeColor); 
//     rect(x, y, size, size); 

// }
// function setup(){
//     createCanvas(600,400);
//     background(220);

// textSize(24)
// fill(255,0,0)
// text("My name is Gwen", 50, 50)

// textSize(20);
// fill(0,255,0)
// text("I am 14 this year", 50, 100)

// textSize(30);
// fill(0,0,255);
// text("My favourite activity is sleeping", 50, 150)
// }

let favFoods = ["ice cream", "chicken rice", "nuggets", "char kway teow", "carrot cake"];
function setup(){
    createCanvas(400,400)
    textSize(24)
    textAlign(LEFT, CENTER);
    textSize(24);
}
text("My favourite foods:", 50, 50);

for(let i=0; i<favFoods.length; i++){
    text((i+1) + ", " + favFoods[i], 50, 80 + i*30);
}


function draw(){
    background(220);

}