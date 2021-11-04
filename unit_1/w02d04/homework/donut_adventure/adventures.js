//console.log('test');

class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories']
    }
    talkSass() {
        console.log(this.catchPhrases[Math.round(Math.random())])
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('I\'m ready to rumble')
    }
}

const Dougie = new Hero ('Dougie the Donut')
//console.log(Dougie)

class Enemy {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10    
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer']
    }
    talkSmack() {
        console.log(this.catchPhrases[Math.round(Math.random())])
    }
    announceHealth() {
        console.log(this.health)
    }
    fight() {
        console.log('i\'m gonna flatten you like a slice of pepperoni!')
    }
}

const pizzaRat = new Enemy ('Pizza Rat');
//console.log(pizzaRat);


////////////////////
// Walking Down the Street
////////////////////

// 1. 
Dougie.talkSass();
// 2.
pizzaRat.talkSmack();
// 3.
Dougie.announceHealth();
// 4.
pizzaRat.announceHealth();


////////////
//Fight!
///////////

// 1.
Hero.prototype.fight = function() {console.log(this.weapons.sugarShock)}
// console.log(Object.keys(Dougie.weapons))
// Dougie.fight();
// 2.
Hero.prototype.fight = function(enemy) {return enemy}
// console.log(Dougie.fight(pizzaRat));

// 3.
Hero.prototype.fight = function(enemy) {console.log(`${enemy.name} got hit by sugarShock! His health is now at ${enemy.health - this.weapons.sugarShock}!`), enemy.health -= this.weapons.sugarShock}

Enemy.prototype.fight = function(enemy) {console.log(`${enemy.name} got hit by pepperoniStars! His health is now at ${enemy.health - this.weapons.pepperoniStars}!`), enemy.health -= this.weapons.pepperoniStars}



pizzaRat.fight(Dougie);
Dougie.fight(pizzaRat);
pizzaRat.announceHealth();
Dougie.announceHealth();



