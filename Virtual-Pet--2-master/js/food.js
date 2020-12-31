class Food {

    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':2.0
        }

        var lastFed, foodStock;

        this.body = Bodies.circle(x, y, radius, options); 
        this.image = loadImage("Milk.png")
        World.add(world, this.body);

      }


    getFoodStock(){}

    updateFoodStock(){}

    deductFood(){}


      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        //fill("pink");
        image(this.image, 0, 0,50,50);
        pop();                     
        
        // specific task's 5 point is not done   - - - - - - - - - - - - -

      }

}