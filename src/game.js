import Player from './player'
import Enemy from './enemy'

let playerInstance = null;
let enemyInstance = null;


export default class Game{

    initGame(playerName){
        this.createEnemy();
        //temp
        playerName = 'Thexi';
        this.createPlayer(playerName);
        document.getElementById('playerhealth').style.width = String(playerInstance.health)+'%';
        document.getElementById('enemyhealth').style.width = String(enemyInstance.health)+'%';
    }

    createEnemy(){
        let monsters = ['Goblin', 'Orc', 'Troll'];

        let enemy = new Enemy(monsters[Math.floor(Math.random() * 2)], 100);
        if (enemyInstance) return enemyInstance;
        enemyInstance = enemy;
        return enemyInstance;
    }

    createPlayer(name){
        let player = new Player(name, 100, 100);
        if (playerInstance) return playerInstance;
        document.getElementById('name').innerHTML = player.name;
        playerInstance = player;
        return playerInstance;
    }

    doDomageToEnemy(){
        let playerDamage = playerInstance.doDamgeToEnemy();
        enemyInstance.receiveDamage(playerDamage);
        if(playerInstance.health <= 0){
            console.log("Player dead!");
        }else{
            this.doDomageToPlayer();
        }
    }

    doDomageToPlayer(){
        let enemyDamage = enemyInstance.doDamgeToPlayer();
        if(playerInstance.health <= 0){
            console.log("Player dead!");
        }
        playerInstance.receiveDamage(enemyDamage);
        console.log('Damage done!');
    }
}