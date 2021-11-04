// =======================
// EASY GOING
// =======================
for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// =======================
// GET EVEN
// =======================
for (let i = 0; i <= 200; i +=2) {
    console.log(i)
}

// =======================
// FIZZ BUZZ
// =======================
for (let i = 1; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 === 0) {
        console.log('Fizzbuzz')
    } else if(i % 3 === 0) {
        console.log('Fizz')
    } else if(i % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

// =======================
// WILD WILD LIFE
// =======================
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// change plantee's age +1 
plantee[2] += 1
console.log(plantee)

// change wolfy's hometown to gotham city 
wolfy[3] = "Gotham City"

// give d'art a second hometown 
dart.push("Hawkins")
console.log(dart)

// remove wolfy's name and replace it with gameboy 
wolfy.splice(0, 1, "Gameboy")
console.log(wolfy)

// =======================
// YELL AT NINJA TURTLES
// =======================
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// use for of loop on ninja turtles
for (const turtle of ninjaTurtles) {
    // uppercase each turtle and console log it
    console.log(turtle.toUpperCase())
}

// =======================
// WHERE IS WALDO
// =======================
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]]
// remove eggbert 
whereIsWaldo.splice(1, 1)
// change neff to no one 
whereIsWaldo[1][2] = "No One"
// log waldo
console.log(whereIsWaldo[2][1][1])


// =======================
// METHODS REVISITED
// =======================
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']

// sort the array 
favMovies.sort()
console.log(favMovies)

// pop the last element of the array off 
favMovies.pop()
console.log(favMovies)

// push Guardians of the Galaxy
favMovies.push("Guardians of the Galaxy")
console.log(favMovies)

// reverse the array 
favMovies.reverse()
console.log(favMovies)

// shift the array 
favMovies.shift()
console.log(favMovies)

// unshift the array 
favMovies.unshift("Spirited Away")
console.log(favMovies)

// splice Django Unchained and add  Avatar 
console.log(favMovies.indexOf('Django Unchained'))
favMovies.splice(15, 1, "Avatar")
console.log(favMovies)

// slice the last half off the array 
const favMoviesHalf = favMovies.slice(favMovies.length/2)
console.log(favMoviesHalf)

// log the index of a movie we removed
console.log(favMovies.indexOf("Django Unchained"))


// =======================
// EXCITED KITTEN
// =======================
// create array of the random phrases
const kittenTalk = [
    "...human...why you taking pictures of me?...", 
    "...the catnip made me do it...",
    "...why does the red dot always get away...",
]
// loop through 20 times 
for (let i = 1; i <= 20; i++) {
    // if the current loop is even, use math random to log a random phrase
    if(i % 2 === 0) {
        console.log(kittenTalk[Math.floor(Math.random() * kittenTalk.length)])
    } else { // otherwise, log the default phrase
        console.log("Love me, pet me! HSSSSSS!")
    }
}


// =======================
// FIND THE MEDIAN
// =======================
const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]
// sort the numbers in numerical order 
nums.sort()
// find the median by dividing the length by 2
console.log(nums[Math.floor(nums.length/2)])