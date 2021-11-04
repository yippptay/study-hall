///////////////
// Object Review
///////////////

// const myself = {
//     name: 'Alex Merced',
//     age: 34,
//     family: ['Becky', 'Wally'],
//     pet: { name: 'wally' },
//     likeSports: false,
// };

// console.log(myself.name);
// console.log(myself.family);
// console.log(myself.pet);

////////////////
// Adding Functions to an Object (Methods)
///////////////

//Arrow Function (not hoisted, no prototype)

// const func1 = () => {
//     console.log('hello');
// };

// // Using function keyword (hoisted, prototype)

// function func2() {
//     console.log('hello');
// }

// // function keyword as a variable (not hoisted, prototype)

// const func3 = function () {
//     console.log('hello');
// };

// func1();
// func2();
// func3();

// const myObj = {
//     name: 'Alex Merced',
//     hello: () => {
//         console.log('hello');
//     },
//     goodbye() {
//         console.log('goodbye');
//     },
//     cheese: function () {
//         console.log('cheese');
//     },
// };

// myObj.hello();
// myObj.goodbye();
// myObj.cheese();

//////////////////
//Testing the Existence of a property
/////////////////

// const objArr = [
//     { name: 'Bob', age: 45 },
//     { name: 'Josephine', age: 90 },
//     { name: 'Steve', age: 55, pet: { name: 'spot' } },
// ];

// for (person of objArr) {
//     console.log(person.name);
//     console.log(person.age);
//     console.log(person.pet ? person.pet.name : 'No Pet');
// }

///////////////
// Object as a Switch Statement
///////////////

// const wizard = {
//     fire: () => {
//         console.log('fire!');
//     },
//     wind: () => {
//         console.log('wind!');
//     },
// };

// const castSpell = (wiz, spell) => {
//     // switch (spell) {
//     //     case 'fire':
//     //         wiz.fire();
//     //         break;
//     //     case 'wind':
//     //         wiz.wind();
//     //         break;
//     //     default:
//     //         break;
//     // }

//     wiz[spell] ? wiz[spell]() : console.log('wizard has not learned spell');
// };

// castSpell(wizard, 'fire');
// castSpell(wizard, 'wind');
// castSpell(wizard, 'poison');

////////////
// Keys, Values and Entries
////////

// const myObj = {
//     name: 'Alex Merced',
//     age: 34,
// };

// const keys = Object.keys(myObj);
// const values = Object.values(myObj);
// const entries = Object.entries(myObj);

// console.log(keys);
// console.log(values);
// console.log(entries);

////////////////
//Composition (Bonus)
///////////////

fireWizard = {
    fire: () => console.log('fire'),
};

windWizard = {
    wind: () => console.log('wind'),
};

const wizFactory = (name, powers) => {
    let newWiz = { name };

    for (power of powers) {
        switch (power) {
            case 'fire':
                newWiz = { ...newWiz, ...fireWizard };
                break;

            case 'wind':
                newWiz = { ...newWiz, ...windWizard };
                break;

            default:
                break;
        }
    }

    return newWiz;
};

console.log(wizFactory('Merlin', ['fire']));
console.log(wizFactory('Gandalf', ['wind']));
console.log(wizFactory('Harry Potter', ['fire', 'wind']));
