// findWordFrequencies function
const findWordFrequencies = (sentence) => {
    // initialize empty object to return at the end
    const wordFrequencies = {}
  
    // split the sentence into an array of its words
    // lowercase all the words
    const wordsArray = sentence.toLowerCase().split(" ")
  
    // loop through the array of words
    wordsArray.forEach((word) => {
      // if the current word is a key inside our wordFrequencies object, increment its value by 1, if not, make it one 
      wordFrequencies[word] 
        ? wordFrequencies[word]++ 
        : wordFrequencies[word] = 1
    })
  
    // return the wordFrequencies object
    return wordFrequencies
  }
  
  // findHighestFrequency function
  const findHighestFrequency = (wordFrequencies) => {
    // define empty variables to use as counters
    let highestValue = 0
    let highestWords = {}
  
    // loop through the wordFrequencies object
    for(let word in wordFrequencies) {
      // if the current word's value > highestValue, set highestValue = current word's value, otherwise nothing
      wordFrequencies[word] > highestValue 
        ? highestValue = wordFrequencies[word]
        : null
    }
  
    // loop through the wordFrequencies object again
    for(let word in wordFrequencies) {
      // if the current word's value is equal to the highestValue, set it as a key-value pair inside the highestWords object otherwise nothing
      wordFrequencies[word] === highestValue
        ? highestWords[word] = highestValue
        : null
      // return the highestWords object once that happens to only return the first highest word
      return highestWords
    }
  }
  
  console.log(findHighestFrequency(findWordFrequencies("The quick quick brown fox jumps over the lazy dog")))