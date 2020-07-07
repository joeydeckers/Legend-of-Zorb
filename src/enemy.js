export default class enemy{
    constructor(type, health){
        this.type = type;
        this.health = health;
    }

    receiveDamage(damage){
        this.health =  this.health - damage;
        return this.health;
    }
}