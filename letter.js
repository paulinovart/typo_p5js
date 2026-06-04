class Letter{
    constructor(x,y){




this.stars = ["★", "☆", "✦", "✧", "⌑", "✩", "✫", "✬", "✭", "✯", "⚝", "⭑", "⭒","⟡","⊹","⟡","⊹"];

this.letter = random(this.stars);  

        this.f = random(fonts);
        this.size = random(20,60);

        this.x = x;
        this.y = y;

        this.textColor = "#ffffff"

        this.dx = random(-5,5);
        this.dy = random(-5,5);

        this.angle = random(360);
        this.angleV = random (1,3)
    }


    update(){
        this.x += this.dx;
        this.y += this.dy
   

        this.angle += this.angleV;
    }

    display(){
        push();
        translate(this.x, this.y)
        rotate(this.angle)
        fill(225);

        //textFont('Courier New')
      textFont(this.f);
        textSize(this.size);
        text(this.letter, 0, 0);
        pop();
    }



    offScreen(){
        let margin = this.size * 2;
        if (this.x > width + margin || this.x < 0 - margin|| this.y > height + margin || this.y < 0 - margin ) {
            return true;
        } else {
            return false;
        }
    }

}