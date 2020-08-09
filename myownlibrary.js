
  function collide(bullet,wall) {
    
      if (bullet.x - wall.x < bullet.width/2  + wall.width/2 &&
        wall.x - bullet.x < bullet.width/2 + wall.width/2 &&
      bullet.y - wall.y < bullet.height/2  + wall.height/2 &&
      wall.y - bullet.y < bullet.height/2 + wall.height/2 ) {
      return  true;
    
    }
    
    else {
      return false;
    }
  
  }

  function hasCollided(Lbullet, Lwall)
{
  bulletRighteEdge = Lbullet.x + Lwall.width;
  wallLeftEdge = Lwall.x;
  
  if(bulletRighteEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}