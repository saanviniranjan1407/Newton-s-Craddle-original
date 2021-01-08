class Pendulum{
    constructor(x,y,r){
        var options = {
            //isStatic: true,
            restitution: 1,
            friction: 0,
            frictionAir: 0.0,
            slop: 1,
            inertia: Infinity
        }

       // this.body = Bodies.circle(x,y,r,options);
        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.r = r;
        this.x = x;
        this.y = y;

        World.add(world,this.body);
    }

    display(){
        //pos = this.body.position;
        //angle = this.angle;

        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(1);
        stroke("black");
        fill(255,0,254);        
        //ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    
    }
}