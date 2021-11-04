![](/ga_cog.png) 

# Python Blackjack 

![](https://imgur.com/OO6Vo5q.png)

Your goal for today and tomorrow's homework is to create a simple playable console game of Blackjack-lite using Python. 

#### Learning Objectives 
1. Problem solving with Python 
1. Python OOP 

#### Prerequisites 
1. Python basics 

---

## Getting Started 

1. In today's homework folder, create a file called `blackjack.py` and write your code for the game as specified below in that file 

## The Setup 

The game will be made up of 2 players: the human player interacting with the console, the house played by the computer. 

### Create the Players 

- Using a class, make a **human player** with the following properties: 
    - name (should be set by user input)
    - bankroll (start with 100, keep it as an integer and don't worry about converting to money) 
    - hand (a list to store cards) 

- Using a class, make a **computer player** with the following properties: 
    - name (should be "house") 
    - bankroll (start with 1000, again just keep it as an integer) 
    - hand (a list to store cards)
    
### The Deck 

- Create an empty list that will hold your card objects, which you will create below 

### The Cards 

- Make a card class with the following properties: 
    - value 
    - **Bonus**: face, suit 
        - These are **not** required for the core functionality of the game. Consider getting the core functionality of the game working first before trying to add these in. 
        
- Using that class, make 13 cards with the following values: 
  - 4 cards with a value of 10 (value for the jack, queen, king, and the face-value 10 card) 
  - 1 card with a value of 11 (value for the ace) 
  - The remaining 8 cards should be valued from 2 to 9 (just one of each, the values of the remaining face-value cards)
  - NOTE: Make sure you put each card into the empty deck list as you create them  
  
- Now, make 3 more sets of those 13 cards so that you end up with 52 cards total 

### Shuffling the Deck 

1. Shuffle the deck so it's not in order! How? Research how to shuffle lists in Python 

--- 

## The Gameplay 

Now, let's get started in actually creating the gameplay. 

> Considerations as you read the requirements below: should there be a game object / class? How can you tell when you need one?

### Basic Play

1. Create a console game that first lets a player choose their name, then starts the gameplay 
1. NOTE: Make sure that the console is printing informative messages as the game goes on to allow the player to know what is happening and what to do next
1. Deal two random cards to the house and two random cards to the player (should add to their hands and be removed from the deck array)
1. Sum up each of their hands, decide who wins the hand based on the following...
    - If **neither sum is > 21**, the player with the largest sum wins 
    - If **a player has a sum == 21**, that player automatically wins 
    - If **a player has a sum > 21**, that player automiatically loses 
    - HINT: What if the Player class had a method that summed the values of the two cards? 
1. By default, a round is worth 10 dollars 
    - i.e. If the human player wins, 10 dollars should be subtracted from the house and added to the player, and vice versa if the computer wins 
1. If there is a tie, let the players know there is a tie and no bankrolls are affected 
1. The game ends after one round 

### Continuing On 

1. After one round ends, let the player choose "(d)eal or (q)uit" 
    - If the player chooses "q", the game ends completely and the program should end 
    - If the player chooses "d", the game starts a new round (deals 2 cards to each player, sum the 2, compare the values to see who wins) 
1. NOTE: Eventually, the deck will run out of cards. Make sure to account for that in case the player keeps choosing "(d)eal" after running out of cards 

### Improving User Experience in the Console 

1. Let the player check their bankroll at any time 
1. Let the player lose if their bankroll falls below 0 
1. Let the player choose another amount of money to bet if they don't want to bet the default $10 
1. **BONUS**: Add functionality for a player to choose to 'stay'
    - Meaning, to keep their current cards or 'hit' to add another card to their hand 
    
---

## Deliverables 

1. A `blackjack.py` file that meets the requirements detailed above 

## Submission Guidelines 

1. This homework is due no later than **June 19, 2020 at 10 AM Eastern** 
1. Submit it as usual by opening an issue and providing the link to the correct file in your repo

---

## Hungry for More 

1. Polish the gameplay to make it smoother, clearer, informative, and more fun to play 
1. Allow the player so see one of the House's cards 
1. Allow more game play options, like double-down and split 
1. Allow creation of a new deck if the deck is used up 
1. Allow player to choose how many decks of cards are used for gameplay in the beginning
1. The sky is the limit! Add what you can think of, like text colors, fun messaging, logic for the computer player of whether or not it should add to their hand, provide suggestions based on the human player's hand of whether they should stay, hit, split, etc. 

