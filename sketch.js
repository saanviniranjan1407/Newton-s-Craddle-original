const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Constraint = Matter.Constraint;

const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var constraint1, constraint2, constraint3, constraint4, constraint5;
var canvas,mConstraint;
var roof; 

function setup() {
  canvas = createCanvas(700,500);
 
  engine = Engine.create();
  world = engine.world;  

  // let canvasmouse = Mouse.create(canvas.elt);
  // canvasmouse.pixelRatio = pixelDensity();

  // let options = {
  //   mouse: canvasmouse
  // }

  // mConstraint = MouseConstraint.create(engine, options);
  // World.add(world, mConstraint);

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  bob1 = new Pendulum(230,350,50);
  bob2 = new Pendulum(290,350,50);
  bob3 = new Pendulum(350,350,50);
  bob4 = new Pendulum(410,350,50);
  bob5 = new Pendulum(470,350,50);

  roof = new Roof(350,100,280,25);

  constraint1 = new Sling(bob1.body, {x:230, y:100});
  constraint2 = new Sling(bob2.body, {x:290, y:100});
  constraint3 = new Sling(bob3.body, {x:350, y:100});
  constraint4 = new Sling(bob4.body, {x:410, y:100});
  constraint5 = new Sling(bob5.body, {x:470, y:100});
}

function draw() {
  background(230,230,230);  
  // drawSprites();
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body, {x:mouseX, y:mouseY}); 
}