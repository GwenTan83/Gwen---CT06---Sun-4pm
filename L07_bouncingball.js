// write your codes here





function draw(){
    circle(x, y, size);
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        speedX *= 1.2;
        speedY *= 1.2;
    }

    if(keyCode === DOWN_ARROW){
        speedX *= 0.8
        speedY *= 0.8;
    }
}