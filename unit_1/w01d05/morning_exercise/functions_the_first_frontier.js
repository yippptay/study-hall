const num = 8;
const name = "christian unger";
const myFunc = () => {
    return "myFunc";
}

const twoChains = (thing1, thing2) => {
    console.log(thing2(thing1));
}

twoChains(name, myFunc);