#//////////////////////////////
# Problem Solving
#//////////////////////////////
# Slice It - Break Down Into Smaller Tasks
# Dice It - Break down small tasks into smaller tasks
# Solve It - Solve smallest tasks one by one till larger task is complete till overall is done


#//////////////////////////////
# Frequency Counter
#//////////////////////////////
# Goal: Count frequency of words and create dictionary listing each word and frequency

#Slice it
#1. Loop over each word in list
#2. Take word and count instances in list
#3. Add to dictionary with number of frequency

#Dice It
#1A Use for loop to iterate over word list
#2A Each loop do another for loop over word list
#2B Each loop test whether words are equal
#3C Add to a dictionary word as key with count as value

## THIS FUNCTION BASICALLY COUNT HOW MANY TIMES A WORD APPEARS IN A LIST
def frequency (word, words):
    counter = 0 ## Start our counter
    for item in words: ## loops over the list
        if word == item: ## if the word equal this word add one to counter
            counter += 1
    return {word:counter}

## This function finds the frequency of all words in the list and returns a dictionary
def allfrequencies (allwords):
    totaldict = {}
    for word in allwords:
        count = frequency(word, allwords)
        totaldict = {**totaldict, **count}
    return totaldict

names = ["Bob", "Bob", "Steve", "Steve", "Steve"]

print(allfrequencies(names))