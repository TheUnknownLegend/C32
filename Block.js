class Block{
    constructor( x , y,img ){

        var options={
            'restitution' : 0.7,
            'friction' : 0.9,
            'density' : 0.8
        }
        this.body = Bodies.rectangle(x, y, 50 , 70, options);
        this.width = width;
        this.height = height;
        this.image = loadImage(img);
        this.Visiblity = 255;

        World.add(world, this.body)
    }

    display(){
 console.log(this.body.speed);
        if(this.body.speed < 10 ){
            var pos =this.body.position;
            var angle = this.body.angle
            push();
            translate(pos.x ,pos.y);
            imageMode(CENTER);
            image(this.image, 0 , 0 , 50 , 70);
            pop();
           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             pop();
           }
       
          
    }

    score(){
        if (this.Visiblity < 0 && this.Visiblity > -105){
          score++;
        }
    }
    

}