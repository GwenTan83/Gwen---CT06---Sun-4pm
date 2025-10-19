// write your codes here


// let interval;
// let bgColor = 220;

// function setup(){
//     createCanvas(400, 400);

//     interval = setInterval(changeBg,1000);
// }

// function draw(){
//     background(bgColor);

//     let s = nf(59 - second(), 2);


//     textSize(50);
//     text(s, width/2, height/2); 
// }

// function changeBg(){
//     bgColor = color(random(255), random(255), random(255));
// } 

///////////////////////////////////////////////////////////////

//task 1

// let userInput;
// let userText = "Show Text Here"

// function setup(){
//     createCanvas(600, 600);

//     userInput = createInput();
//     userInput.position(width/2 - userInput.width/2, height-50);
//     userInput.input(userInputUp);
// }

// function draw(){
//     background(220);

//     textSize(14);
//     textAlign(CENTER, BOTTOM);
//     text("Enter text here: ", 50, userInput.y+15);

//     textSize(30);
//     text(userText, width/2, height/2);
// }

// function userInputUp(){
//     userText = this.value();
// }

//Task 2

let colorPicker;

let userInput;
let userText = "Show Text Here"

function setup(){
    createCanvas(600,400);
    colorPicker = createColorPicker('orange');
    colorPicker.position(width/2, height-50);
}

function draw(){
    background(colorPicker.value());
    
    text("Choose your background color", 50, colorPicker.y+15);

    rect(50, 100, 500, 150, 500);

    text("Enter your name", 50, colorPicker.y+-50);
    userInput = createInput();
    userInput.position(width/2 - userInput.width/2, height-80);
    userInput.input(userInputUp);
}

function draw(){text("Enter your age", 50, colorPicker.y+-15)
    userInput = createInput();
    userInput.position(width/2 - userInput.width/2, height-80);
    userInput.input(userInputUp);
}

