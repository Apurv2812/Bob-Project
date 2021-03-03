class Bob {

    constructor(x,y,r){
   
  
   var options={
      
    "restitution":0.3,
    "friction":1,
    "density":1.2
   }
   this.body = Bodies.rectangle(this.x,this.y,r,options)
   this.x=x;
   this.y=y;
   this.r=r;
   World.add(world, this.body);
    }
    
   display(){
     
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
   }

    
}


















