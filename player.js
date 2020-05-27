class Player extends BaseClass{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'density':0.5,
            'friction':1.0
        }
        this.image = LoadImage("sprites/player1.png");
  this.width = width;
  this.height = height;
  Matter.Body.setAngle(this.body,angle);
  this.Player.LoadImage("sprites/unnamed.jpg.png");
world.add(world.this.body);

    }
    display(){
this.pos = this.body.position;
this.height = this.body.height;
this.angle = this.body.angle;
rotate(angle);
    }
}

