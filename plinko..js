class Plinko{
    constructor(x,y){
        this.body=Bodies.circle(x,y,8,{isStatic:true});
        World.add(world,this.body);
    }
    display(){
        push();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,8,8);
        pop();
    }
}