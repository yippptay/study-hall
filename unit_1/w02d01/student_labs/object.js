//test console.log('hello');

//////////////
//Syntax
//////////////

// const myObj = {
//     name: 'Sharon',
//     age: 24
// }

//const declares an object and then myObj is the name of the object
// = assigns definition to the object and the {} curly braces define the object
// in the {}, you list the entries in key:value format.
// In myObj, name is the key and then : and is given value of 'Sharon' in a string

///////////////
//Me, Me, Me
//////////////

// const me = {
//     firstName: 'Sharon',
//     lastName: 'Kim',
//     age: 24,
//     email: 'sharonk1295@gmail.com'
// };

// console.log(me);
// console.log(me.firstName);
// me.age = 1000;
// console.log(me.age);
// me['place of residence'] = 'New York City';
// console.log(me['place of residence']);

////////////
//Fancy Greeting
////////////

// const fancyGreeting = (myObj) => {
//     console.log(`Greetings, ${myObj.firstName} ${myObj.lastName}`);
// };
// fancyGreeting(me);

///////////
//Slimer
///////////

// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  }
// ;

// console.log(monster.name);
// monster.type = 'creature';
// monster.age = 6;
// console.log(monster.type, monster.age);

//////////
//Ogres (come back to this)
//////////

// const adventurer = {
//     name: 'Sharon',
//     hitpoints: 20,
//     medicine: 'Advil'
// };

// const ogre = {
//     name: 'Shrek',
//     hitpoints: 10,
//     medicine: 'Fiona'
// };

///////////
//Cat Combinator
///////////

// 1. Mama Cat

const cat1 = {
    name: 'Jello',
    breed: 'Bengal',
    age: 7
};

const cat2 = {
    name: 'Garfield',
    breed: 'Tabby',
    age: 9
};

// const combineCats = (mama, papa) => {
//     console.log(mama);
//     console.log(papa);
// };
const combineCats = (mama, papa) => {
    let cat3 = {
        name: mama.name + papa.name
    }
};

combineCats(cat1, cat2);