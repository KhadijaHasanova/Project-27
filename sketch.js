const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var rope1,rope2,rope3,rope4,rope5;

var bob1,bob2,bob3,bob4,bob5;

function preload() {
	
}

function setup() {
	//create the canvas
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	//create the roof
	roof = new Roof(400,80,700,40);

	//create the bobs
	bob1 = new Bob(250,300);
	bob2 = new Bob(300,300);
	bob3 = new Bob(350,300);
	bob4 = new Bob(400,300);
	bob5 = new Bob(450,300);

	//create the ropes
	rope1 = new Rope(bob1.body,roof.body,-200,0);
	rope2 = new Rope(bob2.body,roof.body,-100,0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,100,0);
	rope5 = new Rope(bob5.body,roof.body,200,0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  //display the roof
  roof.display();

  //display the bobs
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //display the ropes
  rope1.display();
  rope2.display();  
  rope3.display();
  rope4.display();  
  rope5.display();

  drawSprites();

}

function keyPressed() {
	if(keyCode === 32) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-0.5,y:0})
	}
}
