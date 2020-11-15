
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roseImg = "rose.jpg";
var goldImg = "gold.jpg";
var blueImg = "blue.jpg";
var greyImg = "grey.jpg";

var strings;
var stones;
var score = 0;

var launch;
var song;

var stackA1 = [];
var stackA2 = [];
var stackA3 = [];
var stackA4 = [];

var stackB1 = [];
var stackB2 = [];
var stackB3 = [];
var stackB4 = [];

var gameState = 0;
var onSling = 0;
var launched = 1;

var backgroundImg;

function preload()
{
  backgroundImg = loadImage("First_Order.png");
  
  song = loadSound("Imperial_March.mp3")

  launch = loadSound("shooting.mp3");
}

function setup() {
	createCanvas(1800, 1000);


	engine = Engine.create();
	world = engine.world;

    //Layer 1
    platform1 = new Platform(670,height-100,375,15);
    for(var i=525; i <875 ; i=i+50){
      stackA1.push(new Block(i,800,blueImg));
    }
  
    for(var i=575; i <825 ; i=i+50){
      stackA2.push(new Block(i,700,roseImg));
    }
  
    for(var i=625; i <775 ; i=i+50){
      stackA3.push(new Block(i,600,greyImg));
    }

    for(var i=675; i <725 ; i=i+50){
      stackA4.push(new Block(i,500,goldImg));
    }

      //Layer 2
  platform2 = new Platform(width/2+400,height-400,375,15);
  for(var i=1150; i <1500 ; i=i+50){
    stackB1.push(new Block(i,400,blueImg));
  }

  for(var i=1200; i <1450 ; i=i+50){
    stackB2.push(new Block(i,300,goldImg));
  }

  for(var i=1250; i <1400 ; i=i+50){
    stackB3.push(new Block(i,200,roseImg));
  }

  for(var i=1300; i <1350 ; i=i+50){
    stackB4.push(new Block(i,100,greyImg));
  }

  stones = new stone(160,100,50);

  strings = new Rope(stones.body,{x:150,y:500})

  Engine.run(engine);
  
  song.play();
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  
  drawSprites();

  platform1.display();

  for(var i=0; i<stackA1.length;i++){
    stackA1[i].display();
  }

  for(var i=0; i<stackA2.length;i++){
    stackA2[i].display();
  }

  for(var i=0; i<stackA3.length;i++){
    stackA3[i].display();
  }

  for(var i=0; i<stackA4.length;i++){
    stackA4[i].display();
  }

  platform2.display();
  for(var i=0; i<stackB1.length;i++){
    stackB1[i].display();
  }

  for(var i=0; i<stackB2.length;i++){
    stackB2[i].display();
  }

  for(var i=0; i<stackB3.length;i++){
    stackB3[i].display();
  }

  for(var i=0; i<stackB4.length;i++){
    stackB4[i].display();
  }

stackA1.score();
stackA2.score();
stackA3.score();
stackA4.score();
stackB1.score();
stackB2.score();
stackB3.score();
stackB4.score();

  stones.display();

  textSize(22);
  fill("yellow");
  text(mouseX + ", " + mouseY , mouseX,mouseY);

  textSize(32);
  fill("Orange");
  text("Score : " + score, 50 ,50)

}



function mouseDragged(){
  if (mouseX >=0 && mouseX < 200 && gameState!=="launched"){
      Matter.Body.setPosition(stones.body, {x: mouseX , y: mouseY});


  }
}


function mouseReleased(){
  strings.fly();
  gameState = "launched";

  launch.play();
}

function keyPressed(){
  if(keyCode === 32 && gameState === "launched"){

      Matter.Body.setPosition(stones.body,{x:200,y:50})

      strings.attach(stones.body);

     gameState = "onSling";
  }
  
}