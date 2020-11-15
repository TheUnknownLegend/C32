class Rope{
    constructor(bodyA,pointB){

        var options = {
            bodyA: bodyA,
            pointB : pointB,
            stiffness:0.1,
            length: 10
        }

        this.bodyA = bodyA;
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,options) 
    }

    attach(body){
        this.rope.bodyA = body;
    }
    
    fly(){
        this.rope.bodyA = null;
    }


display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;

        push();
        strokeWeight(5);
        stroke("black");
        line(pointA.x + 25,pointA.y + 10,pointB.x,pointB.y);
        pop();

    }
}