var fixedrect,movingrect;
function setup() {
  createCanvas(600,600);
  fixedrect=createSprite(200, 300, 50, 80);
  fixedrect.shapeColor="green";
  movingrect=createSprite(200,200,80,30);
  movingrect.shapeColor="green";
movingrect.velocityY=5
fixedrect.velocityY=-5
ob1=createSprite(100,200,50,50);
ob1.shapeColor="yellow";
ob2=createSprite(400,200,50,50);
ob2.shapeColor="red";
ob1.velocityX=6;
ob2.velocityX=-6;
}

function draw() {
  background("black"); 

  

bounceoff(ob1,ob2);
bounceoff(movingrect,fixedrect);
  drawSprites();
}
function bounceoff(object1,object2){
if (object1.x-object2.x<object1.width/2+object2.width/2  &&
  object2.x-object1.x<object2.width/2+object1.width/2){
    object1.velocityX=object1.velocityX*(-1)
    object2.velocityX=object2.velocityX*(-1)
    
}
if (object1.y-object2.y<object1.height/2+object2.height/2  &&
  object2.y-object1.y<object1.height/2+object2.height/2){
    object1.velocityY=object1.velocityY*(-1)
    object2.velocityY=object2.velocityY*(-1)
  }
}