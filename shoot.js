class Shoot {
    constructor(positionX = 395, positionY = 550, speed = 10) {
      this.position = {x: positionX, y: positionY};
      this.speed = speed;
    }  

    move() {
      this.position.y = this.position.y - this.speed;
    }

    setPositionX(posx) {
        this.position.x = posx;
    }

    goAttack(){
        const id = setInterval(() => {      
            if (this.position.y <= 0) {   
                this.position.y = 610;
                clearInterval(id)
            }
            this.move();   
        }, 100);  
    }

}