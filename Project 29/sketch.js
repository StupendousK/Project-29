const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var slingshot1;

var polygon;

var ground1;

var block1, block2, block3, block4, block5, block6, block7, block8, block9;

var stand;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;


  polygon = new Polygon(50, 200);

  ground1 = new Ground(400, 400, 800, 20);

  stand = new Ground(390, 266, 200, 15);

  // level two
  block1 = new Block(330, 235, 30, 40);
  block2 = new Block(360, 235, 30, 40);
  block3 = new Block(390, 235, 30, 40);
  block4 = new Block(420, 235, 30, 40);
  block5 = new Block(450, 235, 30, 40);
  //level three
  block6 = new Block(360, 195, 30, 40);
  block7 = new Block(390, 195, 30, 40);
  block8 = new Block(420, 195, 30, 40);
  //top
  block9 = new Block(390, 155, 30, 40);

  slingshot1 = new SlingShot(polygon.body, {x:100, y:100});

}

function draw() {
  background(0);  
  Engine.update(engine);

  polygon.display();
  
  ground1.display();

  stand.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();

  slingshot1.display();

  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}