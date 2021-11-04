/////////////
//Callback Drills
////////////

// const myFunc = (func) => {
//     func();
// };

// const sayHi = () => {
//     console.log('hi');
// };

// myFunc(sayHi);

// const foo = (param, param2) => {
//     param(param2);
// }

// const bar = (param) => {
//     console.log(param);
// }

// foo(bar, 'hi'); // should print hi

// const foo = (param, param2) => {
//     param(param2, 'hello');
// }

// const bar = (param, param2) => {
//     console.log(param2);
// }

// foo(bar, 'hi'); // thought it would print hi, hello BUT it just prints hello

// const baz = (param) => {
//     console.log(param.toUpperCase());
// } // should print HELLO, BUT it doesnt print anything


/////////////////
//Electric Mixer
/////////////////

// const electricMixer = (attachment) => {
//     console.log(`This mixer is now: ${attachment()}`);
// };

// // 2. electricMixer(() => {
// //     return "spiralizing"
// // });

// const spiralizer = () => {
//     return "spiralizing"
// };

// const slicerDicer = () => {
//     return "slicin' and dicin'";
//   }
  
//   electricMixer(spiralizer);
//   electricMixer(slicerDicer);

//balloon whisk

// const electricMixer = (attachment) => {
//     console.log(`The mixer is now ${attachment()} to make some dalgona coffee`);
// };

// const balloonWhisk = () => {
//     return "whisking away"
// };

// electricMixer(balloonWhisk);


///////////////////
//setInterval and setTimeout
///////////////////

// const myFunc = () => {
//     let x = 1;
//     console.log(x);
//     x +=1;
// };
// setInterval(myFunc, 1000);