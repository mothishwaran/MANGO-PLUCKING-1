
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var backImg,boyImg;
var tree;
var ground;
var stone;
var boy;
var sling;
mango1,mango2,mango3,mango4,mango5;




function preload()
{
	backImg=loadImage("bg.png");
	boyImg=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	boy=createSprite(150,600,1,1);
	 boy.addImage(boyImg);
	 boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(400,700,800);
  tree=new Tree(400,300);
 stone =new Stone(40,300,50);
 sling=new Sling(stone.body,{x:110,y:540});
 mango1=new Mango(500,350,50);
 mango2=new Mango(600,350,50);
 mango3=new Mango(570,470,50);
 mango4=new Mango(650,450,50);
 mango5=new Mango(590,400,50);
 mango6=new Mango(400,450,50);
 mango7=new Mango(470,450,50);
 mango8=new Mango(650,450,50);
 mango9=new Mango(650,300,50);
 mango10=new Mango(700,450,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  tree.display();
  ground.display();
 stone.display();
 sling.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 mango8.display();
 mango9.display();
 mango10.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);
detectCollision(stone,mango8);
detectCollision(stone,mango9);
detectCollision(stone,mango10);


  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
	sling.fly();
}

function detectCollision(lstone,lmango){
 mangoBodyPosition=lmango.body.position;
 stoneBodyPosition=lstone.body.position;

var distance =dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=lmango.radius+lstone.radius){
	Matter.Body.setStatic(lmango.body,false);
}

}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:110,y:540});
		sling.attach(stone.body);
		
	}
}