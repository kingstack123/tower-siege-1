class BaseClass{
    constructor(x, y, width, height, angle) {
        var options = {
            restitution:0,
            friction:11,
            density:1.0, 
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        fill("white")
        //console.log("angle=" + angle + " pos x=" + this.body.position.x + " pos y=" + this.body.position.y);
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
      }
}