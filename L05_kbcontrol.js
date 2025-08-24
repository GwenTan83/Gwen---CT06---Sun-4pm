// write your codes here

let shapeColor = 'yellow';

function setup(){
    createCanvas(600,600);
    background(220);

}

function draw(){
    if(mouseX<100) {
        shapeColor='red';
    } else if (mouseX>=100 || mouseX<200){
        shapeColor='green';
    } else {
        shapeColor
    }
    
    fill (shapeColor);
    circle(width/2, height/2, 100);
}