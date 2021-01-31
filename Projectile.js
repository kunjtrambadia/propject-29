class Projectile{
    constructor(bodyA,bodyB){

        var options = {
             bodyA:bodyB,
             pointB: pointA,
             length:10,
        }
        this.pointB = this.pointB;
        this.body = constraint.create(options);
        World.add(world,this.body); 
  }
display(){
    if (this.body.bodyA) {
        var pointA = this.body.bodyA.position;
        var pointB = this.pointB;
        strokeweight(1);
        stroke("grey");
    }
}
}
