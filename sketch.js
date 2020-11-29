var fixed, moving;

function setup() {
  createCanvas(1200,600);
  fixed = createSprite(600, 200, 50, 80);
  moving = createSprite(400, 200, 80, 50);

  moving.debug = true;
  fixed.debug = true;
}

function draw() {
  background(0);  

  moving.x = mouseX;
  moving.y = mouseY;


  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2)
    {
    
    moving.shapeColor = "red";
    fixed.shapeColor = "red";
  }
  else{
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
  }

  drawSprites();
}

/*
ALGORITHMS
  - Instructions given to the computer to solve a problem

Pre-defined algos:
 1. Detecting collision between two objects ==> isTouching()
 2. Bouncing objects when they collide ==> bounce()

*/