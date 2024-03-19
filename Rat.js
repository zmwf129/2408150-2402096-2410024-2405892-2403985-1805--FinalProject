class Rat {
    constructor(x, y, tileRules) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.tileRules = tileRules;

        //Rat collsion tracking
        this.RatLeft;
        this.RatRight;
        this.RatForward;
        this.RatDownward;

        //Initialising Corner Coordinate Objects
        this.topLeft = {};
        this.topRight = {};
        this.bottomLeft = {};
        this.bottomRight = {};
        
        ////Collision Padding
        this.collisionXPadding = 10;
        this.collisionYPadding = 5;

        // Load rat sprites
        this.ratSprites = {
            left: loadImage("Assets/RatLeft.png"),
            right: loadImage("Assets/RatRight.png"),
            forward: loadImage("Assets/RatForward.png"),
            downward: loadImage("Assets/RatDownward.png")
        };

        // Set initial direction randomly
        let directions = ["left", "right", "forward", "downward"];
        this.direction = random(directions);
        
    }
    
    display() {
   // Display the rat based on its direction
        //imageMode(CENTER);
        switch (this.direction) {
            case "left":
                image(this.ratSprites.left, this.x, this.y, this.tileSize, this.tileSize);
                break;
            case "right":
                image(this.ratSprites.right, this.x, this.y, this.tileSize, this.tileSize);
                break;
            case "forward":
                image(this.ratSprites.forward, this.x, this.y, this.tileSize, this.tileSize);
                break;
            case "downward":
                image(this.ratSprites.downward, this.x, this.y, this.tileSize, this.tileSize);
                break;
            default:
                // Default to forward sprite if direction is unknown
                image(this.ratSprites.forward, this.x, this.y, this.TilesSize, this.tileSize);
                break;
    }
        //imageMode(CORNER)
  }

  debug() {
    //Collision Box
    stroke(255,0,0); // red top
    line(this.topLeft.x, this.topLeft.y, this.topRight.x, this.topRight.y);
    stroke(34,139,34); // green bottom
    line(this.bottomLeft.x, this.bottomLeft.y, this.bottomRight.x, this.bottomRight.y);
    stroke(0,0,255); // blue left
    line(this.topLeft.x, this.topLeft.y, this.bottomLeft.x, this.bottomLeft.y);
    stroke(255,192,203); // pink right
    line(this.topRight.x, this.topRight.y, this.bottomRight.x, this.bottomRight.y);
}

    update() {
        // Updates the collison 
        this.trackCorners();
        this.handleCollisions();

    }

    trackCorners() { //Tracks the corner values of the Rat
        //X and Y Variables
        this.RatLeft = this.xPos + this.collisionXPadding;
        this.RatRight = this.xPos + this.tileSize - 1 - this.collisionXPadding;
        this.RatForward = this.yPos + this.collisionYPadding;
        this.RatDownward = this.yPos + this.tileSize - 1;

        //Corner Coordinate Objects
        this.topLeft = {
            x: this.RatLeft,
            y: this.RatTop
        }
        this.topRight = {
            x: this.RatRight,
            y: this.RatTop
        }
        this.bottomLeft = {
            x: this.RatLeft,
            y: this.RatBottom
        }
        this.bottomRight = {
            x: this.RatRight,
            y: this.RatBottom
            
        }

    }

}