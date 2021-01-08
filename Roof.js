class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            restitution: 1,
        }

        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}