function vowelCheck(word) {
    let status = false;
    let strArr = word.split("");
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] == "a") {
            status = true;
        } else if (strArr[i] == "e") {
            status = true;
        } else if (strArr[i] == "i") {
            status = true;
        } else if (strArr[i] == "o") {
            status = true;
        } else if (strArr[i] == "u") {
            status = true;
        }
    }
    return status;
}

console.log(vowelCheck('hello.')); // true
console.log(vowelCheck('.hi')); // true
console.log(vowelCheck('?howdy')); // true
console.log(vowelCheck('aloha')); // true
console.log(vowelCheck('pfft')); // false