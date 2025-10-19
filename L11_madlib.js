// write your codes here

textBox = createInput()
textBox.position(width/2, height - 150);
textBox.input(display);

function setup(){
    createCanvas(200, 200);
}

function draw(){
    background(colorPicker.value());
    textAlign(LEFT);
    textSize(16);
    text("Choose your background color", 50, colorPicker.y+15);
}