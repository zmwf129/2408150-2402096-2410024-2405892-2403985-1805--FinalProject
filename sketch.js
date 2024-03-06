//INITIALISE VARIABLES
let tilemap = [];
let numDown = 10;
let numAcross = 10;
let tileSize = 50;
let textures = [];
let score = 0;

//Bullet variable
let bullet = [];

let graphicMap = [ 
    // I added the different texture numbers to the map to create the environment
//         THIS IS OUR Y AXIS
//   0  1  2  3  4  5  6  7  8  9 
    [11, 17, 12, 0, 1, 0, 0, 0, 0, 1], // 0
    [0, 1, 0, 0, 2, 9, 0, 4, 10, 8], // 1
    [10, 8, 9, 0, 0, 1, 0, 1, 0, 0], // 2
    [0, 0, 1, 0, 0, 7, 10, 5, 0, 0], // 3
    [0, 0, 1, 0, 0, 1, 0, 2, 9, 0], // 4    THIS IS OUR X AXIS
    [0, 0, 2, 9, 0, 1, 0, 0, 1, 0], // 5
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0], // 6
    [0, 0, 0, 7, 10, 5, 0, 0, 1, 0], // 7
    [4, 10, 10, 3, 0, 1, 0, 10, 8, 10], // 8
    [1, 0, 0, 0, 15, 20, 16, 0, 0, 0]  // 9
]

let tileRules = [ 
    // I replaced every 0 with a 1 to stop the player from walking on the acid
    //         THIS IS OUR Y AXIS
    //   0  1  2  3  4  5  6  7  8  9 
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 0], // 0
    [1, 0, 1, 1, 0, 0, 1, 0, 0, 0], // 1
    [0, 0, 0, 1, 1, 0, 1, 0, 1, 1], // 2
    [1, 1, 0, 1, 1, 0, 0, 0, 1, 1], // 3
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 1], // 4    THIS IS OUR X AXIS
    [1, 1, 0, 0, 1, 0, 1, 1, 0, 1], // 5
    [1, 1, 1, 0, 1, 0, 1, 1, 0, 1], // 6
    [1, 1, 1, 0, 0, 0, 1, 1, 0, 1], // 7
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0], // 8
    [0, 1, 1, 1, 0, 0, 0, 1, 1, 1]
    ]

    //INITIALISE VARIABLES FOR PLAYER
let player;
let playerSprite = {}; //creating an empty playerSprite game object
let playerSpeed = 5;
let playerSize = tileSize;

// LVL 1 RATS
// Had to comment everything to do with the rats other than the rat class becuase it says in the console that rat is not defined
//let rat;
//let ratSprite = {};
//let ratSpeed = 3;
//let ratSize = tileSize;

function preload() {

    // BACKGROUND
    textures[0] = loadImage("Acid.png");

    // PIPES
    textures[1] = loadImage("Assets/PipeStraight.png")
    textures[2] = loadImage("Assets/PipeRightUp.png")
    textures[3] = loadImage("Assets/PipeLeftUp.png");
    textures[4] = loadImage("Assets/PipeBottomRight.png")
    textures[5] = loadImage("Assets/3wayBLU.png");
    textures[6] = loadImage("Assets/3wayBRL.png");
    textures[7] = loadImage("Assets/3wayBRU.png");
    textures[8] = loadImage("Assets/3wayTLR.png");
    textures[9] = loadImage("Assets/PipeLeft.png");
    textures[10] = loadImage("Assets/PipeSide.png");

    //PLATFORMS
    textures[11] = loadImage("Assets/PlatformBL.png");
    textures[12] = loadImage("Assets/PlatformBR.png");
    textures[13] = loadImage("Assets/PlatformCB.png");
    textures[14] = loadImage("Assets/PlatformF.png");
    textures[15] = loadImage("Assets/PlatformTL.png");
    textures[16] = loadImage("Assets/PlatformTR.png");
    textures[17] = loadImage("Assets/PlatformCDC.png");
    textures[18] = loadImage("Assets/PlatformCRC.png");
    textures[19] = loadImage("Assets/PlatformCLC.png");
    textures[20] = loadImage("Assets/PlatformCUC.png");

   
    //ratSprite = loadImage("RatLeft.png");

    ratSprites = {
        ratLnorm: loadImage("Assets/RatLeft.png"),
        ratRnorm: loadImage("Assets/RatRight.png"),
        ratFnorm: loadImage("Assets/RatForward.png"),
        ratDnorm: loadImage("Assets/RatDownward.png")

    }

    //Our player
    playerSprite = loadImage("Assets/SpriteForward.png")

    playerSprites = {
        Up: loadImage("Assets/SpriteForward.png"),
        Down: loadImage("Assets/SpriteDownward.png"),
        Left: loadImage("Assets/SpriteLeft.png"),
        Right: loadImage("Assets/SpriteRight.png")

    }

}

function setup() {
    createCanvas(500, 500);

    let tileID = 0; // sets our tileID for the first tile we'll make

    //Creates all tiles
    for (let across = 0; across < numAcross; across++) {
        tilemap[across] = [];

        for (let down = 0; down < numDown; down++) {
            //Setting Texture For Tile
            let textureNum = graphicMap[down][across];
    
            //Initialising Tile
            tilemap[across][down] = new Tile(textures[textureNum], across, down, tileSize, tileID); // THIS LINE CREATES OUR NEW TILE!

            tileID++;

        }

    }
    //Tile creation finished

    //Create Player
    player = new Player (playerSprites, 2, 3, tileSize, playerSpeed, tileSize, tileRules);

    //Creating the bullet
    bullet = new Bullet (width/2, height/2);

    //Creating the rats
    //rat = new Rat (ratSprite, 1, 2, tileSize, ratSpeed, tileSize, tileRules);

}

function draw() {
    background(0);
    
    
    // Loops through all tiles each time draw() is called
    for (let across = 0; across < numAcross; across++) {
        for (let down = 0; down < numDown; down++) {
            tilemap[across][down].display(); // runs display() method for each tile!
            tilemap[across][down].debug(); // runs debug() method for each tile!

        }

    }

    for (var i = 0; i < bullet.length; i++) {
        bullet[i].show();
        bullet[i].move();
        }

    // Finishes looping through all tiles within each draw() loop
    textAlign(CENTER, TOP);
    textSize(25);
    fill(0);
    strokeWeight(4);
    stroke(255);
    text('score: ' + score, 450, 10);

    player.display();
    player.move();

    //showing the rats
    //rat.display();
}

function keyPressed() {
    player.setDirection();

    if (key === '  ')   {
       var bullet = new Bullet(player.x, height);
       bullet.push(bullet);
       console.log("shot");
    }

}

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

    display() {
        imageMode(CORNER);
        image(this.currentSprite, this.xPos, this.yPos, this.size, this.size);

    }

}

class Tile {
    constructor(texture, across, down, tileSize, tileID) {
        this.texture = texture;
        this.across = across; // new values!
        this.down = down; // new values!
        this.xPos = across * tileSize; // pixel value generated from across
        this.yPos = down * tileSize; // pixel value generated from down
        this.tileSize = tileSize;
        this.tileID = tileID;

    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }

    debug() {
        //TILE
        noStroke();
        noFill();
        rect(this.xPos, this.yPos, this.tileSize, this.tileSize);

        //LABEL
        noStroke();
        noFill();
        textAlign(LEFT, TOP);
        
        text(this.tileID, this.xPos, this.yPos);
    } // I've hidden the DEBUG method but this is where the code for it goes!

}

class EnemyLVL1{
    constructor(sprites, startAcross, startDown, size, ratSpeed, tileSize, tileRules) {
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
        this.ratSpeed = ratSpeed;

        //Check rules/collisions for the tile the player wants to move to (target Tile)
        this.tileRules = tileRules;
        this.tileSize = tileSize;
        }
    


    // Need to edit it for just rats and not the player
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

            }

        }

    }

    display() {
        //Displays the texture of instance of NPC class
        noStroke();
        image(this.texture, this.xPos, this.yPos, this.tileSize, this.tileSize)
    }
    
}



//enemy = new Enemy (ratSprites, 1, 2, tileSize, ratSpeed, tileSize, tileRules);

// class Boss(){}