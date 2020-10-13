var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, b1, b2, b3, bb1, bb2, bb3;

var engine, world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();

	world = engine.world;
	rectMode(CENTER);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	b1 = createSprite(400,650,200,20);
	b1.shapeColor="red";
	bb1 = new Box(400, 630, 200, 20);

	b2 = createSprite(292,610,20,100);
	b2.shapeColor="red";
	bb2 = new Box(292, 610, 20, 100);

	b3 = createSprite(508, 610,20,100);
	b3.shapeColor="red";
	bb3 = new Box(508, 610, 20, 100);

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.75, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	Engine.run(engine);

}


function draw() {
background(0);

/*
b1.display();
b2.display();
b3.display();
*/

  rectMode(CENTER);
  //rect(packageBody.position.x, packageBody.position.y, 200, 5);

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
/*
  if(keyCode === DOWN_ARROW){
	keyPressed();
  }
  */

  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Body.setStatic(packageBody, isStatic=false)
 }
}



