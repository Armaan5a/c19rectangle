var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  fr=createSprite(420, 340, 80, 30);
}
function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
    movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
    ){
    
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";
} 

else{
  movingRect.shapeColor="green";
fixedRect.shapeColor="green";

}
 
if(movingRect.x-fr.x<fr.width/2+movingRect.width/2 &&
  fr.x-movingRect.x<fr.width/2+movingRect.width/2 &&
  fr.y-movingRect.y<fr.height/2+movingRect.height/2 &&
  movingRect.y-fr.y<fr.height/2+movingRect.height/2
  ){
  
movingRect.shapeColor="yellow";
fr.shapeColor="yellow"
} 

else{
fr.shapeColor="green"
}



drawSprites();
}
