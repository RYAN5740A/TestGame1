class VerticalProp{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = 100;
        this.height = 100;
        World.add(world, this.body);
        console.log("Vertical Class")
      }
      display(){
       
        push();
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
       
        pop();
      }
}