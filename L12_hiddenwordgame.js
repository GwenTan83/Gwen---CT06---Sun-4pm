// write your codes here

let textBox;
let arr = ["Guess the Hidden Word!", "Attempts: ", "Hint: "];
function setup(){
    createCanvas(600, 600);
    textBox = createInput(); 
    textBox.position(width/2 - textBox.width/2, 100);
    
}