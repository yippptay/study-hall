///////////////////
<<<<<<< HEAD
// Object Review //
///////////////////

// const myself = {
//     name: "Taylor Yip",
//     age: 34,
//     family: ["Sophie", "Bill"],
//     pet: {name: "Waffles"},
//     likeSports: true,
// };

// console.log(myself.name);
// console.log(myself.family);
// console.log(myself.pet);

/////////////////////////////////////////////
// Adding Functions to an Object (Methods) //
/////////////////////////////////////////////

// Arrow Functions (not hoisted, no prototype)
const func1 = () => {
    console.log("hello");
}

// Using function keyword (hoisted, prototype)
function func2() {
    console.log("hello");
}

// Function keyword as a variable (not hoisted, prototype)
const func3 = function () {
    console.log("hello");
}

const myObj = {
    name: "Taylor Yip",
    hello: () => {
        console.log("hello");
    },
    goodbye() {
        console.log("goodbye");
    },
    cheese: function() {
        console.log("cheese");
    }
}
myObj.hello();
myObj.goodbye();
myObj.cheese();

/////////////////////////////////////////
// Testing the Existence of a property //
/////////////////////////////////////////

const objArr = [
    {name: 'Bob', age: 45},
    {name: 'Josephine', age: 90},
    {name: 'Steve', age: 55, pet: {name: 'spot'}}
]

for (person of objArr) {
    console.log(person.name);
    console.log(person.age);
    console.log(person.pet ? person.pet.name : 'No Pet');
}

//////////////////////////////////
// Object as a Switch Statement //
//////////////////////////////////

const wizard = {
    fire: () => {console.log('fire!');},
    wind: () => {console.log('wind!');},
};

const castSpell = (wizard, spell) => {
    switch (spell) {
        case 'fire':
            wizard.fire();
            break;
        case 'wind':
            wizard.wind();
            break;
        default:
            break;
    }
    wizard[spell] ? wizard[spell]() : console.log('wizard has not learned this spell');
};

castSpell(wizard, 'fire');
castSpell(wizard, 'wind');
castSpell(wizard, 'poison');

///////////////////////////////
// Keys, Values, and Entries //
///////////////////////////////
=======
// Object Review
//////////////////

// const myself = {
//     name: 'Sharon Kim',
//     age: 24,
//     family: ['Jason', 'Sunny', 'Young'],
//     car: {name: 'Nissan'},
//     likeSports: false
// }

// console.log(myself.name);
// console.log(myself.family);
// console.log(myself.car);


/////////////////
// Adding Functions to an Object (Methods)
/////////////////

//when functions belong as a property of an object, we call it a method
//so methods show that functions belong to something and are not stand alone

//Arrow Function (not hoisted, no prototype)

// const func1 = () => {
//     console.log('hello')
// };

// //Using function keyword (hoisted, prototype)

// function func2 () {
//     console.log('hello');
// };

// //function keyword as a variable (not hoisted, prototype)

// const func3 = function () {
//     console.log('hello');
// };

// func1();
// func2();
// func3();

// const myObj = {
//     name: 'Sharon Kim',
//     hello: () => {
//         console.log('hello');
//     },
//     goodbye() {
//         console.log('goodbye')
//     },
//     cheese: function (){
//         console.log('cheese');
//     }
// };

// myObj.hello();
// myObj.goodbye();
// myObj.cheese();


////////////////////
// Testing the Existence of a Property
////////////////////

// const objArr = [
//     {name: 'Bob', age:45},
//     {name: 'Josephine', age: 90},
//     {name: 'Steve', age: 55, pet: {name: 'spot'}}
// ] //an array with 3 objects

// for (person of objArr) {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.pet ? person.pet.name : "No Pet"); //ternary operator
// }

////////////////
// Object as a Switch Statement
////////////////

// const wizard = {
//     fire: () => {console.log('fire!')},
//     wind: () => {console.log('wind')}
// };

// const castSpell = (wiz, spell) => {
//     // switch (spell) {
//     //     case 'fire' :
//     //         wiz.fire()
//     //         break;
//     //     case 'wind' :
//     //         wiz.wind()
//     //         break;
//     //     default:
//     //         break;
//     // }
//     // wiz[spell] ? wiz[spell]() : console.log('wizard has not learned spell');
//     wiz[spell]();
// };

// castSpell(wizard, 'fire'); //look in wizard for a key that is fire. fire is passed as a string because you want it to be dynamic, you dont know which spell youre looking for yet so its wiz[spell]() in the code
// castSpell(wizard, 'wind');


/////////////////
//Keys, Values and Entries
/////////////////

// const myObj = {
//     name: 'Sharon Kim',
//     age: 24
// };
// // when you make an object, youre telling it to reference back to the object prototype and to have its properties. same for when you make an array, it refers back to the array prototype to act like an array

// const keys = Object.keys(myObj); // just the keys as an array
// const values = Object.values(myObj); //just the values as an array
// const entries = Object.entries(myObj); // take each key and value pair and store them in an array in one whole big array

// console.log(keys);
// console.log(values);
// console.log(entries);


/////////////////
//Composition
////////////////

//Inheritance is like a family line where the child inherits a bunch of properties of the parent like eye color
//Composition is like build-a-bear where you take a bunch of pieces and build the bear that you want

// fireWizard = {
//     fire: () => console.log('fire'),
// };
// windWizard = {
//     wind: () => console.log('wind'),
// };

// const wizFactory = (name, powers) => {
//     let newWiz = {name}

//     for (power of powers) {
//         switch(power){
//             case 'fire':
//                 newWiz = {...newWiz, ...fireWizard};
//                 break;
//             case 'wind':
//                 newWiz = {...newWiz, ...windWizard};
//                 break;
//             default:
//                 break;
//         }
//     };
//     return newWiz;
// }; //grab the pieces of wizard that I want and make a new wizard, which is why we are using composition, not inheritance

// console.log(wizFactory('Merlin', ['fire']));
// console.log(wizFactory('Gandalf', ['wind']));
// console.log(wizFactory('Harry Potter', ['fire', 'wind']));
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
