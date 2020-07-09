import Game from './game';

let app = new Game();

app.initGame();

document.getElementById('attack').addEventListener('click', ()=>{
    app.doDomageToEnemy();
});