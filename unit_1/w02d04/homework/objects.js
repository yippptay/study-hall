<<<<<<< HEAD
// // Creating Classes
// Hamster
class Hamster {
    constructor(owner, name, price) {
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
    getOwner() {
        return this.owner;
    }
    getName() {
        return this.name;
    }
}

// Person
class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters, bankAccount = 0){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = [];
        this.bankAccount = bankAccount;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log("Hi " + this.name);
    }
    eat() {
        this.weight = this.weight + 1;
        this.mood = this.mood + 1;
    }
    exerceise() {
        this.weight = this.weight - 1;
    }
    ageUp() {
        this.age = this.age + 1;
        this.height = this.height + 1;
        this.weight = this.weight + 1;
        this.mood = this.mood - 1;
        this.bankAccount = this.bankAccount - 10;
    }
    buyHamster(ham) {
        this.hamsters.push({
            owner: ham.getOwner(),
            name: ham.getName(),
            price: ham.getPrice()
        })
        this.bankAccount = this.bankAccount - ham.getPrice();
    }
    pntHam() {
        return this.hamsters;
    }
}
const me = new Person("Taylor", 21, 69, 115, 50, 0, 100);
const hammy = new Hamster("Taylor", "Jim", 25);
console.log(me.getName());
console.log(me.getAge());
console.log(me.getWeight());
me.greet();
me.eat();
me.exerceise();
me.ageUp();
console.log(me.getAge());
console.log(me.getWeight());
me.buyHamster(hammy);
console.log(me.pntHam());

// // Create a Story with your Person class
// Instantiate a new Person named Timmy
const timmy = new Person("Timmy");

// Age Timmy five years
for(let i = 0; i < 4; i++) {
    timmy.ageUp();
}

// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
for(let i = 0; i < 4; i++) {
    timmy.eat();
}

// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
for(let i = 0; i < 4; i++) {
    timmy.exerceise();
}

// Age Timmy 9 years
for(let i = 0; i < 8; i++) {
    timmy.ageUp();
}

// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
const gus = new Hamster("Timmy", "Gus", "5");

// Have Timmy "buy" Gus
timmy.buyHamster(gus);

// Age Timmy 15 years
for(let i = 0; i < 14; i++) {
    timmy.ageUp();
}

// Have Timmy eat twice
for(let i = 0; i < 1; i++) {
    timmy.eat();
}

// Have Timmy exercise twice
for(let i = 0; i < 1; i++) {
    timmy.exerceise();
}
=======
/////////////
// CREATING CLASSES
/////////////

class Hamster {
    constructor (owner, name, price) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}

class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0;
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age 
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`)
    }
    eat(num) {
        return this.weight +=num, this.mood +=num;
    }
    exercise(num) {
        return this.weight -=num
    }
    ageUp(num) {
        return this.age +=num, this.height +=num, this.weight +=num, this.mood -=num, this.bankAccount += 10;
    }
    buyHamster(hamster) {
        return this.hamsters.push(hamster), this.mood +=10, this.bankAccount -= hamster.getPrice();
    }
}

//console.log(pet.getPrice());

const Timmy = new Person ('Timmy')
Timmy.age = 5;
//console.log(Timmy)
Timmy.eat(5);
//console.log(Timmy);
Timmy.exercise(5);
//console.log(Timmy);
Timmy.ageUp(9);
//console.log(Timmy);
const Gus = new Hamster ('', 'Gus')
//console.log(Gus);
Gus.owner = 'Timmy';
//console.log(Gus);
Timmy.buyHamster(Gus);
//console.log(Timmy);
Timmy.ageUp(15);
//console.log(Timmy);
Timmy.eat(2);
//console.log(Timmy);
Timmy.exercise(2);
console.log(Timmy);
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
