
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(800,350,40)
	bobObject2 = new Bob(840,350,40)
	bobObject3 = new Bob(880,350,40)
	bobObject4 = new Bob(920,350,40)
	bobObject5 = new Bob(960,350,40)

	roof1=new Roof(900,200,800,40)

	rope1 = new Rope(bobObject1.body,roof1.body,-80,0);
	rope2 = new Rope(bobObject2.body,roof1.body,-40,0);
	rope3 = new Rope(bobObject3.body,roof1.body,0,0);
	rope4 = new Rope(bobObject4.body,roof1.body,40,0);
	rope5 = new Rope(bobObject5.body,roof1.body,80,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 roof1.display();
 rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
}



