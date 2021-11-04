/* findWordFrequencies */
let sent = "Wow does does this this this actually actually actually actually work work work work work";
let upperSent = sent.toUpperCase();
let upperSentArr = upperSent.split(" ");
let countedObj = {};

upperSentArr.forEach(function (x) {
    countedObj[x] = (countedObj[x] || 0) + 1;
});

/* findHighestFrequency */

/* tests */
console.log(countedObj);
// console.log(sentStruct);