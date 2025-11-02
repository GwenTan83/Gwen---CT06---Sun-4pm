// write your codes here

let textBox;
let button;
let arr = ["Guess the Hidden Word!", "Attempts: ", "Hint: "];
function setup(){
    createCanvas(600, 600);
    textBox = createInput(); 
    textBox.position(width/2 - textBox.width/2, 100);
    button = createButton('Guess');
    button.position(width/2 - button.width/2, 350);
    button.mousePressed(display);
}