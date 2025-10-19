// write your codes here

let textBox;
textBox = createInput()
textBox.position(width/2, height - 150);
textBox.input(display);

function setup(){
    createCanvas(200, 200);
    background(255);
}

function draw(){
    text(colorPicker.value());
    textAlign(LEFT);
    textSize(16);
}