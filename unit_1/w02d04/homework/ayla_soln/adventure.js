// console.log('hello world');

// CREATE A HERO CLASS ===============
class Hero {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            sprinkleSpray: 5,
            sugarShock: 10
        };
        this.catchPhrases = ['i\'m fresher than day old pizza',
        'you can\'t count my calories'];
    }

    randomInt(array){
        // return Math.floor(Math.random() * this.catchPhrases.length);
        return Math.floor(Math.random() * array.length);
    }

    talkSass(){
        // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`);
    }

    announceHealth(){
        console.log(`${this.name}'s health is ${this.health}`);
    }

    fight(enemy){
        console.log(`${this.name} says: 'i'm ready to rumble'`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);

        // select a random weapon from that array
        const selectedWeapon = weaponOptions[this.randomInt(weaponOptions)]

        // log the selected weapon and it's hitpoints
        console.log(`${this.name} used ${selectedWeapon} for ${this.weapons[selectedWeapon]} hitpoints`);

        // subtract hitpoints from the enemy's health
        enemy.health -= this.weapons[selectedWeapon];

    }
}

// INSTANTIATE OUR HERO: DOUGIE THE DONUT ===============
const dougie = new Hero('Dougie');
// console.log(dougie);
// dougie.talkSass();
// dougie.announceHealth();
// dougie.fight();


// CREATE AN ENEMY CLASS ===============

class Enemy {
    constructor(name){
        this.name = name;
        this.health = 100;
        this.weapons = {
            pepperoniStars: 5,
            cheeseGrease: 10
        };
        this.catchPhrases = ['i\'m youtube famous',
        'i\'m more dangerous than an uncovered sewer'];
    }

    randomInt(array){
        // return Math.floor(Math.random() * this.catchPhrases.length);
        return Math.floor(Math.random() * array.length);
    }

    talkSmack(){
        // console.log(`${this.name} says: ${this.catchPhrases[this.randomInt()]}`);
        console.log(`${this.name} says: ${this.catchPhrases[this.randomInt(this.catchPhrases)]}`);
    }

    announceHealth(){
        console.log(`${this.name}'s health is ${this.health}`);
    }

    fight(enemy){
        console.log(`${this.name} says: i'm gonna flatten you like a slice of pepperoni!`);
        // create an array of the weapon names (keys from this.weapons)
        const weaponOptions = Object.keys(this.weapons);

        // select a random weapon from that array
        const selectedWeapon = weaponOptions[this.randomInt(weaponOptions)]

        // log the selected weapon and it's hitpoints
        console.log(`${this.name} used ${selectedWeapon} for ${this.weapons[selectedWeapon]} hitpoints`);

        // subtract hitpoints from the enemy's health
        enemy.health -= this.weapons[selectedWeapon];

    }
}

// INSTANTIATE OUR ENEMY: PIZZA RAT ===============
const pizzaRat = new Enemy('Pizza Rat');
// console.log(pizzaRat);
// pizzaRat.talkSmack();
// pizzaRat.announceHealth();
// pizzaRat.fight();

// WRITE THE STORY OF DOUGIE AND PIZZA RAT ===============
dougie.talkSass();
pizzaRat.talkSmack();
dougie.announceHealth();
pizzaRat.announceHealth();

// FIGHT ===============
pizzaRat.fight(dougie);
dougie.announceHealth();
dougie.fight(pizzaRat);
pizzaRat.announceHealth();
