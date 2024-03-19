//for (let i = bullets.length - 1; i >= 0; i--) {
   // Update and display each bullet
  // bullets[i].update();
   //bullets[i].display();
   
   // Check if bullet is offscreen
   //if (bullets[i].isOffscreen()) {
      // Remove bullet from array if it's offscreen
     // bullets.splice(i, 1);
   //}
//}

// Bullet class definition
class Bullet {
    constructor(x, y, dirX, dirY) {
        this.x = x;
        this.y = y;
        this.dirX = dirX;
        this.dirY = dirY;
        this.speed = 5; // Adjust the speed as needed
        this.size = 5; // Adjust the size as needed
    }
  
    // Update method to move the bullet
    update() {
        this.x += this.dirX * this.speed;
        this.y += this.dirY * this.speed;
    }
  
    // Render method to draw the bullet
    render() {
        // Draw the bullet on the canvas
        // You'll need to implement this based on your rendering system
  
    }
  
  }
  
  // In your game loop, update and render the bullets
  function gameLoop() {
    
  
    // Update and render bullets
    for (let i = 0; i < player.bullets.length; i++) {
        let bullet = player.bullets[i];
        bullet.update();
        bullet.render();
  
        // Remove bullets that have gone off-screen
        if (bullet.x < 0 || bullet.x > canvas.width || bullet.y < 0 || bullet.y > canvas.height) {
            player.bullets.splice(i, 1);
            i--; // Decrement i to account for removed element
        }
    }
  
   
  }