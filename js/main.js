window.addEventListener('load', () => {

    function startGame() {
        const canvas = document.querySelector('#pizza');
        const ctx = canvas.getContext('2d');
        const game = new Game({
            ctx: ctx,
            chef: new Chef(),
            pizza: new Pizza(),
            shoot: new Shoot(),
        })

        game.start()
    }

    
    const playButton = document.querySelector('#play')
    playButton.addEventListener('click', function(){
        const introScreen = document.querySelector('#intro');
        introScreen.classList.add('hidden')
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.remove('hidden')
        
        const startButton = document.querySelector('#start')
        startButton.addEventListener('click', () => {
            startGame()
        })

    })

    const winButton = document.querySelector('#win-button')
    winButton.addEventListener('click', function(){
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.add('hidden')
        const winScreen = document.querySelector('#win');
        winScreen.classList.remove('hidden')
        
    })

    const gameOverButton = document.querySelector('#gameOver-button')
    gameOverButton.addEventListener('click', function(){
        const gameScreen = document.querySelector('#game');
        gameScreen.classList.add('hidden')
        const gameoverScreen = document.querySelector('#gameover');
        gameoverScreen.classList.remove('hidden')
    })
  
});
