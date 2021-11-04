class Pet {
    constructor (owner, name) {
        this.owner = owner;
        this.name = name;
    }
    walk () {
        console.log('walka walka')
    }
}

const firstPet = new Pet ('Sharon', 'Dalgoo');
console.log(firstPet);
firstPet.walk();

class Dog extends Pet {
    constructor(owner, name) {
        super(owner, name);
        this.price = 20;
    }
    bark () {
        console.log('bark')
    }
    chaseTail() {
        console.log('oh boy oh boy oh boy')
    }
    getPrice() {
        return this.price
    }
}

const terrier = new Dog('Boston University', 'Rhett');
console.log(terrier);
terrier.bark();
terrier.chaseTail();
console.log(terrier.getPrice());

class Cat extends Pet {
    constructor (owner, name) {
        super(owner, name);
        this.price = 10;
    }
    purr () {
        console.log('purrrrrrr')
    }
    clean() {
        console.log('cleaning')
    }
    getPrice() {
        return this.price
    }
    walk() {
        console.log('strut strut')
    }
}

const garfield = new Cat ('Bob', 'Garfield');
console.log(garfield);
garfield.purr();
garfield.clean();
console.log(garfield.getPrice());
garfield.walk();

Dog.prototype.bark = function () {console.log('bark bark bark')};
terrier.bark();
Cat.prototype.walk = function () {console.log('I do not walk')};
garfield.walk();

/////////////
//Stretch
////////////

let deckOfCards = [];
const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const faces = ['Ace', 'King', 'Queen', 'Jack', 10, 9, 8, 7, 6, 5, 4, 3, 2, 11];
class Cards {
    constructor(value, face, suit, faceUp = true) {
        this.value = value;
        this.face = face;
        this.suit = suit;
        this.faceUp = faceUp;
    }
}

class Spades extends Cards {
    constructor (value, face, suit, faceUp) {
        super(value, face, suit, faceUp)
    }
}

deckOfCards(new Cards())