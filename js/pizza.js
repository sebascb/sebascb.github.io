class Pizza {
    constructor(positionX = 0, positionY = 40, speed = 10) {
      this.position = {x: positionX, y: positionY};
      this.speed = speed;
      this.goRightMove();
    
    }

    /*goLeft(){
      this.position.x = this.position.x - this.speed;
    }*/
  
    goRight(){   
      this.position.x = this.position.x + this.speed;
    }

    goRightMove() {
      setInterval(() => {      
       this.goRight();
       if (this.position.x === 800){
         this.position.x = 0;
       }     
      }, 100);  
    }
    
}