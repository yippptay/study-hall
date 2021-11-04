class Spaceship {
    constructor (type, hull, firepower, accuracy) {
        this.type = type;
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
};

//////////////
// USS NOVA
/////////////
class Hero extends Spaceship {
    constructor(type, hull, firepower, accuracy) {
        super(type, hull, firepower, accuracy);
    }
    attack (enemy) {
        enemy.hull -= this.firepower
        // if (Math.random() < this.accuracy) {
        // enemy.hull -= this.firepower,
        // //alert("Nice attack!"),
        // console.log("Nice attack!")
        // } else {
        //     //alert("You missed! It is now the alien's turn!"),
        //     console.log("You missed! It is now the alien's turn!")
        // }
    }
    retreat() {
        //alert('This is not a game for the weak!')
        console.log(`This is not a game for the weak!`)
    }
}

const USSNova = new Hero ('USS Nova Earth Spaceship', 20, 5, 0.7);
//console.log(USSNova);


//////////////////////////////////////////
// Functions to generate random numbers for the alien ships
//////////////////////////////////////////

const randomHull = () => {
    return Math.floor(Math.random()* 4) + 3;
};
//console.log(randomHull(3,6)); //GENERATES HULL BETWEEN 3 AND 6

const randomFirePower = (min, max) => {
    return Math.floor(Math.random()* 3) + 2;
};
// console.log(randomFirePower(2,4)); // GENERATES FIREPOWER BTWN 2 AND 4

const randomAccuracy = (min, max) => {
    return (Math.floor(Math.random()*3) + 6) / 10;
}
//console.log(randomAccuracy(0.6, 0.8)); // GENERATES ACCURACY BTWN 0.6 AND 0.8


class Enemy extends Spaceship {
    constructor(type, hull, firepower, accuracy) {
        super(type, hull, firepower, accuracy);
    }
    attack (enemy) {
        enemy.hull -= this.firepower
        // if (Math.random() < this.accuracy) {
        // enemy.hull -= this.firepower,
        // //alert("You've been hit!"),
        // console.log("You've been hit!")
        // } else {
        //     //alert('You dodged their hit!'),
        //     console.log('You dodged their hit!')
        // }
    }
};

//const alienShip1 = new Enemy('alien spaceship', randomHull(), randomFirePower(), randomAccuracy());
//console.log(alienShip1)

// USSNova.attack(alienShip1);
// console.log(alienShip1);
// alienShip1.attack(USSNova);
// console.log(USSNova);

class Factory {
    constructor(alienworld) {
        this.alienworld = alienworld;
        this.alienteam = [];
    }
    generateAlienShip() {
        const alienShip = new Enemy ('alien ship',randomHull(),randomFirePower(), randomAccuracy());
        this.alienteam.push(alienShip)
    }
    generateManyAlienShips(num) {
        for (let i = 0; i < num; i++) {
            this.generateAlienShip();
        }
    }
    callAlienShip(index) {
        return this.alienteam[index];
    }
}

const weHateEarth = new Factory('WeHateEarth');
//weHateEarth.generateAlienShip();
//console.log(weHateEarth.alienteam)
//console.log(weHateEarth);
weHateEarth.generateManyAlienShips(6);
//console.log(weHateEarth.alienteam);
// console.log(weHateEarth.callAlienShip(2));
//console.log(weHateEarth.alienteam) // prints array of 6 enemy alien space ships

const earthAttack = () => {
    if (Math.random() < USSNova.accuracy) {
        USSNova.attack(weHateEarth.alienteam[0])
        alert('You made a successful attack')
        console.log('You made a successful attack')
        // display both sides hull levels action.checkFirstHit();
    } else {
        console.log("You missed!")
        weHateEarth.alienteam[0].attack(USSNova)
    }
};
const alienAttack = () => {
    if (Math.random() < weHateEarth.alienteam[0].accuracy) {
        weHateEarth.alienteam[0].attack(USSNova)
        console.log(`USSNova hull: ${USSNova.hull}, Alien hull: ${weHateEarth.alienteam[0].hull}`)
        USSNova.attack(weHateEarth.alienteam[0])
        // you should attack again????
    } else {
        console.log('You dodged it! You can attack again!')
        USSNova.attack(weHateEarth.alienteam[0])
        // if it gets to this point, then repeat the makeAttack() function because USSNova is making the first hit again and it goes on. Do this 6 times? because theres 6 alien spaceships?
    }
}; 
const checkHit = () => {
    if (weHateEarth.alienteam[0].hull -= USSNova.firepower && weHateEarth.alienteam[0].hull > 0) {
        alert("It's still alive!")
        console.log("It's still alive!")
    }
}

const leaveGame = () => {
    USSNova.retreat();
    // leave game or start from beginning if user types in 1
}

//should i include all these functions like dispense and makeattack in a for loop and pass a param/argument of the number of rounds/number of alien spaceships?

//////////////////////
// The Actual Game
/////////////////////

const action = {
    dispenseAlienShip: () => {
        if (weHateEarth.alienteam.length === 0){
            weHateEarth.generateAlienShip()
        } 
    },
    makeAttack: () => {
        for (let i = 0; i < weHateEarth.alienteam.length; i++){
            earthAttack()
            checkHit()
            if (weHateEarth.alienteam[0].hull <= 0) {
                weHateEarth.alienteam.shift(),
                alert(`Good job! You killed the alien spaceship!\n=====CURRENT STATS=====\nUSSNova hull: ${USSNova.hull}\nAliens hull: ${weHateEarth.alienteam[[0].hull]}\nAlien spaceships left to fight: ${weHateEarth.alienteam.length}`)
                console.log(`Good job! You killed the alien spaceship!\n=====CURRENT STATS=====\nUSSNova hull: ${USSNova.hull}\nAliens hull: ${weHateEarth.alienteam[[0].hull]}\nAlien spaceships left to fight: ${weHateEarth.alienteam.length}`)
                const user = prompt('To attack the next alien ship, click "OK". To retreat, type in 1')
                if (user === 1) {
                    leaveGame();
                } // I want user's input of 1 to call the leaveGame function
                console.log('To attack the next alien ship, click "OK". To retreat, type in 1') // include attack next alien spaceship option and retreat option
                earthAttack();
            } else {
                alert("It is now the alien's turn to attack!")
                console.log("It is now the alien's turn to attack!")
                alienAttack()
                if (USSNova.hull -= weHateEarth.alienteam[0].firepower){
                    alert("You've been hit!")
                    console.log("You've been hit!")
                } else {
                USSNova.attack(weHateEarth.alienteam[0])
                alert(`\n=====CURRENT STATS=====\nUSSNova hull: ${USSNova.hull}\nAliens hull: ${weHateEarth.alienteam[[0].hull]}\nAlien spaceships left to fight: ${weHateEarth.alienteam.length}`)
                weHateEarth.alienteam.shift()
                }
            }
        }
    },
    checkWin: () => {
        if (USSNova.hull !== 0 && weHateEarth.alienteam.length === 0) {
            console.log('YOU WON THE GAME!!!')
        } else if (USSNova.hull === 0) {
            console.log('You failed to protect the Earth...')
        } else {
            return false;
        }
    },
    // checkFirstHit: () => {
    //     if (weHateEarth.alienteam[0].hull <= 0) {
    //         weHateEarth.alienteam.shift(),
    //         console.log(`Good job, you killed your first alien spaceship!\n=====CURRENT STATS=====\nUSSNova hull: ${USSNova.hull}\nAliens hull: ${weHateEarth.alienteam[[0].hull]}\nAlien spaceships left to fight: ${weHateEarth.alienteam.length}`)
    //     } else {
    //         weHateEarth.alienteam[0].attack(USSNova),
    //         USSNova.attack(weHateEarth.alienteam[0])
    //         }
    // },
    // checkHit: () => {
    //     if (weHateEarth.alienteam[5-x].hull <= 0) {
    //         weHateEarth.alienteam.pop(),
    //         alert('Good job! You killed the alien spaceship!')
    //     } else {
    //         alert("Oh no, it's still alive! Now it's the alien's turn!"),
    //     }
    // },
    // nextAttack: () => {
    //     for (let x = 1; x < weHateEarth.alienteam.length; x++) {
    //         if (weHateEarth.alienteam.length === 5) {
    //         weHateEarth.alienteam[5-x].attack(USSNova),
    //         USSNova.attack(weHateEarth.alienteam[5-x]),
    //         }
    // }
    // }
}
// console.log(action.initialAttack()); //returns undefined...
// action.initialAttack();
// console.log(action.checkHit()); // returns undefined...
// action.checkHit();
// console.log(USSNova);

// console.log(weHateEarth.alienteam[0]);
// action.checkHit();
// console.log(weHateEarth.alienteam);
// console.log(action.checkWin());
// console.log(USSNova.hull)

// =============
alert('Welcome! Navigate the USS Nova and save the planet. No time to wait, defeat the alien spaceships!')

const input = prompt(`You are our hero! You control the ${USSNova.type}. \nYou get to make the first attack. \nClick "OK" to initiate the first move!`)


const input2 = prompt(`${action.makeAttack()}, ${action.checkWin()}`)

// =============

// const input2 = prompt(`${action.initialAttack()}, ${action.gameAttack()}`);
// , ${action.checkFirstHit()}`);
//alert('Incoming! The alien is attacking now!')
// const input4 = prompt(`${action.nextAttack()}`)
// const input5 = prompt(`Current Stats: \nUSS Nova hull: ${USSNova.hull} \nAliens hull: ${weHateEarth.alienteam[5].hull} \nAlien ships left: ${weHateEarth.alienteam.length}`)

//action.initialAttack();
//action.gameAttack();
//action.earthAttack();
// action.makeAttack();
// action.makeAttack();
// action.makeAttack();
// action.makeAttack();
// action.makeAttack();
// action.makeAttack();
// action.checkWin();

// cannot make the input 1 equal to retreat function and then cannot keep game going even when there are alien spaceships left, sometimes it works, sometimes it doesnt and it says undefined, false, which is also something I cannot figure out. 