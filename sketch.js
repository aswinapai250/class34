const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var rope,fruit,ground;
var fruit_con;
var fruit_con_2;
var fruit_con_3;
var rope3,hat;

var bg_img;
var food;


var button,button2,button3;

var mute_btn;



function preload()
{
  bg_img = loadImage('background_image.png');
 hatimg = loadImage('hat.png')
}

function setup() 
{
  createCanvas(600,700);
  frameRate(80);

 

  engine = Engine.create();
  world = engine.world;

  
  
  
  ground = new Ground(300,height,width,20);
fruit = new Ball(250,10,30)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  image(bg_img, 300, 350, width, height);

  
  imageMode(CENTER);
  
  

  
  Engine.update(engine);
  ground.show();
fruit.display();
  
  
 
  


  
}


function collide(body,sprite,x)
{
  if(body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
               return true; 
            }
            else{
              return false;
            }
         }
}



