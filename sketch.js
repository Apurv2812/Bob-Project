const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var constraintBob1,constraintBob2,constraintBob3,constraintBob4,constraintBob5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	constraintBob1 = new Bob(500,500,80,80);
	constraintBob2 = new Bob(150,250,80,80);
	constraintBob3 = new Bob(200,300,80,80)
	constraintBob4 = new Bob(250,350,80,80);
	constraintBob5 = new Bob(300,400,80,80);
	
	roof = new Roof(100,100,500,50);

	rope1 = new Rope(constraintBob1.body , roof.body , -constraintBobDiameter*2 , 0);
	rope2 = new Rope(constraintBob2.body , roof.body , -constraintBobDiameter*2 , 0);
	rope3 = new Rope(constraintBob3.body , roof.body , -constraintBobDiameter*2 , 0);
	rope4 = new Rope(constraintBob4.body , roof.body , -constraintBobDiameter*2 , 0);
	rope5 = new Rope(constraintBob5.body , roof.body , -constraintBobDiameter*2 , 0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  constraintBob1.display();
  constraintBob2.display();
  constraintBob3.display();
  constraintBob4.display();
  constraintBob5.display();

  roof.display();
  drawSprites();
 
}



