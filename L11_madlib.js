// write your codes here

textBox = createInput()
textBox.position(width/2, height - 150);
textBox.input(display);

function setup(){
    createCanvas(200, 200);
}

function draw(){
    text(colorPicker.value());
    textAlign(LEFT);
    textSize(16);
}