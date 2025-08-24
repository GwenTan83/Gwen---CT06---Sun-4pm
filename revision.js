// Exercise 1: Draw a square in the middle of the canvas
function setup(){
    createCanvas(800, 800);
    background(220);
}

// Exercise 2: Draw 5 circles horizontally across the canvas and fill in with green colour gradient
function draw(){
    circle(75,200,100)
    circle(225,200,100);
    circle(375,200,100);
    circle(525,200,100);
    circle(680,200,100);
        for(let i=0; i<4; i++) {
      // fill(i*spacing);
      // fill(colorValue%255)
      if(i%2===0){
        fill(0);
      } else{
        fill(225);
      }
      circle(spacing+i*spacing,200,40);
      // colorValue +=1;
    rect(0,100,width,200);  
    circle(width/2, height/2, 100);

}
}