var fixedRect, movingRect;
var obj1,obj2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  obj1 = createSprite(100, 100, 50, 80);
  obj2 = createSprite(1100, 100, 50, 80);

  obj1.velocityX=3;
  obj2.velocityX=-3;
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect,fixedRect);
  bounceOff(obj1,obj2);

  drawSprites();
}

