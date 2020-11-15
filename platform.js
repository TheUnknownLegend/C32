class Platform {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("light_saber.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x ,pos.y);
      imageMode(CENTER);
      image(this.image, 0 , 0 , 500, 500);
      pop();

    }
  };
