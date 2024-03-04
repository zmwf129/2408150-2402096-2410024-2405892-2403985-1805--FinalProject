function Bullet(x, y){
    this.x = x;
    this.y = y;

    this.show = function() {
        noStroke();
        fill(50, 0, 200);
        rect(this.x, this.y, 20, 20);
    }

    this.move = function() {
        this.y = this.y -1;

    }
    
}