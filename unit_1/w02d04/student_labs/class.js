class Pet {
    constructor(owner, name) {
      this.owner = owner;
      this.name = name;
    }
    walk() {
        console.log("walka walka");
    }
}
console.log(new Pet("Taylor", "Hachiko"));
const cat = new Pet("Sohpie", "Plastic Bag");
cat.walk();

class Dog extends Pet {
    constructor(owner, name, price) {
        super(owner, name);
        this.price = price;
    }
    bark() {
        console.log("bark");
    }
    chaseTail() {
        console.log("oh boy oh boy oh boy");
    }
    getPrice() {
        return this.price;
    }
}

const doggo = new Dog("Taylor", "Dust", 20);
doggo.bark()
doggo.chaseTail();
console.log(doggo.getPrice());

class Cat extends Pet {
    constructor(owner, name, price) {
        super(owner, name);
        this.price = price;
    }
    purr() {
        console.log("purrrrr");
    }
    clean() {
        console.log("cleaning");
    }
    getPrice() {
        return this.price;
    }
    walk() {
        console.log("strut strut");
    }
}
const catty = new Cat("Taylor", "Water", 10);
catty.purr();
catty.clean();
console.log(catty.getPrice());
catty.walk();

doggo.price = 400;
console.log(doggo.getPrice());

catty.price = 9999;
console.log(catty.getPrice());


class DeckOfCards {
    constructor() {
        this.deck = [];

        const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        const faces = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

        for (let suit in suits) {
            for (let value in faces) {
                this.deck.push(`${faces[value]} of ${suits[suit]}`);
            }
        }
    }
    // shuffle
    shuffle() {
        const { deck } = this;
        let m = deck.length, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            [deck[m], deck[i]] = [deck[i], deck[m]];
        }
        return this;
    }
    // deal top card
    deal() {
        return this.deck.pop();
    }
}

const deck = new DeckOfCards();
deck.shuffle();
console.log(deck.deal());