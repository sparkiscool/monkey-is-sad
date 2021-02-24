var backImage,backgr;
var player, player_running;
var ground,ground_img;


var END =0;
var PLAY =1;
var gameState = PLAY;
var banana,bananaimg,obstacle,obstacleimg

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage("banana.png")
  obstacleimg = loadImage("stone.png")
}

function setup() {
  createCanvas(800,400);
  FoodGroup = new Group();
  obstacleGroup = new Group();
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);
    spawnfood()
    Obstacle()

  }

  drawSprites();
}
function spawnfood(){
  if(frameCount %80 === 0){
    var banana = createSprite(500,300,10,20)
    banana.addImage(bananaimg)
    banana.velocityX = -4
    banana.scale = 0.1
    FoodGroup.add(banana);
    FoodGroup.setLifetimeEach(100);
    banana.setCollider("rectangle", 0, 0, 400, 400);

    

  }

}
function Obstacle() {

  if (frameCount % 100 === 0) {
    var obstacle = createSprite(500, 305, 23, 32);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleimg);
    obstacle.scale = 0.2;
    obstacleGroup.add(obstacle);
    obstacleGroup.setLifetimeEach(100);
    obstacle.setCollider("circle", 0, 0, 200)
  }

}