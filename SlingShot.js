class Slingshot {
    constructor (bodyA,pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
       
        
    }
    attach(body){
        this.slingshot.bodyA = body;
    }

    fly() {
        this.slingshot.bodyA = null;
    }
    display() {
        if(this.slingshot.bodyA!==null){
            var pointA = this.slingshot.bodyA.position;
            var pointB = this.pointB;
            push()
            strokeWeight(4);
            fill("grey");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop()
        }         
    }
}


    
