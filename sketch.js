
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Dustbinobj;
var Paperobj;
var Groundobj;
var world;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	Dustbinobj = new Dustbin(1200,650);

	Paperobj = new Paper(200,450,40);
	Groundobj = new Ground(width/2,670,width,20);
	var render = Render.create
	({ element: document.body, engine: engine, options: 
		{ width: 1200, height: 700, wireframes: false } });


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Dustbinobj.display();
  Paperobj.display();
  Groundobj.display();
  drawSprites();
 
}
function keyPressed() {
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(Paperobj.body,Paperobj.body.position,{x:85,y:-85});
	}
}



