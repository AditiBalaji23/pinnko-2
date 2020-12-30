const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Events = Matter.Events;
var ground;
var groundimg;


var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight = 300;
var score =0;
var count = 0;
var gameState ="start";

function setup() { 
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240, 785, 1200, 30);

  for (var i = 0; i <= width; i = i + 80){
    divisions.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }

  
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }
}

function draw() {
  background("orange");
  text("Score : "+score,20,40);
  textSize(15)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
 

  ground.display();
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
  }
  
  //for (var k = 0; k < particles.length; k++){
    //particles[k].display();
 // }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < divisions.length; i++){
    divisions[i].display();
  }

 if(particle!=null){
   particle.display();
   if(particle.body.position.y>760)
   {
     if(particle.body.position.x<300)
     {
       score=score+500
       particle=null;
       if(count>=5)
       gameState="end";
     }
     else if (particle.body.position.x<600 && particle.body.position.x>301){
       score=score+100;
       (particle=null)
       if(count>=5) 
         gameState="end";
       
    
     }
     else if(particle.body.position.x<900 && particle.body.position.x>601)
     {
       score=score+200
       if ( count>= 5)  gameState ="end";
     }
   }
 }
  
  
}
function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}
