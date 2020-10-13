const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var engine, world;

var Basket1, Basket2, Basket3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	Basket1 = new Basket(400,640,170,20);
	Basket2 = new Basket(325,575,20,150);
	Basket3 = new Basket(475,575,20,150);


	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 

  
}


function draw() {
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;


  Basket1.display();
  Basket2.display();
  Basket3.display();
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody,false)
  }
}



