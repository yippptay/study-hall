<<<<<<< HEAD
// // Section 2 Combining Datatypes
const crayonBox = {
    inside: ["red", "orange", "yellow"]
}
console.log(crayonBox.inside[0]);

const bottle = {
    cap: {
        material: "metal",
        color: "blue",
=======
///////////////////
// Combine objects, arrays, and functions
///////////////////

// 1. 
const crayonBox = {
    colors: ['pink', 'blue', 'yellow']
};
console.log(crayonBox.colors[1]);

// 2. 
const bottle = {
    cap: {
        material: 'plastic',
        color: 'white'
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
    }
}
console.log(bottle.cap.material);

<<<<<<< HEAD
let reciept = [
    {price: 420}
]
console.log(reciept[0]);

const apartmentBuilding = [
    tenants = ["Taylor", "Sophie"]
]
console.log(apartmentBuilding[0][1]);

// // Combine objects, arrays, and functions more than one level deep
const knit = () => {
    let obj = {
        item: "scarf",
        size: "6ft"
    }
    return obj.item;
}
console.log(knit());

const crayonSelector = () => {
    const crayonBox = {
        inside: ["red", "orange", "yellow"]
    }
    return crayonBox.inside;
}
console.log(crayonSelector());

const powerButton = () => {
    const options = () => {
        console.log("select a song");
    }
    return options();
}
powerButton();

// // Model a Vending Machine
const vendingMachine = {
    snacks: [snack1 = {
            name: "Kit Kat",
            price: 1.25
        },
        snack2 = {
            name: "Payday",
            price: "1.00"
        },
        snack3 = {
            name: "Cheetos",
            price: 1.50
        }
    ],
    vend: function(num) {
        console.log(this.snacks[num]);
    }
};
vendingMachine.vend(1);

// // Callbacks
const add = (num1, num2) => {
    console.log(num1 + num2);
}
add(1, 2);

const subtract = (num1, num2) => {
    console.log(num1 - num2);
}
subtract(2, 1);

const multiply = (num1, num2) => {
    console.log(num1 * num2);
}
multiply(1, 2);

const divide = (num1, num2) => {
    console.log(num1 / num2);
}
divide(6, 2);

const calculate = (num1, num2, callback) => {
    callback(num1, num2)
}
calculate(1, 2, add);
calculate(2, 1, subtract);
calculate(1, 2, multiply);
calculate(6, 2, divide);

// // Function definition placement
// const bar = () => {
//     console.log('bar here');
// }
// bar();

// const foo = () => {
//     console.log('foo here');
// }
// foo();

// // Error reading
foo();

const foo = () => {
    console.log('hi');
}

// foo must = () and foo(); is called before it was initialized
=======
// 3.
const receipt = ['brush', {name: 'vitamin c serum', price: 60}, {name: 'toner', price: 30}];
console.log(receipt[1].name);

// 4. 
const apartmentBuilding = ['security guard', 'elevators', 'stairway', ['Sharon', 'Shelley', 'Jamie', 'Christine'], 'garage'];
console.log(apartmentBuilding[3][1]);

///////////////////////
// Combine objects, arrays, and functions more than one level deep
///////////////////////

// 1.
const knit = () => {
    const accessory = {
        item: 'scarf',
        size: '6 ft'
    };
    return accessory
}
console.log(knit().item);

// 2. 
const crayonSelector = () => {
    return crayonBox;
}
console.log(crayonSelector().colors[0]);

// 3. 
const powerButton = () => {
    const options = () => {
        console.log('select a song');
    };
    options();
};
powerButton();

///////////////
// Model a Vending Machine
///////////////

const vendingMachine = {
    snacks : [{name: 'Doritos'}, {name:'Haribo Gummy Bears'}, {name: 'Snickers'}],
    vend: (num) => {
        return vendingMachine.snacks[num].name
    }
};
console.log(vendingMachine.vend(1)); // prints Haribo Gummy Bears

//////////////////
// Callbacks
//////////////////

// 1.
const add = (num1, num2) => {
    return num1 + num2
};
console.log(add(4, 5));

// 2.
const subtract = (num1, num2) => {
    return num2 -num1
};
console.log(subtract(1, 100));

// 3.
const multiply = (num1, num2) => {
    return num1 * num2
};
console.log(multiply(8, 6));

// 4.
const divide = (num1, num2) => {
    return num2 / num1
};
console.log(divide(3,15));

// 5. 
const calculate = (num1, num2, operates) => {
   return operates(num1, num2)
};
console.log(calculate(2,4, multiply)); 
console.log(calculate(2,4, divide));
console.log(calculate(2,4, add));
console.log(calculate(2,4, subtract));

/////////////////
// Function definition placement
//////////////////

bar(); // cannot access 'bar' before initialization
const bar = () => {
    console.log('bar here');
}
foo(); //cannot access 'bar' before initialization

const foo = () => {
    console.log('foo here');
};

const bar = () => {
    console.log('bar here');
}
bar();
const foo = () => {
    console.log('foo here');
}
foo();

//////////////////
// Error reading
/////////////////

// "missing initializer in const declaration" means the "=" in between foo and () is missing. 
// after fixing the function declaration syntax, we get another error that reads "cannot access 'foo' before initialization." This means we tried invoking the function before declaring it and since javascript goes line by line, it doesn't know the function foo yet when it saw foo().
// Correct way
const foo = () => {
    console.log('hi');
};
foo();
>>>>>>> cd111adb1579480cb09838f476953d49de41b385
