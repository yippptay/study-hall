![](/ga_cog.png) 

# Coding Challenges

## Setting Up 

1. In today's morning_exercise folder, create a `challenge.js` file 
1. Solve the problems below in that file

---

## Non-Consecutive Arrays

Write a function called `nonConsecutive` that takes an array as an argument and finds the _first_ element of that array that is not consecutive. Initially, treat consecutive to mean not exactly 1 larger than the previous element of the array. 

If there is a non-consecutive number, return the very first one 

If there is no non-consecutive number, return null

#### Assume: 

1. The array will always only be made of integers
1. The array will always have at least 2 elements 

#### Examples: 

```
nonConsecutive([1, 2, 3, 4])
// returns: null
```

```
nonConsecutive([1, 2, 4, 5, 7]) 
// returns: 4
``` 

<details><summary><strong>Non-consecutives bonus</strong></summary><p>
 
Upgrade your function so that it takes 2 arguments. 

The first argument should be where the user can input an integer for their own meaning of consecutive. i.e. if I wanted to check if each consecutive element is larger by 2 or 3, etc. 

The second argument should be the array to check.

#### Examples: 

```
nonConsecutive(2, [1, 3, 5, 7]) 
// returns: null 
```

``` 
nonConsecutive(2, [1, 3, 5, 9]) 
// returns: 9
```

</p></details>


## Abbreviated 

Write a function called `abbreviate` that will take a sentence as an argument and convert it into an abbreviation. Return the abbreviation

#### Assume: 

1. The sentence will always have at least two words separated by one space between them
1. The sentence will have no punctuation  

#### Examples: 

```
abbreviate("contrast repetition alignment proximity") 
// returns: crap 
```

```
abbreviate("lots of love")
// returns: lol 
``` 

<details><summary><strong>Abbreviated bonus</strong></summary><p>
 
 Upgrade your function so that it takes two arguments. 
 
 The first one being the string you want to abbreviate 
 
 The second one being a boolean value determining whether or not the abbreviation is for a name or not. 
 
 If the abbreviation is not for a name, return the abbreviation as outlined above. 
 
 If the abbreviation is for a name, return the abbreviation in all caps and with a `.` in between each letter
 
 #### Examples 
 
 ```
 abbreviate("Doug Judy", true) 
 // returns: D.J.
 ```
 
 ```
 abbreviate("create read update delete", false) 
 // returns: crud 
 ```
 
</p></details>


## Alternate Case  

Write a function called `alternateCase` that accepts a string and converts each letter of the string to the opposite case (meaning, lower or uppercase). Return the whole string with the cases alternated. 

#### Assume: 

1. The string will always have at least one letter
1. The string will not include any numbers or punctuation 

#### Example: 

```
alternateCase("Hello World") 
// returns: hELLO wORLD
```

```
alternateCase("SpOnGeBoB") 
// returns: sPoNgEbOb 
``` 

```
alternateCase("lowercase no more") 
// retuns: LOWERCASE NO MORE
``` 

---

## Hungry for More? 

- If you haven't already, do the bonuses for the non-consecutive arrays and abbreviated problems 
- Try out some more challenge problems on [codewars](https://www.codewars.com/) or [hackerrank](https://www.hackerrank.com/)!
