const maze = require('./maze.js')
class Character {
    constructor(name, age, eyes, hair, lovesCats=true, lovesDogs=true) {
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs;
    }
    // greeting
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter + '!');
    }
    //classGreeting
    classyGreeting (otherClassyCharacter) {
        console.log('Howdy ' + otherClassyCharacter.name + '!');
    }
    //setHair
    setHair (hairColor) {
        this.hair = hairColor;
    }
    //smite
    smite () {
        console.log('i smited thee.');
    }
}
const hobbit = new Character('Mr Baggins', 113, 'brown', 'black')
console.log(hobbit);

class Hobbit extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ["thievery", "speed", "willpower"]
    }
    steal() {
        console.log('lets get away')
    }
    greet (otherCharacter) {
        console.log(`hello ${otherCharacter.name}`)
    }
    smite () {
        super.smite() 
        this.steal()
    }
}

const frodo = new Hobbit ('Frodo', 30, 'brown', 'black');
const bilbo = new Hobbit ('Bilbo', 113, 'brown', 'black');

// frodo.greet(bilbo)
// frodo.smite();
console.log(frodo);

class Men extends Character {
    constructor(name, age, eyes, hair) {
        super(name, age, eyes, hair);
        this.skills = ['pranking', 'flirting', 'running'];
        this.solve = ''
    }
    runFromMichael() {
        console.log(`I have to make a sales call`)
    }
    greet(otherCharacter) {
        console.log(`Good morning ${otherCharacter.name}`)
    }
}

// const jim = new Men ('Jim', 29, 'brown', 'brown');
// const michael = new Men('Michael Scott', 40, 'brown', 'black');
// const dwight = new Men ('Dwight', 35, 'brown', 'brown', false);
// console.log(dwight);

// const level1 = maze.level0()
// const solveTemp = []
// solveTemp.push(level1.pop())

console.log(maze.level0())
console.log(maze.level1());

const levelOneArray = maze.level1();
levelOneArray.push(level1.pop());

console.log(maze.level2().val)