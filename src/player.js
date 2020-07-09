export default class Player{
    constructor(name, health, mana){
        this.name = name;
        this.health = health;
        this.mana = mana;
    }

    doDamgeToEnemy(){
        let damage = Math.floor(Math.random() * 20);
        return damage;
    }

    receiveDamage(damage){
        this.health =  this.health - damage;
        return this.health;
    }
}