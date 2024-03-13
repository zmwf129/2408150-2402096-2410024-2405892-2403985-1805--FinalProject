// used to organise startup and gameplay screens
//let gameStatus = 'startup screen',

// let bgMusic;

//INITIALISE VARIABLES
let tilemap = [];
let numDown = 15;
let numAcross = 15;
let tileSize = 50;
let textures = [];
let score = 0;
// let scene = 0;

//Bullet variable
let bullet = [];

let graphicMap = [ 
    // I added the different texture numbers to the map to create the environment
//         THIS IS OUR Y AXIS
//   0   1   2   3   4   5   6   7   8   9   10  11  12  13  14
    [89, 54, 70, 56,  4,  4, 11,  4,  4,  11,  4,  4,  5, 11,  4],   // 0
    [4,  4, 11,  4,  4,  4, 11,  4,  91, 19,  31,  4,  5, 11,  4], // 1
    [4,  4, 19, 31,  6,  4, 19, 31,  4,  4,  43, 15, 15, 35,  4], // 2
    [15,31,  4, 11,  5,  4,  5, 11,  4,  4,  11,  90,  4, 11,  4], // 3
    [1, 11,  2, 19, 31, 89,  3, 13,  1,  2,  13,  4,  4, 19, 17], // 4    THIS IS OUR X AXIS
    [1,13,  2,  1, 11,  1,  3, 45, 17, 17,  37,  2,  96,  4,  3], // 5
    [3, 21, 33,  1, 45, 17, 17, 37,  1,  1,  13,  1,  2,  3,  1], // 6
    [3,  1, 45, 17, 37,  1,  1, 13,  3,  1,  13,  1,  2,  3,  1], // 7
    [3,  1, 13,  1,  13,  2, 65, 73, 67,  2, 13,  1,  1, 29, 17], // 8
    [17,17, 25,  2,  13,  2, 78, 61, 83,  2, 21, 41, 17, 25,  1], // 9
    [1,  2,  1,  2,  13,  1, 54, 60, 56,  3,  1, 13,  1,  1,  1], // 10
    [1,  96,  3,  2,  13,  1,  2, 98,  3,  2,  1,13, 99,  1,  1], // 11
    [1,  2,  3,  1, 13,  1,  1,  2,  97,  1,  1, 13,  3,  1,  1], // 12
    [88, 88, 88, 88, 73, 88, 88, 88, 88, 88, 88, 73, 88, 88, 88], // 13
    [61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61]  // 14
]

let tileRules = [ 
// I replaced every 0 with a 1 to stop the player from walking on the acid
//         THIS IS OUR Y AXIS
//   0  1  2  3  4  5  6  7  8  9  10 11 12 13 14
    
    [1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1], // 0
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], // 1
    [1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1], // 2
    [0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1], // 3
    [1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0], // 4    THIS IS OUR X AXIS
    [1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1], // 5
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1], // 6
    [1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1], // 7
    [1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0], // 8
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1], // 9
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1], // 10
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1], // 11
    [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1], // 12
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 13
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]  // 14
]

    //INITIALISE VARIABLES FOR PLAYER
let player;
let playerSpeed = 5;
let playerSize = tileSize;

// LVL 1 RATS
// Had to comment everything to do with the rats other than the rat class becuase it says in the console that rat is not defined
let rats = [];

function preload() {
    // game start screen
    //titleScreen = loadImage("Assets/titlesScreen.jpg");
    //gameWonScreen = loadImage("Assets/gameWonScreen.jpg");

    //MUSIC
    //bgMusic = loadSound('Assets/PUT MUSIC FILE NAME HERE');

    // BACKGROUND
    textures[0] = loadImage("Assets/Acid.png");
    textures[1] = loadImage("Assets/SewerWater1.png");
    textures[2] = loadImage("Assets/SewerWater2.png");
    textures[3] = loadImage("Assets/SewerWater3.png");
    textures[4] = loadImage("Assets/RadioWater1.png");
    textures[5] = loadImage("Assets/RadioWater2.png");
    textures[6] = loadImage("Assets/RadioWater3.png");
    textures[7] = loadImage("Assets/RadioWater4.png");
    textures[8] = loadImage("Assets/RadioWater5.png");
    textures[9] = loadImage("Assets/RadioWater6.png");

    // PIPES
    // Straight/Side
    textures[10] = loadImage("Assets/PipeStraight.png")
    textures[11] = loadImage("Assets/PipeStraightRW1.png");
    textures[12] = loadImage("Assets/PipeStraightRW4.png");
    textures[13] = loadImage("Assets/PipeStraightSW.png");

    textures[14] = loadImage("Assets/PipeSide.png");
    textures[15] = loadImage("Assets/PipeSideRW2.png");
    textures[16] = loadImage("Assets/PipeSideRW3.png");
    textures[17] = loadImage("Assets/PipeSideSW.png");


    // Curved
    textures[18] = loadImage("Assets/PipeRightUp.png")
    textures[19] = loadImage("Assets/PipeRightUpRW2.png");
    textures[20] = loadImage("Assets/PipeRightUpRW8.png");
    textures[21] = loadImage("Assets/PipeRightUpSW.png");

    textures[22] = loadImage("Assets/PipeLeftUp.png");
    textures[23] = loadImage("Assets/PipeLeftUpRW1.png");
    textures[24] = loadImage("Assets/PipeLeftUpRW7.png");
    textures[25] = loadImage("Assets/PipeLeftUpSW.png");

    textures[26] = loadImage("Assets/PipeBottomRight.png")
    textures[27] = loadImage("Assets/PipeBottomRightRW4.png");
    textures[28] = loadImage("Assets/PipeBottomRightRW5.png");
    textures[29] = loadImage("Assets/PipeBottomRightSW.png");

    textures[30] = loadImage("Assets/PipeLeftBottom.png")
    textures[31] = loadImage("Assets/PipeLeftBottomRW3.png")
    textures[32] = loadImage("Assets/PipeLeftBottomRW6.png")
    textures[33] = loadImage("Assets/PipeLeftBottomSW.png")

    //3 Way Pipes
    textures[34] = loadImage("Assets/3wayBLU.png");
    textures[35] = loadImage("Assets/3wayBLURW3.png");
    textures[36] = loadImage("Assets/3wayBLURW6.png");
    textures[37] = loadImage("Assets/3wayBLUSW.png");

    textures[38] = loadImage("Assets/3wayBRL.png");
    textures[39] = loadImage("Assets/3wayBRLRW1.png");
    textures[40] = loadImage("Assets/3wayBRLRW8.png");
    textures[41] = loadImage("Assets/3wayBRLSW.png");

    textures[42] = loadImage("Assets/3wayBRU.png");
    textures[43] = loadImage("Assets/3wayBRURW4.png");
    textures[44] = loadImage("Assets/3wayBRURW5.png");
    textures[45] = loadImage("Assets/3wayBRUSW.png");

    textures[46] = loadImage("Assets/3wayTLR.png");
    textures[47] = loadImage("Assets/3wayTLRRW2.png");
    textures[48] = loadImage("Assets/3wayTLRSW.png");
    textures[49] = loadImage("Assets/3WayTLRRW7.png");

    //PLATFORMS
    textures[50] = loadImage("Assets/PlatformBL.png");
    textures[51] = loadImage("Assets/PlatformBLRW1.png");
    textures[52] = loadImage("Assets/PlatformBLRW2.png");
    textures[53] = loadImage("Assets/PlatformBLRW3.png");
    textures[54] = loadImage("Assets/PlatformBLSW.png");

    textures[55] = loadImage("Assets/PlatformBR.png");
    textures[56] = loadImage("Assets/PlatformBRSW.png");
    textures[57] = loadImage("Assets/PlatformBRRW1.png");
    textures[58] = loadImage("Assets/PlatformBRRW2.png");
    textures[59] = loadImage("Assets/PlatformBRRW3.png");

    textures[60] = loadImage("Assets/PlatformCB.png");

    textures[61] = loadImage("Assets/PlatformF.png");

    textures[62] = loadImage("Assets/PlatformTL.png");
    textures[63] = loadImage("Assets/PlatformTLRW1.png");
    textures[64] = loadImage("Assets/PlatformTLRW2.png");
    textures[65] = loadImage("Assets/PlatformTLSW.png");

    textures[66] = loadImage("Assets/PlatformTR.png");
    textures[67] = loadImage("Assets/PlatformTRSW.png");
    textures[68] = loadImage("Assets/PlatformTRRW2.png");
    textures[69] = loadImage("Assets/PlatformTRRW3.png");

    textures[70] = loadImage("Assets/PlatformCDC.png");
    textures[71] = loadImage("Assets/PlatformCRC.png");
    textures[72] = loadImage("Assets/PlatformCLC.png");
    textures[73] = loadImage("Assets/PlatformCUC.png");

    textures[74] = loadImage("Assets/PlatformLMAcid.png");
    textures[75] = loadImage("Assets/PlatformLMRW1.png");
    textures[76] = loadImage("Assets/PlatformLMRW2.png");
    textures[77] = loadImage("Assets/PlatformLMRW3.png");
    textures[78] = loadImage("Assets/PlatformLMSW.png");

    textures[79] = loadImage("Assets/PlatformRMAcid.png");
    textures[80] = loadImage("Assets/PlatformRMRW1.png");
    textures[81] = loadImage("Assets/PlatformRMRW2.png");
    textures[82] = loadImage("Assets/PlatformRMRW3.png");
    textures[83] = loadImage("Assets/PlatformRMSW.png");

    textures[84] = loadImage("Assets/PlatformTMAcid.png");
    textures[85] = loadImage("Assets/PlatformTMRW1.png");
    textures[86] = loadImage("Assets/PlatformTMRW2.png");
    textures[87] = loadImage("Assets/PlatformTMRW3.png");
    textures[88] = loadImage("Assets/PlatformTMSW.png");

    //Objects In Liquid
    textures[89] = loadImage("Assets/RadioWRubbish1.png");
    textures[90] = loadImage("Assets/RadioWRubbish2.png");
    textures[91] = loadImage("Assets/RadioWRubbish3.png");
    textures[92] = loadImage("Assets/RadioWRubbish4.png");
    textures[93] = loadImage("Assets/RadioWRubbish5.png");
    textures[94] = loadImage("Assets/RadioWRubbish6.png");
    textures[95] = loadImage("Assets/RadioWRubbish7.png");
    textures[96] = loadImage("Assets/SewerWRubbish1.png");
    textures[97] = loadImage("Assets/SewerWRubbish2.png");
    textures[98] = loadImage("Assets/SewerWRubbish3.png");
    textures[99] = loadImage("Assets/SewerWRubbish4.png");
    textures[100] = loadImage("Assets/SewerWterminator.png");
    textures[101] = loadImage("Assets/SewerWGator.png");
    textures[102] = loadImage("Assets/RadioW2Bones1.png");
    textures[103] = loadImage("Assets/RadioW2Bones2.png");
    textures[104] = loadImage("Assets/RadioWBone1.png");
    textures[105] = loadImage("Assets/RadioWBone2.png");
    textures[106] = loadImage("Assets/RadioWBone3.png");
    textures[107] = loadImage("Assets/RadioWBone4.png");

    //bulletsprite
    textures[108] = loadImage("Assets/bulletasset.png")

    ratSprites = {
        ratLnorm: loadImage("Assets/RatLeft.png"),
        ratRnorm: loadImage("Assets/RatRight.png"),
        ratFnorm: loadImage("Assets/RatForward.png"),
        ratDnorm: loadImage("Assets/RatDownward.png")

    }

    playerSprites = {
        Up: loadImage("Assets/SpriteForward.png"),
        Down: loadImage("Assets/SpriteDownward.png"),
        Left: loadImage("Assets/SpriteLeft.png"),
        Right: loadImage("Assets/SpriteRight.png")

    }

}

function setup() {
    createCanvas(750, 750);

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

        for (let i = 0; i < 5; i++) {
            let tileX, tileY;
            do {
              tileX = floor(random(tileSize));
              tileY = floor(random(tileSize));
            } while (tileSize === 1);
            
            let x = tileX * tileSize + tileSize / 2;
            let y = tileY * tileSize + tileSize / 2;
            
            let rat = new Rat(x, y);
            rats.push(rat);
          }

    }

    for (let i = 0; i < 5; i++) {
        let tileX, tileY;
        do {
          tileX = floor(random(tileSize));
          tileY = floor(random(tileSize));
        } while (tileSize === 1);
        
        let x = tileX * tileSize + tileSize / 1;
        let y = tileY * tileSize + tileSize / 1;
        
        let rat = new Rat(x, y);
        rats.push(rat);
      }
    //Tile creation finished

    //Create Player
    player = new Player (playerSprites, 7, 14, tileSize, playerSpeed, tileSize, tileRules);
   
    

    
}

function draw() {

    // STARTUP AND ENDING SCREENS
// if (gameStatus === 'startup screen'){
//     drawStartupScreen();
//     }else if (gameStatus == 'play'){
//         drawGame();
//     } else if (gameStatus == 'won'){
//         drawGameWon();
//     }

    // start screen demo version
// switch(scene){
//     case 0:
//         fill(0);
//         textSize(50);
//         textAlign(CENTER);
//         text("RAT ATTACK!", width/1, height/1);
//         textSize(20);
//         text("click to start", width/1, height/1);
//         if(mouseIsPressed){
//             scene++;
//         }
//         break;
//         case 1:
//             ellipse(width/2, height/2, 30);
//             break;
// }

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


    for (let i = 0; i < rats.length; i++) {
        rats[i].display();
      }

}

// VARIOUS SCREENS
// function drawStartupScreen() {
//     image(titleScreen, 0, 0, 500, 500);
// }

// function drawGameWon() {
//     image(gameWonScreen, 0, 0, 500, 500);
// }




function keyPressed() {

// if(gameStatus == 'startup screen' && keyCode === 13){ // if on startup screen, pressing ENTER will trigger game.
//     gameStatus = 'play';
// }

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
    }

    update() { 
        //Movement Code
        this.trackCorners(); // Check current position of corners each frame
        this.setXDirection(); // Check if the player is pressing a or d, then set dirX
        this.hasPlayerReachedJumpHeight(); // Check is player has reached jump height and should start falling
        this.handleCollisions(); // Chek collisions on x then y axis
        this.move(); // move the damn thing

        //Display and Debug
        this.display();
        this.debug();
        
    }

    rackCorners() { //Tracks the corner values of the player
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
    } 

}

class Rat {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = 20;
    }
    
    display() {
      // Display the enemy
      fill(255, 0, 0);
      ellipse(this.x, this.y, this.size, this.size);
    }
  }

//enemy = new Enemy (ratSprites, 1, 2, tileSize, ratSpeed, tileSize, tileRules);

// class Boss(){}

        
    

    










//class Bullet {
   //bullet(x, y, bulletasset) {
    ///this.x = x;
    //this.y = y;
        //this.r = 8;
     //   this.toDelete = false;
      
       // this.show = function() {
         // noStroke();
          //fill(150, 0, 255);
          //ellipse(this.x, this.y, this.r*2, this.r*2);
       // }
      
        //this.move = function() {
         // this.y = this.y - 5;
       // }
      
     // }



//}
