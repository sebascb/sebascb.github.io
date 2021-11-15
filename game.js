class Game {
  constructor(options) {
    this.ctx = options.ctx;
    this.chef = options.chef;
    this.pizza = options.pizza;
    this.shoot = options.shoot;
    this.score = 0;
    this.livesElement = undefined;
    this.scoreElement = undefined;
  }

  _clean(){
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, 800, 600);
  }

  _drawChef() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.chef.position.x, this.chef.position.y, 50, 50);
  }

  _drawPizza() {
    this.ctx.fillStyle = 'orange';
    this.ctx.fillRect(this.pizza.position.x, this.pizza.position.y, 50, 50);
    
  }

  _drawShoot() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.shoot.position.x, this.shoot.position.y, 10, 10);
  }

  hay_Colision() {
    
      if (this.shoot.position.x < this.pizza.position.x + this.pizza.position.w &&
          this.shoot.position.x + this.shoot.position.w > this.pizza.position.x &&
          this.shoot.position.y < this.pizza.position.y + this.pizza.position.h &&
          this.shoot.position.h + this.shoot.position.y > this.pizza.position.y) {

          return true;    
      } else {
        return false;
      } 
  };

  _update() {
    console.log('render');
    this._clean();
    this._drawChef(); 
    this._drawPizza();
    this._drawShoot();
    if (this.hay_Colision() === true) {
      gameoverScreen();  
    }

    window.requestAnimationFrame(this._update.bind(this));
  }

  _assignControlToKeys() {
    document.addEventListener('keydown', (event) => {
      switch (event.code) {
        case 'ArrowRight':
          this.chef.goRight();     
          break;
        case 'ArrowLeft':
          this.chef.goLeft();        
          break;
        case 'ArrowUp':
          this.shoot.setPositionX(this.chef.position.x)
          this.shoot.goAttack();
          break;
      }
    });
  }

  
  start() {
    this._assignControlToKeys();
    window.requestAnimationFrame(this._update.bind(this));
  }

}



 




      

    
