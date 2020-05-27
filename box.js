class Box extends BaseClass{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'density':0.5,
            'friction':1.0
        }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  Matter.Body.setAngle(this.body,angle);
  this.box.LoadImage("sprites/box.png");
world.add(world.this.body);

    }
    display(){
this.pos = this.body.position;
this.height = this.body.height;
this.angle = this.body.angle;
rotate(angle);
    }
}