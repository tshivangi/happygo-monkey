var backImage,backgr;
var player, player_running;
var ground,ground_img;
var banana_img;
var END =0;
var PLAY =1;
var gameState = PLAY;
var stone_img;
var stonegroup,bananagroup;
var score=0;

function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  banana_img=loadImage("banana.png");
  stone_img=loadImage("stone.png");
}

function setup() {
  createCanvas(800,400);
  
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

stonegroup=new Group();
bananagroup=new Group();

  
}

function draw() { 
  background(0);
 text("score "+ score,600,70);
  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
  if(player.isTouching(bananagroup)){
bananagroup.destroyEach();score=score+2;
player.scale+=0.05;
  }
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    spawnFood();
    spawnobs();
  }






  drawSprites();
}


function spawnFood(){
  if ( frameCount % 80 === 0) {
  var banana = createSprite(600,250,40,20);
  banana.y=random(120,200);
  banana.addImage(banana_img);
  banana.scale=0.09;
  banana.velocityX=-4
  banana.lifetime=300;
  player.depth=banana.depth+1;
  bananagroup.add(banana) 
  }
  
  }

  function spawnobs(){
    if ( frameCount % 80 === 0) {
    var stone = createSprite(400,350,40,20);
    
    stone.addImage(stone_img);
    stone.scale=0.4;
    stone.velocityX=-4
    stone.lifetime=300;
    player.depth=stone.depth+1;
    stonegroup.add(stone) 
    }
    
    }