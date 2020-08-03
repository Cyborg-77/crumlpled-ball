
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj= new dustbin(1200,400);
	paperObject= new Paper(50,470,100);
	groundObject= new Ground(width/2,670,width,20);
	//Create a Ground
	



	Engine.run(engine);
	
}




function draw() {
  rectMode(CENTER);
  background(0);

 
 
  paperObject.display();
  dustbinObj.display();
  groundObject.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:240,y:-300});
    
  	}
}





