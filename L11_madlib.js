// write your codes here

let textBox;
let colorTextPicker;

function setup(){
    createCanvas(200, 200);

    textBox = createInput();
    textBox.position(50, 50);

    colorTextPicker = createColorPicker('orange');
    colorTextPicker.position(50,100)
}

function draw(){
    background(220);

}