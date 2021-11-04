[![General Assembly Logo](/ga_cog.png)](https://generalassemb.ly)

# Lemon Stand

Let's practice interactivity by making a simple web program that allows users to buy lemons

![From Han Lahandoe at Unsplash](https://imgur.com/qEXSOoz.png)

#### Learning Objectives

- Interactivity

#### Prerequisites

- Javascript
- HTML
- Critical thinking

---

## Getting Started

1. In today's `student_labs` folder, create another folder called `lemon_stand`
1. Inside that folder, create `app.js` and `index.html` files and connect them together. Check to make sure you've connected them correctly by using a console.log. Work in these files to create the program outlined below

## The Lemon Stand

After growing a bunch of lemon trees in your backyard, you've now found yourself with a seemingly infinite amount of lemons! To get rid of them while they're good, you thought about starting a lemon stand in your neighborhood so people can buy all your extra ones. But you can't exactly do that right now, so you've come up with a better plan: an online lemon stand. 

For this program, assume that the user...

- Starts with $20 in their wallet and has 0 lemons 

Then, using prompts and alerts in the browser, allow the user to...

- Purchase lemons one at a time 
  - This should add 1 lemon and subtract $1 from their wallet
  - If they don't have enough money, alert them that they cannot buy a lemon
- Eat their lemons
  - This should subtract 1 lemon from the user
  - Alert the user that they ate a lemon
  - If they don't have a lemon, alert them that they do not have a lemon to eat
- See their lemon and money status (how much they have of each) 
- Restart from the beginning so that they have $20 in their wallet and 0 lemons 

**Before you get started writing any code, we suggest you pseudocode first!** [Not sure how to pseudocode? Check out an intro and mini lab here](https://git.generalassemb.ly/Software-Engineering-Immersive-Remote/SEIR-Nova/blob/master/unit_1/w02d01/student_labs/1_pseudocode_lab.md)

_Then_ start working inside your `app.js` to write out the program above 

## Hints on Getting Started 

<details><summary>Click to see the hints!</summary><p>

  1. We can see that there are 2 things the user will interact with: money, lemons 
    - Because these will be constantly updating, it may be a good idea to declare them as variables with defaults of...
    
    ```
    let lemons = 0;
    let wallet = 20;
    ``` 
    
  2. In order for the user to choose whether they want to buy a lemon, eat a lemon, or restart, you're going to need some sort of function that prompts them to choose an option 
  
  3. Then once they choose an option, you're going to need some sort of function for each option: to buy a lemon, eat a lemon, restart 
  
</p></details>

---

*Copyright 2020, General Assembly Space. Licensed under [CC-BY-NC-SA, 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)*
