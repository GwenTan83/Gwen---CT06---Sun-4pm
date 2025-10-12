// Task 1
// let x = 300;
// let speedX = 2;
// let dia = 40;
// function setup(){
//     createCanvas(600,400);
// }

// function draw(){
//     background('lightblue');
//     fill('red'); //fill(255, 0, 0)
//     noStroke();

//     if(x>=width-dia/2 || x<=dia/2){
//         speedX *=-1;
//     }

//     x += speedX;
//     circle(x, height/2, 40);
// }

//Task 2

let arr = ["Pizza", "Pies", "Chocolates", "Chips",];

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(0);

    fill('orange');
    textSize(20);
    textAlign(CENTER, CENTER);

    for(let i=0; i<arr.length; i++){
        text(arr[i], width/2, 100)
    }
}


    



    



