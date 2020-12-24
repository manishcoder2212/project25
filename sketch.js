const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;





function setup(){
createCanvas(1200,600)
engine=Engine.create();
world=engine.world
  box1=new Box(600,400); 
  box2=new Box(600,200);
  box3=new Box(800,400);
  box4=new Box (800,200);
  box5=new Box(700,100)
  box6=new Ground (200,310 ,400,350)
 box7=new Ground (250,100,70,100)
  
  pig1=new Pig(700,450,80,50)
  pig2=new Pig(700,250,80,50)
  ground=new Ground(500,500,1200,30)

  log1=new Log (700,300,400);
  log2=new Log (700,150,400)
}

function draw(){
  background("lightblue");
  Engine.update(engine)

box1.display();
box2.display();
log1.display();
box3.display();
box4.display();
box5.display();
log2.display();
ground.display();
pig1.display();
pig2.display();
box6.display();
box7.display();
 
}