var bullet,bulet2,bullet3,bullet4;
var thickness,thickness2,thickness3,thickness4;
var wall,wall2,wall3,wall4; 
var speed,weight;


function setup() {
  createCanvas(1600,400);
 
  thickness = random(20,83)
  thickness2 = random(20,83)
  thickness3= random(20,83)
  thickness4 = random(20,83)
  weight = random(30,52);
  speed = random(223,321);



  bullet = createSprite(50, 50, 20, 20);
  bullet2 = createSprite(50, 150, 20, 20);
  bullet3 = createSprite(50, 250, 20, 20);
  bullet4 = createSprite(50, 350, 20, 20);
  wall= createSprite(1000, 50, thickness,70);
  wall2= createSprite(1000, 150, thickness2, 65);
  wall3= createSprite(1000, 250, thickness3, 65);
  wall4= createSprite(1000, 350, thickness4, 65);


  
  bullet.velocityX = 40;
  bullet2.velocityX = 40;
  bullet3.velocityX = 40;
  bullet4.velocityX = 40;

}

function draw() {

  background(255,255,255);  
 
  bullet.display();
  wall.display();



  if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;

  var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

  if(damage>10)
  {
    
    wall.shapeColor = color(255,0,0);
    bullet.x = 1000;
}

  if(damage<10)
  {
   
    bullet.x = 1000;
    wall.shapeColor = color(0,255,0);
  
  }

//}

if(hasCollided(bullet2,wall2))
{

  bullet2.velocityX = 0;
  
  var damage = (0.5 * weight * speed * speed)/(thickness2 * thickness2 * thickness2);

  if(damage>10)
  {
    bullet2.x = 1000;
    wall2.shapeColor = color(255,0,0);
    
  }

}

  if(damage<=10)
  {

    bullet2.x = 1000;
    wall2.shapeColor = color(0,255,0);
   
  }

  if(hasCollided(bullet3,wall3))
{

  bullet3.velocityX = 0;

  var damage = (0.5 * weight * speed * speed)/(thickness3 * thickness3 * thickness3);

  if(damage>10)
  {
    bullet3.x = 1000;
    
    wall3.shapeColor = color(255,0,0);
    
  }

}

  if(damage<=10)
  {
    bullet3.x = 1000;
    
    wall3.shapeColor = color(0,255,0);
  }

  if(hasCollided(bullet4,wall4))
{
  
  bullet4.velocityX = 0;
  var damage = (0.5 * weight * speed * speed)/(thickness4 * thickness4 * thickness4);

  if(damage>10)
  {
    wall4.shapeColor = color(255,0,0);
    bullet4.x = 1000;
    
  }



  if(damage<=10)
  {

    bullet4.x = 1000;
    wall4.shapeColor = color(0,255,0);
  }
}
}

drawSprites();
}