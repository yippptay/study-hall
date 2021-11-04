const milkyWay = {
    type: "barred spiral",
    age: 13600000000,
    containsEarth: false,
}

console.log(milkyWay.containsEarth);
milkyWay.containsEarth = true;
console.log(milkyWay.containsEarth);
milkyWay.numberOfStars = "100-400 Billion";
console.log(milkyWay.numberOfStars);