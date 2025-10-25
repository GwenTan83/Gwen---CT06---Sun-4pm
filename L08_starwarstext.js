// write your codes here

function setup(){
    createCanvas(400, 400);
}
function draw(){
    background(220);
    
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX - ballSize/2 <= 0){
      ballSpeedX = ballSpeedX * -1;
    }

    if (ballY - ballSize/2 <= 0 || ballY + ballSize/2 >= height){
      ballSpeedY = ballSpeedY * -1;
    }   

    noStroke();
    fill(255);
    circle(ballX, ballY, ballSize);
}