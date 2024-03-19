class Player {

    constructor(sprites, startAcross, startDown, size, speed, tileSize, tileRules) {
        //Attach sprite to key in object
        this.sprites = sprites;

        //set current sprite, we'll initialise it down for now
        this.currentSprite = this.sprites.Down;

        //Store starting tile info. Later, we will use these to store the current tile the player is on.
        this.across = startAcross;
        this.down = startDown;
        
        //convert tile coordinates into pixel coordinates
        this.xPos = this.across * tileSize;
        this.yPos = this.down * tileSize;

        //storing size and speed
        this.size = size;
        this.speed = speed;

        //Check rules/collisions for the tile the player wants to move to (target Tile)
        this.tileRules = tileRules;
        this.tileSize = tileSize;

        //some extra properties that we will use to control player movement below
        //what direction the player will travel in
        this.dirX = 0;
        this.dirY = 0;
        
        //whether the player is currently moving to another tile
        this.isMoving = false;
        
        //the x/y position of the tile the player is moving to (the target)
        this.tx = this.xPos; //set these to the initial player pos
        this.ty = this.yPos;

        //Player collsion tracking
        this.playerLeft;
        this.playerRight;
        this.playerTop;
        this.playerBottom;

        //Initialising Corner Coordinate Objects
        this.topLeft = {};
        this.topRight = {};
        this.bottomLeft = {};
        this.bottomRight = {};
        
        ////Collision Padding
        this.collisionXPadding = 10;
        this.collisionYPadding = 5;

        this.bullets = [];

  }

  handleCollisions() {
          
    // Iterate through all rats
    for (let i = 0; i < rats.length; i++) {
        let rat = rats[i];

        // Check for collision between player and rat
        if (
            this.bottomLeft.x < rat.bottomRight.x &&
            this.bottomRight.x > rat.bottomLeft.x &&
            this.bottomLeft.y < rat.topLeft.y &&
            this.bottomRight.y > rat.topLeft.y
        ) {
            // Collision detected, prevent player from moving to rat's tile
            this.isMoving = false;
            this.dirX = 0;
            this.dirY = 0;

            // Move player back to previous position
            this.xPos = this.previousXPos;
            this.yPos = this.previousYPos;
          }

    }

}

    update() { 
        //Movement Code
        this.trackCorners(); // Check current position of corners each frame
        this.handleCollisions(); // Chek collisions on x then y axis
        this.move(); // move the damn thing
        this.handleCollisions();

        //Display and Debug
        this.display();
        this.debug();
        
    }

    trackCorners() { //Tracks the corner values of the player
        //X and Y Variables
        this.playerLeft = this.xPos + this.collisionXPadding;
        this.playerRight = this.xPos + this.tileSize - 1 - this.collisionXPadding;
        this.playerTop = this.yPos + this.collisionYPadding;
        this.playerBottom = this.yPos + this.tileSize - 1;

        //Corner Coordinate Objects
        this.topLeft = {
            x: this.playerLeft,
            y: this.playerTop
        }
        this.topRight = {
            x: this.playerRight,
            y: this.playerTop
        }
        this.bottomLeft = {
            x: this.playerLeft,
            y: this.playerBottom
        }
        this.bottomRight = {
            x: this.playerRight,
            y: this.playerBottom

        }

    }

    setDirection() {

        //Check if we're NOT currently moving...
        if (!this.isMoving) {
            //if not, then let's set the direction the player is travelling!

            //UP
            if (key === "w") {
                this.dirX = 0;
                this.dirY = -1; //direction is up!
                this.currentSprite = this.sprites.Up
            }

            //DOWN
            if (key === "s") {
                this.dirX = 0;
                this.dirY = 1; //direction is down!
                this.currentSprite = this.sprites.Down
            }

            //LEFT
            if (key === "a") {
                this.dirX = -1; //direction is left!
                this.dirY = 0; 
                this.currentSprite = this.sprites.Left
            }

            //RIGHT
            if (key === "d") {
                this.dirX = 1; //direction is right!
                this.dirY = 0;
                this.currentSprite = this.sprites.Right
            }

            //With the direction set, we can now move to the next code block to check if we can move!
            this.checkTargetTile();

      }

   }

    //This checks what tile the player wants to move to and if
    //the player is allowed to move there
    checkTargetTile() {
        //First, get what tile the player is currently on
        this.across = Math.floor(this.xPos / this.tileSize);
        this.down = Math.floor(this.yPos / this.tileSize);

        //Calculate the coordinates of the target tile
        let nextTileHorizontal = this.across + this.dirX;
        let nextTileVertical = this.down + this.dirY;

        //check is that tile is in bounds of the map
        // remember: && means AND (i.e. below is asking if ALL conditions are true)
        if (
            
            nextTileHorizontal >= 0 && //top of map
            nextTileHorizontal < numAcross && //bottom of map
            nextTileVertical >= 0 && //left edge of map
            nextTileVertical < numDown //right edge of map

        ) {

            //if it is in bounds, have we set it as moveable in our ruleMap:
            if (this.tileRules[nextTileVertical][nextTileHorizontal] != 1) { // remember we have to swap these!
                //if the target tile is walkable, then...
                //...calculate the precise x and y coordinate of the target tile...
                this.tx = nextTileHorizontal * this.tileSize;
                this.ty = nextTileVertical * this.tileSize;
                
                //Because the player is ready to move there, we can set isMoving to true!
                this.isMoving = true;

            }

        }

    }

    move() {
        //This is in our draw loop, so called move() is called every frame BUT...
        if (this.isMoving) {
            //this code block will only activate when this.isMoving = true. Otherwise, nothing happens.
            //So first, start by moving in direction set by setDirection()
            this.xPos += this.speed * this.dirX;
            this.yPos += this.speed * this.dirY;

            //Now check if player has reached targetX
            if (this.xPos === this.tx && this.yPos === this.ty) {
                //if there, stop moving and reset our variables
                this.isMoving = false;
                this.dirX = 0;
                this.dirY = 0;

            }

        }

    }

    shootBullet() {
      // Create a new bullet object
      let bullet = new Bullet(this.xPos + this.size / 2, this.yPos + this.size / 2, this.dirX, this.dirY);
      
      // Add the bullet to the array
      this.bullets.push(bullet);
  }

    display() {
        imageMode(CORNER);
        image(this.currentSprite, this.xPos, this.yPos, this.size, this.size);

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

}