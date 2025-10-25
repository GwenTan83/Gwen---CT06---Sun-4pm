
// function setup() {
//     createCanvas(600, 400);
//     background(220);
  //   // noLoop(); // Stops continuous drawing
// }
//let spacing=90;
//let colorValue=0;
// function draw() {
    // circle(75,200,100);
    // circle(225,200,100);
    // circle(375,200,100);
    // circle(525,200,100);
    // for(let i=0; i<4; i++) {
    //   // fill(i*spacing);
    //   // fill(colorValue%255)
    //   if(i%2 0){
    //     fill(0);
    //   } else{
    //     fill(225);
    //   }
    //   circle(spacing+i*spacing,200,40);
    //   // colorValue +=1;
    // rect(0,100,width,200);  
    // circle(width/2, height/2, 100);
    // let diameter = 50; 
    // let numCircles = 5;
    // let totalWidth = diameter * numCircles;
    // let startX=(width-totalWidth)/2 + diameter/2;
    // //let startX=diameter/2;
    // let startY=(height-totalWidth)/2+diameter/2;
    // for (let j=0; j<5; j++) {
    //   let y = startY + j*diameter;
    //   for (let i=0; i<5; i++) {
    //       fill(0,0,i*50);
    //       circle(startX+i*diameter,y,diameter);  
  
          // circle(startX+i*diameter,height/2,diameter);
          //  circle(startX+i*diameter,diameter/2,diameter);
          

    // }
    // }


    

    
    // }
  // Recap 1: Repeating Circles

  // Task 1: Colour Gradient

  // Task 2: Colour Loop

  // Task 3: Row of Circles

  function setup(){
    createCanvas(200, 200);
    background(220);
  }

  function draw(){
    let circleDiameter = 30;
    let numCircles = 5;
    let totalWidth = numCircles * circleDiameter
    // Calculate starting x for centering
    let startX = (width - totalWidth)

    for (let i = 0; i < numCircles; i++) {
      let x = startX + i * circleDiameter;
      ellipse(x, height / 2, circleDiameter, circleDiameter);
    }
    
  }

  // Task 4: Grid of Circles

