export default class Player{
    constructor(name, health, mana){
        this.name = name;
        this.health = health;
        this.mana = mana;
    }

    getName(){
        return this.name;
    }
}