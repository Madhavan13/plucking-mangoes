
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,rock1,engie,world;
var boy,boyImage,tree,treeImage
var slingShot;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boyImage = loadImage("boy.png");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	
	boy = createSprite(150,530,20,20);
	boy.addImage("boy",boyImage);
	boy.scale=0.1;

	tree = createSprite(600,350,20,20);
	tree.addImage("tree",treeImage);
	tree.scale=0.4;

	rock1 = new ROCK(100,520,20,20);

	slingshot = new SlingShot(boy.body,{x:200, y:50});

	mango1 = new Mangoes(600,350,20,20);
	mango2 = new Mangoes(650,330,20,20);
	mango3 = new Mangoes(700,330,20,20);
	mango4 = new Mangoes(800,330,20,20);
	mango5 = new Mangoes(750,330,20,20);
	mango6 = new Mangoes(650,390,20,20);
	mango7 = new Mangoes(850,300,20,20);
	mango8 = new Mangoes(600,250,20,20);

	//Create the Bodies Here.
	ground1 = new Ground(100,600,1500,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  ground1.display();
  rock1.display();
  slingshot.display();
  mango1.display();
  mango2.display();
  mango3.display();  
  mango4.display(); 
  mango5.display(); 
  mango6.display(); 
  mango7.display();
  mango8.display();  
  drawSprites();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,mango7);
  detectollision(stone,mango8);
 
}

function mouseDragged(){
    Matter.Body.setPosition(boy.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(boy.body);
    }
}

function detectollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position
	stoneBodyPosition = lstone.body.position

	var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.settatic(lmango.body,false);
	}
}
