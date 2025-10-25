// write your codes here


function draw(){
    background(220);
    
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (ballX - ballSize/2 <= 0) {
      ballSpeedX = ballSpeedX * -1;
    }

    if (ballY - ballSize/2 <= 0) {
      ballSpeedY = ballSpeedY * -1;
    }   

    noStroke();
    fill(255);
    circle(ballX, ballY, ballSize);
}