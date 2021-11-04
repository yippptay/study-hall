<<<<<<< HEAD
const player = {
    name: 'Jake the great',
    health: 1000,
    power: 1000,
    stamina: 1000
  }
  
  const bigBadBoss = {
    name: 'Alex the Merceless',
    health: 1000000000000000000,
    power: 10000000000000000,
    stamina: Infinity
  }

  const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newEnemy
  }
  const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
      name: nameIs,
      health: healthIs,
      power: powerIs,
      stamina: staminaIs
    }
    return newPlayer
  }
const Flumples = createPlayer('Flumples', 3, 2, 1);
console.log(Flumples);

class Character {
    constructor(nameIs, healthIs, powerIs, staminaIs){
     this.name = nameIs;
     this.health = healthIs;
     this.power = powerIs;
     this.stamina = staminaIs;
    }
    greet () {
      console.log('hi!')
    }
    inspectStatus() {
        console.log(`${this.health}`)
    }
}
  // console.log(typeof Character)
  // console.log(JamesTheBold)
  const DanaTheMagnificent = new Character('DanaTheMagnificent', 9000, 9000, Infinity)
  // console.log(DanaTheMagnificent)
  // console.log(DanaTheMagnificent instanceof Character)
  // console.log(JamesTheBold instanceof Character)
  const RyanTheGreat = new Character('Ryan The Great', 5000, 10000, Infinity)
  DanaTheMagnificent.greet()
  RyanTheGreat.greet()
  Character.prototype.bye = function  (){ console.log(`bye from ${this.name}`)}
  RyanTheGreat.bye()
  DanaTheMagnificent.bye()
  Character.prototype.value = "We are all intrepid learners of NOVA"
  console.log(RyanTheGreat.value)
=======
// const player = {
//     name: 'Jake the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
//   }
  
// const bigBadBoss = {
//     name: 'Alex the Merceless',
//     health: 1000000000000000000,
//     power: 10000000000000000,
//     stamina: Infinity
// }

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//       name: nameIs,
//       health: healthIs,
//       power: powerIs,
//       stamina: staminaIs
//     }
//     return newPlayer
// }

// const CaesartheGreat = createPlayer('CaesartheGreat', 1000, 1000, Infinity);
// //console.log(CaesartheGreat);

// class Character {
//     constructor(nameIs, healthIs, powerIs, staminaIs){
//         this.name = nameIs;
//         this.health = healthIs;
//         this.power = powerIs;
//         this.stamina = staminaIs;
//     }
//     greet () {
//         console.log('hi!')
//     }
//     complain () {
//         console.log("I'm so tired!")
//     }
// }

// console.log(typeof Character); // prints function
// console.log(CaesartheGreat);
// const DanaTheMagnificent = new Character('DanaTheMagnificent', 9000, 9000, Infinity)
// // console.log(DanaTheMagnificent)
// // console.log(DanaTheMagnificent instanceof Character)
// // console.log(CaesartheGreat instanceof Character)

// const RyanTheGreat = new Character ('Ryan The Great', 5000, 10000, Infinity)
// RyanTheGreat.greet();
// DanaTheMagnificent.greet();

// Character.prototype.bye = function () {console.log(`bye from ${this.name}`)}
// Character.prototype.age = "I am 24"
// console.log(RyanTheGreat.age);
// DanaTheMagnificent.complain();


//like in the game of sims, you create new character and they make you assign it a name, give clothes, makeup, etc. 
// the loveCats = false is a parameter that is the same as just using let loveCats = false. youre assigning that variable a value, and whatever you pass as the argument in its place can overwrite it
class Character {
    constructor(name, age, eyes, hair, lovesCats = false, lovesDogs){
        this.legs = 2;
        this.arms = 2;
        this.name = name;
        this.age = age;
        this.eyes = eyes;
        this.hair = hair;
        this.lovesCats = lovesCats;
        this.lovesDogs = lovesDogs || true;
    }
    greet (otherCharacter) {
        console.log('hi ' + otherCharacter.name + '!');
      }
      smite () {
        console.log('I smite thee you vile person');
      }
    }

const ayla = new Character('Ayla the Awesome', 28, 'brown', 'locs of dark brown');
console.log(ayla);
const me = new Character('Sharon', 24, 'brown', 'artifical brown', 'sometimes', 'especially when they\'re puppies!')
console.log(me);

class Person {
    constructor(hair) {
        this.hair = hair
        this.name = `the ${hair} bomber`
    }
    updateHair(newHairColor) {
        this.hair = newHairColor
    }
}

// STATE = current state of the object
const tom = new Person ('blonde')
//console.log(tom); // the state as of right now is that tom has blonde hair
// add updateHair
tom.updateHair('red');
console.log(tom) // toms hair is now red, so you have changed his state
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
