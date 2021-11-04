// // 2 ways of creating functions
// function declaration
function one () {
    return 'one';
}
one()

// function expression
const two = () => {
    return 2
}
const shotenedTwo = () => 2;


// Hardcoded
const printTriangle = () => {
	console.log('#');
    console.log('##');
    console.log('###');
    console.log('####');
    console.log('#####');
};
printTriangle();
console.log("");

// For loop, nested
var array = [];
const printTriangleWithForLoop = () => {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            array.push("#");
        }
        console.log(array.join(""));
        array = [];
    }
};
printTriangleWithForLoop();
console.log("");

// For loop, nested, choice
var array = [];
var howMany = 10;
const printTriangleWithForLoopChoice = () => {
    for (let i = 1; i <= howMany; i++) {
        for (let j = 1; j <= i; j++) {
            array.push("#");
        }
        console.log(array.join(""));
        array = [];
    }
};
printTriangleWithForLoopChoice();