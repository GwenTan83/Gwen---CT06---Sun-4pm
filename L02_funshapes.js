/*
Task 1: Add the setup() function
*/

function setup(){
    createCanvas(600,400);
    background(228,122,255);//0-255 background (r,g,b); r-red g-green b-blue
}
function draw() {
    // ellipse(100,100,50,50);
    // ellipse(200,100,50,50);
    // circle(300,200,100);
    // circle(350,200,80);
    // rect(50,50,80,150,300,300,300,300);
    // fill(100,200,10); //r,g,b
    // triangle(30,75,58,20,86,75);
    // fill(25,200,100)
    // triangle(35,55,90,55,72,47);
    // quad(20,50,70,50,70,100,20,100);
    // quad(20,50,100,50,100,100,20,100);
    fill(0,0,225) //fill(r,g,b)(0-255);
    stroke(0,255,0); // colour for outline
    strokeWeight(10); // thickness
    quad(50,162,86,150,50,138,14,150);
    fill (255,0,0);
    quad(120,150,180,130,180,170,120,170);


  // Challenge 1: An eye using ellipse() function

  // Challenge 2: A face using circle() function

  // Challenge 3: A house using rect() function

  // Challenge 4: A rocketship using triangle() function

  // Challenge 5: A square face using quad() function

  // Challenge 6: Add some colours to the drawings in the above challenges

  // Challenge 7: Create a funny Pokemon
}