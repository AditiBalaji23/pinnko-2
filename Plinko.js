class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
            restitution:1
            
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        var angle=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill(18, 6, 77);
        stroke(18, 6, 77);
        ellipse(0, 0, this.r, this.r);
        pop();
      }
}